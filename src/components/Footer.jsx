import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { site, navLinks } from '../data/siteData.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-mist/70">
      <div className="container-content grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-extrabold tracking-wide text-white">ZEE STEEL</p>
          <p className="mt-3 text-sm text-champagne">{site.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{site.business}</p>
          <div className="mt-5 flex gap-4">
            <a href={site.social.instagram} aria-label="Zee Steel on Instagram" className="text-mist/60 hover:text-champagne">
              <Instagram size={18} />
            </a>
            <a href={site.social.facebook} aria-label="Zee Steel on Facebook" className="text-mist/60 hover:text-champagne">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-champagne">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <a href={site.phoneHref} className="hover:text-champagne">{site.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href={site.emailHref} className="hover:text-champagne break-all">{site.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{site.address.line1}, {site.address.line2}, {site.address.country}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs uppercase tracking-wide text-champagne/80">Serving Clients Across India</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-content text-xs text-mist/50">
          © {new Date().getFullYear()} Zee Steel. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
