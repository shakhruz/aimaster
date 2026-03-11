'use client'

import { Module, ModuleStatus } from '@/types'
import { useApp } from '@/lib/context'
import { t } from '@/lib/i18n'

interface ModuleCardProps {
  module: Module
  status?: ModuleStatus
  onClick?: () => void
}

const levelColors: Record<string, string> = {
  master: '#68d391',
  expert: '#63b3ed',
  leader: '#f6ad55',
}

export default function ModuleCard({ module, status = 'locked', onClick }: ModuleCardProps) {
  const { lang } = useApp()
  const isLocked = status === 'locked'
  const isCompleted = status === 'completed'
  const accentColor = levelColors[module.level]

  return (
    <div
      onClick={!isLocked ? onClick : undefined}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid',
        borderColor: isCompleted ? accentColor : isLocked ? 'var(--border)' : 'rgba(104,211,145,0.3)',
        borderRadius: '12px',
        padding: '16px',
        cursor: isLocked ? 'default' : 'pointer',
        opacity: isLocked ? 0.5 : 1,
        transition: 'all 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        if (!isLocked) {
          ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
          ;(e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px rgba(0,0,0,0.2)`
        }
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
      }}
    >
      {/* Level indicator */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3px',
          height: '100%',
          background: accentColor,
          borderRadius: '12px 0 0 12px',
        }}
      />

      <div style={{ paddingLeft: '8px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '24px' }}>{module.icon}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                fontSize: '10px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: accentColor,
                background: `${accentColor}20`,
                padding: '2px 6px',
                borderRadius: '4px',
              }}
            >
              {module.level}
            </span>
            {isCompleted && <span style={{ color: accentColor, fontSize: '16px' }}>✓</span>}
            {isLocked && <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>🔒</span>}
          </div>
        </div>

        {/* Module number */}
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
          {t(lang, 'modules.module')} {module.id}
        </div>

        {/* Title */}
        <div
          style={{
            fontWeight: '600',
            fontSize: '15px',
            color: isLocked ? 'var(--text-muted)' : 'var(--text)',
            lineHeight: '1.3',
          }}
        >
          {module.title[lang]}
        </div>

        {/* Status */}
        <div
          style={{
            marginTop: '8px',
            fontSize: '11px',
            color: isCompleted ? accentColor : isLocked ? 'var(--text-muted)' : '#63b3ed',
          }}
        >
          {isCompleted
            ? `✅ ${t(lang, 'modules.completed')}`
            : isLocked
            ? `🔒 ${t(lang, 'modules.locked')}`
            : `▶ ${t(lang, 'modules.available')}`}
        </div>
      </div>
    </div>
  )
}
