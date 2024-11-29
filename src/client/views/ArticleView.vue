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
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItHighlightjs from 'markdown-it-highlightjs'

const md: MarkdownIt = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const highlighted = hljs.highlight(str, { language: lang }).value
        return `<pre class="language-${lang}"><code>${highlighted}</code></pre>`
      } catch (__) {}
    }
    return `<pre><code>${md.utils.escapeHtml(str)}</code></pre>`
  }
})

md.use(markdownItAttrs)
md.use(markdownItHighlightjs)

const route = useRoute()
const articleStore = useArticleStore()
const content = ref('')
const article = ref<Article | null>(null)

onMounted(async () => {
  try {
    if (articleStore.articles.length === 0) {
      await articleStore.fetchArticles()
    }
    
    article.value = articleStore.articles.find(a => a.id === Number(route.params.id))
    
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
          articleStore.updateArticleContent(article.value.id, articleContent)
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