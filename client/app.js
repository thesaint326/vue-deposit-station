import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

import VueLocalStorage from 'vue-localstorage'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(VueLocalStorage);

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
