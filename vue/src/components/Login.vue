<template>
<div class="loginPage">
    <b-container>
        <b-row>
            <b-col cols="12">
                <b-card class="text-center rounded border-0" bg-variant="" text-variant="white">
                    <b-form>
                        <b-form-group>
                            <b-form-input id="input-1" type="email" placeholder="Enter email" required></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-form-input type="password" id="text-password" placeholder="Enter Password"></b-form-input>
                        </b-form-group>
                        <b-button block variant="primary">SIGN IN</b-button>
                    </b-form>
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

    },
    created() {

    }
}
</script>
