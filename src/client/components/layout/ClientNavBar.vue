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
const currentHoverPath = ref('')
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

// 修改显示菜单的方法
const showMenu = (path: string) => {
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
  currentHoverPath.value = path
  showArchiveMenu.value = true
}

// 修改隐藏菜单的方法
const hideMenu = () => {
  timeoutId = window.setTimeout(() => {
    showArchiveMenu.value = false
    currentHoverPath.value = ''
  }, 200)
}

// 清理定时器
onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<template>
  <nav class="fixed top-0 inset-x-0 z-50">
    <div class="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-100/80"></div>
    
    <div class="relative max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink 
          to="/" 
          class="flex items-center space-x-2 group"
        >
          <i class="ri-quill-pen-line text-2xl text-gray-800 group-hover:text-blue-500 transition-colors"></i>
          <span class="text-xl font-bold bg-gradient-text">xiaoYu's Blog</span>
        </RouterLink>

        <!-- 导航链接 -->
        <div class="flex items-center space-x-1">
          <div
            v-for="item in navItems"
            :key="item.path"
            class="relative"
            @mouseenter="item.children && showMenu(item.path)"
            @mouseleave="item.children && hideMenu()"
          >
            <RouterLink
              :to="item.path"
              class="nav-link group"
              :class="{ 
                'is-active': item.path === route.path,
                'nav-active': item.path === '/archive' && isArchivePage
              }"
            >
              <div class="nav-link-bg absolute inset-0 rounded-lg transition-colors duration-200"></div>
              <div class="nav-link-content">
                <i :class="[item.icon, 'nav-icon']"></i>
                <span>{{ item.name }}</span>
                <i v-if="item.children" 
                   class="ri-arrow-down-s-line transition-transform duration-200"
                   :class="{ 'rotate-180': showArchiveMenu && currentHoverPath === item.path }">
                </i>
              </div>
            </RouterLink>

            <!-- 归档下拉菜单 -->
            <div v-if="item.children && showArchiveMenu && currentHoverPath === item.path"
                 class="absolute top-full left-0 mt-1 w-40 py-1
                        bg-white/90 backdrop-blur-sm
                        border border-gray-100/80 rounded-lg shadow-lg
                        overflow-hidden z-50"
                 @mouseenter="showMenu(item.path)"
                 @mouseleave="hideMenu()"
            >
              <RouterLink
                v-for="child in item.children"
                :key="child.path"
                :to="{ path: child.path, query: { tab: child.param } }"
                class="menu-item group"
                :class="{ 'menu-active': currentArchiveTab === child.param }"
              >
                <div class="menu-item-content">
                  <i :class="child.icon"></i>
                  <span>{{ child.name }}</span>
                </div>
              </RouterLink>
            </div>
          </div>

          <!-- 搜索按钮 -->
          <button class="nav-link group">
            <div class="nav-link-bg absolute inset-0 rounded-lg transition-colors duration-200"></div>
            <div class="nav-link-content">
              <i class="ri-search-line nav-icon"></i>
            </div>
          </button>

          <!-- 主题切换按钮 -->
          <button class="nav-link group">
            <div class="nav-link-bg absolute inset-0 rounded-lg transition-colors duration-200"></div>
            <div class="nav-link-content">
              <i class="ri-sun-line nav-icon"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Logo渐变文字 */
.bg-gradient-text {
  @apply text-gray-800;
  transition: color 0.2s ease;
}

.group:hover .bg-gradient-text {
  @apply text-blue-500;
}

/* 导航链接样式 */
.nav-link {
  @apply flex items-center space-x-2 px-3 py-2 rounded-lg relative text-gray-600 overflow-hidden;
}

.nav-link-content {
  @apply flex items-center space-x-2 relative z-10;
}

.nav-link:hover {
  @apply text-blue-500;
}

.nav-link:hover .nav-link-bg {
  @apply bg-blue-50;
}

/* 图标样式 */
.nav-icon {
  @apply text-current transition-colors;
}

/* 激活状态 */
.is-active {
  @apply text-blue-500;
}

.is-active .nav-link-bg {
  @apply bg-blue-50;
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
  @apply flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-500 relative;
}

.menu-item:hover {
  @apply bg-blue-50;
}

.menu-item-content {
  @apply flex items-center space-x-3 relative z-10;
}

/* 菜单项激活状态 */
.menu-active {
  @apply text-blue-500 bg-blue-50;
}

.menu-active::before {
  content: '';
  @apply absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-blue-500 rounded-r-full;
}

.menu-active:hover::before {
  @apply h-3/4;
}

/* 箭头旋转动画 */
.ri-arrow-down-s-line {
  @apply transition-transform duration-200;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>

<script lang="ts">
export default {
  name: 'NavBar'
}
</script> 