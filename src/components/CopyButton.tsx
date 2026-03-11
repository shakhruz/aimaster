'use client'

import { useState } from 'react'
import { useApp } from '@/app/layout'
import { t } from '@/lib/i18n'

interface CopyButtonProps {
  text: string
}

export default function CopyButton({ text }: CopyButtonProps) {
  const { lang } = useApp()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        background: copied ? 'var(--accent)' : 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        padding: '4px 10px',
        cursor: 'pointer',
        color: copied ? '#0f1117' : 'var(--text-muted)',
        fontSize: '12px',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',
      }}
    >
      {copied ? `✓ ${t(lang, 'copy.copied')}` : `📋 ${t(lang, 'copy.copy')}`}
    </button>
  )
}
