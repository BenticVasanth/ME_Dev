<template>
<div class="loginPage">
    <b-container>
        <b-row>
            <b-col cols="12">
                <b-card class="text-center rounded border m-2" bg-variant="" text-variant="white">
                    <b-form class="p-3">
                        <b-form-group>
                            <b-form-input id="input-1" type="email" placeholder="Enter email" required></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-form-input type="password" id="text-password" placeholder="Enter Password"></b-form-input>
                        </b-form-group>
                        <b-button block variant="primary" @click="sign()">SIGN IN</b-button>
                    </b-form>
                    <b-row class="m-3">
                        <b-col md="6" class="d-flex justify-content-center p-2">
                            <b-link class="text-primary" @click="forgetPwd()">Forgot Password</b-link>
                        </b-col>
                        <b-col md="6" class="d-flex justify-content-center p-2">
                             <b-link href="" @click="newPage()">Create New Account</b-link>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <p class="text-dark font-weight-bold p-1">Note: Please register to access all the documents. If you are already registered, please Sign In.</p>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
   
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        forgetPwd() {
             this.$router.push({
                path: "forgetpassword"
            })
        },
        newPage() {
            this.$router.push({
                path: "register"
            })
        },
        sign(){
            this.$router.push({path :"/welcomeDashboard/dashboard"})
        }
    },
    created() {

    }
}
</script>
