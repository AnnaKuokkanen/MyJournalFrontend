// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify : new Vuetify({ icons: { iconfont: 'mdi' } }),
  router,
  components: { App },
  template: '<App/>'
})