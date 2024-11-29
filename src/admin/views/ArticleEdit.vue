<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useArticleStore } from '@/client/stores/article'
import Button from '../components/ui/Button.vue'
import TagInput from '../components/ui/TagInput.vue'
import type { Article } from '@/shared/types/article'

const route = useRoute()
const router = useRouter()
const articleStore = useArticleStore()
const loading = ref(false)

const article = ref<Article>({
  id: Date.now(),
  title: '',
  description: '',
  content: '',
  category: '',
  tags: [],
  createdAt: new Date().toISOString(),
  views: 0,
  likes: 0,
  comments: 0,
  status: 'draft',
  visible: true
})

// 如果是编辑模式，加载文章数据
onMounted(async () => {
  const id = route.params.id
  if (id) {
    const existingArticle = articleStore.articles.find(a => a.id === Number(id))
    if (existingArticle) {
      article.value = { ...existingArticle }
    }
  }
})

const handleSubmit = async () => {
  try {
    loading.value = true
    await articleStore.saveArticle(article.value, article.value.content || '')
    router.push('/admin/articles')
  } catch (error) {
    console.error('Failed to save article:', error)
    alert('保存失败')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">
        {{ route.params.id ? '编辑文章' : '新建文章' }}
      </h1>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- 标题 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium">标题</label>
        <input
          v-model="article.title"
          type="text"
          required
          class="form-input w-full"
        >
      </div>

      <!-- 分类 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium">分类</label>
        <select
          v-model="article.category"
          required
          class="form-select w-full"
        >
          <option value="">请选择分类</option>
          <option v-for="category in articleStore.categories" :key="category">
            {{ category }}
          </option>
        </select>
      </div>

      <!-- 标签 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium">标签</label>
        <TagInput v-model="article.tags" />
      </div>

      <!-- 描述 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium">描述</label>
        <textarea
          v-model="article.description"
          rows="3"
          class="form-textarea w-full"
        />
      </div>

      <!-- 内容 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium">内容</label>
        <textarea
          v-model="article.content"
          rows="20"
          class="form-textarea w-full font-mono"
        />
      </div>

      <!-- 状态和可见性 -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <input
            v-model="article.status"
            type="radio"
            value="draft"
            name="status"
            class="form-radio"
          >
          <span>草稿</span>
        </div>
        <div class="flex items-center gap-2">
          <input
            v-model="article.status"
            type="radio"
            value="published"
            name="status"
            class="form-radio"
          >
          <span>发布</span>
        </div>
        <div class="flex items-center gap-2">
          <input
            v-model="article.visible"
            type="checkbox"
            class="form-checkbox"
          >
          <span>可见</span>
        </div>
      </div>

      <!-- 提交按钮 -->
      <div class="flex justify-end gap-4">
        <Button type="default" @click="router.back()">取消</Button>
        <Button type="primary" :loading="loading">保存</Button>
      </div>
    </form>
  </div>
</template> 