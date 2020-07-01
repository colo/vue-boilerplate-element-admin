import Root from '@apps/root'

import Layout from '@vue-element-admin/layout/index'

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
    component: Layout,
    // component: () => import('@vue-element-admin/layout/index'),
    redirect: { name: 'Home' },
    // redirect: '/root',
    // name: 'Home',
    // meta: {
    //   breadcrumb: { label: 'Home' }
    // },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Root,
        meta: { title: 'Home', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@vue-element-admin/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@vue-element-admin/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
