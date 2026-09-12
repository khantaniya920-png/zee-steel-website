import { useState } from 'react'
import { Paperclip, CheckCircle2 } from 'lucide-react'
import Button from './Button.jsx'

const PROJECT_TYPES = [
  'Architectural & Structural Steel',
  'Building, Roofing & Cladding',
  'Industrial Steel Solutions',
  'Commercial & Mall Steel',
  'Sculptures & Decorative Steel',
  'Custom & Luxury Steel',
  'Other / Not Sure',
]

const EMPTY = { name: '', phone: '', email: '', projectType: '', location: '', message: '', file: null }

// Frontend-only enquiry form. Wire handleSubmit up to a backend or email
// service (e.g. Formspree, an API route, or EmailJS) when ready — the
// validated payload is already assembled as `formData` below.
export default function QuoteForm({ compact = false, showLocation = false }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    const val = field === 'file' ? e.target.files?.[0] || null : e.target.value
    setValues((v) => ({ ...v, [field]: val }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.phone.trim()) next.phone = 'Please enter a phone number.'
    else if (!/^[0-9+\-\s()]{7,}$/.test(values.phone)) next.phone = 'Please enter a valid phone number.'
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const formData = { ...values }
    // TODO: send `formData` to your backend/email service.
    console.log('Enquiry submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-md bg-white/5 p-8 text-center">
        <CheckCircle2 className="text-champagne" size={40} />
        <p className="text-lg font-semibold">Enquiry sent.</p>
        <p className="text-sm text-steel">
          Thank you — our team will get back to you shortly to discuss your requirement.
        </p>
        <Button variant="outline" onClick={() => { setValues(EMPTY); setSubmitted(false) }}>
          Send Another Enquiry
        </Button>
      </div>
    )
  }

  const field = 'w-full rounded-sm border border-black/10 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-steel/60 focus:border-champagne'

  return (
    <form onSubmit={handleSubmit} noValidate className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
      <div>
        <label htmlFor="name" className="mb-1 block text-xs font-medium text-steel">Full Name *</label>
        <input id="name" className={field} value={values.name} onChange={update('name')} aria-invalid={!!errors.name} />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-xs font-medium text-steel">Phone Number *</label>
        <input id="phone" className={field} value={values.phone} onChange={update('phone')} aria-invalid={!!errors.phone} />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-xs font-medium text-steel">Email</label>
        <input id="email" type="email" className={field} value={values.email} onChange={update('email')} aria-invalid={!!errors.email} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="projectType" className="mb-1 block text-xs font-medium text-steel">Project Type</label>
        <select id="projectType" className={field} value={values.projectType} onChange={update('projectType')}>
          <option value="">Select a category</option>
          {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      {showLocation && (
        <div className="md:col-span-2">
          <label htmlFor="location" className="mb-1 block text-xs font-medium text-steel">Project Location</label>
          <input id="location" className={field} value={values.location} onChange={update('location')} />
        </div>
      )}
      <div className="md:col-span-2">
        <label htmlFor="message" className="mb-1 block text-xs font-medium text-steel">Message / Project Requirement</label>
        <textarea id="message" rows={4} className={field} value={values.message} onChange={update('message')} />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="file" className="mb-1 flex items-center gap-1.5 text-xs font-medium text-steel">
          <Paperclip size={13} /> Upload Image / Drawing / Reference
        </label>
        <input id="file" type="file" accept="image/*,.pdf" onChange={update('file')} className="w-full text-sm text-steel file:mr-4 file:rounded-sm file:border-0 file:bg-charcoal file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white" />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" variant="primary" className="w-full md:w-auto">Send Enquiry</Button>
      </div>
    </form>
  )
}
