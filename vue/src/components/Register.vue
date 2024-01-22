<template>
<div>
    <TopBar></TopBar>
    <b-container>
        <b-row>
            <b-col md="12" offset-md="3" lg="6" sm="12" cols="12">
                <h5 class="text-center font-weight-bold m-3">Create An Account</h5>
                <b-card class="text-center rounded border m-2" bg-variant="" text-variant="white">
                    <b-form class="p-4">
                        <b-form-group>
                            <b-form-input type="text" id="input-1" placeholder="Enter Name" required></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-form-input type="number" id="input-2" placeholder="Enter Mobile Number" required></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-form-input type="email" id="input-3" placeholder="Enter Email" required></b-form-input>
                        </b-form-group>
                            <b-form-checkbox v-model="checked" class="text-dark text-left">Click for Email Notification</b-form-checkbox>
                        <b-button block pill variant="primary" class="mt-3">CREATE ACCOUNT</b-button>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
/* eslint-disable */
import TopBar from '@/components/TopBar'
import aesUtil from '@/assets/js/aesUtil.js';
import axios from 'axios';
export default {
    components: {
        TopBar
    },
    data() {
        return {
           checked: true,
           
        }
    },
    methods: {
        login() {
            var formData = {
                firstString: this.userName, //"7708842885",
                secondString: this.password //"avemaria"
            };
            var jsonFormdata = {
                id: '',
                stringValue: aesUtil.methods.testEncrypt(JSON.stringify(formData), this.$store.tokenId)
            };
            axios.post(this.$addUser, jsonFormdata, {
                headers: {
                    'auth_token': this.$store.tokenId
                }
            }).then(res => {
                var base64StringValue = aesUtil.methods.testDecrypt(res.data, this.$store.tokenId);
                // this.$store.tokenId = res.headers.auth_token;
                // if (res.headers.mailsms_token) {
                //     this.$commonstore.setStore('mailSmsToken', res.headers.mailsms_token);
                // }
                var jsonString = JSON.parse(base64StringValue);
                if (jsonString.id == 0) {
                    alert(jsonString.stringValue)
                    // this.warnAlert(jsonString.stringValue, '', 'failure');
                    return false;
                } else if (jsonString.id == 1) {
                    alert(jsonString.stringValue)
                    this.router.push({
                        path: "/welcomeDashboard/dashboard"
                    });
                    // this.warnAlert(jsonString.stringValue, '', 'success')
                    // return false
                }

                // this.$store.secureToken = jsonString.secureToken;
                // this.$commonstore.setStore('userId', jsonString.userId);
                // //orgList API call
                // let userdata = {
                //     userId: jsonString.userId,
                //     userName: jsonString.userName
                // }
                // let datavalues = aesUtil.methods.commonEncrypt(this.$store.secureToken, JSON.stringify(userdata));
                // this.$commonstore.setStore('data', datavalues);
                // this.$commonstore.setStore('userSesId', jsonString.userSesId);
                // this.$commonstore.setStore('userLevel', jsonString.userLevel);
                // this.$commonstore.setStore('loginID', jsonString.loginId);
            })
        },
    },
    created() {
        // this.service.checkserver();
    }

}
</script>
