// 管理端路由配置
import { createRouter, createWebHistory } from 'vue-router'
import { ADMIN_ROUTES } from '../config/routes'

const router = createRouter({
  history: createWebHistory('/admin'),
  routes: [
    {
      path: '/login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/articles',
      component: () => import('../views/ArticleManager.vue')
    },
    {
      path: '/categories',
      component: () => import('../views/CategoryManager.vue')
    },
    {
      path: '/media',
      component: () => import('../views/MediaManager.vue')
    }
  ]
})

export default router
 