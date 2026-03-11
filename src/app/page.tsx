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

const levelAccents: Record<string, { color: string; glow: string; shadow: string }> = {
  master: {
    color: '#00d4ff',
    glow: 'rgba(0, 212, 255, 0.3)',
    shadow: '0 0 30px rgba(0, 212, 255, 0.2)',
  },
  expert: {
    color: '#9b59ff',
    glow: 'rgba(155, 89, 255, 0.3)',
    shadow: '0 0 30px rgba(155, 89, 255, 0.2)',
  },
  leader: {
    color: '#39ff85',
    glow: 'rgba(57, 255, 133, 0.3)',
    shadow: '0 0 30px rgba(57, 255, 133, 0.2)',
  },
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
        {/* Background glow orbs */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(0, 212, 255, 0.06) 0%, rgba(155, 89, 255, 0.04) 50%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '20%',
            width: '300px',
            height: '200px',
            background: 'radial-gradient(ellipse, rgba(57, 255, 133, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Badge */}
        <div
          className="animate-badge-pulse"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 212, 255, 0.08)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '100px',
            padding: '7px 18px',
            fontSize: '12px',
            color: '#00d4ff',
            marginBottom: '28px',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span style={{ display: 'inline-block', animation: 'pulse-glow 1.5s ease-in-out infinite' }}>⚡</span>
          OpenClaw + Claude · Master → Expert → Leader
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: 'clamp(48px, 9vw, 84px)',
            fontWeight: '900',
            letterSpacing: '-0.02em',
            lineHeight: '1.0',
            marginBottom: '24px',
            fontFamily: 'var(--font-orbitron, sans-serif)',
            background: 'linear-gradient(135deg, #00d4ff 0%, #9b59ff 60%, #39ff85 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            position: 'relative',
            zIndex: 1,
            filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.3))',
          }}
        >
          {t(lang, 'hero.title')}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(18px, 3vw, 26px)',
            fontWeight: '600',
            color: 'var(--text)',
            marginBottom: '16px',
            position: 'relative',
            zIndex: 1,
            textShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
          }}
        >
          {t(lang, 'hero.subtitle')}
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            margin: '0 auto 44px',
            lineHeight: '1.7',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {t(lang, 'hero.description')}
        </p>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <a
            href="#modules"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #9b59ff)',
              color: '#070b14',
              padding: '14px 36px',
              borderRadius: '12px',
              fontWeight: '800',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'inline-block',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(155, 89, 255, 0.2)',
              letterSpacing: '0.02em',
              fontFamily: 'var(--font-orbitron, sans-serif)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = 'translateY(-3px) scale(1.02)'
              el.style.boxShadow = '0 0 35px rgba(0, 212, 255, 0.7), 0 0 60px rgba(155, 89, 255, 0.4)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = 'translateY(0) scale(1)'
              el.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(155, 89, 255, 0.2)'
            }}
          >
            {t(lang, 'hero.cta')} →
          </a>
          <span
            style={{
              color: 'var(--text-muted)',
              fontSize: '13px',
              border: '1px solid rgba(0, 212, 255, 0.15)',
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(0, 212, 255, 0.03)',
            }}
          >
            {t(lang, 'hero.ctaSub')}
          </span>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '64px',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {[
            { num: '11', label: lang === 'ru' ? 'Модулей' : 'Modules' },
            { num: '3', label: lang === 'ru' ? 'Уровня' : 'Levels' },
            { num: '∞', label: lang === 'ru' ? 'Возможностей' : 'Possibilities' },
          ].map((stat) => (
            <div key={stat.num} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '42px',
                  fontWeight: '900',
                  color: '#00d4ff',
                  fontFamily: 'var(--font-orbitron, sans-serif)',
                  textShadow: '0 0 20px rgba(0, 212, 255, 0.6)',
                  animation: 'glow-text 3s ease-in-out infinite',
                  lineHeight: '1.1',
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider line */}
        <div
          style={{
            marginTop: '60px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(0, 212, 255, 0.3), rgba(155, 89, 255, 0.3), transparent)',
          }}
        />
      </section>

      {/* LEVELS */}
      <section id="levels" style={{ padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '800',
              letterSpacing: '-0.5px',
              marginBottom: '12px',
              fontFamily: 'var(--font-orbitron, sans-serif)',
              background: 'linear-gradient(135deg, var(--text) 0%, #a0c4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t(lang, 'levels.title')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
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
          {levels.map((level, idx) => {
            const accent = levelAccents[level.id] || levelAccents.master
            return (
              <div
                key={level.id}
                style={{
                  background: 'rgba(13, 21, 38, 0.8)',
                  border: `1px solid ${accent.glow}`,
                  borderRadius: '16px',
                  padding: '28px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = accent.color
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = accent.shadow
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = accent.glow
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Background glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(ellipse at top left, ${accent.glow.replace('0.3', '0.06')} 0%, transparent 60%)`,
                    pointerEvents: 'none',
                  }}
                />

                {/* Step number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `${accent.glow.replace('0.3', '0.15')}`,
                    border: `1px solid ${accent.color}40`,
                    color: accent.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '800',
                    fontFamily: 'var(--font-orbitron, sans-serif)',
                  }}
                >
                  {idx + 1}
                </div>

                {/* Icon */}
                <div
                  style={{
                    fontSize: '44px',
                    marginBottom: '16px',
                    position: 'relative',
                    zIndex: 1,
                    filter: `drop-shadow(0 0 12px ${accent.color}80)`,
                    display: 'inline-block',
                    animation: 'float 4s ease-in-out infinite',
                    animationDelay: `${idx * 0.5}s`,
                  }}
                >
                  {level.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    color: accent.color,
                    marginBottom: '10px',
                    letterSpacing: '0.03em',
                    fontFamily: 'var(--font-orbitron, sans-serif)',
                    textShadow: `0 0 15px ${accent.glow}`,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {level.title[lang]}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {level.description[lang]}
                </p>

                {/* Progress dots */}
                <div style={{ display: 'flex', gap: '6px', marginTop: '20px', position: 'relative', zIndex: 1 }}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: i <= idx ? '20px' : '6px',
                        height: '6px',
                        borderRadius: '3px',
                        background: i <= idx ? accent.color : 'rgba(0, 212, 255, 0.1)',
                        transition: 'all 0.3s',
                        boxShadow: i <= idx ? `0 0 6px ${accent.glow}` : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" style={{ padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: '800',
              letterSpacing: '-0.5px',
              marginBottom: '12px',
              fontFamily: 'var(--font-orbitron, sans-serif)',
              background: 'linear-gradient(135deg, var(--text) 0%, #a0c4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t(lang, 'modules.title')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
            {t(lang, 'modules.subtitle')}
          </p>
        </div>

        {/* Group by level */}
        {(['master', 'expert', 'leader'] as const).map((levelId) => {
          const levelModules = modules.filter((m) => m.level === levelId)
          const levelInfo = levels.find((l) => l.id === levelId)!
          const accent = levelAccents[levelId]
          return (
            <div key={levelId} style={{ marginBottom: '48px' }}>
              {/* Level header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                  paddingBottom: '14px',
                  borderBottom: `1px solid ${accent.glow}`,
                }}
              >
                <span
                  style={{
                    fontSize: '22px',
                    filter: `drop-shadow(0 0 8px ${accent.color}80)`,
                  }}
                >
                  {levelInfo.icon}
                </span>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: accent.color,
                    fontFamily: 'var(--font-orbitron, sans-serif)',
                    textShadow: `0 0 12px ${accent.glow}`,
                    letterSpacing: '0.05em',
                  }}
                >
                  {levelInfo.title[lang]}
                </h3>
                <span
                  style={{
                    fontSize: '11px',
                    color: accent.color,
                    background: `${accent.color}15`,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    border: `1px solid ${accent.color}30`,
                    fontWeight: '600',
                    letterSpacing: '0.05em',
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

        {/* CTA Section */}
        <div
          id="about"
          style={{
            textAlign: 'center',
            marginTop: '60px',
            padding: '48px 32px',
            background: 'rgba(13, 21, 38, 0.8)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow orbs */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-10%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-50%',
              right: '-10%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(155, 89, 255, 0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              fontSize: '56px',
              marginBottom: '20px',
              display: 'inline-block',
              animation: 'float 3s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.5))',
              position: 'relative',
              zIndex: 1,
            }}
          >
            🚀
          </div>

          <h3
            style={{
              fontSize: '28px',
              fontWeight: '800',
              marginBottom: '14px',
              fontFamily: 'var(--font-orbitron, sans-serif)',
              background: 'linear-gradient(135deg, #00d4ff, #9b59ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {lang === 'ru' ? 'Готов начать?' : 'Ready to start?'}
          </h3>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '15px',
              marginBottom: '32px',
              maxWidth: '420px',
              margin: '0 auto 32px',
              lineHeight: '1.7',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {lang === 'ru'
              ? 'Установи OpenClaw, подключи Claude — и ты уже на пути к AI Master.'
              : "Install OpenClaw, connect Claude — and you're already on your way to AI Master."}
          </p>

          <a
            href="#modules"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #9b59ff)',
              color: '#070b14',
              padding: '14px 36px',
              borderRadius: '12px',
              fontWeight: '800',
              fontSize: '16px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
              fontFamily: 'var(--font-orbitron, sans-serif)',
              letterSpacing: '0.05em',
              position: 'relative',
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = 'translateY(-3px) scale(1.02)'
              el.style.boxShadow = '0 0 35px rgba(0, 212, 255, 0.7), 0 0 60px rgba(155, 89, 255, 0.4)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = 'translateY(0) scale(1)'
              el.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)'
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
          padding: '36px 24px',
          borderTop: '1px solid rgba(0, 212, 255, 0.1)',
          color: 'var(--text-muted)',
          fontSize: '13px',
          letterSpacing: '0.03em',
        }}
      >
        <div style={{ marginBottom: '8px' }}>
          <span style={{ color: 'var(--text-secondary)' }}>
            {t(lang, 'footer.made')}
          </span>
          {' '}
          <span style={{ color: '#00d4ff', textShadow: '0 0 8px rgba(0, 212, 255, 0.5)' }}>
            ❤️ OpenClaw + Claude
          </span>
        </div>
        <div style={{ color: 'var(--text-muted)' }}>
          © 2025 AI Master.{' '}
          <span style={{ color: 'rgba(155, 89, 255, 0.7)' }}>
            {t(lang, 'footer.rights')}
          </span>
        </div>
      </footer>
    </div>
  )
}
