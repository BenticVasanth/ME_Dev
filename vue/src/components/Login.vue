<template>
<div class="loginPage">
<b-container>
    <b-card class="text-center" bg-variant="light" text-variant="white">
        <b-form>
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input  id="input-1" type="email" placeholder="Enter email" required></b-form-input>
            </b-form-group>
            <b-form-group>
                 <b-form-input type="password" id="text-password"  placeholder="Enter Password"></b-form-input>
            </b-form-group>
        </b-form>
    </b-card>
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
