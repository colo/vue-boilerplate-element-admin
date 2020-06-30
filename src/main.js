import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@vue-element-admin/styles/index.scss' // global css

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@vue-element-admin/icons' // icon
import '@vue-element-admin/permission' // permission control

Vue.config.productionTip = false
// make sure to set this synchronously immediately after loading Vue and before `new Vue`
Vue.config.devtools = true
Vue.config.performance = process.env.NODE_ENV !== 'production'

Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
