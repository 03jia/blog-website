declare global {
  var lastPushTimestamp: number
}

// 初始化全局变量
global.lastPushTimestamp = global.lastPushTimestamp || 0

export function setLastPushTimestamp(timestamp: number) {
  global.lastPushTimestamp = timestamp
}

export function getLastPushTimestamp(): number {
  return global.lastPushTimestamp
} 