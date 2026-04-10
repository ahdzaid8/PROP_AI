"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const { lang, t } = useLanguage();
  
  // Luxury Slide Deck for the Hero Showcase
  const slides = [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop", // Modern Exterior
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop", // Minimalist Pool
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop", // Detail View
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"  // Mediterranean Vibe
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-play for a dynamic feel
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ 
      minHeight: 'auto', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative', 
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)', 
      paddingTop: '160px',
      paddingBottom: '40px'
    }}>
      {/* Background Ambience */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(184, 150, 12, 0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
              <Sparkles size={18} fill="currentColor" />
              <span style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px' }}>
                {t.hero.marketIntel}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              fontWeight: 900,
              maxWidth: '800px',
              color: 'var(--charcoal)',
              letterSpacing: lang === 'EN' ? '-0.5px' : '0'
            }}>
              <span style={{ display: 'block' }}>{t.hero.headline}</span>
              <span style={{ color: 'var(--accent-gold)' }}>{t.hero.subHeadline}</span>
            </h1>

            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.7', 
              opacity: 0.8, 
              color: 'var(--charcoal)',
              marginBottom: '2rem',
              fontWeight: 400,
              maxWidth: '600px'
            }}>
              {t.hero.desc}
            </p>

            <div style={{ 
              background: 'rgba(255, 255, 255, 0.4)', 
              backdropFilter: 'blur(10px)',
              padding: '12px 24px',
              borderRadius: '2px',
              border: '1px solid var(--glass-border)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <ShieldCheck size={16} color="var(--accent-gold)" /> 
              <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--charcoal)' }}>
                {lang === 'EN' ? 'Elite Verified Properties' : 'عقارات نخبة موثقة'}
              </span>
            </div>
          </div>

          {/* DYNAMIC IMAGE SLIDER ON THE RIGHT */}
          <div style={{ 
            width: '500px', 
            height: '380px', 
            position: 'relative',
            borderRadius: '4px',
            boxShadow: '0 40px 80px rgba(23, 37, 84, 0.15)',
            border: '4px solid var(--accent-gold)',
            outline: '6px solid #FFFFFF'
          }}>
            <AnimatePresence mode="wait">
              <motion.img 
                key={current}
                src={slides[current]} 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  inset: 0
                }}
              />
            </AnimatePresence>

            {/* Controls */}
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', display: 'flex', gap: '10px', zIndex: 10 }}>
              <button 
                onClick={prevSlide}
                style={{ 
                  background: 'rgba(0,0,0,0.4)', 
                  border: 'none', 
                  color: '#FFF', 
                  padding: '10px', 
                  borderRadius: '2px', 
                  cursor: 'pointer',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                style={{ 
                  background: 'var(--accent-gold)', 
                  border: 'none', 
                  color: '#FFF', 
                  padding: '10px', 
                  borderRadius: '2px', 
                  cursor: 'pointer' 
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', gap: '8px', zIndex: 10 }}>
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    width: i === current ? '30px' : '8px', 
                    height: '8px', 
                    background: i === current ? 'var(--accent-gold)' : 'rgba(255,255,255,0.5)',
                    borderRadius: '4px',
                    transition: '0.3s'
                  }} 
                />
              ))}
            </div>

            <div style={{ 
              position: 'absolute', 
              top: '20px', 
              right: '20px',
              background: 'var(--accent-gold)',
              padding: '6px 15px',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 900,
              textTransform: 'uppercase',
              zIndex: 10
            }}>
              {lang === 'EN' ? 'Elite Showcase' : 'معرض النخبة'}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
