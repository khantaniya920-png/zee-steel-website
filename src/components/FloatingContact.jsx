import { MessagesSquare } from 'lucide-react'

export default function FloatingContact({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-champagne px-5 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-black/20 transition-transform duration-300 ease-smooth hover:scale-105"
      aria-label="Open contact form"
    >
      <MessagesSquare size={18} />
      <span className="hidden sm:inline">Get in Touch</span>
    </button>
  )
}
