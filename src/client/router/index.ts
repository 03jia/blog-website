import { createRouter, createWebHistory } from 'vue-router'
import { adminRoutes } from './admin'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/client/views/HomeView.vue')
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import('@/client/views/CategoryView.vue')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('@/client/views/ArticleView.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('@/client/views/ArchiveView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/client/views/AboutView.vue')
    },
    ...adminRoutes
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('admin-token')
    if (!token) {
      next({
        path: '/admin/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
