const GITEE_API_BASE = 'https://gitee.com/api/v5'
const REPO_OWNER = 'JIA_03'
const REPO_NAME = 'blog-content'
const ACCESS_TOKEN = import.meta.env.VITE_GITEE_TOKEN

export interface GiteeFile {
  name: string
  path: string
  sha: string
  type: 'file' | 'dir'
  content?: string
}

export class GiteeService {
  private static getToken(): string {
    if (!ACCESS_TOKEN) {
      throw new Error('Gitee access token not found in environment variables')
    }
    return ACCESS_TOKEN
  }

  static async getDirectories(): Promise<string[]> {
    const token = this.getToken()
    const response = await fetch(
      `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/?access_token=${token}`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data
      .filter((item: GiteeFile) => item.type === 'dir')
      .map((dir: GiteeFile) => dir.name)
  }

  static async getFiles(path: string): Promise<GiteeFile[]> {
    const token = this.getToken()
    const response = await fetch(
      `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?access_token=${token}`
    )

    if (!response.ok) return []

    const files = await response.json()
    return files.filter((file: GiteeFile) => file.name.endsWith('.md'))
  }

  static async getFileContent(path: string): Promise<string | null> {
    const token = this.getToken()
    const response = await fetch(
      `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?access_token=${token}`
    )

    if (!response.ok) return null

    const data = await response.json()
    return data.content
  }
} 