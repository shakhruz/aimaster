'use client'

import { useApp } from '@/lib/context'
import { t } from '@/lib/i18n'

export default function ThemeToggle() {
  const { theme, setTheme, lang } = useApp()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title={theme === 'dark' ? t(lang, 'theme.light') : t(lang, 'theme.dark')}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '6px 12px',
        cursor: 'pointer',
        color: 'var(--text)',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'all 0.2s',
      }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
      <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
        {theme === 'dark' ? t(lang, 'theme.light') : t(lang, 'theme.dark')}
      </span>
    </button>
  )
}
