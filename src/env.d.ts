/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITEE_TOKEN: string
  readonly VITE_GITEE_WEBHOOK_SECRET: string
  readonly VITE_DEV_SERVER_PORT: string
  readonly VITE_DEV_SERVER_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 