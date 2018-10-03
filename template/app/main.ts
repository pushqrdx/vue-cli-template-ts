import Vue from "nativescript-vue";
import App from "./components/App.vue";

{{#devtools}}
// @ts-ignore
import VueDevtools from "nativescript-vue-devtools";

// @ts-ignore
if(TNS_ENV !== "production") {
  Vue.use(VueDevtools);
}
{{/devtools}}
  
// Prints Vue logs when --env.production is *NOT* set while building
// @ts-ignore
Vue.config.silent = (TNS_ENV === "production");

{{#if_eq preset "SideDrawer"}}
Vue.registerElement("RadSideDrawer", () => require("nativescript-ui-sidedrawer").RadSideDrawer);
{{/if_eq}}

new Vue({
  render: h => h("frame", [h(App)])
}).$start();
