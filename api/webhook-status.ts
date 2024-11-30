import type { VercelRequest, VercelResponse } from '@vercel/node'

declare global {
  var lastPushTimestamp: number | null
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  return res.status(200).json({
    status: 'ok',
    lastPushTimestamp: global.lastPushTimestamp || null
  })
} 