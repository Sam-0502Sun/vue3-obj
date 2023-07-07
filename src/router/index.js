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
        component: () => import('../views/chart/chart-index'),
        children: [
          {
            path: '/chart/lineChart',
            name: 'LineChart',
            component: () => import('../views/chart/line-chart/line-index')
          },
          {
            path: '/chart/pieChart',
            name: 'PieChart',
            component: () => import('../views/chart/pie-chart/pie-index')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
