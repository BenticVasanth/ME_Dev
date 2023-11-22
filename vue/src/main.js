import App from "./App.vue";
import { createApp } from "@vue/compat";
import BootstrapVue from "bootstrap-vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Router from "@/router/router.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/scss/main.scss";
import services from "@/services/service";
import CommomnJs from "@/assets/js/common.js";
import Paginate from "vuejs-paginate-next";
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
const app = createApp(App);

let $global = app.config.globalProperties;
$global.service = services;
$global.router = Router;
$global.CommomnJs = CommomnJs;
// if(window.location.hostname.indexOf('localhost') != -1){
  $global.$ipAddress = "localhost:8081"
  // $global.$warName = "tndash";
// } else{
  // $global.$ipAddress = window.location.hostname;
  // $global.$warName = window.location.pathname.slice(1,-1).toLowerCase(); 
// }
export { $global }

let endPointObj = require("./services/commonEndPoint.json");

var protocol = "https:" == document.location.protocol ? "https://" : "http://";
$global.$urlLink = protocol + $global.$ipAddress + "/";
// $global.$urlLink = protocol + $global.$ipAddress + "/" + $global.$warName;
endPointObj.map((obj) => createUrl(obj));

let CommonJson = require("@/assets/js/Common.json");
CommonJson.GLOBAL.login.map(obj => createVar(obj));
function createVar(obj) {
  let key = Object.keys(obj);
  $global['$' + key] = obj[key];
}
CommonJson = '';

function createUrl(obj) {
  let key = Object.keys(obj);
  $global["$" + key] = $global.$urlLink + obj[key];
}
app
  .use(BootstrapVue)
  .use(createPinia().use(piniaPluginPersistedstate))
  .use(Router)
  .use(Paginate)
  .use(VueTippy, {
    defaultProps: { placement: 'right' },
  })
  .mount("#app");
