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
  master: '#00d4ff',
  expert: '#9b59ff',
  leader: '#39ff85',
}

const levelGlows: Record<string, string> = {
  master: 'rgba(0, 212, 255, 0.4)',
  expert: 'rgba(155, 89, 255, 0.4)',
  leader: 'rgba(57, 255, 133, 0.4)',
}

const levelBgGlows: Record<string, string> = {
  master: 'rgba(0, 212, 255, 0.08)',
  expert: 'rgba(155, 89, 255, 0.08)',
  leader: 'rgba(57, 255, 133, 0.08)',
}

export default function ModuleCard({ module, status = 'locked', onClick }: ModuleCardProps) {
  const { lang } = useApp()
  const isLocked = status === 'locked'
  const isCompleted = status === 'completed'
  const accentColor = levelColors[module.level]
  const glowColor = levelGlows[module.level]
  const bgGlow = levelBgGlows[module.level]

  return (
    <div
      onClick={!isLocked ? onClick : undefined}
      style={{
        background: isLocked
          ? 'rgba(13, 21, 38, 0.4)'
          : `rgba(13, 21, 38, 0.8)`,
        border: `1px solid ${isLocked ? 'rgba(0, 212, 255, 0.08)' : (isCompleted ? accentColor : `rgba(${accentColor === '#00d4ff' ? '0, 212, 255' : accentColor === '#9b59ff' ? '155, 89, 255' : '57, 255, 133'}, 0.3)`)}`,
        borderRadius: '12px',
        padding: '16px',
        cursor: isLocked ? 'default' : 'pointer',
        opacity: isLocked ? 0.45 : 1,
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        if (!isLocked) {
          const el = e.currentTarget as HTMLDivElement
          el.style.transform = 'translateY(-3px)'
          el.style.boxShadow = `0 8px 30px ${glowColor}, 0 0 0 1px ${accentColor}40`
          el.style.borderColor = accentColor
          el.style.background = `rgba(13, 21, 38, 0.95)`
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
        if (!isLocked) {
          el.style.borderColor = isCompleted ? accentColor : `${accentColor}4D`
          el.style.background = 'rgba(13, 21, 38, 0.8)'
        }
      }}
    >
      {/* Glow background */}
      {!isLocked && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse at top left, ${bgGlow} 0%, transparent 60%)`,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Level indicator bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3px',
          height: '100%',
          background: isLocked
            ? 'rgba(90, 127, 168, 0.3)'
            : `linear-gradient(to bottom, ${accentColor}, ${accentColor}80)`,
          borderRadius: '12px 0 0 12px',
          boxShadow: isLocked ? 'none' : `0 0 8px ${glowColor}`,
        }}
      />

      <div style={{ paddingLeft: '8px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          {/* Icon with glow */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: isLocked ? 'rgba(90, 127, 168, 0.1)' : bgGlow,
              border: `1px solid ${isLocked ? 'rgba(90, 127, 168, 0.2)' : accentColor + '40'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              boxShadow: isLocked ? 'none' : `0 0 10px ${glowColor}`,
              filter: isLocked ? 'grayscale(1) opacity(0.5)' : 'none',
            }}
          >
            {module.icon}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                fontSize: '9px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: isLocked ? 'var(--text-muted)' : accentColor,
                background: isLocked ? 'rgba(90, 127, 168, 0.1)' : `${accentColor}18`,
                padding: '2px 6px',
                borderRadius: '4px',
                border: `1px solid ${isLocked ? 'rgba(90, 127, 168, 0.2)' : accentColor + '40'}`,
                fontFamily: 'var(--font-orbitron, sans-serif)',
              }}
            >
              {module.level}
            </span>
            {isCompleted && (
              <span style={{ color: accentColor, fontSize: '14px', filter: `drop-shadow(0 0 4px ${glowColor})` }}>
                ✓
              </span>
            )}
            {isLocked && (
              <span style={{ color: 'var(--text-muted)', fontSize: '14px', opacity: 0.6 }}>
                🔒
              </span>
            )}
          </div>
        </div>

        {/* Module number */}
        <div
          style={{
            fontSize: '10px',
            color: 'var(--text-muted)',
            marginBottom: '4px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {t(lang, 'modules.module')} {module.id + 1}
        </div>

        {/* Title */}
        <div
          style={{
            fontWeight: '600',
            fontSize: '14px',
            color: isLocked ? 'var(--text-muted)' : 'var(--text)',
            lineHeight: '1.3',
          }}
        >
          {module.title[lang]}
        </div>

        {/* Status */}
        <div
          style={{
            marginTop: '10px',
            fontSize: '11px',
            color: isCompleted
              ? accentColor
              : isLocked
              ? 'var(--text-muted)'
              : 'var(--accent-cyan)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            textShadow: (!isLocked && !isCompleted) ? '0 0 8px rgba(0, 212, 255, 0.6)' : 'none',
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
