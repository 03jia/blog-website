<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  article: {
    id: number
    title: string
    description: string
    date: string
    tags: string[]
    readTime: string
  }
}

const props = defineProps<Props>()
const router = useRouter()

const goToArticle = (e: Event) => {
  e.preventDefault()
  router.push({
    name: 'article',
    params: { id: props.article.id }
  })
}
</script>

<template>
  <article class="card-border rounded-lg hover:shadow-lg transition-all duration-300">
    <div 
      class="block p-6 cursor-pointer"
      @click="goToArticle"
    >
      <h2 class="text-xl font-bold text-white hover:text-blue-400 transition-colors">
        {{ article.title }}
      </h2>

      <p class="mt-2 text-gray-300 line-clamp-2">
        {{ article.description }}
      </p>

      <div class="mt-4 flex items-center justify-between">
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in article.tags" 
            :key="tag"
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-200"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex items-center text-sm text-gray-400 space-x-4">
          <time :datetime="article.date">{{ article.date }}</time>
          <span class="text-gray-500">·</span>
          <span>{{ article.readTime }}</span>
        </div>
      </div>
    </div>
  </article>
</template> 