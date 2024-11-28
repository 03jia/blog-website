<script setup lang="ts">
import type { Article } from '@/types/article'
import { RouterLink } from 'vue-router'

defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <div class="space-y-4">
    <RouterLink
      v-for="article in articles"
      :key="article.id"
      :to="`/article/${article.id}`"
      class="block group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 
             hover:bg-white/10 transition-all duration-300 hover:border-blue-500/30 p-4"
    >
      <div class="flex items-center justify-between">
        <h3 class="text-lg text-gray-300 group-hover:text-blue-400 transition-colors">
          {{ article.title }}
        </h3>
        <span class="text-sm text-gray-400">{{ article.date }}</span>
      </div>
    </RouterLink>
  </div>
</template> 