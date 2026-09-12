import { Phone, Mail, MapPin, MessageCircle, Globe2 } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import { site } from '../data/siteData.js'

const mapQuery = encodeURIComponent(`${site.address.line1}, ${site.address.line2}, ${site.address.country}`)

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Zee Steel"
        description="Get in touch with Zee Steel for custom steel fabrication and architectural steel solutions, based in Ghaziabad and serving clients Pan India."
      />

      <section className="bg-charcoal pb-14 pt-32">
        <div className="container-content text-center">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">Let's Build Something in Steel.</h1>
        </div>
      </section>

      <section className="container-content grid gap-12 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-lg font-semibold text-charcoal">{site.name}</p>
          <ul className="mt-5 space-y-4 text-sm text-steel">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-champagne" />
              <span>{site.address.line1}<br />{site.address.line2}<br />{site.address.country}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-champagne" />
              <a href={site.phoneHref} className="hover:text-champagne">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-champagne" />
              <a href={site.emailHref} className="hover:text-champagne break-all">{site.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Globe2 size={18} className="shrink-0 text-champagne" />
              <span>Service Area: {site.serviceArea}</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-sm border border-black/15 px-4 py-2.5 text-sm font-medium text-charcoal hover:border-champagne">
              <Phone size={15} /> Call Us
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-black/15 px-4 py-2.5 text-sm font-medium text-charcoal hover:border-champagne">
              <MessageCircle size={15} /> WhatsApp
            </a>
            <a href={site.emailHref} className="inline-flex items-center gap-2 rounded-sm border border-black/15 px-4 py-2.5 text-sm font-medium text-charcoal hover:border-champagne">
              <Mail size={15} /> Email Us
            </a>
          </div>

          <div className="mt-8 aspect-video overflow-hidden rounded-md border border-black/10">
            <iframe
              title="Zee Steel location"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-md bg-white p-6 shadow-sm lg:col-span-3 md:p-10">
          <h2 className="text-xl font-semibold text-charcoal">Send an Enquiry</h2>
          <p className="mt-1 text-sm text-steel">Share your project details and we'll get back to you shortly.</p>
          <div className="mt-6">
            <QuoteForm showLocation />
          </div>
        </div>
      </section>
    </>
  )
}
