import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '../data/config'

export default function WhatsAppFAB() {
  const href = `${SITE_CONFIG.contact.whatsapp}?text=${SITE_CONFIG.contact.whatsappDefaultMessage}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with Race Reddys on WhatsApp"
    >
      <MessageCircle size={26} fill="currentColor" strokeWidth={0} />
    </a>
  )
}
