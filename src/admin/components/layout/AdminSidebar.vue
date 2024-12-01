<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { theme } from '@/shared/config/theme'

const route = useRoute()
const emit = defineEmits<{
  (e: 'update:collapsed', value: boolean): void
}>()

const props = defineProps<{
  collapsed: boolean
}>()

const toggleCollapse = () => {
  emit('update:collapsed', !props.collapsed)
}

// 菜单配置
const menus = [
  {
    title: '仪表盘',
    icon: 'ri-dashboard-line',
    path: '/admin/dashboard'
  },
  {
    title: '文章管理',
    icon: 'ri-article-line',
    path: '/admin/articles'
  },
  {
    title: '分类管理',
    icon: 'ri-folder-line',
    path: '/admin/categories'
  },
  {
    title: '媒体管理',
    icon: 'ri-image-line',
    path: '/admin/media'
  }
]

// 添加路由链接点击处理
const handleMenuClick = () => {
  // 点击菜单项后自动收起侧边栏
  emit('update:collapsed', true)
}
</script>

<template>
  <aside class="sidebar">
    <!-- 侧边栏头部 -->
    <div class="sidebar-header">
      <h2 class="text-lg font-bold">博客管理系统</h2>
    </div>

    <!-- 收起按钮 - 调整位置到顶部 -->
    <button 
      class="collapse-btn"
      @click="toggleCollapse"
      :title="collapsed ? '展开菜单' : '收起菜单'"
    >
      <i 
        class="ri-arrow-left-s-line text-xl transition-transform duration-300"
        :class="{ 'rotate-180': collapsed }"
      />
    </button>

    <!-- 菜单列表 -->
    <nav class="sidebar-nav">
      <ul class="space-y-1">
        <li v-for="menu in menus" :key="menu.path">
          <router-link
            :to="menu.path"
            class="menu-item"
            :class="{ active: route.path === menu.path }"
            @click="handleMenuClick"
          >
            <i :class="menu.icon" class="menu-icon" />
            <span class="menu-text">{{ menu.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- 侧边栏底部 -->
    <div class="sidebar-footer">
      <div class="text-xs text-gray-500 dark:text-gray-400">
        © 2024 博客管理系统
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  @apply w-64 h-full flex flex-col bg-gradient-to-b from-gray-800 to-gray-900 text-white;
}

.sidebar-header {
  @apply p-6 border-b border-gray-700/50;
}

/* 收起按钮样式 - 调整位置到顶部 */
.collapse-btn {
  @apply fixed left-64 top-20 w-6 h-16
         bg-gray-800 flex items-center justify-center
         border border-gray-700 border-l-0
         hover:bg-gray-700 transition-colors duration-200
         text-gray-400 hover:text-white
         shadow-lg;
  border-radius: 0 6px 6px 0;
}

.collapse-btn i {
  @apply text-lg;
}

.sidebar-nav {
  @apply flex-1 p-4 overflow-y-auto;
}

.sidebar-footer {
  @apply p-4 border-t border-gray-700/50 text-center;
}

.menu-item {
  @apply flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white
         hover:bg-white/10 transition-colors duration-200;
}

.menu-item.active {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}

.menu-icon {
  @apply text-xl;
}

.menu-text {
  @apply ml-3 text-sm font-medium;
}

/* 滚动条样式 */
.sidebar-nav {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style> 