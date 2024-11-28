# Modern Vue Blog

一个使用 Vue 3 + TypeScript + Vite + Tailwind CSS 构建的现代化个人博客网站。

## 功能特性

### 1. 博客文章
- 文章列表展示(支持分页)
- 文章详情页
- 文章分类/标签系统
- 文章搜索功能
- 文章目录导航
- Markdown 渲染支持
- 代码高亮
- 文章阅读量统计
- 相关文章推荐

### 2. 用户交互
- 文章评论系统
- 点赞功能
- 文章分享功能
- 订阅博客更新
- 黑暗模式切换

### 3. 个人展示
- 个人简介页面
- 项目展示
- 技能树展示
- 时间线展示
- 社交媒体链接

## 页面结构

### 1. 首页 (Home.vue)
- 顶部导航栏组件 (NavBar.vue)
  - Logo
  - 导航菜单
  - 搜索框
  - 主题切换按钮
- 文章列表组件 (ArticleList.vue)
  - 文章卡片组件 (ArticleCard.vue)
  - 分页组件 (Pagination.vue)
- 侧边栏组件 (Sidebar.vue)
  - 个人简介卡片
  - 分类/标签云
  - 热门文章

### 2. 文章详情页 (ArticleDetail.vue)
- 文章内容组件 (ArticleContent.vue)
  - 标题
  - 元信息(作者、日期、阅读量等)
  - Markdown 内容
  - 代码块
- 文章目录组件 (TableOfContents.vue)
- 评论区组件 (Comments.vue)
- 相关文章推荐组件 (RelatedArticles.vue)

### 3. 归档页 (Archive.vue)
- 时间线组件 (Timeline.vue)
- 文章归档列表

### 4. 关于页面 (About.vue)
- 个人介绍
- 技能树组件 (SkillTree.vue)
- 项目展示组件 (ProjectShowcase.vue)
- 联系方式

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- TypeScript - 类型安全
- Vite - 下一代前端构建工具
- Tailwind CSS - 原子化 CSS 框架
- Vue Router - 路由管理
- Pinia - 状态管理
- Markdown-it - Markdown 渲染
- Prism.js - 代码高亮
- Vercel - 部署平台

## 设计风格

- 极简主义设计
- 大量留白
- 卡片式布局
- 柔和的颜色过渡
- 响应式设计
- 平滑的动画过渡
- 清晰的层级结构
- 优雅的排版

## 组件化原则

- 单一职责原则
- 可复用性优先
- Props 和 Events 通信
- 组合式 API 
- TypeScript 类型支持
- 统一的命名规范
- 完善的注释文档

## 性能优化

- 路由懒加载
- 图片懒加载
- 无限滚动
- 静态资源优化
- SEO 友好
- 缓存策略
- 预渲染支持
