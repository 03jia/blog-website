<script setup lang="ts">
import { ref } from 'vue'

const media = ref([
  {
    id: 1,
    name: 'cover-1.jpg',
    url: '/images/cover-1.jpg',
    size: '1.2MB',
    type: 'image',
    createdAt: '2024-01-20'
  }
])
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        媒体管理
      </h1>
      <button class="btn-primary">
        上传文件
      </button>
    </div>

    <!-- 媒体网格 -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      <div 
        v-for="item in media" 
        :key="item.id"
        class="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
      >
        <div class="aspect-w-16 aspect-h-9">
          <img 
            :src="item.url" 
            :alt="item.name"
            class="object-cover"
          >
        </div>
        <div class="p-4">
          <h3 class="text-sm font-medium text-gray-900 dark:text-white truncate">
            {{ item.name }}
          </h3>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {{ item.size }}
          </p>
        </div>
        <!-- 悬浮操作按钮 -->
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <div class="absolute inset-0 flex items-center justify-center space-x-2">
            <button class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
              <i class="i-carbon-edit" />
            </button>
            <button class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
              <i class="i-carbon-trash-can" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  @apply px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg 
         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
         focus:ring-blue-500 transition-colors;
}
</style> 