'use client'

import { useApp } from '@/app/layout'

export default function LangToggle() {
  const { lang, setLang } = useApp()

  return (
    <div
      style={{
        display: 'flex',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {(['ru', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: '6px 12px',
            cursor: 'pointer',
            border: 'none',
            background: lang === l ? 'var(--accent)' : 'transparent',
            color: lang === l ? '#0f1117' : 'var(--text-muted)',
            fontSize: '12px',
            fontWeight: lang === l ? '700' : '400',
            textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
