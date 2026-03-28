import { z } from 'zod'

export const enquirySchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Phone or WhatsApp number is required'),
  service: z.string().min(1, 'Please select a service'),
  contact_method: z.enum(['Phone', 'WhatsApp', 'Email']),
  message: z.string().optional(),
  gdpr: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
})

export type EnquiryFormData = z.infer<typeof enquirySchema>

export const membershipSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Phone number is required'),
  tier: z.enum(['Obsidian', 'Platinum', 'Black']),
  message: z.string().optional(),
  gdpr: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
})

export type MembershipFormData = z.infer<typeof membershipSchema>

export const quoteSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Phone number is required'),
  from_currency: z.string().min(1, 'Please select a currency'),
  to_currency: z.string().min(1, 'Please select a currency'),
  amount: z.string().min(1, 'Amount is required'),
  gdpr: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
})

export type QuoteFormData = z.infer<typeof quoteSchema>

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>
