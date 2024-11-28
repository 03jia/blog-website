<script setup lang="ts">
import { ref } from 'vue'
import { useArticleStore } from '@/stores/article'
import NavBar from '../components/layout/NavBar.vue'
import TimelineView from '../components/archive/TimelineView.vue'
import CategoryView from '../components/archive/CategoryView.vue'
import TagView from '../components/archive/TagView.vue'
import bgImage from '../assets/images/bg.jpg'

const articleStore = useArticleStore()
const activeTab = ref<'time' | 'category' | 'tag'>('time')
</script>

<template>
  <div 
    class="min-h-screen bg-fixed bg-cover bg-center relative flex flex-col"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <!-- 背景遮罩 -->
    <div class="fixed inset-0 bg-gradient-overlay"></div>
    
    <NavBar />
    
    <!-- 调整内容区域的布局 -->
    <main class="flex-1 relative z-10">
      <div class="max-w-4xl mx-auto px-4 py-8 pt-20">
        <!-- 标题 -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-white mb-4">文章归档</h1>
          <p class="text-gray-300">按标签浏览全部文章</p>
        </div>

        <!-- 切换按钮 -->
        <div class="flex justify-center mb-12 space-x-4">
          <button
            v-for="tab in ['time', 'category', 'tag']"
            :key="tab"
            @click="activeTab = tab"
            class="px-6 py-2 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
            :class="[
              activeTab === tab
                ? 'bg-blue-500/80 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            ]"
          >
            {{ tab === 'time' ? '时间线' : tab === 'category' ? '分类' : '标签' }}
          </button>
        </div>

        <!-- 内容视图 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <TimelineView 
            v-if="activeTab === 'time'" 
            :articles="articleStore.articles" 
          />
          <CategoryView 
            v-else-if="activeTab === 'category'" 
            :articles="articleStore.articles" 
          />
          <TagView 
            v-else 
            :articles="articleStore.articles" 
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.bg-gradient-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(8px);
}
</style> 