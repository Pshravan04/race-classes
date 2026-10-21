import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import { SITE_CONFIG } from '../data/config'

export default function Privacy() {
  const year = new Date().getFullYear()

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for Race Reddys Advanced Computer Education — transparent student data handling and inquiry communications."
        canonical="/privacy"
      />

      <section className="bg-slate-50 border-b border-slate-200 py-12 md:py-16">
        <div className="container-rr">
          <div className="max-w-2xl">
            <span className="section-eyebrow">LEGAL & PRIVACY</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500">
              Last updated: {year}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container-rr">
          <div className="max-w-3xl mx-auto flex flex-col gap-8 text-sm text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview</h2>
              <p>
                This Privacy Policy explains how {SITE_CONFIG.fullName} (&quot;we&quot;, &quot;us&quot;, or &quot;the institute&quot;) handles data and communication when prospective students enquire about courses, batch schedules, or fee structures through this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Receive</h2>
              <p>When you complete an admission enquiry form, we request:</p>
              <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-slate-600">
                <li>Your name</li>
                <li>Your 10-digit mobile phone number</li>
                <li>Your course of interest</li>
                <li>Optional preferred batch timing</li>
                <li>Any optional questions or notes you provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. How Information Is Used</h2>
              <p>
                Your contact details are used exclusively to provide requested course syllabi, fee structures, and batch availability information, and to arrange center visits. We do not sell, rent, or distribute student contact data to any third-party marketing entities.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. WhatsApp Consultation Routing</h2>
              <p>
                Our enquiry forms pre-format your query into a WhatsApp conversation with our official admissions team at +91 97943 23963. You retain full control over the message and can inspect it before pressing send on your device.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Contact Regarding Privacy</h2>
              <p>For any questions regarding your inquiry details or to opt out of follow-ups, contact:</p>
              <address className="not-italic mt-2 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                <strong>{SITE_CONFIG.fullName}</strong><br />
                {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2},<br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.pin}<br />
                Phone: <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="text-blue-600 font-semibold">{SITE_CONFIG.contact.phone}</a>
              </address>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700">
                <ArrowLeft size={14} />
                <span>Return to Home</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
