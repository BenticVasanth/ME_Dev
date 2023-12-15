<template>
<div class="headerNav">
    <b-container>
        <b-row>
            <b-col col lg="2" md="3" sm="12" cols="12">
                <img class="img-fluid banImg" src="@/assets/images/logo_elshaddai.png" img-alt="Responsive image" width="200" height="50" />
            </b-col>
            <b-col col lg="8" md="6" sm="12" cols="12">
                <!-- <b-navbar class="float-right" type="dark" variant="dark">
                    <b-navbar-nav>
                        <b-nav-item class="p-2" v-for="(menu, index) in menuList" :key="index" @click="pageRouting(menu.router)">{{menu.name}}</b-nav-item>
                    </b-navbar-nav>
                </b-navbar> -->
                <b-navbar toggleable="lg" type="dark" variant="info">
                    <b-navbar-toggle target="nav-collapse">
                        <b-navbar-brand href="#">Menu</b-navbar-brand>

                    </b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item class="p-2" v-for="(menu, index) in menuList" :key="index" @click="pageRouting(menu.router)">{{menu.name}}</b-nav-item>
                        </b-navbar-nav>

                    </b-collapse>
                </b-navbar>
            </b-col>
            <b-col col lg="2" md="3" sm="12" cols="12">
                <img class="img-fluid banImg" src="@/assets/images/BWT_Logo_Color_png.png" img-alt="Responsive image" width="200" height="50" />
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [{
                name: "HOME",
                router: "/"
            }, {
                name: "SIGN IN",
                router: "sign"
            }, {
                name: "REGISTER",
                router: "register"
            }, ]
        }
    },
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
