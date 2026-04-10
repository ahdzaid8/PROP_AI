"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from 'next/link';

export default function EntryPoints() {
  const { lang, t } = useLanguage();

  const entries = [
    {
      title: lang === 'EN' ? "Project Sale" : "بيع المشاريع",
      id: 'sale',
      href: '/sale',
      description: lang === 'EN' 
        ? "Our dedicated sales team offers unmatched exposure in the local and global markets." 
        : "يقدم فريق المبيعات المتخصص لدينا تغطية لا مثيل لها في الأسواق المحلية والعالمية.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=200&auto=format&fit=crop"
    },
    {
      title: lang === 'EN' ? "Luxury Buy" : "شراء فاخر",
      id: 'buying',
      href: '/sale',
      description: lang === 'EN'
        ? "Invest in high-yield luxury properties. AI-powered matching for your unique lifestyle goals."
        : "استثمر في عقارات فاخرة عالية العائد. مطابقة مدعومة بالذكاء الاصطناعي لأهدافك المعيشية.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop"
    },
    {
      title: lang === 'EN' ? "Elite Rental" : "تأجير النخبة",
      id: 'rental',
      href: '/rental',
      description: lang === 'EN'
        ? "Access a curated list of short and long-term rentals with full AI-vetting and support."
        : "الوصول إلى قائمة منسقة من عقارات الإيجار قصيرة وطويلة الأجل مع فحص شامل ودعم.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=200&auto=format&fit=crop"
    },
    {
      title: lang === 'EN' ? "Market Brokerage" : "وساطة السوق",
      id: 'brokerage',
      href: '/brokerage',
      description: lang === 'EN'
        ? "Let our AI coordinate multi-party brokerage deals to streamline your transaction lifecycle."
        : "دع ذكاؤنا الاصطناعي ينسق صفقات الوساطة متعددة الأطراف لتبسيط دورة معاملاتك.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', fontWeight: 900, color: 'var(--charcoal)' }}>
          {t.entryPoints.dreamHeader} <span className="gold-text">{t.entryPoints.dreamSub}</span>
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', opacity: 0.7, color: 'var(--charcoal)' }}>{t.entryPoints.desc}</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem'
      }}>
        {entries.map((item, idx) => (
          <Link key={item.id} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div
              whileHover={{ y: -8, background: '#FFFFFF' }}
              className="glass"
              style={{
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'var(--transition)',
                border: '1px solid var(--accent-gold)', /* Added Gold Border */
                borderBottom: '4px solid var(--accent-gold)',
                cursor: 'pointer',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.6)'
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '4px',
                overflow: 'hidden',
                background: 'rgba(23, 37, 84, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.5rem',
                border: '1px solid var(--glass-border)'
              }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--charcoal)' }}>{item.title}</h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6, fontSize: '0.9rem', color: 'var(--charcoal)' }}>{item.description}</p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {lang === 'EN' ? 'Explore' : 'استكشف'} <CheckCircle2 size={14} />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
