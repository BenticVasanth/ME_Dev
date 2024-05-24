<template>
<div>
    <Home />
    <b-container>
        <b-card>
            <b-card-title>Create An Account</b-card-title>
            <b-form inline class="justify-content-center">
                <label class="sr-only" for="inline-form-input-name">User Name</label>
                <b-form-input v-model="userName" type="text" id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Enter User Name"></b-form-input>

                <label class="sr-only" for="inline-form-input-mobile">Mobile No.</label>
                <b-form-input v-model="mobile" type="number" id="inline-form-input-mobile" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Mobile Number"></b-form-input>

                <label class="sr-only" for="inline-form-input-email">Email</label>
                <b-form-input v-model="email" type="email" id="inline-form-input-email" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Email Id"></b-form-input>

                <div class="form-check">
                    <input v-model="notificationStatus" class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Click for Email Notification
                    </label>
                </div>
                <b-button class="ml-2" @click="register" variant="primary">Register</b-button>
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
    name: "RegisterPage",
    components: {
        Home
    },
    data() {
        return {
            userName: 'BenTest',
            mobile: '7373843646',
            email: "bentest@gmail.com",
            notificationStatus: true
        }
    },
    methods: {
        clear() {
            this.userName = "";
            this.mobile = "";
            this.email = "";
            this.notificationStatus = true;
        },
        register() {
            var formData = {
                userName: this.userName,
                mobile: this.mobile,
                email: this.email,
                notificationStatus: this.notificationStatus
            };
            var jsonFormdata = {
                id: '',
                stringValue: aesUtil.methods.encrypt(JSON.stringify(formData), this.$store.tokenId)
            };
            axios.post(this.$signup, jsonFormdata, {
                headers: {
                    'auth_token': this.$store.tokenId
                }
            }).then(res => {
                var base64StringValue = aesUtil.methods.decrypt(res.data, this.$store.tokenId);
                // this.$store.tokenId = res.headers.auth_token;
                var jsonString = JSON.parse(base64StringValue);
                if (jsonString.id == 0) {
                    // this.warnAlert(jsonString.stringValue, '', 'failure');
                    return false;
                } else if (jsonString.id == 1) {
                    alert("Saved Successfully")
                    this.clear();
                    // this.warnAlert(jsonString.stringValue, '', 'success')
                }
            }).catch(err => {
                alert(err.response.data.message)
            });
        },
    },
    created() {
        axios.post(this.$getToken).then(res => {
            this.$store.tokenId = JSON.parse(res.data);
        })
    }
}
</script>
