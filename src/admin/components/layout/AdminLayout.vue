<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/admin/components/layout/AdminNavBar.vue'
import Sidebar from '@/admin/components/layout/AdminSidebar.vue'

const collapsed = ref(true)
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- 顶部导航栏 -->
    <Navbar @toggle-sidebar="collapsed = !collapsed" class="fixed top-0 left-0 right-0 z-30" />
    
    <!-- 侧边栏 -->
    <Sidebar 
      v-model:collapsed="collapsed"
      class="fixed top-16 left-0 bottom-0 z-40 transform transition-transform duration-300"
      :class="[collapsed ? '-translate-x-full' : 'translate-x-0']"
    />
    
    <!-- 遮罩层 -->
    <div 
      v-show="!collapsed"
      class="fixed inset-0 bg-black/50 z-30"
      @click="collapsed = true"
    />
    
    <!-- 主内容区域 -->
    <main class="pt-16 min-h-screen">
      <div class="p-6">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 添加滚动条样式 */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e0 transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #cbd5e0;
  border-radius: 3px;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #4a5568;
}
</style>

<script lang="ts">
export default {
  name: 'AdminLayout'
}
</script> 