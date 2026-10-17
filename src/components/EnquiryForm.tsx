import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle, Send } from 'lucide-react'
import { COURSES, SITE_CONFIG } from '../data/config'

interface EnquiryFormProps {
  preselectedCourse?: string
  compact?: boolean
}

interface FormState {
  name: string
  phone: string
  course: string
  batch: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  course?: string
  consent?: string
}

export default function EnquiryForm({ preselectedCourse = '', compact = false }: EnquiryFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    course: preselectedCourse,
    batch: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = 'Please enter your full name.'
    const phoneClean = form.phone.replace(/\s/g, '')
    if (!phoneClean || !/^[6-9]\d{9}$/.test(phoneClean))
      e.phone = 'Please enter a valid 10-digit Indian mobile number.'
    if (!form.course) e.course = 'Please select a course you are interested in.'
    if (!form.consent) e.consent = 'Please confirm your consent to be contacted.'
    return e
  }

  const buildWhatsAppMessage = () => {
    const courseName = COURSES.find((c) => c.id === form.course)?.name || form.course
    const parts = [
      `Hi! I'd like to enquire about admissions at Race Reddys.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.course ? `Course of Interest: ${courseName}` : '',
      form.batch ? `Preferred Batch: ${form.batch}` : '',
      form.message ? `Message: ${form.message}` : '',
    ].filter(Boolean)
    return encodeURIComponent(parts.join('\n'))
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setStatus('submitting')
    // No backend configured — open WhatsApp with pre-filled message
    const waUrl = `${SITE_CONFIG.contact.whatsapp}?text=${buildWhatsAppMessage()}`
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer')
      setStatus('success')
    }, 600)
  }

  if (status === 'success') {
    return (
      <div
        style={{
          background: '#f0fdf4',
          border: '1.5px solid #86efac',
          borderRadius: 10,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          textAlign: 'center',
        }}
        role="alert"
        aria-live="polite"
      >
        <CheckCircle size={48} color="#16a34a" />
        <h3 style={{ fontSize: '1.25rem', color: '#14532d', fontWeight: 700 }}>
          WhatsApp Opened!
        </h3>
        <p style={{ color: '#166534', maxWidth: 340 }}>
          Your enquiry details have been prefilled. Send the message on WhatsApp to connect with our team.
        </p>
        <p style={{ fontSize: '0.85rem', color: '#4b7c59' }}>
          If WhatsApp did not open,{' '}
          <a
            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
            style={{ color: 'var(--royal)', fontWeight: 600 }}
          >
            call us directly
          </a>
          .
        </p>
        <button
          className="btn-outline-navy"
          onClick={() => {
            setStatus('idle')
            setForm({ name: '', phone: '', course: preselectedCourse, batch: '', message: '', consent: false })
          }}
          style={{ marginTop: '0.5rem' }}
        >
          Send Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Admission enquiry form">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>

        {/* Name */}
        <div className="form-field">
          <label className="form-label" htmlFor="enq-name">Full Name <span aria-hidden>*</span></label>
          <input
            id="enq-name"
            name="name"
            type="text"
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="e.g. Priya Sharma"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.name ? 'enq-name-err' : undefined}
          />
          {errors.name && <p className="form-error" id="enq-name-err" role="alert">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="form-field">
          <label className="form-label" htmlFor="enq-phone">Mobile Number <span aria-hidden>*</span></label>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            className={`form-input ${errors.phone ? 'error' : ''}`}
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
            aria-required="true"
            inputMode="numeric"
            maxLength={10}
            aria-describedby={errors.phone ? 'enq-phone-err' : undefined}
          />
          {errors.phone && <p className="form-error" id="enq-phone-err" role="alert">{errors.phone}</p>}
        </div>

        {/* Course */}
        <div className="form-field">
          <label className="form-label" htmlFor="enq-course">Course of Interest <span aria-hidden>*</span></label>
          <select
            id="enq-course"
            name="course"
            className={`form-input ${errors.course ? 'error' : ''}`}
            value={form.course}
            onChange={handleChange}
            required
            aria-required="true"
            aria-describedby={errors.course ? 'enq-course-err' : undefined}
          >
            <option value="">Select a course…</option>
            {COURSES.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
            <option value="not-sure">Not sure — need guidance</option>
          </select>
          {errors.course && <p className="form-error" id="enq-course-err" role="alert">{errors.course}</p>}
        </div>

        {/* Batch preference (optional) */}
        {!compact && (
          <div className="form-field">
            <label className="form-label" htmlFor="enq-batch">Preferred Batch Timing <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span></label>
            <input
              id="enq-batch"
              name="batch"
              type="text"
              className="form-input"
              placeholder="e.g. Morning, Evening, Weekend"
              value={form.batch}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Message (optional) */}
        {!compact && (
          <div className="form-field">
            <label className="form-label" htmlFor="enq-message">Message <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span></label>
            <textarea
              id="enq-message"
              name="message"
              className="form-input"
              placeholder="Any questions or additional details…"
              value={form.message}
              onChange={handleChange}
              rows={3}
              style={{ resize: 'vertical' }}
            />
          </div>
        )}

        {/* Consent */}
        <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
          <input
            id="enq-consent"
            name="consent"
            type="checkbox"
            checked={form.consent}
            onChange={handleChange}
            required
            aria-required="true"
            aria-describedby={errors.consent ? 'enq-consent-err' : undefined}
            style={{ marginTop: 3, flexShrink: 0, accentColor: 'var(--royal)', width: 16, height: 16 }}
          />
          <div>
            <label
              htmlFor="enq-consent"
              style={{ fontSize: '0.875rem', color: 'var(--charcoal)', lineHeight: 1.5, cursor: 'pointer' }}
            >
              I consent to Race Reddys contacting me regarding admissions and course information via phone or WhatsApp.
            </label>
            {errors.consent && <p className="form-error" id="enq-consent-err" role="alert">{errors.consent}</p>}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-primary w-full justify-center"
          disabled={status === 'submitting'}
          aria-disabled={status === 'submitting'}
          style={{ marginTop: '0.25rem' }}
        >
          {status === 'submitting' ? (
            'Opening WhatsApp…'
          ) : (
            <>
              <Send size={16} />
              Send Enquiry via WhatsApp
            </>
          )}
        </button>

        <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', textAlign: 'center', lineHeight: 1.5 }}>
          This will open WhatsApp with your details pre-filled. Alternatively,{' '}
          <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} style={{ color: 'var(--royal)', fontWeight: 600 }}>
            call {SITE_CONFIG.contact.phone}
          </a>
          .
        </p>
      </div>
    </form>
  )
}
