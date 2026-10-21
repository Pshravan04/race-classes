import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'
import EnquiryForm from '../components/EnquiryForm'
import { SITE_CONFIG } from '../data/config'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact & Location in Virar East"
        description="Contact Race Reddys Advanced Computer Education, Virar East. Direct phone & WhatsApp: +91 97943 23963. Located at 202, 2nd Floor, Raut Arcade, Opp. Subway."
        canonical="/contact"
      />

      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 md:py-16">
        <div className="container-rr">
          <div className="max-w-2xl">
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Contact & Visit Our Centre
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              We welcome students, parents, and working professionals to connect with us or visit our computer lab in Virar East.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-white section-py">
        <div className="container-rr">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Column (5 cols): Direct Contact Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Phone & WhatsApp Card */}
              <div className="card-rr p-6 md:p-8 bg-white border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Direct Telephone & WhatsApp</h2>
                    <p className="text-xs text-slate-500">Fastest response for admissions and batch timings</p>
                  </div>
                </div>

                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="text-xl sm:text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors block mb-4"
                >
                  {SITE_CONFIG.contact.phone}
                </a>

                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                    className="btn-primary text-xs py-2 px-3.5 flex items-center gap-1.5"
                  >
                    <Phone size={13} />
                    <span>Click to Call</span>
                  </a>
                  <a
                    href={`${SITE_CONFIG.contact.whatsapp}?text=${SITE_CONFIG.contact.whatsappDefaultMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Centre Location Card */}
              <div className="card-rr p-6 md:p-8 bg-white border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Virar East Address</h2>
                    <p className="text-xs text-slate-500">2 minutes walk from Virar Railway Station</p>
                  </div>
                </div>

                <address className="not-italic text-sm text-slate-700 leading-relaxed mb-4">
                  <strong className="text-slate-900 block mb-1">{SITE_CONFIG.fullName}</strong>
                  {SITE_CONFIG.address.line1},<br />
                  {SITE_CONFIG.address.line2},<br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} — {SITE_CONFIG.address.pin}
                </address>

                <a
                  href={SITE_CONFIG.address.googleMapsSearch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs inline-flex items-center gap-1.5"
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Hours of Operation */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Clock size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Confirmed Operating Hours</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Monday to Saturday: <strong>8:00 AM – 9:00 PM</strong><br />
                    Sunday: Special batches & admissions by prior appointment.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column (7 cols): Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
