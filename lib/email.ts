import { Resend } from 'resend'

let _resend: Resend | null = null

function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder')
  }
  return _resend
}

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'concierge@vertexconcierge.com'

export async function sendAutoReply(params: {
  to: string
  name: string
  service: string
}): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[Email] No Resend API key configured — skipping auto-reply')
    return
  }

  await getResend().emails.send({
    from: `Vertex Concierge <${FROM_EMAIL}>`,
    to: params.to,
    subject: 'We have received your enquiry — Vertex Concierge',
    html: `
      <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; color: #0A0A0A;">
        <div style="background: #0A0A0A; padding: 32px 40px;">
          <p style="color: #C9A96E; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0;">VERTEX CONCIERGE</p>
        </div>
        <div style="padding: 40px; border: 1px solid #E8E6E1; border-top: none;">
          <p style="font-size: 22px; font-weight: 300; margin-top: 0;">Dear ${params.name},</p>
          <p style="line-height: 1.7; color: #5C5C5C;">
            Thank you for your enquiry regarding our <strong>${params.service}</strong> services.
            A member of our concierge team will be in touch within 2 hours.
          </p>
          <p style="line-height: 1.7; color: #5C5C5C;">
            For urgent matters, please reach us directly via WhatsApp or telephone.
          </p>
          <div style="margin: 32px 0; padding: 24px; background: #F5F4F1; border-left: 2px solid #C9A96E;">
            <p style="margin: 0; font-size: 13px; color: #9A9A9A; text-transform: uppercase; letter-spacing: 0.1em;">Your Reference</p>
            <p style="margin: 4px 0 0; font-size: 18px; font-weight: 300;">#VC-${Date.now().toString().slice(-8)}</p>
          </div>
          <p style="line-height: 1.7; color: #5C5C5C; margin-bottom: 0;">
            Warm regards,<br/>
            <em>The Vertex Concierge Team</em>
          </p>
        </div>
        <div style="padding: 24px 40px; text-align: center; border: 1px solid #E8E6E1; border-top: none;">
          <p style="font-size: 11px; color: #9A9A9A; letter-spacing: 0.1em; text-transform: uppercase; margin: 0;">
            Vertex Concierge · Registered in England &amp; Wales
          </p>
        </div>
      </div>
    `,
  })
}
