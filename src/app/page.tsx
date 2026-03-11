'use client'

import { useApp } from '@/lib/context'
import { t } from '@/lib/i18n'
import { modules, levels } from '@/lib/modules'
import ModuleCard from '@/components/ModuleCard'
import { ModuleStatus } from '@/types'

// First module available, rest locked by default
const defaultStatuses: Record<number, ModuleStatus> = {
  0: 'available',
  1: 'locked',
  2: 'locked',
  3: 'locked',
  4: 'locked',
  5: 'locked',
  6: 'locked',
  7: 'locked',
  8: 'locked',
  9: 'locked',
  10: 'locked',
}

const levelColors: Record<string, string> = {
  master: '#68d391',
  expert: '#63b3ed',
  leader: '#f6ad55',
}

export default function HomePage() {
  const { lang } = useApp()

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* HERO */}
      <section
        id="hero"
        style={{
          textAlign: 'center',
          padding: '80px 24px 60px',
          position: 'relative',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(104,211,145,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'inline-block',
            background: 'rgba(104,211,145,0.1)',
            border: '1px solid rgba(104,211,145,0.3)',
            borderRadius: '100px',
            padding: '6px 16px',
            fontSize: '13px',
            color: '#68d391',
            marginBottom: '24px',
            fontWeight: '500',
          }}
        >
          ⚡ OpenClaw + Claude · Master → Expert → Leader
        </div>

        <h1
          style={{
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: '900',
            letterSpacing: '-2px',
            lineHeight: '1.05',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, var(--text) 0%, #68d391 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {t(lang, 'hero.title')}
        </h1>

        <p
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: '600',
            color: 'var(--text)',
            marginBottom: '16px',
          }}
        >
          {t(lang, 'hero.subtitle')}
        </p>

        <p
          style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            maxWidth: '520px',
            margin: '0 auto 40px',
            lineHeight: '1.6',
          }}
        >
          {t(lang, 'hero.description')}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#modules"
            className="pulse-glow"
            style={{
              background: 'var(--accent)',
              color: '#0f1117',
              padding: '14px 32px',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-dark)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)'
            }}
          >
            {t(lang, 'hero.cta')} →
          </a>
          <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            {t(lang, 'hero.ctaSub')}
          </span>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '60px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '11', label: lang === 'ru' ? 'Модулей' : 'Modules' },
            { num: '3', label: lang === 'ru' ? 'Уровня' : 'Levels' },
            { num: '∞', label: lang === 'ru' ? 'Возможностей' : 'Possibilities' },
          ].map((stat) => (
            <div key={stat.num} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--accent)' }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LEVELS */}
      <section id="levels" style={{ padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '800',
              letterSpacing: '-1px',
              marginBottom: '12px',
            }}
          >
            {t(lang, 'levels.title')}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
            {t(lang, 'levels.subtitle')}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {levels.map((level, idx) => (
            <div
              key={level.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = level.color
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              }}
            >
              {/* Step number */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: `${level.color}20`,
                  color: level.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: '700',
                }}
              >
                {idx + 1}
              </div>

              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{level.icon}</div>

              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: '800',
                  color: level.color,
                  marginBottom: '8px',
                  letterSpacing: '-0.5px',
                }}
              >
                {level.title[lang]}
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                }}
              >
                {level.description[lang]}
              </p>

              {/* Progress dots */}
              <div style={{ display: 'flex', gap: '4px', marginTop: '20px' }}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: i <= idx ? level.color : 'var(--border)',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" style={{ padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '800',
              letterSpacing: '-1px',
              marginBottom: '12px',
            }}
          >
            {t(lang, 'modules.title')}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
            {t(lang, 'modules.subtitle')}
          </p>
        </div>

        {/* Group by level */}
        {(['master', 'expert', 'leader'] as const).map((levelId) => {
          const levelModules = modules.filter((m) => m.level === levelId)
          const levelInfo = levels.find((l) => l.id === levelId)!
          return (
            <div key={levelId} style={{ marginBottom: '40px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: `2px solid ${levelColors[levelId]}30`,
                }}
              >
                <span style={{ fontSize: '20px' }}>{levelInfo.icon}</span>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: levelColors[levelId],
                  }}
                >
                  {levelInfo.title[lang]}
                </h3>
                <span
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-card)',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    border: '1px solid var(--border)',
                  }}
                >
                  {levelModules.length} {lang === 'ru' ? 'мод.' : 'mod.'}
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '12px',
                }}
              >
                {levelModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    status={defaultStatuses[module.id]}
                  />
                ))}
              </div>
            </div>
          )
        })}

        {/* CTA */}
        <div
          id="about"
          style={{
            textAlign: 'center',
            marginTop: '60px',
            padding: '40px 24px',
            background: 'var(--bg-card)',
            borderRadius: '20px',
            border: '1px solid rgba(104,211,145,0.2)',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: '800',
              marginBottom: '12px',
              letterSpacing: '-0.5px',
            }}
          >
            {lang === 'ru' ? 'Готов начать?' : 'Ready to start?'}
          </h3>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '15px',
              marginBottom: '28px',
              maxWidth: '400px',
              margin: '0 auto 28px',
              lineHeight: '1.6',
            }}
          >
            {lang === 'ru'
              ? 'Установи OpenClaw, подключи Claude — и ты уже на пути к AI Master.'
              : 'Install OpenClaw, connect Claude — and you\'re already on your way to AI Master.'}
          </p>
          <a
            href="#modules"
            style={{
              background: 'var(--accent)',
              color: '#0f1117',
              padding: '14px 32px',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '16px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'
            }}
          >
            {t(lang, 'hero.cta')} →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '32px 24px',
          borderTop: '1px solid var(--border)',
          color: 'var(--text-muted)',
          fontSize: '13px',
        }}
      >
        <div style={{ marginBottom: '8px' }}>
          {t(lang, 'footer.made')} ❤️ OpenClaw + Claude
        </div>
        <div>© 2025 AI Master. {t(lang, 'footer.rights')}</div>
      </footer>
    </div>
  )
}
