<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useArticleStore } from '@/client/stores/article'
import NavBar from '../components/layout/ClientNavBar.vue'
import ArticleContent from '@/client/components/article/ArticleContent.vue'
import TableOfContents from '@/client/components/article/TableOfContents.vue'
import type { Article } from '@/shared/types/article'

const route = useRoute()
const router = useRouter()
const articleStore = useArticleStore()
const article = ref<Article | null>(null)

onMounted(async () => {
  try {
    const title = decodeURIComponent(route.params.title as string)
    article.value = articleStore.articles.find(a => a.title === title)
    if (!article.value) {
      throw new Error('Article not found')
    }
    
    // 等待 DOM 更新后再滚动到顶部
    await nextTick()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  } catch (error) {
    console.error('Error loading article:', error)
    router.push('/404')
  }
})
</script>

<template>
  <div 
    class="min-h-screen bg-fixed bg-cover bg-center relative flex flex-col"
  >
    <NavBar />
    
    <!-- 内容区域 -->
    <main class="flex-1 relative z-10 pt-20">
      <div class="container max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-[minmax(0,1fr)_280px] gap-6">
          <!-- 左侧文章内容 -->
          <div class="min-w-0">
            <ArticleContent
              v-if="article"
              :article="article"
              :content="article.content"
            />
            <div v-else class="text-center text-gray-400">
              文章不存在
            </div>
          </div>

          <!-- 右侧目录 -->
          <div class="relative">
            <div class="fixed w-[280px]">
              <TableOfContents
                v-if="article"
                :content="article.content"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 调整滚动条样式 */
main::-webkit-scrollbar {
  @apply w-2;
}

main::-webkit-scrollbar-track {
  @apply bg-transparent;
}

main::-webkit-scrollbar-thumb {
  @apply bg-white/10 rounded-full hover:bg-white/20;
}
</style>

<script lang="ts">
export default {
  name: 'ArticleView'
}
</script> 