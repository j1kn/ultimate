export interface CRMPayload {
  name: string
  email: string
  phone: string
  service: string
  contact_method: string
  message?: string
  source_page: string
  timestamp: string
  utm_source?: string
  utm_medium?: string
}

export async function sendToCRM(payload: CRMPayload): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL

  if (!webhookUrl) {
    console.warn('[CRM] No webhook URL configured — skipping CRM submission')
    return
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`CRM webhook failed: ${response.status} ${response.statusText}`)
  }
}
