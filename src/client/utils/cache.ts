/**
 * 本地缓存工具类
 */
export class LocalCache {
  /**
   * 获取缓存数据
   * @param key 缓存键
   * @returns 缓存的数据，如果不存在则返回 null
   */
  static get(key: string): any {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error('读取缓存失败:', error)
      return null
    }
  }

  /**
   * 设置缓存数据
   * @param key 缓存键
   * @param value 要缓存的数据
   */
  static set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('设置缓存失败:', error)
    }
  }

  /**
   * 删除缓存数据
   * @param key 缓存键
   */
  static remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('删除缓存失败:', error)
    }
  }

  /**
   * 清空所有缓存
   */
  static clear(): void {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('清空缓存失败:', error)
    }
  }
} 