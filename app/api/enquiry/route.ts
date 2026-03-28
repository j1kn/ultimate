import { NextResponse } from 'next/server'
import { sendAutoReply } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json() as { name: string; email: string; service: string }

    if (!body.email || !body.name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await sendAutoReply({
      to: body.email,
      name: body.name,
      service: body.service ?? 'General Enquiry',
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API /enquiry] Error:', err)
    return NextResponse.json({ error: 'Failed to send auto-reply' }, { status: 500 })
  }
}
