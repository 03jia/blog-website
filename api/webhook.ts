import type { VercelRequest, VercelResponse } from '@vercel/node'
import crypto from 'crypto'

const WEBHOOK_SECRET = process.env.GITEE_WEBHOOK_SECRET

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log('Received webhook request:', {
    method: req.method,
    headers: req.headers,
    body: req.body
  })

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // 验证签名
    const signature = req.headers['x-gitee-token']
    if (!signature || !WEBHOOK_SECRET) {
      return res.status(401).json({ error: 'Invalid signature' })
    }

    const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET)
    const digest = hmac.update(JSON.stringify(req.body)).digest('hex')
    
    if (signature !== digest) {
      return res.status(401).json({ error: 'Invalid signature' })
    }

    // 检查是否是 push 事件
    const event = req.headers['x-gitee-event']
    if (event !== 'Push Hook') {
      return res.status(200).json({ message: 'Ignored event' })
    }

    // 存储最后一次推送的时间戳
    const timestamp = Date.now()
    
    return res.status(200).json({ 
      success: true,
      timestamp 
    })
  } catch (error) {
    console.error('Webhook 处理错误:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
} 