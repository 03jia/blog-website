<script setup lang="ts">
import NavBar from '../components/layout/NavBar.vue'
import ArticleList from '../components/blog/ArticleList.vue'
import Sidebar from '../components/sidebar/Sidebar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <NavBar />
    
    <main class="max-w-7xl mx-auto px-4 py-8">
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
  </div>
</template> 