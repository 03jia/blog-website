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
      <div class="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90"></div>
      <div class="relative p-6">
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-xl font-bold text-white flex items-center space-x-2">
            <span class="text-blue-400">📢</span>
            <span>{{ announcements.title }}</span>
          </h2>
        </div>
        <p class="text-gray-300">{{ announcements.subtitle }}</p>
      </div>
    </div>

    <!-- 欢迎语 -->
    <div class="p-6 border-t border-white/10 bg-black/30">
      <p class="text-lg text-white mb-4">{{ announcements.welcome }}</p>
      
      <!-- 功能列表 -->
      <div 
        v-for="section in announcements.features" 
        :key="section.title"
        class="mb-6"
      >
        <h3 class="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <span class="text-blue-400">✨</span>
          <span>{{ section.title }}</span>
        </h3>
        <ul class="space-y-4">
          <li 
            v-for="item in section.items"
            :key="item.label"
            class="flex items-start space-x-3"
          >
            <div class="flex-shrink-0 w-1 h-1 rounded-full bg-blue-400/60 mt-2"></div>
            <div>
              <h4 class="text-white font-medium hover:text-blue-400 transition-colors">{{ item.label }}</h4>
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
            v-for="item in [
              { icon: '✉️', href: `mailto:${announcements.contact.email}` },
              { icon: '🐱', href: announcements.contact.github }
            ]"
            :key="item.href"
            :href="item.href"
            target="_blank"
            class="group"
          >
            <div 
              class="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20
                     flex items-center justify-center hover:bg-blue-500/20
                     transform transition-all duration-300 
                     hover:scale-110 hover:rotate-12"
            >
              <span class="text-xl">{{ item.icon }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-border {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}
</style> 