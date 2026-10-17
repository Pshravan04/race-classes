import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { SITE_CONFIG } from '../data/config'

export default function Privacy() {
  const year = new Date().getFullYear()
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for Race Reddys Advanced Computer Education — how we collect, use, and protect your personal information."
        canonical="/privacy"
      />
      <section style={{ background: 'var(--navy)', padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <div className="container-rr">
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
            Last updated: {year}
          </p>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="section-py">
        <div className="container-rr">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--charcoal)', lineHeight: 1.8 }}>

              <section aria-labelledby="prv-intro">
                <h2 id="prv-intro" style={{ color: 'var(--navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Introduction</h2>
                <p>
                  This privacy policy explains how {SITE_CONFIG.fullName} ("we", "us", "the institute") collects, uses, and handles information submitted through the enquiry forms and contact channels on this website.
                </p>
              </section>

              <section aria-labelledby="prv-collect">
                <h2 id="prv-collect" style={{ color: 'var(--navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Information We Collect</h2>
                <p>When you submit an enquiry, we may collect:</p>
                <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <li>Your name</li>
                  <li>Your mobile phone number</li>
                  <li>Your course of interest</li>
                  <li>Your preferred batch timing (if provided)</li>
                  <li>Any message or notes you include in your enquiry</li>
                </ul>
              </section>

              <section aria-labelledby="prv-use">
                <h2 id="prv-use" style={{ color: 'var(--navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>How We Use Your Information</h2>
                <p>Information you provide is used solely for the purpose of:</p>
                <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <li>Responding to your admission enquiry</li>
                  <li>Providing course, batch, and fee information</li>
                  <li>Contacting you via phone or WhatsApp regarding your enquiry</li>
                </ul>
                <p style={{ marginTop: '0.75rem' }}>
                  We do not sell, trade, or transfer your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section aria-labelledby="prv-whatsapp">
                <h2 id="prv-whatsapp" style={{ color: 'var(--navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>WhatsApp Enquiry</h2>
                <p>
                  Our enquiry form uses WhatsApp to deliver your message. When you submit the form, a pre-filled WhatsApp message is opened on your device. You have full control to review and decide whether to send it before it leaves your device.
                </p>
              </section>

              <section aria-labelledby="prv-retain">
                <h2 id="prv-retain" style={{ color: 'var(--navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Data Retention</h2>
                <p>
                  We retain enquiry information only as long as necessary to respond and support your admission journey. We do not store sensitive personal data in our website databases.
                </p>
              </section>

              <section aria-labelledby="prv-rights">
                <h2 id="prv-rights" style={{ color: 'var(--navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Your Rights</h2>
                <p>
                  You may request that we stop contacting you at any time by informing us via call or WhatsApp. We will honour such requests promptly.
                </p>
              </section>

              <section aria-labelledby="prv-contact">
                <h2 id="prv-contact" style={{ color: 'var(--navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Contact Us About Privacy</h2>
                <p>
                  For any privacy-related questions, contact us at:
                </p>
                <address style={{ fontStyle: 'normal', marginTop: '0.5rem', color: 'var(--charcoal)' }}>
                  <strong>{SITE_CONFIG.fullName}</strong><br />
                  {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2},<br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.pin}<br />
                  <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} style={{ color: 'var(--royal)', fontWeight: 600 }}>
                    {SITE_CONFIG.contact.phone}
                  </a>
                </address>
              </section>

              <div style={{ marginTop: '1rem' }}>
                <Link to="/" style={{ color: 'var(--royal)', fontWeight: 600 }}>← Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
