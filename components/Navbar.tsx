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

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/sale', label: t.nav.sale },
    { href: '/rental', label: t.nav.rental },
    { href: '/brokerage', label: t.nav.brokerage },
    { href: '/contact', label: t.nav.contact },
    { href: '/about', label: t.nav.about },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: 1000,
        padding: '1.25rem 0',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 30px rgba(6, 78, 59, 0.05)',
        borderBottom: '1px solid rgba(6, 78, 59, 0.05)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* LOGO */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ 
              background: 'var(--charcoal)', 
              width: '32px', 
              height: '32px', 
              borderRadius: '2px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Shield size={18} color="#FFFFFF" strokeWidth={2.5} />
            </div>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              letterSpacing: '-1px', 
              color: 'var(--charcoal)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}>
              PROP<span style={{ color: 'var(--accent-gold)' }}>_AI</span>
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="nav-links hidden-md" style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--charcoal)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ACTIONS */}
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button 
              onClick={toggleLang}
              style={{ 
                background: 'rgba(6, 78, 59, 0.05)',
                border: '1px solid rgba(6, 78, 59, 0.1)',
                color: 'var(--charcoal)',
                padding: '8px 12px',
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

            <div className="hidden-sm" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Link href="/login" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-gold)', letterSpacing: '2px' }}>
                {t.nav.login}
              </Link>
              
              <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '11px' }}>
                {t.nav.getStarted}
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button 
              className="show-sm" 
              onClick={() => setIsOpen(!isOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--charcoal)', cursor: 'pointer', zIndex: 3000 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1rem 0' }} />
          <Link href="/login" style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', fontWeight: 700 }} onClick={() => setIsOpen(false)}>
            {t.nav.login}
          </Link>
          <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            {t.nav.getStarted}
          </button>
        </div>
      </div>
    </>
  );
}
