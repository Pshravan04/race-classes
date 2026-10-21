import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: 'Which computer courses are available at Race Reddys?',
    a: 'Race Reddys offers courses across Computer Basics (Basic Computer, MS Office, CCC, English & Marathi Typing), Accounting (Tally, Advanced Tally with GST), Design & Creative (Photoshop, Illustrator, Graphic Design, Animation), Web & Software Development (HTML, CSS, Web & App Development, Software Development), AI & Data (AI & Machine Learning, Prompt Engineering, Data Science), and Cyber Security & Networking (Hardware, A+, N+, Ethical Hacking).',
  },
  {
    q: 'How do I choose the right course for my goals?',
    a: 'Complete beginners or students preparing for office work often start with Basic Computer, MS Office, or CCC. Commerce students and professionals usually choose Tally with GST. Those seeking creative careers choose Graphic Design or Web Development, while learners looking for modern tech careers explore Software Development, AI, and Cyber Security. You can visit our Virar East centre for a free personal consultation.',
  },
  {
    q: 'How can I enquire about admission and current batches?',
    a: 'You can contact the institute directly by calling +91 97943 23963, sending a WhatsApp message, or visiting in person at 202 Raut Arcade, Opp. Subway, near Virar East railway station. Our team will share available morning, afternoon, or evening batch slots.',
  },
  {
    q: 'Where is Race Reddys located in Virar East?',
    a: 'Our learning centre is located at 202, 2nd Floor, Raut Arcade, directly opposite the Subway near the Virar East Railway Station in Virar East, Maharashtra 401305. It is within a 2-minute walking distance from the station.',
  },
  {
    q: 'How can I confirm course fees and batch timings?',
    a: 'Because course fees and batch schedules vary based on the specific curriculum, batch timing (weekday vs. weekend), and ongoing admission offers, please contact our admissions desk at +91 97943 23963 or visit us in person for exact, transparent fee breakdowns.',
  },
  {
    q: 'What does the advertised admission offer include?',
    a: 'The current advertised promotion features a 50% discount on admissions, as well as a Free Basic Computer Course when enrolling in eligible career-oriented courses. Offer eligibility, terms, and seat availability should be confirmed directly with the admissions office before enrolment.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section className="w-full bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 border-b border-gray-200" aria-label="Frequently Asked Questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#102B20] bg-white px-3.5 py-1.5 rounded-full border border-[#E7EAE2] mb-3">
            <HelpCircle size={13} />
            <span>COMMON QUESTIONS &amp; ADMISSIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#0F1E36] tracking-tight leading-tight font-heading">
            Frequently{' '}
            <span className="serif-accent font-normal text-[#1556A6]">
              asked questions.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Clear, transparent answers to questions about admission, batches, location, and learning.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-xs">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx
            const contentId = `faq-content-${idx}`
            const buttonId = `faq-btn-${idx}`

            return (
              <div key={idx} className="border-b border-gray-100 last:border-b-0">
                <button
                  id={buttonId}
                  type="button"
                  className="w-full flex items-center justify-between text-left gap-4 py-4 md:py-5 font-bold text-[#0F1E36] text-base md:text-lg hover:text-[#1556A6] transition-colors cursor-pointer"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="pr-4">{item.q}</span>
                  <span className="shrink-0">
                    {isOpen ? (
                      <div className="w-7 h-7 rounded-full bg-[#121c2d] text-[#B7EB38] flex items-center justify-center font-bold">
                        <ChevronUp size={16} />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-bold">
                        <ChevronDown size={16} />
                      </div>
                    )}
                  </span>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <p className="text-xs sm:text-sm md:text-base text-[#606A61] leading-relaxed pr-6">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
