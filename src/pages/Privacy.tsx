import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { SITE_CONFIG } from '../data/config';

export default function Privacy() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SEO
        title="Privacy Policy & Terms | RACE Virar East"
        description="Privacy policy for RACE Advanced Computer Education — transparent student data handling and inquiry communications."
        canonical="/privacy"
      />

      <PageHero
        eyebrow="Privacy Policy"
        title="Student Privacy & Communication Commitment"
        description="We treat student inquiry details with strict confidentiality. No spam calls, no commercial data selling, and zero third-party marketing sharing."
      />

      <section className="bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
            
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#C41E1E]">
                <Shield size={18} />
                <h2 className="text-base sm:text-lg font-bold text-[#001752]">1. Overview &amp; Commitment</h2>
              </div>
              <p>
                This Privacy Policy explains how <strong>{SITE_CONFIG.fullName}</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;the institute&quot; located at Raut Arcade, Virar East) handles contact details when prospective students or parents submit admission enquiries or contact our counseling desk.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2 mb-2 text-[#C41E1E]">
                <FileText size={18} />
                <h2 className="text-base sm:text-lg font-bold text-[#001752]">2. Information We Receive</h2>
              </div>
              <p>When you complete an admission enquiry form or chat with us, we collect:</p>
              <ul className="mt-2.5 space-y-1.5 pl-4 list-disc text-slate-600">
                <li>Your full name</li>
                <li>Your mobile / WhatsApp phone number</li>
                <li>Your course of interest (e.g. TallyPrime, Web Development, Typing)</li>
                <li>Preferred batch timing (morning, ladies, or evening)</li>
                <li>Any specific learning goals or questions you share</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2 mb-2 text-[#C41E1E]">
                <Lock size={18} />
                <h2 className="text-base sm:text-lg font-bold text-[#001752]">3. How We Use Your Details</h2>
              </div>
              <p>
                Your contact details are used exclusively by our Virar East campus counselor to provide syllabus brochures, fee installment structures, batch availability, and to schedule in-person demo classes. 
              </p>
              <div className="mt-3 p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-xs font-medium flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  We strictly respect your privacy: We never sell, rent, or distribute student phone numbers to third-party telemarketers or external commercial agencies.
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2 mb-2 text-[#C41E1E]">
                <Shield size={18} />
                <h2 className="text-base sm:text-lg font-bold text-[#001752]">4. WhatsApp Direct Routing</h2>
              </div>
              <p>
                Our inquiry forms pre-format your query into an encrypted WhatsApp conversation with our official admissions team at <strong>{SITE_CONFIG.contact.phoneDisplay}</strong>. You retain full control over the message and can inspect it before pressing send on your device.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-base sm:text-lg font-bold text-[#001752] mb-2">5. Campus Contact Information</h2>
              <p className="mb-2">For any questions regarding your enquiry details or to update your contact preferences, contact:</p>
              <div className="rounded-2xl bg-[#F8F9FA] border border-slate-200 p-4 text-xs text-slate-700 space-y-1">
                <strong>{SITE_CONFIG.fullName}</strong>
                <p>{SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2}</p>
                <p>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.pin}</p>
                <p className="pt-1">
                  Direct Phone: <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="text-[#C41E1E] font-bold hover:underline">{SITE_CONFIG.contact.phoneDisplay}</a>
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">© {currentYear} {SITE_CONFIG.name}. All rights reserved.</span>
              <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001752] hover:text-[#C41E1E] hover:underline">
                <ArrowLeft size={14} />
                <span>Return to Home</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      <CtaBand
        title="Have questions about admissions or course privacy?"
        description="Reach out to our institute counselors at +91 97943 23963 or visit us in person at Raut Arcade, Virar East."
      />
    </>
  );
}
