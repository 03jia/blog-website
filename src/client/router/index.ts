import { createRouter, createWebHistory } from 'vue-router'
import { resetScroll } from '@/client/utils/scroll'
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
      path: '/article/:title',
      name: 'Article',
      component: () => import('@/client/views/ArticleView.vue'),
      props: true
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
    {
      path: '/articles',
      name: 'articles',
      component: () => import('@/client/components/article/ArticleCategoryList.vue')
    },
    ...adminRoutes
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          top: 0,
          behavior: 'instant',
          left: 0
        })
      }, 0)
    })
  }
})

router.beforeEach((to, from, next) => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
  next()
})

export default router
