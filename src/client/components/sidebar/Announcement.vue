<script setup lang="ts">
const announcements = {
  title: 'Announcement',
  subtitle: '公告 📢',
  welcome: '欢迎来到我的个人博客 ✨',
  features: [
    {
      title: '网站功能改进 ✨',
      items: [
        {
          label: '搜索功能',
          description: '可以通过搜索栏快速找到你感兴趣的文章'
        },
        {
          label: '夜间模式',
          description: '切换按钮可以开启夜间模式，保护眼睛'
        },
        {
          label: '评论系统',
          description: '每篇文章下面都可以留言，欢迎分享你的想法'
        }
      ]
    }
  ],
  contact: {
    title: '感谢你的支持 🙌',
    email: 'your@email.com',
    github: 'https://github.com/yourusername'
  }
}
</script>

<template>
  <div class="card-border rounded-lg overflow-hidden">
    <!-- 标题区域 -->
    <div class="relative">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
      
      <div class="relative p-6">
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-2xl font-bold text-white">{{ announcements.title }}</h2>
          <span class="text-xl">📢</span>
        </div>
        <p class="text-gray-300">{{ announcements.subtitle }}</p>
      </div>
    </div>

    <!-- 欢迎语 -->
    <div class="p-6 border-t border-white/10">
      <p class="text-lg text-white mb-4">{{ announcements.welcome }}</p>
      
      <!-- 功能列表 -->
      <div 
        v-for="section in announcements.features" 
        :key="section.title"
        class="mb-6"
      >
        <h3 class="text-lg font-semibold text-white mb-4">{{ section.title }}</h3>
        <ul class="space-y-4">
          <li 
            v-for="item in section.items"
            :key="item.label"
            class="flex items-start space-x-3"
          >
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
            <div>
              <h4 class="text-white font-medium">{{ item.label }}</h4>
              <p class="text-sm text-gray-400">{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- 联系方式 -->
      <div class="mt-6 pt-6 border-t border-white/10">
        <h3 class="text-lg font-semibold text-white mb-4">{{ announcements.contact.title }}</h3>
        <div class="flex space-x-4">
          <a 
            :href="`mailto:${announcements.contact.email}`"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
              ✉️
            </div>
          </a>
          <a 
            :href="announcements.contact.github"
            target="_blank"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
              <span class="text-xl">🐱</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-border {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 