import { articlesMeta } from '@/config/articles-meta'
import type { Article } from '@/types/article'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

export async function loadArticleContent(id: number): Promise<string> {
  try {
    console.log('Loading article with id:', id)
    
    // 根据ID找到对应的文章路径
    const article = Object.entries(articlesMeta).find(([_, meta]) => meta.id === id)
    if (!article) {
      throw new Error(`Article with id ${id} not found`)
    }

    // 获取文章路径
    const [path] = article
    console.log('Article path:', path)
    
    // 使用 fetch 加载 Markdown 文件
    const response = await fetch(`/src/content/${path}.md`)
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${response.statusText}`)
    }
    
    const content = await response.text()
    console.log('Loaded content:', content)
    
    // 将 Markdown 转换为 HTML
    const html = md.render(content)
    console.log('Rendered HTML:', html)
    
    return html
  } catch (error) {
    console.error('Failed to load article content:', error)
    return '文章内容加载失败'
  }
} 