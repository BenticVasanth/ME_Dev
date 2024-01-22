<template>
<div class="changepwd">
    <TopBar></TopBar>
    <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
            <b-col md="8" lg="6" sm="12">
                <b-card class="text-center rounded border m-3" bg-variant="" text-variant="white">
                    <h5 class="text-dark font-weight-bold p-2 text-center">Change Password to Magnify El-Shaddai</h5>
                    <b-form-group>
                        <b-form-input type="password" id="currentpassword" placeholder="Current Password"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input type="password" id="newpassword" placeholder="New Password"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input type="password" id="confirmpassword" placeholder="Confirm Password"></b-form-input>
                    </b-form-group>
                    <b-button block pill variant="primary" class="mt-3">SUBMIT</b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
    components: {
        TopBar
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
