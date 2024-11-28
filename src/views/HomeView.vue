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
    <section class="min-h-screen relative">
      <!-- 内容 -->
      <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 pt-24">
        <!-- 头像区域 -->
        <div class="relative mb-12">
          <div class="relative w-32 h-32">
            <!-- 发光边框 -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md"></div>
            <!-- 头像容器 -->
            <div class="absolute inset-[3px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-[2px]">
              <img 
                src="@/assets/images/avatar.png" 
                alt="Avatar"
                class="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <h1 class="text-6xl md:text-7xl font-bold mb-4 text-center">
          xiaoYu's Blog
        </h1>
        
        <!-- 副标题 -->
        <p class="text-xl md:text-2xl text-gray-300 mb-12 text-center flex items-center justify-center space-x-2">
          <i class="ri-code-line text-blue-400 text-3xl"></i>
          <span>一位编程爱好者的个人博客</span>
        </p>

        <!-- 导航卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
          <!-- 经验分享卡片 -->
          <a 
            href="#content" 
            class="card-border rounded-xl group relative overflow-hidden hover:bg-white/20 transition-all duration-300"
            @click.prevent="startReading"
          >
            <div class="p-8">
              <div class="flex items-center gap-4 mb-4">
                <i class="ri-lightbulb-flash-line text-3xl text-yellow-400"></i>
                <h3 class="text-2xl font-bold">经验分享</h3>
              </div>
              <p class="text-gray-300 flex items-center space-x-2">
                <i class="ri-shield-check-line text-green-400"></i>
                <span>站主帮你躲坑，少走弯路</span>
              </p>
            </div>
            <i class="ri-arrow-right-line absolute bottom-6 right-6 text-xl opacity-0 group-hover:opacity-100 
                    transform translate-x-3 group-hover:translate-x-0 transition-all duration-300"></i>
          </a>

          <!-- 个人笔记卡片 -->
          <a 
            href="#content" 
            class="card-border rounded-xl group relative overflow-hidden hover:bg-white/20 transition-all duration-300"
            @click.prevent="startReading"
          >
            <div class="p-8">
              <div class="flex items-center gap-4 mb-4">
                <i class="ri-book-read-line text-3xl text-purple-400"></i>
                <h3 class="text-2xl font-bold">个人笔记</h3>
              </div>
              <p class="text-gray-300 flex items-center space-x-2">
                <i class="ri-bookmark-line text-blue-400"></i>
                <span>总结笔记，方便查阅</span>
              </p>
            </div>
            <i class="ri-arrow-right-line absolute bottom-6 right-6 text-xl opacity-0 group-hover:opacity-100 
                    transform translate-x-3 group-hover:translate-x-0 transition-all duration-300"></i>
          </a>
        </div>

        <!-- 开始阅读按钮 -->
        <div class="mt-16 animate-bounce">
          <button 
            @click="startReading"
            class="flex flex-col items-center text-gray-400 hover:text-white transition-colors group"
          >
            <span class="mb-2 flex items-center space-x-2">
              <i class="ri-mouse-line text-xl"></i>
              <span>开始阅读</span>
            </span>
            <i class="ri-arrow-down-line text-2xl group-hover:transform group-hover:translate-y-1 transition-transform"></i>
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
