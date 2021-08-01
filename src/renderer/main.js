import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import  * as filters from './filter'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

console.log('@',filters);
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
