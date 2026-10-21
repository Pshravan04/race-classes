import { useState } from 'react'
import type { FormEvent } from 'react'
import { MessageCircle, Phone, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react'
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
    consent: true,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'whatsapp_opened'>('idle')

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!form.name.trim() || form.name.trim().length < 2) {
      errs.name = 'Please enter your full name.'
    }
    const cleanPhone = form.phone.replace(/[\s-]/g, '')
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number.'
    }
    if (!form.course) {
      errs.course = 'Please select a course of interest.'
    }
    if (!form.consent) {
      errs.consent = 'Please confirm consent to be contacted regarding admission details.'
    }
    return errs
  }

  const buildWhatsAppMessage = () => {
    const selectedCourseObj = COURSES.find((c) => c.id === form.course || c.name === form.course)
    const courseTitle = selectedCourseObj ? selectedCourseObj.name : form.course
    const parts = [
      `Hello Race Reddys, I would like to enquire about admission.`,
      `• Name: ${form.name}`,
      `• Mobile: ${form.phone}`,
      `• Course of Interest: ${courseTitle}`,
      form.batch ? `• Preferred Batch: ${form.batch}` : '',
      form.message ? `• Note: ${form.message}` : '',
      `Location: Virar East Centre`,
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
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    const waUrl = `${SITE_CONFIG.contact.whatsapp}?text=${buildWhatsAppMessage()}`

    // Direct WhatsApp routing
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer')
      setStatus('whatsapp_opened')
    }, 400)
  }

  if (status === 'whatsapp_opened') {
    return (
      <div
        className="card-rr p-6 md:p-8 bg-slate-50 border border-slate-200 text-center flex flex-col items-center gap-3"
        role="status"
        aria-live="polite"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <MessageCircle size={26} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          WhatsApp Consultation Initiated
        </h3>
        <p className="text-sm text-slate-600 max-w-sm">
          Your course enquiry has been pre-formatted for our Virar East admissions team at{' '}
          <strong className="text-slate-900">{SITE_CONFIG.contact.phone}</strong>.
        </p>

        <div className="my-2 p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-500 text-left w-full max-w-sm">
          <p className="font-semibold text-slate-700 mb-1 flex items-center gap-1">
            <AlertCircle size={13} className="text-blue-500" />
            Live Channel Note:
          </p>
          Enquiries are processed directly through WhatsApp & Phone consultation so you get instant answers on batch timings and fees.
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full max-w-sm">
          <a
            href={`${SITE_CONFIG.contact.whatsapp}?text=${buildWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-xs py-2.5"
          >
            Re-open WhatsApp
          </a>
          <a
            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
            className="btn-secondary flex-1 text-xs py-2.5"
          >
            <Phone size={13} />
            Call Instantly
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus('idle')
            setForm({
              name: '',
              phone: '',
              course: preselectedCourse,
              batch: '',
              message: '',
              consent: true,
            })
          }}
          className="text-xs text-slate-500 hover:text-slate-800 underline mt-2"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Admission enquiry form"
      className={`card-rr p-6 md:p-8 bg-white border border-slate-200 flex flex-col gap-4 ${
        compact ? 'shadow-none' : 'shadow-xs'
      }`}
    >
      <div>
        <h3 className="text-lg font-bold text-slate-900">
          Admission & Course Enquiry
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Get direct information on upcoming batches, fees, and the 50% discount offer.
        </p>
      </div>

      {/* Name */}
      <div className="form-group">
        <label htmlFor="enquiry-name" className="form-label">
          Full Name <span className="text-rose-500" aria-hidden="true">*</span>
        </label>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Rahul Sharma"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'err-enquiry-name' : undefined}
          className={`form-control ${errors.name ? 'error' : ''}`}
        />
        {errors.name && (
          <p id="err-enquiry-name" className="form-error-msg" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Mobile Number */}
      <div className="form-group">
        <label htmlFor="enquiry-phone" className="form-label">
          Mobile Number <span className="text-rose-500" aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'err-enquiry-phone' : undefined}
            className={`form-control ${errors.phone ? 'error' : ''}`}
          />
        </div>
        {errors.phone && (
          <p id="err-enquiry-phone" className="form-error-msg" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Course Selection */}
      <div className="form-group">
        <label htmlFor="enquiry-course" className="form-label">
          Course of Interest <span className="text-rose-500" aria-hidden="true">*</span>
        </label>
        <select
          id="enquiry-course"
          name="course"
          value={form.course}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.course}
          aria-describedby={errors.course ? 'err-enquiry-course' : undefined}
          className={`form-control ${errors.course ? 'error' : ''}`}
        >
          <option value="">Select a course</option>
          {COURSES.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        {errors.course && (
          <p id="err-enquiry-course" className="form-error-msg" role="alert">
            {errors.course}
          </p>
        )}
      </div>

      {/* Preferred Batch */}
      <div className="form-group">
        <label htmlFor="enquiry-batch" className="form-label">
          Preferred Batch <span className="text-xs text-slate-400 font-normal">(Optional)</span>
        </label>
        <select
          id="enquiry-batch"
          name="batch"
          value={form.batch}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Any batch / To be discussed</option>
          <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
          <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
          <option value="Evening (4:00 PM - 8:30 PM)">Evening (4:00 PM - 8:30 PM)</option>
          <option value="Weekend Special">Weekend Special</option>
        </select>
      </div>

      {/* Optional Message */}
      <div className="form-group">
        <label htmlFor="enquiry-msg" className="form-label">
          Questions or Notes <span className="text-xs text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="enquiry-msg"
          name="message"
          rows={compact ? 2 : 3}
          value={form.message}
          onChange={handleChange}
          placeholder="Ask about batch timings, syllabus, or payment options..."
          className="form-control resize-none"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2 pt-1">
        <input
          id="enquiry-consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="enquiry-consent" className="text-xs text-slate-600 leading-snug">
          I agree to be contacted by Race Reddys team via phone/WhatsApp regarding this admission enquiry.
        </label>
      </div>
      {errors.consent && (
        <p className="form-error-msg -mt-2" role="alert">
          {errors.consent}
        </p>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
        >
          <MessageCircle size={17} aria-hidden="true" />
          <span>{status === 'submitting' ? 'Connecting...' : 'Enquire via WhatsApp'}</span>
          <ArrowRight size={15} aria-hidden="true" />
        </button>

        <p className="text-[11px] text-slate-400 text-center mt-2.5 flex items-center justify-center gap-1">
          <ShieldCheck size={13} className="text-emerald-500" />
          Zero spam. Direct conversation with Virar East counsellors.
        </p>
      </div>
    </form>
  )
}
