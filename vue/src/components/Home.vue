<template>
<div>
    <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
            <b-nav-item v-for="(menu, index) in menuList" :key="index" @click="pageRouting(menu.router)">{{menu.name}}</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    <Footer></Footer>
    <div class="row p-4 m-0">
        <div class="col-lg-4 col-md-12 col-sm-12">
            <b-container>
                <b-card>
                    <img class="pr-2 w-100" src="@/assets/images/catholicTamilWebsiteAdvertisement.png" img-alt="Card image" />
                </b-card>
            </b-container>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
            <Login></Login>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
            <b-container>
                <b-card>
                    <img class="pr-2 w-100" src="@/assets/images/catholicTamilWebsiteAdvertisement.png" img-alt="Card image" />
                </b-card>
            </b-container>
        </div>
    </div>

</div>
</template>

<script>
import Footer from "@/components/Footer"
import Login from "@/components/Login"
export default {
    components: {
        Footer,
        Login
    },
    data() {
        return {
            menuList: [{
                name: "Home",
                router: "/"
            }, {
                name: "Register",
                router: "register"
            }]
        }
    },
    name: 'HomePage',
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
