// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
// import store from "./store";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router";
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'


Vue.use(  BootstrapVue )
Vue.use( Vuelidate )

Vue.config.productionTip = false

new Vue({ BootstrapVue, Vuelidate,  store, router,    render: h => h(App)}).$mount('#app')