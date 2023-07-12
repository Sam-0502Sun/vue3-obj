import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login-index')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/home-index')
      },
      {
        path: '/member',
        name: 'Member',
        component: () => import('../views/member/member-index')
      },
      {
        path: '/goods',
        name: 'Goods',
        component: () => import('../views/goods/goods-index')
      },
      {
        path: '/chart',
        name: 'Chart',
        component: () => import('../views/chart/chart-index')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
