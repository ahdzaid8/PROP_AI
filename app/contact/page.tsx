import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Globe, Headphones, ArrowRight, Shield } from "lucide-react";

export default function ContactPage() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: '#FFFFFF' }}>
      <Navbar />
      
      {/* HERO SECTION */}
      <section style={{ 
        padding: '240px 0 120px', 
        background: 'linear-gradient(180deg, rgba(184, 150, 12, 0.05) 0%, #080808 100%)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ 
            fontSize: '12px', 
            fontWeight: 900, 
            textTransform: 'uppercase', 
            letterSpacing: '5px', 
            color: 'var(--accent-gold)',
            marginBottom: '2rem',
            display: 'block'
          }}>Direct Connection</span>
          <h1 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '2.5rem' }}>Personal <span className="gold-text">Consultation</span></h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.7, lineHeight: '1.8', fontStyle: 'italic' }}>
            Connect with our elite brokerage team to discuss your global real estate requirements. We are available across all timezones.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section style={{ padding: '40px 0 160px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 500px', gap: '80px' }}>
          
          {/* Form */}
          <div className="glass" style={{ padding: '60px 50px', background: 'rgba(255,255,255,0.02)' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '3rem' }}>Inquiry <span className="gold-text">Pattern</span></h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>Full Name</label>
                  <input type="text" placeholder="e.g. Sultan Alamri" style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(184, 150, 12, 0.3)', borderRadius: '2px', color: '#FFF' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>Email Address</label>
                  <input type="email" placeholder="name@email.com" style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(184, 150, 12, 0.3)', borderRadius: '2px', color: '#FFF' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>Service Intent</label>
                <select style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(184, 150, 12, 0.3)', borderRadius: '2px', color: '#FFF' }}>
                  <option>Luxury Acquisition</option>
                  <option>Portfolio Sale</option>
                  <option>Elite Rental</option>
                  <option>Market Brokerage</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>Message Cipher</label>
                <textarea rows={6} placeholder="How can our AI engine assist you today?" style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(184, 150, 12, 0.3)', borderRadius: '2px', color: '#FFF' }}></textarea>
              </div>

              <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                Transmit Inquiry <ArrowRight size={20} color="#FFF" />
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <aside style={{ height: 'fit-content', position: 'sticky', top: '160px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Shield color="var(--accent-gold)" /> Head Office
                </h3>
                <div style={{ opacity: 0.6, lineHeight: 1.8, fontSize: '1rem' }}>
                  Boulevard Plaza Tower 1,<br />
                  Level 12, Suite 1204,<br />
                  Downtown Dubai, UAE.
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Headphones color="var(--accent-gold)" /> Global Voice
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', opacity: 0.8, fontSize: '1rem', fontWeight: 700 }}>
                  <li style={{ display: 'flex', gap: '12px' }}><Phone size={18} color="var(--accent-gold)" /> +971 4 123 4567</li>
                  <li style={{ display: 'flex', gap: '12px' }}><Mail size={18} color="var(--accent-gold)" /> info@propai.com</li>
                  <li style={{ display: 'flex', gap: '12px' }}><Globe size={18} color="var(--accent-gold)" /> www.propai.com</li>
                </ul>
              </div>

              <div className="glass" style={{ padding: '30px', borderLeft: '4px solid var(--accent-gold)' }}>
                <p style={{ opacity: 0.5, fontSize: '0.9rem', fontStyle: 'italic' }}>
                  "Our response pattern is prioritized for Elite Prime members within 15 minutes of transmission."
                </p>
              </div>
            </div>
          </aside>

        </div>
      </section>

      <footer style={{ padding: '100px 0', borderTop: '1px solid rgba(184, 150, 12, 0.1)', textAlign: 'center', background: '#080808' }}>
        <p style={{ opacity: 0.3, fontSize: '13px' }}>© 2026 PROP_AI ELITE GROUP • ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}
