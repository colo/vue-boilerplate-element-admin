// import Vue from 'vue'
// import Vuex from 'vuex'
// import getters from '../vue-element-admin/store/getters'
// // import app from '../vue-element-admin/store/modules/app'
// // import permission from '../vue-element-admin/store/modules/permission'
// // import settings from '../vue-element-admin/store/modules/settings'
// // import user from '../vue-element-admin/store/modules/user'
//
// Vue.use(Vuex)
//
// const store = new Vuex.Store({
//   modules: {
//     // app,
//     // permission,
//     // settings,
//     // user
//   },
//   getters
// })
//
// export default store

import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
// import app from './app'
// import grids from './grids'
// import components from './components'

import getters from '../vue-element-admin/store/getters'
import app from '../vue-element-admin/store/modules/app'
import permission from '../vue-element-admin/store/modules/permission'
import settings from '../vue-element-admin/store/modules/settings'
import user from '../vue-element-admin/store/modules/user'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// export default function (/* { ssrContext } */) {
const Store = new Vuex.Store({
  modules: {
    app,
    permission,
    settings,
    user
    // app,
    // grids,
    // components
  },
  getters,

  // enable strict mode (adds overhead!)
  // for dev mode only
  // strict: process.env.DEV
})

// return Store
// }

export default Store
