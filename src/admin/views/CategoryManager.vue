<script setup lang="ts">
import { ref } from 'vue'

const categories = ref([
  {
    id: 1,
    name: '前端开发',
    articleCount: 12,
    createdAt: '2024-01-20'
  }
])
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        分类管理
      </h1>
      <button class="btn-primary">
        新建分类
      </button>
    </div>

    <!-- 分类列表 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th scope="col" class="table-th">分类名称</th>
              <th scope="col" class="table-th">文章数量</th>
              <th scope="col" class="table-th">创建时间</th>
              <th scope="col" class="table-th">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="category in categories" :key="category.id">
              <td class="table-td">{{ category.name }}</td>
              <td class="table-td">{{ category.articleCount }}</td>
              <td class="table-td">{{ category.createdAt }}</td>
              <td class="table-td">
                <div class="flex items-center space-x-2">
                  <button class="btn-icon">
                    <i class="i-carbon-edit" />
                  </button>
                  <button class="btn-icon text-red-500">
                    <i class="i-carbon-trash-can" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider;
}

.table-td {
  @apply px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300;
}

.btn-primary {
  @apply px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg 
         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
         focus:ring-blue-500 transition-colors;
}

.btn-icon {
  @apply p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors;
}
</style> 