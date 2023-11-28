<template>
<div>
    <Home />
    <b-container>
        <b-card>
            <b-card-title>Login</b-card-title>
            <b-form inline class="justify-content-center">
                <label class="sr-only" for="inline-form-input-email">Email</label>
                <b-form-input v-model="email" type="email" id="inline-form-input-email" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Email Id"></b-form-input>

                <label class="sr-only" for="inline-form-input-password">Password</label>
                <b-form-input v-model="password" type="password" id="inline-form-input-password" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Password"></b-form-input>

                <b-button class="ml-2" @click="login" variant="primary">Login</b-button>
            </b-form>
        </b-card>
    </b-container>
</div>
</template>

<script>
/* eslint-disable */
import Home from '@/components/Home'
import aesUtil from '@/assets/js/aesUtil.js';
import axios from 'axios';
export default {
    name: "LoginPage",
    components: {
        Home
    },
    data() {
        return {
            email: "",
            password: ''
        }
    },
    methods: {
        login() {
            var formData = {
                email: this.email,
                password: this.password
            };
            var jsonFormdata = {
                id: '',
                stringValue: aesUtil.methods.testEncrypt(JSON.stringify(formData), this.$store.tokenId)
            };
            axios.post(this.$validUser, jsonFormdata, {
                headers: {
                    'auth_token': this.$store.tokenId
                }
            }).then(res => {
                var base64StringValue = aesUtil.methods.testDecrypt(res.data, this.$store.tokenId);
                // this.$store.tokenId = res.headers.auth_token;

                var jsonString = JSON.parse(base64StringValue);
                if (jsonString.id == 0) {
                    alert(jsonString.stringValue)
                    // this.warnAlert(jsonString.stringValue, '', 'failure');
                    return false;
                } else if (jsonString.id == 1) {
                    this.router.push({
                        path: "/welcomeDashboard/dashboard"
                    });
                    // this.warnAlert(jsonString.stringValue, '', 'success')
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
    }
}
</script>
