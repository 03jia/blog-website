declare module '*.md' {
  // 当作为 Vue 组件导入时
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component

  // 当作为字符串导入时
  export const html: string
  export const frontmatter: any
} 