/* eslint-disable */
import { createWebHashHistory, createRouter } from "vue-router";
// import { $global } from '@/main.js'
import WelcomeDashboard from "@/components/WelcomeDashboard";
import Home from "@/components/Home";
import Register from "@/components/Register";
import DashboardPage from "@/components/Dashboard";
import Footer from "@/components/Footer"
import Login from "@/components/Login"
import TopBar from "@/components/TopBar"
import ForgetPassword from "@/components/ForgetPassword"
import ChangePassword  from "@/components/ChangePassword"
// import services from "@/services/service";

const routes = [
  {
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
  path:"/TopBar",
  name:"TopBar",
  component:TopBar
},
{
  path: "/register",
  name: "register",
  component: Register,
},
{
  path:"/login",
  name:"login",
  components:Login
},
{
  path:"/forgetpassword",
  name:"ForgetPassword",
  component:ForgetPassword
},
{
  path:"/footer",
  name:"footer",
  component:Footer
},
{
  path:"/changepassword",
  name:"ChangePassword ",
  component:ChangePassword 
}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // services.checkserver();
  const publicPages = ['/', '/register','/forgetpassword','/changepassword'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = "$global.$store.secureToken";
  if (authRequired && !loggedIn) {
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