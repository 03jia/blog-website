import type { Article } from '@/shared/types/article'

export function extractIdFromFilename(filename: string): number {
  const match = filename.match(/^(\d+)-/)
  return match ? parseInt(match[1]) : Date.now()
}

export function decodeContent(base64Content: string): string {
  try {
    const decoded = atob(base64Content)
    const bytes = new Uint8Array(decoded.length)
    for (let i = 0; i < decoded.length; i++) {
      bytes[i] = decoded.charCodeAt(i)
    }
    return new TextDecoder('utf-8').decode(bytes)
  } catch (e) {
    console.error('解码失败:', e)
    return base64Content
  }
}

export function parseArticleContent(content: string, category: string, filename: string, path: string, sha: string): Article {
  try {
    // 尝试分割 frontmatter 和内容
    let frontMatter = ''
    let articleContent = content

    // 检查是否有 frontmatter
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
    if (fmMatch) {
      frontMatter = fmMatch[1]
      articleContent = content.slice(fmMatch[0].length).trim()
    }

    // 解析 frontmatter
    const meta = frontMatter.split('\n').reduce((acc, line) => {
      const [key, ...values] = line.split(':')
      if (key && values.length) {
        acc[key.trim()] = values.join(':').trim()
      }
      return acc
    }, {} as Record<string, string>)

    // 如果没有 frontmatter，使用文件名作为标题
    const title = meta.title || filename.replace(/\.md$/, '').replace(/^\d+-/, '')

    return {
      id: extractIdFromFilename(filename),
      title,
      description: meta.description || '',
      content: articleContent,
      category,
      tags: (meta.tags || '').split(',').map(tag => tag.trim()).filter(Boolean),
      createdAt: meta.date || new Date().toISOString(),
      updatedAt: meta.updated || new Date().toISOString(),
      views: parseInt(meta.views || '0'),
      likes: parseInt(meta.likes || '0'),
      comments: parseInt(meta.comments || '0'),
      status: (meta.status as 'draft' | 'published') || 'published',
      visible: meta.visible !== 'false',
      filename,
      path,
      sha
    }
  } catch (error) {
    console.error('解析文章内容失败:', error, {
      filename,
      contentLength: content.length
    })
    
    // 如果解析失败，返回一个基本的文章对象
    return {
      id: extractIdFromFilename(filename),
      title: filename.replace(/\.md$/, '').replace(/^\d+-/, ''),
      description: '',
      content: content,
      category,
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0,
      likes: 0,
      comments: 0,
      status: 'published',
      visible: true,
      filename,
      path,
      sha
    }
  }
} 