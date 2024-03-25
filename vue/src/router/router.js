import { createWebHashHistory, createRouter } from "vue-router";
import { $global } from '@/main.js'
import WelcomeDashboard from "@/components/WelcomeDashboard";
import Home from "@/components/Home";
import Register from "@/components/Register";
import Login from "@/components/Login";
import DashboardPage from "@/components/Dashboard";

import services from "@/services/service";

const routes = [{
  path: "/welcomeDashboard/",
  name: "WelcomeDashboard",
  component: WelcomeDashboard,
  children: [{
    path: 'dashboard',
    name: 'dashboard',
    component: DashboardPage
  }]
},
{
  path: "/",
  name: "Home",
  component: Home
},
{
  path: "/register",
  name: "register",
  component: Register,
},
{
  path: "/login",
  name: "login",
  component: Login,
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  services.checkserver();
  const publicPages = ['/', '/register', '/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = $global.$store.sessionId;
  if (authRequired && !loggedIn) {
    this.$store.tokenId = "";
    this.$store.sessionId = "";
    next('/');
  } else {
    if (to.path == '/welcomeDashboard/' || to.path == '/welcomeDashboard') {
      next({
        name: from.name
      })
    } else if (to.matched.length == 0) {
      next({
        name: from.name
      })
    }
    next();
  }
});

export default router;