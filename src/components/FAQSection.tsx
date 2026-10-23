import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS_LIST, SITE_CONFIG } from '../data/config';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FBF9F5]" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="station-board-yellow inline-block mb-3 text-xs font-black">
            FREQUENTLY ASKED QUESTIONS • वारंवार विचारले जाणारे प्रश्न
          </div>
          
          <h2 id="faq-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B3A] font-serif-heading mb-3">
            Clear Answers for First-Time Students &amp; Parents
          </h2>

          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            Everything you need to know about admissions, fees, timings, and learning pace in simple words.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E8E2D5] p-5 sm:p-8 shadow-xs divide-y divide-[#E8E2D5]">
          {FAQS_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const buttonId = `faq-btn-${idx}`;

            return (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full flex items-center justify-between text-left gap-4 font-bold text-[#071B3A] text-sm sm:text-base hover:text-[#C59B27] transition-colors cursor-pointer font-serif-heading"
                >
                  <span className="pr-2">{faq.question}</span>
                  <span className="w-7 h-7 rounded-full bg-[#FAF7EE] text-[#071B3A] border border-[#E8E2D5] flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-8 text-center text-xs text-[#526071]">
          <span>Still have a question? </span>
          <a
            href={`${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
              'Hello! I have a question regarding courses at Race Reddys Virar East.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#071B3A] font-bold underline hover:text-[#C59B27] ml-1"
          >
            Ask directly on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
}
