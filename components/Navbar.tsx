"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'EN' ? 'AR' : 'EN');
  };

  return (
    <nav style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: 1000,
      padding: '1.5rem 0',
      background: 'rgba(255, 255, 255, 0.85)', /* Light Glass */
      backdropFilter: 'blur(20px)',
      boxShadow: '0 4px 30px rgba(6, 78, 59, 0.05)',
      borderBottom: '1px solid rgba(6, 78, 59, 0.05)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ 
            background: 'var(--charcoal)', 
            width: '40px', 
            height: '40px', 
            borderRadius: '2px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Shield size={22} color="#FFFFFF" strokeWidth={2.5} />
          </div>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: '1.75rem', 
            letterSpacing: '-1px', 
            color: 'var(--charcoal)',
            textTransform: 'uppercase'
          }}>
            PROP<span style={{ color: 'var(--accent-gold)' }}>_AI</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="nav-links" style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--charcoal)' }}>{t.nav.home}</Link>
          <Link href="/sale" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--charcoal)' }}>{t.nav.sale}</Link>
          <Link href="/rental" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--charcoal)' }}>{t.nav.rental}</Link>
          <Link href="/brokerage" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--charcoal)' }}>{t.nav.brokerage}</Link>
          <Link href="/contact" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--charcoal)' }}>{t.nav.contact}</Link>
          <Link href="/about" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--charcoal)' }}>{t.nav.about}</Link>
        </div>

        {/* ACTIONS */}
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <button 
            onClick={toggleLang}
            style={{ 
              background: 'rgba(6, 78, 59, 0.05)',
              border: '1px solid rgba(6, 78, 59, 0.1)',
              color: 'var(--charcoal)',
              padding: '8px 15px',
              borderRadius: '2px',
              fontSize: '11px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
            <Globe size={14} /> {lang === 'EN' ? 'AR' : 'EN'}
          </button>

          <Link href="/login" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-gold)', letterSpacing: '2px' }}>
            {t.nav.login}
          </Link>
          
          <button className="btn-primary" style={{ padding: '12px 28px', fontSize: '11px' }}>
            {t.nav.getStarted}
          </button>
        </div>
      </div>
    </nav>
  );
}
