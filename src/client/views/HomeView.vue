<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '../components/layout/NavBar.vue'
import ArticleList from '../components/blog/ArticleList.vue'
import Sidebar from '../components/sidebar/Sidebar.vue'
import bgImage from '@/shared/assets/images/bg.jpg'

const showContent = ref(false)

const startReading = () => {
  const contentElement = document.querySelector('#content')
  if (contentElement) {
    // 使用更平滑的滚动效果
    contentElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
    
    // 添加滚动补间动画
    const scrollOptions = {
      top: contentElement.offsetTop,
      left: 0,
      behavior: 'smooth'
    }
    
    window.scrollTo(scrollOptions)
    
    // 添加内容淡入效果
    contentElement.style.opacity = '0'
    setTimeout(() => {
      contentElement.style.opacity = '1'
      contentElement.style.transition = 'opacity 0.3s ease-out'
    }, 300)
  }
}
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    
    <!-- 引导页面部分 -->
    <section class="hero-section min-h-screen relative">
      <!-- 引导页面专用遮罩层 -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <!-- 内容 -->
      <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 pt-24">
        <!-- 头像区域 -->
        <div class="relative mb-12">
          <div class="relative w-32 h-32">
            <!-- 发光边框 - 优化动画 -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-md"></div>
            <!-- 头像容器 - 优化动画 -->
            <div class="absolute inset-[3px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-[2px] hover:scale-105 transition-transform duration-200">
              <img 
                src="@/shared/assets/images/avatar.png" 
                alt="Avatar"
                class="w-full h-full rounded-full object-cover will-change-transform"
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

        <!-- 导航卡片 - 优化动画 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
          <a 
            href="#content" 
            class="card-border rounded-xl group relative overflow-hidden hover:bg-white/10 transition-all duration-200"
            @click.prevent="startReading"
          >
            <div class="p-8">
              <div class="flex items-center gap-4 mb-4">
                <i class="ri-lightbulb-flash-line text-3xl text-yellow-400 transition-transform duration-200 group-hover:scale-105"></i>
                <h3 class="text-2xl font-bold">经验分享</h3>
              </div>
              <p class="text-gray-300 flex items-center space-x-2">
                <i class="ri-shield-check-line text-green-400"></i>
                <span>站主帮你躲坑，少走弯路</span>
              </p>
            </div>
            <i class="ri-arrow-right-line absolute bottom-6 right-6 text-xl opacity-0 group-hover:opacity-100 
                    transform translate-x-2 group-hover:translate-x-0 transition-all duration-200"></i>
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

        <!-- 开始阅读按钮 - 优化动画 -->
        <div class="mt-16">
          <button 
            @click="startReading"
            class="flex flex-col items-center text-gray-400 hover:text-white group"
          >
            <span class="mb-2 flex items-center space-x-2">
              <i class="ri-mouse-line text-xl"></i>
              <span>开始阅读</span>
            </span>
            <i class="ri-arrow-down-line text-2xl animate-bounce"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- 博客内容部分 - 独立的section，没有遮罩 -->
    <section 
      id="content"
      class="relative z-10 bg-transparent"
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
  </div>
</template>

<style scoped>
/* 引导页面样式 */
.hero-section {
  position: relative;
  isolation: isolate;  /* 创建新的层叠上下文 */
}

/* 优化滚动动画 */
.scroll-smooth {
  scroll-behavior: smooth;
}

/* 优化卡片动画 */
.card-border {
  will-change: transform, background-color;
  transition: transform 0.2s ease-out, background-color 0.2s ease-out;
}

.card-border:hover {
  transform: translateY(-2px);
}

/* 移除 bounce 动画，改用更细腻的动画 */
@keyframes subtle-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.animate-subtle {
  animation: subtle-bounce 2s ease-in-out infinite;
}

/* 优化渐变动画 */
.bg-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 优化滚动效果 */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 2rem;
}

/* 内容区域的过渡效果 */
#content {
  transition: opacity 0.3s ease-out;
}

/* 优化卡片动画 */
.card-border {
  will-change: transform;
  transition: all 0.2s ease-out;
}

.card-border:hover {
  transform: translateY(-2px);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25%);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
