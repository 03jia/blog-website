export interface Article {
  id: number
  title: string
  description: string
  content: string
  category: string
  tags: string[]
  createdAt: string
  updatedAt?: string
  views: number
  likes: number
  comments: number
  status: 'draft' | 'published'
  visible: boolean
  recommended?: boolean
  filename: string
  path: string
  sha?: string
}

export interface ArticleMeta {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  createdAt: string
}

export interface TocItem {
  id: string
  title: string
  level: number
} 

export interface ArticleContent {
  article: Article
  content: string
}
