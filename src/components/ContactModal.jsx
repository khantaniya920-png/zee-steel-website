import { useEffect } from 'react'
import { X, Phone, Mail, MessageCircle } from 'lucide-react'
import { site } from '../data/siteData.js'
import QuoteForm from './QuoteForm.jsx'

export default function ContactModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 backdrop-blur-sm md:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-lg bg-mist p-6 shadow-2xl md:rounded-lg md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 id="contact-modal-title" className="text-2xl font-semibold text-charcoal">Get in Touch</h2>
            <p className="mt-1 text-sm text-steel">Tell us about your project — we'll get back to you shortly.</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1.5 text-steel hover:bg-black/5">
            <X size={22} />
          </button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-sm border border-black/10 px-3 py-2.5 text-sm font-medium text-charcoal hover:border-champagne">
            <Phone size={16} className="text-champagne" /> Call Us
          </a>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-sm border border-black/10 px-3 py-2.5 text-sm font-medium text-charcoal hover:border-champagne">
            <MessageCircle size={16} className="text-champagne" /> WhatsApp
          </a>
          <a href={site.emailHref} className="flex items-center gap-2 rounded-sm border border-black/10 px-3 py-2.5 text-sm font-medium text-charcoal hover:border-champagne">
            <Mail size={16} className="text-champagne" /> Email Us
          </a>
        </div>

        <div className="mt-8">
          <QuoteForm compact />
        </div>
      </div>
    </div>
  )
}
