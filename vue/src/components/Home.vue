<template>
<div>
    <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
            <b-nav-item v-for="(menu, index) in menuList" :key="index" @click="pageRouting(menu.router)">{{menu.name}}</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [{
                name: "Home",
                router: "/"
            }, {
                name: "Register",
                router: "register"
            }, {
                name: "Login",
                router: "login"
            }]
        }
    },
    name: 'HomePage',
    components: {},
    methods: {
        pageRouting(routerName) {
            // this.$router.push(routerName)
            this.router.push({
                path: routerName
            });
        }
    }
}
</script>
