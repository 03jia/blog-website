import { articlesMeta } from '@/shared/config/articles-meta'
import type { Article } from '@/shared/types/article'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

const ARTICLE_MAP = {
  1: 'frontend/vue3-composition',
  2: 'frontend/vue-typescript'
} as const

export const loadArticleContent = async (id: number): Promise<string> => {
  try {
    console.log('Attempting to load content for article:', id)
    const filePath = ARTICLE_MAP[id as keyof typeof ARTICLE_MAP]
    
    if (!filePath) {
      throw new Error(`No file mapping for article ${id}`)
    }
    
    // 使用 raw-loader 加载 Markdown 文件
    const content = await fetch(`/src/shared/content/${filePath}.md`)
      .then(res => res.text())
    
    // 使用 markdown-it 渲染内容
    return md.render(content)
  } catch (error) {
    console.error('Error loading article content:', error)
    return '文章加载失败'
  }
} 