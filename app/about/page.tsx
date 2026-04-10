import Navbar from "@/components/Navbar";
import { Shield, Target, Users, MapPin, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: '#FFFFFF' }}>
      <Navbar />
      
      {/* HERO SECTION */}
      <section style={{ 
        padding: '220px 0 120px', 
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
          }}>Establishing Excellence</span>
          <h1 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '2.5rem' }}>Legacy in <span className="gold-text">Intelligence</span></h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.7, lineHeight: '1.8', fontStyle: 'italic' }}>
            At PROP_AI, we blend modern computational intelligence with deep-rooted real estate expertise to provide unparalleled transparency in the luxury market.
          </p>
        </div>
      </section>

      {/* CORE STATS / VALUES */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem' 
          }}>
            {[
              { icon: <Shield />, label: "Security & Trust", desc: "Our platform ensures end-to-end encrypted transactions for elite investors." },
              { icon: <Target />, label: "Precision Matching", desc: "AI-driven algorithms identify prime assets that match your unique lifestyle requirements." },
              { icon: <Users />, label: "Concierge Elite", desc: "A dedicated team of experts available 24/7 to manage your global portfolio." },
              { icon: <Globe />, label: "Global Reach", desc: "Access to exclusive listings from Dubai, London, and New York within one unified dashboard." }
            ].map((v, i) => (
              <div key={i} className="glass" style={{ padding: '60px 40px', textAlign: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'rgba(184, 150, 12, 0.1)', 
                  margin: '0 auto 2rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  borderRadius: '2px'
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>{v.label}</h3>
                <p style={{ opacity: 0.5, lineHeight: 1.8, fontSize: '0.95rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section style={{ 
        background: '#FFFFFF', 
        color: '#080808',
        padding: '140px 0'
      }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2.5rem', color: '#080808' }}>
              Redefining <span className="gold-text">Modern</span> Brokerage
            </h2>
            <p style={{ fontSize: '1.15rem', opacity: 0.8, lineHeight: 2, marginBottom: '3rem' }}>
              Founded in 2026, PROP_AI emerged from the intersection of high-frequency trading technology and luxury asset management. We recognized that the modern investor values data as much as design.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: 800 }}>
                <MapPin color="var(--accent-gold)" /> Headquartered in Downtown Dubai, UAE
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: 800 }}>
                <Target color="var(--accent-gold)" /> Delivering 85% higher ROI through AI Analytics
              </div>
            </div>
          </div>
          <div style={{ 
            height: '600px', 
            background: '#EEE', 
            borderRadius: '4px',
            border: '8px solid var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            opacity: 0.3,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '5px'
          }}>
            [PREMIUM VISUAL: DUBAI SKYLINE]
          </div>
        </div>
      </section>

      <footer style={{ padding: '100px 0', borderTop: '1px solid rgba(184, 150, 12, 0.1)', textAlign: 'center', background: '#080808' }}>
        <p style={{ opacity: 0.3, fontSize: '13px' }}>© 2026 PROP_AI ELITE GROUP • ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}
