<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '../components/layout/NavBar.vue'
import ArticleList from '../components/blog/ArticleList.vue'
import Sidebar from '../components/sidebar/Sidebar.vue'
import bgImage from '../assets/images/bg.jpg'

const showContent = ref(false)

const startReading = () => {
  showContent.value = true
  document.querySelector('#content')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    
    <!-- 引导页面部分 -->
    <section 
      class="min-h-screen bg-fixed bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <!-- 背景遮罩 -->
      <div class="fixed inset-0 bg-gradient-overlay"></div>

      <!-- 内容 -->
      <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <!-- 博客标题 -->
        <h1 class="text-6xl md:text-7xl font-bold mb-4 text-center">
          xiaoYu's Blog
        </h1>
        
        <!-- 副标题 -->
        <p class="text-xl md:text-2xl text-gray-300 mb-12 text-center">
          技术爱好者的个人笔记、记!
        </p>

        <!-- 导航卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
          <!-- 干货资源卡片 -->
          <a 
            href="#content" 
            class="card-border rounded-xl group relative overflow-hidden hover:bg-white/20 transition-all duration-300"
            @click.prevent="startReading"
          >
            <div class="p-8">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-3xl">📚</span>
                <h3 class="text-2xl font-bold">干货资源</h3>
              </div>
              <p class="text-gray-300">
                Notion快捷指令、效率工具等干货资源
              </p>
            </div>
            <div class="absolute bottom-4 right-4 transform translate-x-2 group-hover:translate-x-0 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>

          <!-- AI工具卡片 -->
          <a 
            href="#content" 
            class="card-border rounded-xl group relative overflow-hidden hover:bg-white/20 transition-all duration-300"
            @click.prevent="startReading"
          >
            <div class="p-8">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-3xl">🤖</span>
                <h3 class="text-2xl font-bold">AI笔记</h3>
              </div>
              <p class="text-gray-300">
                ChatGPT使用技巧、AI工具合集
              </p>
            </div>
            <div class="absolute bottom-4 right-4 transform translate-x-2 group-hover:translate-x-0 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>

        <!-- 向下滚动提示 -->
        <div class="absolute bottom-8 animate-bounce">
          <button 
            class="text-gray-300 hover:text-white transition-colors flex flex-col items-center"
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

      <!-- 博客内容部分 -->
      <section 
        id="content"
        class="relative z-10"
      >
        <main class="max-w-7xl mx-auto px-4 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- 文章列表区域 -->
            <div class="lg:col-span-8">
              <ArticleList />
            </div>
            
            <!-- 侧边栏区域 -->
            <div class="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </main>
      </section>
    </section>
  </div>
</template>

<style scoped>
.bg-gradient-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
}
</style>
