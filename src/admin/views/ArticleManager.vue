<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useArticleStore } from '@/client/stores/article'
import Card from '../components/ui/Card.vue'
import Button from '../components/ui/Button.vue'
import Input from '../components/ui/Input.vue'
import type { Article } from '@/shared/types/article'
import TagInput from '../components/ui/TagInput.vue'

const router = useRouter()
const articleStore = useArticleStore()
const loading = ref(false)
const searchText = ref('')
const selectedCategory = ref('')
const selectedTags = ref('')
const selectedStatus = ref('')
const currentPage = ref(1)
const pageSize = ref(10)

// 状态选项
const statusOptions = [
  { label: '请选择状态', value: '' },
  { label: '已发布', value: 'published' },
  { label: '草稿', value: 'draft' }
]

// 获取所有分类
const categories = computed(() => {
  const categorySet = new Set(articleStore.articles.map(article => article.category))
  return Array.from(categorySet)
})

// 分类选项
const categoryOptions = computed(() => {
  return [
    { label: '请选择分类', value: '' },
    ...categories.value.map(category => ({
      label: category,
      value: category
    }))
  ]
})

// 过滤后的文章列表
const filteredArticles = computed(() => {
  return articleStore.articles.filter(article => {
    const matchText = !searchText.value || 
      article.title.toLowerCase().includes(searchText.value.toLowerCase())
    const matchStatus = !selectedStatus.value || 
      article.status === selectedStatus.value
    const matchCategory = !selectedCategory.value || 
      article.category === selectedCategory.value
    const matchTags = !selectedTags.value ||
      article.tags.some(tag => tag.includes(selectedTags.value))
    return matchText && matchStatus && matchCategory && matchTags
  })
})

// 分页后的文章列表
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredArticles.value.slice(start, end)
})

// 总页数
const totalPages = computed(() => 
  Math.ceil(filteredArticles.value.length / pageSize.value)
)

// 处理搜索
const handleSearch = () => {
  currentPage.value = 1
}

// 处理创建文章
const handleCreate = () => {
  router.push('/admin/articles/create')
}

// 处理编辑文章
const handleEdit = (id: number) => {
  router.push(`/admin/articles/edit/${id}`)
}

// 处理删除文章
const handleDelete = async (id: number) => {
  if (!confirm('确定要删除这篇文章吗？')) return
  
  try {
    loading.value = true
    articleStore.articles = articleStore.articles.filter(a => a.id !== id)
  } finally {
    loading.value = false
  }
}

// 切换文章可见性
const toggleVisibility = async (article: Article) => {
  try {
    loading.value = true
    await articleStore.toggleVisibility(article)
    const message = article.visible ? '文章已设为可见' : '文章已隐藏'
    alert(message)
  } catch (error) {
    alert('操作失败')
  } finally {
    loading.value = false
  }
}

// 切换文章推荐状态
const toggleRecommended = async (article: Article) => {
  try {
    loading.value = true
    await articleStore.toggleRecommended(article)
  } finally {
    loading.value = false
  }
}

// 在组件挂载时初始化文章列表
onMounted(async () => {
  if (articleStore.articles.length === 0) {
    await articleStore.fetchArticles()
  }
})

// 添加标签管理
const handleTagsChange = (article: Article, tags: string[]) => {
  article.tags = tags
  const index = articleStore.articles.findIndex(a => a.id === article.id)
  if (index !== -1) {
    articleStore.articles[index] = { ...article }
  }
}

// 添加标签相关状态
const showTagInput = ref(false)
const selectedArticle = ref<Article | null>(null)
const newTag = ref('')

// 处理添加标签
const handleAddTag = (article: Article) => {
  selectedArticle.value = article
  showTagInput.value = true
}

// 确认添加标签
const confirmAddTag = () => {
  if (selectedArticle.value && newTag.value.trim()) {
    const tags = [...(selectedArticle.value.tags || []), newTag.value.trim()]
    handleTagsChange(selectedArticle.value, tags)
    newTag.value = ''
  }
  showTagInput.value = false
}
</script>

<template>
  <div class="space-y-6">
    <!-- 页面标题 -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          文章管理
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          管理和编辑你的博客文章
        </p>
      </div>
    </div>

    <!-- 顶部操作栏 -->
    <div class="flex flex-wrap items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm
                border border-gray-100 dark:border-gray-700">
      <select
        v-model="selectedStatus"
        class="form-select min-w-[120px] rounded-lg border-gray-200 dark:border-gray-700 
               bg-gray-50 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">全部状态</option>
        <option value="published">已发布</option>
        <option value="draft">草稿</option>
      </select>

      <select
        v-model="selectedCategory"
        class="form-select min-w-[120px] rounded-lg border-gray-200 dark:border-gray-700 
               bg-gray-50 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">全部分类</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>

      <div class="flex-1 relative">
        <i class="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          v-model="searchText"
          type="text"
          placeholder="搜索文章标题..."
          class="form-input pl-10 w-full rounded-lg border-gray-200 dark:border-gray-700 
                 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
          @keyup.enter="handleSearch"
        >
      </div>

      <Button type="primary" @click="handleCreate" class="min-w-[120px]">
        <i class="ri-add-line mr-1" />
        新建文章
      </Button>
    </div>

    <!-- 文章列表 -->
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 
                       dark:from-blue-900/10 dark:to-purple-900/10">
              <th class="table-th text-center w-[80px]">
                <div class="flex items-center justify-center gap-1">
                  <i class="ri-hashtag text-gray-400" />
                  <span>ID</span>
                </div>
              </th>
              <th class="table-th">
                <div class="flex items-center gap-1">
                  <i class="ri-article-line text-blue-500" />
                  <span>标题</span>
                </div>
              </th>
              <th class="table-th">
                <div class="flex items-center gap-1 whitespace-nowrap">
                  <i class="ri-folder-line text-green-500" />
                  <span>分类</span>
                </div>
              </th>
              <th class="table-th min-w-[120px]">
                <div class="flex items-center gap-1">
                  <i class="ri-price-tag-3-line text-purple-500" />
                  <span>标签</span>
                </div>
              </th>
              <th class="table-th text-center w-[80px]">
                <div class="flex items-center justify-center gap-1">
                  <i class="ri-eye-line text-cyan-500" />
                  <span>浏览</span>
                </div>
              </th>
              <th class="table-th text-center w-[80px]">
                <div class="flex items-center justify-center gap-1">
                  <i class="ri-thumb-up-line text-pink-500" />
                  <span>点赞</span>
                </div>
              </th>
              <th class="table-th text-center w-[100px]">
                <div class="flex items-center justify-center gap-1">
                  <i class="ri-eye-off-line text-amber-500" />
                  <span>状态</span>
                </div>
              </th>
              <th class="table-th text-center w-[100px]">
                <div class="flex items-center justify-center gap-1">
                  <i class="ri-star-line text-yellow-500" />
                  <span>推荐</span>
                </div>
              </th>
              <th class="table-th w-[180px]">
                <div class="flex items-center gap-1">
                  <i class="ri-time-line text-indigo-500" />
                  <span>创建时间</span>
                </div>
              </th>
              <th class="table-th text-center w-[120px]">
                <div class="flex items-center justify-center gap-1">
                  <i class="ri-settings-line text-gray-400" />
                  <span>操作</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr 
              v-for="article in paginatedArticles" 
              :key="article.id || Date.now()"
              class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <td class="table-td text-center">{{ article.id }}</td>
              <td class="table-td">
                <div class="truncate" :title="article.title">{{ article.title }}</div>
              </td>
              <td class="table-td">
                <span class="inline-block px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-600 
                           dark:bg-blue-900/50 dark:text-blue-400 whitespace-nowrap">
                  {{ article.category }}
                </span>
              </td>
              <td class="table-td min-w-[200px]">
                <div class="flex flex-wrap gap-2 items-center">
                  <span 
                    v-for="tag in article.tags" 
                    :key="tag"
                    class="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500"
                  >
                    {{ tag }}
                  </span>
                  <button 
                    @click="handleAddTag(article)"
                    class="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <i class="ri-add-line text-gray-400 hover:text-purple-500" />
                  </button>
                </div>
              </td>
              <td class="table-td text-center">
                <div class="flex items-center justify-center gap-1 text-gray-500">
                  <i class="ri-eye-line" />
                  {{ article.views }}
                </div>
              </td>
              <td class="table-td text-center">
                <div class="flex items-center justify-center gap-1 text-gray-500">
                  <i class="ri-thumb-up-line" />
                  {{ article.likes }}
                </div>
              </td>
              <td class="table-td text-center">
                <button 
                  class="switch mx-auto"
                  :class="{ 'switch-active': article.visible }"
                  @click="toggleVisibility(article)"
                >
                  <span class="switch-slider" />
                </button>
              </td>
              <td class="table-td text-center">
                <button 
                  class="switch mx-auto"
                  :class="{ 'switch-active': article.recommended }"
                  @click="toggleRecommended(article)"
                >
                  <span class="switch-slider" />
                </button>
              </td>
              <td class="table-td text-gray-500">
                {{ new Date(article.createdAt).toLocaleString() }}
              </td>
              <td class="table-td">
                <div class="flex items-center justify-center space-x-2">
                  <button 
                    class="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-blue-600"
                    @click="handleEdit(article.id)"
                  >
                    <i class="ri-edit-line text-lg" />
                  </button>
                  <button 
                    class="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-red-600"
                    @click="handleDelete(article.id)"
                  >
                    <i class="ri-delete-bin-line text-lg" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 分页 -->
      <div class="p-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700
                  bg-gray-50 dark:bg-gray-800/50">
        <span class="text-sm text-gray-500 dark:text-gray-400">
          共 {{ filteredArticles.length }} 篇文章
        </span>
        <div class="flex items-center space-x-2">
          <Button 
            type="secondary" 
            size="sm"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            <i class="ri-arrow-left-s-line mr-1" />
            上一页
          </Button>
          <span class="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700">
            <span class="text-sm text-gray-700 dark:text-gray-300">
              {{ currentPage }} / {{ totalPages }}
            </span>
          </span>
          <Button 
            type="secondary" 
            size="sm"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            下一页
            <i class="ri-arrow-right-s-line ml-1" />
          </Button>
        </div>
      </div>
    </div>

    <!-- 添加标签弹出框 -->
    <div 
      v-if="showTagInput"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="showTagInput = false"
    >
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-96">
        <h3 class="text-lg font-medium mb-4">添加标签</h3>
        <input
          v-model="newTag"
          type="text"
          class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
          placeholder="输入标签名称"
          @keyup.enter="confirmAddTag"
        >
        <div class="flex justify-end gap-2 mt-4">
          <button 
            class="px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="showTagInput = false"
          >
            取消
          </button>
          <button 
            class="px-4 py-2 text-sm bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            @click="confirmAddTag"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-th {
  @apply px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400;
}

.table-td {
  @apply px-4 py-3 text-sm text-gray-900 dark:text-gray-300;
}

.switch {
  @apply relative inline-flex h-6 w-11 items-center rounded-full
         bg-gray-200 dark:bg-gray-700 transition-colors duration-200
         focus:outline-none cursor-pointer;
}

.switch-active {
  @apply bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg;
}

.switch-slider {
  @apply inline-block h-4 w-4 transform rounded-full bg-white 
         transition-transform duration-200 shadow-md;
}

.switch-active .switch-slider {
  @apply translate-x-6;
}

.switch:not(.switch-active) .switch-slider {
  @apply translate-x-1;
}

/* 添加表格行悬停效果 */
tbody tr:hover .table-td {
  @apply bg-gray-50/50 dark:bg-gray-800/50;
}

/* 添加操作按钮动画 */
.table-td button {
  @apply transition-all duration-200 hover:scale-110;
}
</style> 