<template>
<div class="forget">
    <TopBar></TopBar>
    <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
            <b-col md="8" lg="6" sm="12">
                <b-card class="text-center rounded border m-3" bg-variant="" text-variant="white">
                    <h5 class="text-dark font-weight-bold p-2">Forgot Password to Magnify El-Shaddai</h5>
                    <b-form-group>
                        <b-form-input id="input-1" type="email" placeholder="Enter email" required></b-form-input>
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
    }
}
</script>
