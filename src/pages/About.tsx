import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Monitor, 
  Users, 
  Award, 
  Clock, 
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CtaBand from '../components/CtaBand';
import { SITE_CONFIG } from '../data/config';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Race Reddys Advanced Computer Education Virar East"
        description="The story of Race Reddys in Virar East: eliminating the stressful commute to Mumbai with 100% practical computer training right outside Virar railway station. 10+ years of empowering local learners."
        canonical="/about"
      />

      <PageHero
        eyebrow="Our Mission &amp; Heritage · आमच्याबद्दल"
        title="Grounded in Virar, Built for Practical Tech Careers"
        description="We started Race Reddys with one clear conviction: students, homemakers, and job seekers in Virar and Vasai should not have to spend 4 hours in crowded local trains just to learn quality computer skills."
        aside={
          <div className="relative overflow-hidden rounded-3xl border border-[#002B94] bg-gradient-to-br from-[#001752] via-[#000F36] to-[#00081C] p-6 sm:p-7 text-white shadow-2xl">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#C41E1E]/20 blur-[80px] pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-[#002277]/30 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C41E1E] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                <Sparkles size={12} />
                Since 2014 in Virar East
              </span>

              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                10+ Years of Practical Mentorship
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                Over 5,000 local learners trained across accounting, office productivity, graphic design, and software programming.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                <div>
                  <strong className="block text-lg font-black text-white">5K+</strong>
                  <span className="text-[10px] font-semibold text-slate-400">Students</span>
                </div>
                <div className="border-x border-white/10">
                  <strong className="block text-lg font-black text-white">1:1</strong>
                  <span className="text-[10px] font-semibold text-slate-400">Machine</span>
                </div>
                <div>
                  <strong className="block text-lg font-black text-[#F5BE4F]">10+</strong>
                  <span className="text-[10px] font-semibold text-slate-400">Years</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 text-[11px] text-slate-300 border-t border-white/10 pt-3">
                <span className="flex items-center gap-1 text-[#F5BE4F]">
                  <MapPin size={13} />
                  <span>Raut Arcade 202</span>
                </span>
                <span className="text-emerald-400 font-semibold">Opp. Station Subway</span>
              </div>
            </div>
          </div>
        }
      />

      {/* ─── 1. The Virar Story Section ─── */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-sm sm:text-base">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C41E1E] border border-red-200 text-xs font-bold uppercase tracking-wider">
                <span>The Suburban Education Challenge</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001752] tracking-tight">
                Why Should Virar Students Travel to Mumbai for Computer Education?
              </h2>

              <p>
                Every morning, thousands of youths and college students from Virar, Nalasopara, and Vasai board crowded Western Railway local trains heading towards Andheri, Dadar, and Churchgate. Many spend up to 4 exhausting hours every day just to attend a 90-minute computer or accounting class in South or Central Mumbai.
              </p>

              <p>
                <strong className="text-[#001752]">Race Reddys was founded to end this exhausting commute.</strong> Located at 202, Raut Arcade, directly opposite the Virar East railway subway, we bring modern IT curriculums, licensed software, and experienced instructors right to your doorstep in Virar.
              </p>

              <p>
                Here, students learn at their own pace, with 100% individual workstation time. No sharing keyboards, no rushed theoretical lectures, and no commute fatigue.
              </p>

              <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-slate-200 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#001752] text-white flex items-center justify-center shrink-0 font-black text-sm">
                  1:1
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm text-[#001752] font-bold">
                    Zero Screen Sharing Guarantee
                  </strong>
                  <span className="text-xs text-slate-500">
                    One student per desktop terminal for every single minute of your class.
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <img
                    src="/images/real-lab-classroom.jpg"
                    alt="Race Reddys computer lab inside Raut Arcade Virar East"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-white">
                    <span className="text-[10px] uppercase font-bold text-[#F5BE4F] tracking-wider block">
                      Raut Arcade · Lab Terminal 202
                    </span>
                    <strong className="text-xs sm:text-sm text-white font-bold block mt-0.5">
                      Air-Conditioned Practical Lab Facility
                    </strong>
                    <span className="text-[11px] text-slate-300">
                      Virar East Station Subway Exit • 2-Minute Walk
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. Teaching Principles Bento Grid ─── */}
      <section className="bg-[#F8F9FA] py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Teaching Philosophy"
            title="How We Teach Differently at Race Reddys"
            description="Education at Race Reddys is built on practical confidence rather than memorizing textbooks. Here are the four standards we uphold for every enrolled student."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#C41E1E] mb-4">
                  <Monitor size={22} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#001752] mb-2">100% Practical Training</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  You sit in front of an active computer terminal from day one. Concepts are practiced immediately with real accounting entries and code.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#C41E1E] mt-4 block">1:1 Workstation Ratio</span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                  <Users size={22} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#001752] mb-2">Patient Desk Guidance</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Trainers sit directly beside you to resolve doubts, correct keyboard finger placement, and walk through mistakes step by step.
                </p>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 mt-4 block">Personal Mentorship</span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-4">
                  <Award size={22} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#001752] mb-2">Government &amp; ISO Aligned</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Syllabi conform to MKCL exam patterns, GCC-TBC typing criteria, and ISO 9001:2015 standards, making certificates valid for job interviews.
                </p>
              </div>
              <span className="text-[11px] font-bold text-amber-600 mt-4 block">Authorized Credentials</span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  <Clock size={22} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#001752] mb-2">Free Lifetime Doubt Support</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Even after finishing your course, you can walk in to our lab to practice or ask your teacher for help on actual office tasks.
                </p>
              </div>
              <span className="text-[11px] font-bold text-indigo-600 mt-4 block">Alumni Lab Privileges</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Who Learns Here ─── */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Community Impact"
            title="Who Learns at Race Reddys?"
            description="Our classrooms reflect the diverse community of Virar, Vasai, and Palghar. We welcome learners of all ages and backgrounds."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl border border-slate-200 bg-[#F8F9FA] flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-3 block">🎓</span>
                <h3 className="text-base font-bold text-[#001752] mb-2">College Students &amp; Freshers</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Students from Viva College, St. Joseph, and nearby colleges who want job-ready skills in Tally, Python, and Graphic Design before graduation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-[#C41E1E]">
                Batches before &amp; after college hours
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-slate-200 bg-[#F8F9FA] flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-3 block">👩‍💼</span>
                <h3 className="text-base font-bold text-[#001752] mb-2">Homemakers &amp; Women</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Women returning to careers or learning basic computers and office typing for household accounting in our supportive afternoon ladies batch.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-emerald-600">
                Special ladies batch: 12:30 PM – 4:00 PM
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-slate-200 bg-[#F8F9FA] flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-3 block">💼</span>
                <h3 className="text-base font-bold text-[#001752] mb-2">Working Professionals &amp; Business Owners</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Local shopkeepers, traders, and working clerks upgrading to TallyPrime GST invoicing, digital marketing, and advanced Excel spreadsheets.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-amber-600">
                Early morning &amp; evening slots
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Location Callout ─── */}
      <section className="bg-[#F8F9FA] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <MapPin size={12} />
                  Prime Station Location
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#001752] tracking-tight">
                  2 Minutes on Foot from Virar Railway Station (Platform 1 Exit)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Our lab is located on the 2nd Floor of Raut Arcade, directly facing the railway subway stairs on Station Road East. You can walk straight in after getting off the train without needing an auto-rickshaw.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                  <span>📍 202, Raut Arcade, Virar East</span>
                  <span>⏰ Mon–Sat: 9:00 AM – 7:00 PM</span>
                  <span>📞 Phone: {SITE_CONFIG.contact.phone}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={SITE_CONFIG.address.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#001752] hover:bg-[#C41E1E] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  <MapPin size={15} className="text-[#F5BE4F]" />
                  <span>Open in Google Maps</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white text-[#001752] border border-slate-300 hover:border-[#001752] text-xs sm:text-sm font-bold transition-all shadow-xs"
                >
                  <span>Book Lab Tour &amp; Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to see our computer lab in person?"
        description="Walk in anytime between 9:00 AM and 7:00 PM, Monday to Saturday. Take a seat, experience a free practical demo, and inspect our computers yourself."
      />
    </>
  );
}
