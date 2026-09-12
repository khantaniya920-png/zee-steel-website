import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingContact from '../components/FloatingContact.jsx'
import ContactModal from '../components/ContactModal.jsx'

export default function MainLayout() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-mist">
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main className="flex-1">
        <Outlet context={{ openContact: () => setContactOpen(true) }} />
      </main>
      <Footer />
      <FloatingContact onOpen={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
