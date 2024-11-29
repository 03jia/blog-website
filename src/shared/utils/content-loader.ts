import { useArticleStore } from '@/client/stores/article'
import MarkdownIt from 'markdown-it'

const GITEE_API_BASE = 'https://gitee.com/api/v5'
const REPO_OWNER = 'JIA_03'
const REPO_NAME = 'blog-content'
const ACCESS_TOKEN = import.meta.env.VITE_GITEE_TOKEN

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
})

export const loadArticleContent = async (id: number): Promise<string> => {
  try {
    const store = useArticleStore()
    const article = store.articles.find(a => a.id === id)
    
    if (!article || !article.path) {
      throw new Error(`文章不存在或路径无效: ${id}`)
    }

    if (article.content) {
      return md.render(article.content)
    }

    const response = await fetch(
      `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${article.path}?access_token=${ACCESS_TOKEN}`
    )

    if (!response.ok) {
      throw new Error(`获取文章内容失败: ${response.statusText}`)
    }

    const data = await response.json()
    const decodedContent = decodeURIComponent(escape(atob(data.content.replace(/\n/g, ''))))
    const parts = decodedContent.split('---').filter(Boolean)
    const articleContent = parts.slice(1).join('---').trim()

    if (!articleContent) {
      throw new Error('文章内容为空')
    }

    return md.render(articleContent)
  } catch (error) {
    console.error('Error loading article content:', error)
    return '文章加载失败'
  }
} 