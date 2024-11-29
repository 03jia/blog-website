export interface ArticleState {
  visible: boolean
  recommended: boolean
  views: number
  likes: number
}

// 使用 localStorage 在开发环境中模拟 KV 存储
class LocalKVStore {
  private getKey(id: number): string {
    return `article:${id}`
  }

  async hgetall(key: string): Promise<ArticleState | null> {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }

  async hset(key: string, field: Partial<ArticleState>): Promise<void> {
    const existing = await this.hgetall(key) || {}
    const newData = { ...existing, ...field }
    localStorage.setItem(key, JSON.stringify(newData))
  }

  async hincrby(key: string, field: keyof ArticleState, increment: number): Promise<void> {
    const data = await this.hgetall(key) || { views: 0, likes: 0 }
    data[field] = (data[field] || 0) + increment
    localStorage.setItem(key, JSON.stringify(data))
  }
}

const kvStore = import.meta.env.PROD ? null : new LocalKVStore()

export async function getArticleState(id: number): Promise<ArticleState | null> {
  if (!kvStore) return null
  return await kvStore.hgetall(`article:${id}`)
}

export async function setArticleState(id: number, state: Partial<ArticleState>) {
  if (!kvStore) return
  await kvStore.hset(`article:${id}`, state)
}

export async function incrementArticleViews(id: number) {
  if (!kvStore) return
  await kvStore.hincrby(`article:${id}`, 'views', 1)
}

export async function toggleArticleLike(id: number, liked: boolean) {
  if (!kvStore) return
  await kvStore.hincrby(`article:${id}`, 'likes', liked ? 1 : -1)
}

export async function toggleArticleVisibility(id: number, visible: boolean) {
  if (!kvStore) return
  await kvStore.hset(`article:${id}`, { visible })
}

export async function toggleArticleRecommended(id: number, recommended: boolean) {
  if (!kvStore) return
  await kvStore.hset(`article:${id}`, { recommended })
} 