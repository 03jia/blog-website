import * as crypto from 'crypto'
import { Request, Response } from 'express'

const WEBHOOK_SECRET = process.env.GITEE_WEBHOOK_SECRET

export function verifyGiteeSignature(req: Request): boolean {
  const signature = req.headers['x-gitee-token']
  if (!signature || !WEBHOOK_SECRET) return false

  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET)
  const digest = hmac.update(JSON.stringify(req.body)).digest('hex')
  
  return signature === digest
}

export async function handleWebhook(req: Request, res: Response) {
  try {
    // 验证签名
    if (!verifyGiteeSignature(req)) {
      return res.status(401).json({ error: 'Invalid signature' })
    }

    // 检查是否是 push 事件
    const event = req.headers['x-gitee-event']
    if (event !== 'Push Hook') {
      return res.status(200).json({ message: 'Ignored event' })
    }

    // 发送广播消息通知客户端刷新
    // 这里可以使用 WebSocket 或者 Server-Sent Events
    // 为了简单起见，我们先返回一个标记，让客户端轮询

    res.status(200).json({ 
      success: true,
      timestamp: Date.now()
    })
  } catch (error) {
    console.error('Webhook 处理错误:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
} 