/* eslint-disable */
import axios from 'axios';
import { $global } from '@/main.js'
import aesUtil from '@/assets/js/aesUtil.js';
var CryptoJS = require("crypto-js");

class CommonService {
    async get(url) {
        let token = {
            headers: {
                'auth_token': $global.$store.tokenId,
                'ses_token': $global.$store.sessionId
            }
        };
        return await axios.get(url, token).then(response => {
            this.nullToken(response);
            this.tokenSet(response);
            let hashJsonString = aesUtil.methods.decrypt(response.data, $global.$store.tokenId);
            return JSON.parse(hashJsonString);
        }).catch((e) => {
            this.forCatch(e);
            return [];
        });
    }

    async post(url, data = "", option = "") {
        let userData;
        let jsonFormdata;
        let tokenId = $global.$store.tokenId;
        let token;
        if (option != 'file') {
            // if (typeof data == "object") {
            //     userData = this.dataManipulation(data);
            // } else {
            //     userData = btoa(data);
            // }
            jsonFormdata = {
                id: '',
                stringValue: aesUtil.methods.encrypt(JSON.stringify(data), $global.$store.tokenId)
            };
            token = { headers: { 'auth_token': tokenId } };
        } else {
            jsonFormdata = data;
            token = { headers: { 'auth_token': tokenId, 'Content-Type': 'multipart/form-data' } };
        }
        return await axios.post(url, jsonFormdata, token).then(response => {
            if (option != 'file') {
                this.nullToken(response);
                this.tokenSet(response, url);
                let hashJsonString = aesUtil.methods.decrypt(response.data, $global.$store.tokenId);
                return JSON.parse(hashJsonString);
            } else {
                return response
            }
        }).catch((e) => {
            this.forCatch(e);
            return [];
        });
    }

    // dataManipulation(data) {
    //     for (let key in data) {
    //         if (typeof data[key] == 'string') {
    //             let str = data[key].replace(/\s+/g, ' ');
    //             data[key] = str.trim();
    //         }
    //     }
    //     return JSON.stringify(data);
    // }

    async tokenSet(response) {
        if (response.headers.auth_token)
            $global.$store.tokenId = response.headers.auth_token;
    }

    nullToken(response) {
        if (response.headers.auth_token == null)
            alert('auth_token = Null')
        // this.reDirErrPage();
    }

    reDirErrPage() {
        let dfg = window.location.href
        dfg = dfg.split('#')[0]
        let path = dfg + '#/commonErrorPage'
        window.location = path //"https://demoetenders.tn.nic.in/DboardTN/#/commonErrorPage"
        location.reload()
    }

    setStore(key, value) {
        if ($global.$store.Commondata) {

            let datas = this.getStore();
            datas[key] = value;
            let encrypt_common = aesUtil.methods.commonEncrypt(
                'TNDash',
                JSON.stringify(datas)
            );
            $global.$store.Commondata = encrypt_common;
        }
    }

    getStore() {
        if ($global.$store.Commondata) {
            let decrypt_common = JSON.parse(atob(aesUtil.methods.decrypt(
                'TNDash',
                atob($global.$store.Commondata)
            )));
            return decrypt_common;
        } else {
            return $global.$store.dataValues;
        }
    }
    forCatch(e) {
        if (e.response.data == 'Session expired' || e.response.data == 'Invalid request' || e.response.data == 'Your account is logged in on another system. Please login again to proceed.') {
            // $global.CommomnJs.methods.warnAlert('Failed', e.response.data, 'failure').then((value) => {
            //     if (value) {
            // $global.$store.$reset()
            // $global.router.push({
            //     path: "/"
            // });
            //     }
            // })
            if (confirm(e.response.data) == true) {
                $global.$store.$reset()
                $global.router.push({
                    path: "/"
                });
            } else {
                return false
            }

        } else if (e.response.status != '200' && e.response.status != '503') {
            let url = e.response.config.url;
            let serviceName = url.substring(url.lastIndexOf('/') + 1, url.length);
            // $global.CommomnJs.methods.warnAlert('Failed', 'HTTP code : ' + e.response.status + ', Service Name : ' + serviceName + ', Something went wrong.', 'failure');
            if (confirm('Failed', 'HTTP code : ' + e.response.status + ', Service Name : ' + serviceName + ', Something went wrong.', 'failure') == true) {
                $global.$store.$reset()
                $global.router.push({
                    path: "/"
                });
            } else {
                return false
            }
        } else {
            // $global.CommomnJs.methods.warnAlert('Failed', e.response.message, 'failure');
            if (confirm('Failed', e.response.message, 'failure') == true) {
                $global.$store.$reset()
                $global.router.push({
                    path: "/"
                });
            } else {
                return false
            }
        }
    }

    async checkserver() {
        const res = await axios.get($global.$getServerStatus);
        let serverStat = res.data;
        if (serverStat != "Server Up") {
            alert('ServerDown');
        }
        return serverStat;
    }

    intercept() {
        axios.interceptors.request.use(
            function (config) {
                return config;
            },
            function (error) {
                return Promise.reject(error);
            }
        );

        axios.interceptors.response.use(
            function (response) {
                return response;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
    }
}

export default new CommonService();