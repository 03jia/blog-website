<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/client/stores/article'
import NavBar from '../components/layout/NavBar.vue'
import ArticleContent from '../components/article/ArticleContent.vue'
import TableOfContents from '../components/article/TableOfContents.vue'
import bgImage from '@/shared/assets/images/bg.jpg'
import { GiteeService } from '@/shared/services/gitee'
import { decodeContent } from '@/shared/utils/article-parser'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
})

const route = useRoute()
const articleStore = useArticleStore()
const content = ref('')
const article = ref(articleStore.articles.find(a => a.id === Number(route.params.id)))

onMounted(async () => {
  try {
    if (article.value) {
      if (article.value.content) {
        content.value = md.render(article.value.content)
      } else {
        const rawContent = await GiteeService.getFileContent(article.value.path)
        if (rawContent) {
          const decodedContent = decodeContent(rawContent)
          const parts = decodedContent.split('---').filter(Boolean)
          const articleContent = parts.slice(1).join('---').trim()
          content.value = md.render(articleContent)
        }
      }
    }
  } catch (error) {
    console.error('Error loading article content:', error)
    content.value = '文章加载失败'
  }
})
</script>

<template>
  <div 
    class="min-h-screen bg-fixed bg-cover bg-center relative flex flex-col"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <!-- 背景遮罩 -->
    <div class="fixed inset-0 bg-gradient-overlay"></div>
    
    <NavBar />
    
    <!-- 内容区域 -->
    <main class="flex-1 relative z-10 overflow-y-auto pt-20">
      <div class="container max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-[minmax(0,1fr)_280px] gap-6">
          <!-- 左侧文章内容 -->
          <div class="min-w-0">
            <ArticleContent
              v-if="article"
              :article="article"
              :content="content"
            />
            <div v-else class="text-center text-gray-400">
              文章不存在
            </div>
          </div>

          <!-- 右侧目录 -->
          <div class="relative">
            <div class="fixed w-[280px]">
              <TableOfContents
                v-if="article && content"
                :content="content"
              />
            </div>
          </div>
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