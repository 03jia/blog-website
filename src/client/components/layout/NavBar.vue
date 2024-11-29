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
  <nav class="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink 
          to="/" 
          class="text-xl font-bold flex items-center space-x-2 group"
        >
          <i class="ri-quill-pen-line text-2xl text-gray-400 transition-all duration-300 group-hover:text-blue-400 group-hover:rotate-12"></i>
          <span class="bg-gradient-text">xiaoYu's Blog</span>
        </RouterLink>

        <!-- 导航链接 -->
        <div class="flex items-center space-x-8">
          <RouterLink 
            to="/" 
            class="nav-link group"
            :class="{ 'is-active': route.path === '/' }"
          >
            <div class="nav-link-bg"></div>
            <div class="nav-link-content">
              <i class="nav-icon ri-home-3-line text-xl"></i>
              <span>首页</span>
            </div>
          </RouterLink>

          <!-- 归档下拉菜单 -->
          <div 
            class="relative"
            @mouseenter="showMenu"
            @mouseleave="hideMenu"
          >
            <!-- 归档按钮 -->
            <div 
              class="nav-link group cursor-pointer"
              :class="{ 'nav-active': isArchivePage }"
            >
              <div class="nav-link-bg"></div>
              <div class="nav-link-content">
                <i class="nav-icon ri-archive-drawer-line text-xl"></i>
                <span>归档</span>
                <i class="ri-arrow-down-s-line ml-1 text-sm transition-transform duration-300 group-hover:rotate-180"></i>
              </div>
            </div>

            <!-- 下拉菜单 -->
            <div 
              v-show="showArchiveMenu"
              class="absolute top-full left-0 mt-2 w-40 py-2 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 shadow-xl 
                     transform transition-all duration-300"
              :class="[showArchiveMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2']"
              @mouseenter="showMenu"
              @mouseleave="hideMenu"
            >
              <RouterLink
                v-for="item in navItems[1].children"
                :key="item.path"
                :to="{ path: '/archive', query: { tab: item.param } }"
                class="menu-item group"
                :class="{ 'menu-active': isArchivePage && currentArchiveTab === item.param }"
              >
                <div class="menu-item-bg"></div>
                <div class="menu-item-content">
                  <i :class="[item.icon, 'text-lg transition-transform duration-300 group-hover:scale-110']"></i>
                  <span>{{ item.name }}</span>
                </div>
                <!-- 添加悬停时的发光效果 -->
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0"></div>
                </div>
              </RouterLink>
            </div>
          </div>

          <RouterLink 
            to="/about" 
            class="nav-link group"
            :class="{ 'is-active': route.path === '/about' }"
          >
            <div class="nav-link-bg"></div>
            <div class="nav-link-content">
              <i class="nav-icon ri-information-line text-xl"></i>
              <span>关于</span>
            </div>
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
  @apply flex items-center space-x-2 relative z-10 transition-colors duration-300;
}

.nav-link-bg {
  @apply absolute inset-0 bg-white/5 rounded-lg scale-x-0 origin-left transition-transform duration-300;
}

.group:hover .nav-link-bg {
  @apply scale-x-100;
}

.group:hover .nav-link-content {
  @apply text-white;
}

/* 图标动画 */
.nav-icon {
  @apply transition-transform duration-300;
}

.group:hover .nav-icon {
  @apply scale-110;
}

/* 激活状态 */
.is-active {
  @apply text-white;
}

.is-active::after {
  content: '';
  @apply absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0;
  animation: shine 2s ease-in-out infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* 下拉菜单项样式 */
.menu-item {
  @apply flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-300 relative overflow-hidden cursor-pointer
         hover:text-white transition-colors duration-300;
}

.menu-item-content {
  @apply flex items-center space-x-3 relative z-10;
}

.menu-item-bg {
  @apply absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
         opacity-0 group-hover:opacity-100 transition-opacity duration-300;
}

/* 激活状态样式 */
.menu-item.is-active {
  @apply text-blue-400 bg-blue-500/10;
}

.menu-item.is-active::before {
  content: '';
  @apply absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-blue-500 
         rounded-r-full transition-all duration-300;
}

.menu-item.is-active:hover::before {
  @apply h-3/4;
}

/* 归档按钮激活状态 */
.nav-link.is-active {
  @apply text-blue-400;
}

.nav-link.is-active .nav-link-bg {
  @apply scale-x-100 bg-blue-500/10;
}

.nav-link.is-active::after {
  content: '';
  @apply absolute bottom-0 left-0 right-0 h-0.5;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(59, 130, 246, 0.7) 50%, 
    transparent 100%
  );
  animation: shine 2s ease-in-out infinite;
}

/* 下拉菜单动画 */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-enter-active {
  animation: slideDown 0.3s ease-out;
}

.menu-leave-active {
  animation: slideDown 0.3s ease-in reverse;
}

/* 导航链接基础激活状态 */
.nav-active {
  @apply text-blue-400;
}

.nav-active .nav-link-content {
  @apply text-blue-400;
}

.nav-active .nav-link-bg {
  @apply scale-x-100 bg-blue-500/10;
}

.nav-active::after {
  content: '';
  @apply absolute bottom-0 left-0 right-0 h-0.5;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(59, 130, 246, 0.7) 50%,
    transparent 100%
  );
  animation: shine 2s ease-in-out infinite;
}

/* 下拉菜单项激活状态 */
.menu-active {
  @apply text-blue-400 bg-blue-500/10;
}

.menu-active::before {
  content: '';
  @apply absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-blue-500 
         rounded-r-full transition-all duration-300;
}

.menu-active:hover::before {
  @apply h-3/4;
}

/* 动画效果 */
@keyframes shine {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
</style> 

<script lang="ts">
export default {
  name: 'NavBar'
}
</script> 