'use client'

import { useState, useEffect } from 'react'

interface ChecklistItemProps {
  moduleId: number
  index: number
  label: string
  onToggle?: (checked: boolean) => void
}

export default function ChecklistItem({ moduleId, index, label, onToggle }: ChecklistItemProps) {
  const key = `checklist_module${moduleId}_item${index}`
  const [checked, setChecked] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(key)
    if (saved === 'true') setChecked(true)
    setMounted(true)
  }, [key])

  const toggle = () => {
    const next = !checked
    setChecked(next)
    localStorage.setItem(key, String(next))
    onToggle?.(next)
  }

  if (!mounted) return null

  return (
    <div
      onClick={toggle}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 12px',
        borderRadius: '8px',
        cursor: 'pointer',
        background: checked ? 'rgba(104, 211, 145, 0.08)' : 'transparent',
        border: '1px solid',
        borderColor: checked ? 'rgba(104, 211, 145, 0.3)' : 'var(--border)',
        marginBottom: '6px',
        transition: 'all 0.2s',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '4px',
          border: '2px solid',
          borderColor: checked ? 'var(--accent)' : 'var(--text-muted)',
          background: checked ? 'var(--accent)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.2s',
        }}
      >
        {checked && (
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path
              d="M1 4L4.5 7.5L11 1"
              stroke="#0f1117"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span
        style={{
          color: checked ? 'var(--text-muted)' : 'var(--text)',
          textDecoration: checked ? 'line-through' : 'none',
          fontSize: '14px',
          transition: 'all 0.2s',
        }}
      >
        {label}
      </span>
    </div>
  )
}
