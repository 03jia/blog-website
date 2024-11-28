import type { Article } from '@/types/article'

// 文章元数据配置
export const articlesMeta: Record<string, Omit<Article, 'path'>> = {
  'frontend/vue3-composition': {
    id: 1,
    title: 'Vue 3 组合式 API 最佳实践',
    description: '深入探讨 Vue 3 组合式 API 的使用技巧和最佳实践...',
    date: '2024-01-25',
    category: '前端开发',
    tags: ['Vue', '前端', '最佳实践'],
    readTime: '12 min'
  },
  'frontend/vue-typescript': {
    id: 2,
    title: '使用 Vue 3 和 TypeScript 构建现代化应用',
    description: '探索 Vue 3 和 TypeScript 的结合使用，包括最佳实践和常见陷阱...',
    date: '2024-01-20',
    category: '前端开发',
    tags: ['Vue', 'TypeScript', '前端'],
    readTime: '10 min'
  },
  
  // 后端开发分类
  'backend/nodejs-basics': {
    id: 3,
    title: 'Node.js 基础入门指南',
    description: '从零开始学习 Node.js 开发，包含基础概念和实战案例...',
    date: '2024-01-22',
    category: '后端开发',
    tags: ['Node.js', '后端', '教程'],
    readTime: '15 min'
  },
  
  // DevOps分类
  'devops/docker-guide': {
    id: 4,
    title: 'Docker 容器化实战指南',
    description: '学习如何使用 Docker 进行应用容器化部署...',
    date: '2024-01-20',
    category: 'DevOps',
    tags: ['Docker', '容器化', 'DevOps'],
    readTime: '20 min'
  }
}

// 获取所有文章元数据列表
export function getAllArticles(): Article[] {
  return Object.entries(articlesMeta).map(([path, meta]) => ({
    ...meta,
    path // 文件路径，用于加载内容
  }))
}

// 按分类获取文章
export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(article => article.category === category)
}

// 按标签获取文章
export function getArticlesByTag(tag: string): Article[] {
  return getAllArticles().filter(article => article.tags.includes(tag))
}

// 获取所有分类
export function getAllCategories(): string[] {
  return [...new Set(getAllArticles().map(article => article.category))]
}

// 获取所有标签
export function getAllTags(): string[] {
  const tags = new Set<string>()
  getAllArticles().forEach(article => {
    article.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
} 