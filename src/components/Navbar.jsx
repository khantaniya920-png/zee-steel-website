import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { site, navLinks } from '../data/siteData.js'
import Button from './Button.jsx'

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-smooth ${
        scrolled ? 'bg-charcoal/95 backdrop-blur shadow-[0_1px_0_rgba(255,255,255,0.06)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex h-20 items-center justify-between" aria-label="Primary">
        <NavLink to="/" className="text-lg font-extrabold tracking-wide text-white">
          ZEE STEEL
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-champagne' : 'text-white/80 hover:text-white'
                  }`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            aria-label="Call Zee Steel"
            className="text-white/80 transition-colors hover:text-champagne"
          >
            <Phone size={19} />
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Zee Steel on WhatsApp"
            className="text-white/80 transition-colors hover:text-champagne"
          >
            <MessageCircle size={19} />
          </a>
          <Button onClick={onOpenContact} variant="primary">Get a Quote</Button>
        </div>

        <button
          className="text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden bg-charcoal transition-[max-height] duration-300 ease-smooth ${
          open ? 'max-h-[26rem]' : 'max-h-0'
        }`}
      >
        <ul className="container-content flex flex-col gap-1 pb-6 pt-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-sm px-2 py-3 text-base font-medium ${
                    isActive ? 'text-champagne' : 'text-white/85'
                  }`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-3 flex gap-3">
            <a href={site.phoneHref} className="flex-1">
              <Button variant="outline" className="w-full">
                <Phone size={16} /> Call
              </Button>
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full">
                <MessageCircle size={16} /> WhatsApp
              </Button>
            </a>
          </li>
          <li className="mt-2">
            <Button
              onClick={() => { setOpen(false); onOpenContact() }}
              variant="primary"
              className="w-full"
            >
              Get a Quote
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
