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
                <template v-if="showmenu">
                    <b-navbar toggleable="lg" type="dark" variant="info" class="">
                        <b-navbar-toggle target="nav-collapse">
                            <b-navbar-brand href="#" class="">Menu</b-navbar-brand>
                        </b-navbar-toggle>
                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav align="center">
                                <b-nav-item class="p-2" v-for="(menu, index) in menuList" :key="index" @click="pageRouting(menu.router)">{{menu.name}}</b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                </template>
                <template v-else>
                    <div class="userheader float-right">
                        <b-dropdown size="lg" variant="outline-primary" toggle-class="float-right text-decoration-none d-flex align-items-center justify-content-around py-0">
                            <template #button-content>
                                <b-navbar-nav>
                                    <b-nav-text class="pb-1 pt-1 f-13 txt-clr font-weight-bold text-left txt-wrap">Hi BENATIC A VASANTH !</b-nav-text>
                                </b-navbar-nav>
                            </template>
                            <!-- <b-dropdown-item @click="modalProfileOpen">My Profile</b-dropdown-item> -->
                            <b-dropdown-item class="d-inline-block align-top" href="" @click="changepassword()">Change password</b-dropdown-item>
                        </b-dropdown>
                    </div>
                </template>
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
    props: {
        showmenu: {
            type: Boolean,
            default: true
        }

    },
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
        },
        changepassword() {
            this.$router.push({
                path: "/changepassword"
            })

        }
    }
}
</script>
