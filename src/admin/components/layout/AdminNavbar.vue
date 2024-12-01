<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits<{
  (e: 'toggle-sidebar'): void
}>()

const handleLogout = () => {
  localStorage.removeItem('admin-token')
  router.push('/admin/login')
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- 左侧 -->
      <div class="flex items-center space-x-4">
        <button
          class="nav-icon-btn"
          @click="$emit('toggle-sidebar')"
        >
          <i class="ri-menu-line text-xl" />
        </button>
        <div class="flex items-center space-x-2">
          <i class="ri-code-box-line text-2xl text-blue-500" />
          <h1 class="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            博客后台管理
          </h1>
        </div>
      </div>
      
      <!-- 右侧 -->
      <div class="flex items-center space-x-3">
        <!-- 通知按钮 -->
        <button class="nav-icon-btn indicator">
          <i class="ri-notification-3-line text-xl" />
          <span class="indicator-dot" />
        </button>

        <!-- 主题切换 -->
        <button class="nav-icon-btn">
          <i class="ri-sun-line text-xl" />
        </button>
        
        <!-- 用户菜单 -->
        <div class="relative">
          <button class="user-btn" @click="handleLogout">
            <span class="avatar">
              <i class="ri-user-line" />
            </span>
            <span class="ml-2">Admin</span>
            <i class="ri-logout-box-r-line ml-2" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  @apply bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
}

.navbar-container {
  @apply h-full px-4 flex items-center justify-between max-w-[1920px] mx-auto;
}

.nav-icon-btn {
  @apply p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 
         dark:hover:bg-gray-700 transition-colors relative;
}

.indicator {
  @apply relative;
}

.indicator-dot {
  @apply absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full;
}

.user-btn {
  @apply flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200
         hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors;
}

.avatar {
  @apply w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500
         flex items-center justify-center text-white;
}
</style> 