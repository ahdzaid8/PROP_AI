import FeaturedSection from "@/components/FeaturedSection";
import Agents from "@/components/Agents";
import InteractiveMap from "@/components/InteractiveMap";
import db from "@/lib/db";

export default async function Home() {
  // Fetch real properties from Supabase
  const { data: properties } = await db
    .from('properties_inventory')
    .select('*');

  // Fetch Elite Agents
  const { data: agents } = await db
    .from('agents')
    .select('*')
    .limit(3);

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      
      {/* Interactive Geographical View */}
      <InteractiveMap properties={properties || []} />

      {/* Featured Properties Section */}
      <FeaturedSection properties={properties?.slice(0, 3) || []} />

      <Agents agents={agents || []} />

      <EntryPoints />

      <AIBroker />

      <footer style={{ 
        padding: '160px 0 80px', 
        textAlign: 'center', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '0',
        background: '#080808'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            marginBottom: '4rem', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap',
            opacity: 0.8, 
            fontSize: '11px', 
            textTransform: 'uppercase', 
            fontWeight: 900, 
            letterSpacing: '2px', 
            color: '#FFFFFF' 
          }}>
            <span>Project Sale</span>
            <span>Asset Buy</span>
            <span>Elite Rent</span>
            <span>Global Brokerage</span>
          </div>
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 900, 
            fontFamily: 'var(--font-heading)', 
            marginBottom: '1.5rem',
            color: '#FFFFFF',
            textTransform: 'uppercase'
          }}>
            PROP<span style={{ color: 'var(--accent-gold)' }}>_AI</span>
          </div>
          <p style={{ opacity: 0.6, fontSize: '14px', maxWidth: '750px', margin: '0 auto', lineHeight: '2', color: '#FFFFFF', fontWeight: 600 }}>
            © 2026 PROP_AI Real Estate Platform. All rights reserved. Distributed Real Estate Intelligence for the modern investor. 
            Licensed across various global districts for premier brokerage and asset management. Built with Precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
