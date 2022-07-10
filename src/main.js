import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AtComponents from 'at-ui'
import 'at-ui-style'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './request/api.js'
// import axios from 'axios'
import fmtTime from './fmtTime.js'
Vue.prototype.$api = api
Vue.prototype.$fmtTime = fmtTime
Vue.config.productionTip = false
Vue.use(AtComponents)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
