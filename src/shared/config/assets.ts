export const ASSETS_BASE_URL = '/assets'

export const getAssetPath = (path: string) => {
  return `${ASSETS_BASE_URL}/${path.replace(/^\//, '')}`
}

// 图片路径
export const IMAGE_PATHS = {
  bg: getAssetPath('images/bg.jpg'),
  avatar: getAssetPath('images/avatar.png'),
  defaultCover: getAssetPath('images/default-cover.jpg'),
  testImages: (index: number) => getAssetPath(`images/test/test${index}.jpg`)
} 