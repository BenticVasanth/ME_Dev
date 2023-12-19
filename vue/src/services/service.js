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
        console.log(token);
        return await axios.get(url, token).then(response => {
            // this.nullToken(response);
            this.tokenSet(response);
            let hashJsonString = CryptoJS.AES.decrypt(response.data, $global.$store.tokenId).toString(CryptoJS.enc.Utf8);
            return JSON.parse(hashJsonString);;
        }).catch((e) => {
            this.forCatch(e);
            return [];
        });
    }

    async post(url, data = "", optData = "") {
        let userData;
        let token;
        if (typeof data == "object") {
            userData = this.dataManipulation(data);
        } else {
            userData = btoa(data);
        }
        let tokenId = $global.$store.tokenId;
        let secureToken = $global.$store.secureToken;
        let serviceToken = secureToken + tokenId;
        if (optData == "mailToken") {
            token = {
                headers: {
                    'auth_token': tokenId,
                    'mailsms_token': this.getStore().mailSmsToken
                }
            };
        } else {
            token = {
                headers: {
                    'auth_token': tokenId
                }
            };
            if (optData == "jnlp") {
                token['responseType'] = 'arraybuffer';
            }
        }
        let jsonFormdata = {
            id: this.getStore().userSesId,
            stringValue: aesUtil.methods.encrypt(serviceToken, userData)
        };
        return await axios.post(url, jsonFormdata, token).then(response => {
            this.nullToken(response);
            this.tokenSet(response, url);
            this.setStore('pageloading', false);

            if (optData == 'jnlp') {
                return response;
            } else {
                let hashBase64StringValue = aesUtil.methods.decryptEncodeURIComponent($global.$store.secureToken, atob(response.data));
                let hashJsonString = JSON.parse(decodeURIComponent(escape(atob(hashBase64StringValue))));
                return hashJsonString;
            }
        }).catch((e) => {
            this.forCatch(e);
            return [];
        });
    }

    dataManipulation(data) {
        for (let key in data) {
            if (typeof data[key] == 'string') {
                let str = data[key].replace(/\s+/g, ' ');
                data[key] = str.trim();
            }
        }
        return JSON.stringify(data);
    }

    async tokenSet(response) {

        if (response.headers.auth_token)
            $global.$store.tokenId = response.headers.auth_token;

        if (response.headers.mailsms_token)
            this.setStore('mailSmsToken', response.headers.mailsms_token);

        if (response.headers.ses_token)
            $global.$store.ses_token = response.headers.ses_token;
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
        console.log(e.response);
        if (e.response.data == 'Session is Invalid' || e.response.data == 'Invalid request' || e.response.data == 'Your account is logged in on another system. Please login again to proceed.') {
            $global.CommomnJs.methods.warnAlert('Failed', e.response.data, 'failure').then((value) => {
                if (value) {
                    $global.$store.$reset()
                    $global.router.push({
                        path: "/"
                    });
                }
            })
        } else if (e.response.status != '200' && e.response.status != '503') {
            let url = e.response.config.url;
            let serviceName = url.substring(url.lastIndexOf('/') + 1, url.length);
            $global.CommomnJs.methods.warnAlert('Failed', 'HTTP code : ' + e.response.status + ', Service Name : ' + serviceName + ', Something went wrong.', 'failure');
        } else {
            $global.CommomnJs.methods.warnAlert('Failed', e.message, 'failure');
        }
    }

    checkserver() {
        return axios.get($global.$getServerStatus).then(res => {
            let serverStat = res.data.data;
            $global.$store.tokenId = res.data.headers.auth_token;
            if (serverStat != "Server Up") {
                alert('ServerDown')
            }
            return serverStat;
        });
    }

    get_userid() {
        let hashBase64StringValue = aesUtil.methods.decrypt($global.$store.secureToken, atob(this.getStore().data));
        let userId = JSON.parse(atob(hashBase64StringValue)).userId;
        return userId;
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