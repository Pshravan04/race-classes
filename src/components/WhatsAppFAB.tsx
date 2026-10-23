import { MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

export default function WhatsAppFAB() {
  const href = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    'Hello! I am browsing the Race Reddys website and would like to ask about course admissions.'
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 border-2 border-white text-xs font-bold"
      aria-label="Chat with Race Reddys on WhatsApp"
    >
      <MessageSquare size={20} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
