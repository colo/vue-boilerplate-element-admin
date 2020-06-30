import Root from '@apps/root'

const routes = [
  {
    path: '/login',
    component: () => import('@vue-element-admin/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@vue-element-admin/views/404'),
    hidden: true
  },
  {
    path: '/',
    // component: () => import('@apps/root/index.vue'),
    component: () => import('@vue-element-admin/layout/index'),
    // meta: {
    //   breadcrumb: { label: 'Index', icon: 'widgets', app: 'root' }
    // },
    children: [
      {
        path: '',
        name: 'Home',
        component: Root,
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
