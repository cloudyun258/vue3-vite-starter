import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios/index.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/Store/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
