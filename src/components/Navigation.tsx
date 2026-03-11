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
        background: 'rgba(7, 11, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(0, 212, 255, 0.15)',
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
            letterSpacing: '0.05em',
            fontFamily: 'var(--font-orbitron, sans-serif)',
            background: 'linear-gradient(135deg, #00d4ff 0%, #9b59ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              animation: 'pulse-glow 2s ease-in-out infinite',
              WebkitTextFillColor: 'initial',
              background: 'none',
            }}
          >
            ⚡
          </span>
          AI Master
        </div>
        <div
          style={{
            fontSize: '11px',
            color: 'var(--text-muted)',
            marginTop: '6px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
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
              color: 'var(--text-secondary)',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '4px',
              transition: 'all 0.2s',
              textDecoration: 'none',
              borderLeft: '2px solid transparent',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'rgba(0, 212, 255, 0.08)'
              el.style.color = 'var(--accent-cyan)'
              el.style.borderLeftColor = 'var(--accent-cyan)'
              el.style.textShadow = '0 0 12px rgba(0, 212, 255, 0.6)'
              el.style.paddingLeft = '16px'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'transparent'
              el.style.color = 'var(--text-secondary)'
              el.style.borderLeftColor = 'transparent'
              el.style.textShadow = 'none'
              el.style.paddingLeft = '12px'
            }}
          >
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>

      {/* Controls */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(0, 212, 255, 0.1)',
        }}
      >
        <LangToggle />
        <ThemeToggle />
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '16px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(0, 212, 255, 0.1)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          textAlign: 'center',
          lineHeight: '1.6',
        }}
      >
        © 2025 AI Master
        <br />
        <span style={{ color: 'rgba(0, 212, 255, 0.5)' }}>Powered by OpenClaw + Claude</span>
      </div>
    </nav>
  )
}
