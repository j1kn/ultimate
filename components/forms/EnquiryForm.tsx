'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { enquirySchema, type EnquiryFormData } from '@/lib/validations'
import { sendToCRM } from '@/lib/crm'
import { trackFormSubmit } from '@/lib/analytics'
import { getUTMParams } from '@/lib/utils'
import { cn } from '@/lib/utils'

const SERVICE_OPTIONS = [
  'Aviation',
  'Yachts',
  'Automotive',
  'Financial Services',
  'Currency Exchange',
  'Jewellery',
  'General Enquiry',
]

interface EnquiryFormProps {
  defaultService?: string
  sourcePage?: string
  onSuccess?: () => void
}

export default function EnquiryForm({
  defaultService = '',
  sourcePage = '',
  onSuccess,
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      service: defaultService,
      contact_method: 'WhatsApp',
    },
  })

  const onSubmit = async (data: EnquiryFormData) => {
    setServerError('')
    try {
      const utmParams = getUTMParams()
      await sendToCRM({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        contact_method: data.contact_method,
        message: data.message,
        source_page: sourcePage || window.location.pathname,
        timestamp: new Date().toISOString(),
        ...utmParams,
      })

      // Auto-reply via API route
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, service: data.service }),
      })

      trackFormSubmit(data.service, sourcePage || window.location.pathname)
      setSubmitted(true)
      onSuccess?.()
    } catch {
      setServerError('Something went wrong. Please try again or contact us via WhatsApp.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
            <path d="M1 9l7 7L23 1" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-display text-2xl font-light text-obsidian mb-3">Enquiry Received</h3>
        <p className="text-text-secondary">We will be in touch within 2 hours.</p>
      </div>
    )
  }

  const inputClass = cn(
    'w-full px-4 py-3.5 text-[14px] border bg-white text-obsidian placeholder:text-text-muted',
    'transition-colors duration-200 outline-none',
    'focus:border-champagne',
    'border-border-subtle'
  )

  const errorClass = 'text-red-500 text-[12px] mt-1.5'
  const labelClass = 'block text-label text-text-secondary mb-2 tracking-wider'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>FULL NAME *</label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={cn(inputClass, errors.name && 'border-red-400')}
            style={{ borderRadius: '2px' }}
            {...register('name')}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>EMAIL ADDRESS *</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            className={cn(inputClass, errors.email && 'border-red-400')}
            style={{ borderRadius: '2px' }}
            {...register('email')}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>PHONE / WHATSAPP *</label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+44 7000 000000"
            className={cn(inputClass, errors.phone && 'border-red-400')}
            style={{ borderRadius: '2px' }}
            {...register('phone')}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>SERVICE INTEREST *</label>
          <select
            id="service"
            className={cn(inputClass, errors.service && 'border-red-400')}
            style={{ borderRadius: '2px' }}
            {...register('service')}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className={errorClass}>{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <span className={labelClass}>PREFERRED CONTACT *</span>
        <div className="flex gap-6 mt-2">
          {(['Phone', 'WhatsApp', 'Email'] as const).map((method) => (
            <label key={method} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="radio"
                value={method}
                className="w-4 h-4 accent-champagne"
                {...register('contact_method')}
              />
              <span className="text-[14px] text-text-secondary">{method}</span>
            </label>
          ))}
        </div>
        {errors.contact_method && <p className={errorClass}>{errors.contact_method.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>MESSAGE</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us what you need arranged..."
          className={cn(inputClass, 'resize-none')}
          style={{ borderRadius: '2px' }}
          {...register('message')}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 w-4 h-4 accent-champagne shrink-0"
            {...register('gdpr')}
          />
          <span className="text-[13px] text-text-secondary leading-relaxed">
            I agree to Vertex Concierge processing my personal data in accordance with the{' '}
            <a href="/privacy" className="text-champagne hover:underline">Privacy Policy</a>. *
          </span>
        </label>
        {errors.gdpr && <p className={errorClass}>{errors.gdpr.message}</p>}
      </div>

      {serverError && (
        <p className="text-red-500 text-[13px] bg-red-50 px-4 py-3" style={{ borderRadius: '2px' }}>
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-obsidian text-white text-label tracking-wider py-4 hover:bg-surface-dark transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed font-display"
        style={{ borderRadius: '2px', height: '48px' }}
      >
        {isSubmitting ? 'SENDING...' : 'SUBMIT ENQUIRY'}
      </button>
    </form>
  )
}
