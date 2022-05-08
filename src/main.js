import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import { BootstrapVue } from "bootstrap-vue";
Vue.config.productionTip = false;
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: (h) => h(App),
  vuetify,
  BootstrapVue,
}).$mount("#app");
