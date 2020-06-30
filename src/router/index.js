import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

// export default function (/* { store, ssrContext } */) {
//   const Router = new VueRouter({
//     scrollBehavior: () => ({ x: 0, y: 0 }),
//     routes,
//
//     // Leave these as is and change from quasar.conf.js instead!
//     // quasar.conf.js -> build -> vueRouterMode
//     // quasar.conf.js -> build -> publicPath
//     mode: process.env.VUE_ROUTER_MODE,
//     base: process.env.VUE_ROUTER_BASE
//   })
//
//   return Router
// }

const createRouter = () => new VueRouter({
  mode: 'history',
  // scrollBehavior: () => ({ x: 0, y: 0 }),
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // offset: { x: 0, y: 0 }
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes,

})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

// const Router = new VueRouter({
//   mode: 'history',
//   // scrollBehavior: () => ({ x: 0, y: 0 }),
//   scrollBehavior (to, from, savedPosition) {
//     if (to.hash) {
//       return {
//         selector: to.hash
//         // offset: { x: 0, y: 0 }
//       }
//     } else if (savedPosition) {
//       return savedPosition
//     } else {
//       return { x: 0, y: 0 }
//     }
//   },
//   routes,
//
// })
//
// export default Router
