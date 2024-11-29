<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const navItems = [
  { 
    name: '首页',
    path: '/',
    icon: 'ri-home-3-line'
  },
  { 
    name: '归档',
    path: '/archive',
    icon: 'ri-archive-drawer-line',
    children: [
      { 
        name: '时间线', 
        path: '/archive',
        icon: 'ri-history-line',
        param: 'time'
      },
      { 
        name: '文章分类', 
        path: '/archive',
        icon: 'ri-folder-2-line',
        param: 'category'
      },
      { 
        name: '文章标签', 
        path: '/archive',
        icon: 'ri-price-tag-3-line',
        param: 'tag'
      }
    ]
  },
  { 
    name: '关于',
    path: '/about',
    icon: 'ri-information-line'
  }
]

const showArchiveMenu = ref(false)
let timeoutId: number | null = null

const router = useRouter()
const route = useRoute()

// 判断当前路由是否为归档页面，并且检查具体的子页面
const isArchivePage = computed(() => {
  return route.path === '/archive' || route.path.startsWith('/category/')
})
const currentArchiveTab = computed(() => {
  if (route.path === '/archive') {
    return route.query.tab?.toString() || 'time'
  }
  if (route.path.startsWith('/category/')) {
    return 'category'
  }
  return null
})

// 显示下拉菜单
const showMenu = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
  showArchiveMenu.value = true
}

// 隐藏下拉菜单
const hideMenu = () => {
  timeoutId = window.setTimeout(() => {
    showArchiveMenu.value = false
  }, 200)
}

// 清理定时器
onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})

// 移除 handleMenuClick 函数，因为我们现在使用 RouterLink
</script>

<template>
  <nav 
    class="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md border-b border-white/10"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink 
          to="/" 
          class="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
        >
          <i class="ri-quill-pen-line text-2xl"></i>
          <span class="text-xl font-bold">xiaoYu's Blog</span>
        </RouterLink>

        <!-- 导航链接 -->
        <div class="flex items-center space-x-6">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center space-x-1 px-3 py-2 rounded-lg
                 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10
                  transition-all duration-200"
          >
            <i :class="[item.icon, 'text-lg']"></i>
            <span>{{ item.name }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Logo渐变文字 */
.bg-gradient-text {
  background: linear-gradient(120deg, 
    rgb(209 213 219), /* 浅灰色开始 */
    rgb(156 163 175)  /* 深灰色结束 */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Logo悬停效果 */
.group:hover .bg-gradient-text {
  background: linear-gradient(120deg, 
    rgb(96 165 250), /* 浅蓝色开始 */
    rgb(59 130 246)  /* 深蓝色结束 */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 导航链接样式 */
.nav-link {
  @apply flex items-center space-x-2 px-3 py-2 rounded-lg relative text-gray-300 overflow-hidden;
}

.nav-link-content {
  @apply flex items-center space-x-2 relative z-10;
}

.group:hover .nav-link-content {
  @apply text-white;
}

/* 图标动画 */
.nav-icon {
  @apply text-current;
}

/* 激活状态 */
.is-active {
  @apply text-white;
}

.is-active::after {
  content: '';
  @apply absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0;
  animation: shine 1s ease-out infinite;
}

@keyframes shine {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}

/* 下拉菜单项样式 */
.menu-item {
  @apply flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white;
}

.menu-item-content {
  @apply flex items-center space-x-3 relative z-10;
}

/* 激活状态样式 */
.menu-item.is-active {
  @apply text-blue-400 bg-blue-500/10;
}

.menu-item.is-active::before {
  content: '';
  @apply absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-blue-500 rounded-r-full;
}

/* 归档按钮激活状态 */
.nav-link.is-active {
  @apply text-blue-400;
}

.nav-link.is-active .nav-link-bg {
  @apply bg-blue-500/10;
}

.nav-active {
  @apply text-blue-400;
}

.nav-active .nav-link-content {
  @apply text-blue-400;
}

.nav-active .nav-link-bg {
  @apply bg-blue-500/10;
}

/* 下拉菜单项激活状态 */
.menu-active {
  @apply text-blue-400 bg-blue-500/10;
}

.menu-active::before {
  content: '';
  @apply absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-blue-500 rounded-r-full;
}

.menu-active:hover::before {
  @apply h-3/4;
}

/* 保留箭头旋转动画但移除过渡 */
.ri-arrow-down-s-line {
  transform: rotate(0deg);
}

.group:hover .ri-arrow-down-s-line {
  transform: rotate(180deg);
}
</style> 

<script lang="ts">
export default {
  name: 'NavBar'
}
</script> 