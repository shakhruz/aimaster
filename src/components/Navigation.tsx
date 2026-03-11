'use client'

import { useApp } from '@/lib/context'
import { t } from '@/lib/i18n'
import ThemeToggle from './ThemeToggle'
import LangToggle from './LangToggle'

export default function Navigation() {
  const { lang } = useApp()

  const navItems = [
    { icon: '🏠', label: t(lang, 'nav.home'), href: '#hero' },
    { icon: '📚', label: t(lang, 'nav.modules'), href: '#modules' },
    { icon: '🎯', label: t(lang, 'nav.levels'), href: '#levels' },
    { icon: 'ℹ️', label: t(lang, 'nav.about'), href: '#about' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '240px',
        height: '100vh',
        background: 'var(--bg-card)',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        zIndex: 100,
        overflowY: 'auto',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            fontSize: '22px',
            fontWeight: '800',
            color: 'var(--accent)',
            letterSpacing: '-0.5px',
          }}
        >
          ⚡ AI Master
        </div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
          Master → Expert → Leader
        </div>
      </div>

      {/* Nav Items */}
      <div style={{ flex: 1 }}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              color: 'var(--text)',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '4px',
              transition: 'all 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(104,211,145,0.1)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'
            }}
          >
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
        <LangToggle />
        <ThemeToggle />
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '16px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          textAlign: 'center',
        }}
      >
        © 2025 AI Master
        <br />
        Powered by OpenClaw + Claude
      </div>
    </nav>
  )
}
