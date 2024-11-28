<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const startReading = () => {
  router.push('/home')
}
</script>

<template>
  <div class="min-h-screen relative overflow-hidden bg-gray-900">
    <!-- 背景图片 -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
    </div>

    <!-- 内容 -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
      <!-- 博客标题 -->
      <h1 class="text-6xl md:text-7xl font-bold mb-4 text-center">
        xiaoYu's Blog
      </h1>
      
      <!-- 副标题 -->
      <p class="text-xl md:text-2xl text-gray-300 mb-12 text-center">
        一位编程爱好者的个人笔记
      </p>

      <!-- 导航按钮 -->
      <div class="flex flex-col md:flex-row gap-6 mb-16">
        <a 
          href="#" 
          class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          @click.prevent="startReading"
        >
          干货资源
        </a>
        <a 
          href="#" 
          class="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
          @click.prevent="startReading"
        >
          AI笔记
        </a>
      </div>

      <!-- 向下滚动提示 -->
      <div class="absolute bottom-8 animate-bounce">
        <button 
          class="text-gray-400 hover:text-white transition-colors flex flex-col items-center"
          @click="startReading"
        >
          Start Reading
          <svg 
            class="w-6 h-6 mt-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
}
</style> 