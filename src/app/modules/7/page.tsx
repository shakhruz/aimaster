'use client'

import { useApp } from '@/lib/context'
import Link from 'next/link'

export default function Module7Page() {
  const { lang } = useApp()
  const titleRu = 'Модуль 7 — Автоматизация — Heartbeat и Cron'
  const titleEn = 'Module 7 — Automation'
  const descRu = 'Morning brief, email digest, calendar conflicts. Разница heartbeat vs cron.'
  const descEn = 'Morning brief, email digest, calendar conflicts. Difference between heartbeat vs cron.'
  const durRu = '⏱ 75 мин · ⚙️ Практика'
  const durEn = '⏱ 75 min · ⚙️ Practice'
  const navPrevRu = '← Модуль 6: Субагенты'
  const navPrevEn = '← Module 6: Sub-agents'
  const navNextRu = 'Модуль 8: Production →'
  const navNextEn = 'Module 8: Production →'

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 20px 80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
        <Link href="/modules/6" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
          {lang === 'ru' ? navPrevRu : navPrevEn}
        </Link>
        <Link href="/modules/8" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
          {lang === 'ru' ? navNextRu : navNextEn}
        </Link>
      </div>

      <div style={{
        background: 'rgba(0,212,255,0.05)',
        border: '1px solid rgba(0,212,255,0.2)',
        borderRadius: '16px',
        padding: '32px',
        marginBottom: '28px',
      }}>
        <div style={{ fontSize: '13px', color: '#00d4ff', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          MODULE 07
        </div>
        <h1 style={{
          fontSize: 'clamp(26px,5vw,40px)',
          fontWeight: '900',
          fontFamily: 'var(--font-orbitron,sans-serif)',
          background: 'linear-gradient(135deg,#00d4ff,#9b59ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '10px',
        }}>
          {lang === 'ru' ? titleRu : titleEn}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '14px' }}>
          {lang === 'ru' ? descRu : descEn}
        </p>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '100px', padding: '4px 14px' }}>
          {lang === 'ru' ? durRu : durEn}
        </span>
      </div>

      <div style={{
        background: 'rgba(13,21,38,0.8)',
        border: '1px solid rgba(155,89,255,0.2)',
        borderRadius: '14px',
        padding: '48px 32px',
        textAlign: 'center',
        marginBottom: '28px',
      }}>
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>🚧</div>
        <h2 style={{
          fontSize: '22px',
          fontWeight: '800',
          color: '#9b59ff',
          fontFamily: 'var(--font-orbitron,sans-serif)',
          marginBottom: '12px',
        }}>
          {lang === 'ru' ? 'Контент скоро' : 'Content Coming Soon'}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '400px', margin: '0 auto 24px', lineHeight: '1.7' }}>
          {lang === 'ru'
            ? 'Этот модуль находится в разработке. Подпишись на Telegram-канал, чтобы узнать о запуске.'
            : 'This module is under development. Subscribe to the Telegram channel to get notified at launch.'}
        </p>
        <a
          href="https://t.me/ashotai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(135deg,#9b59ff,#00d4ff)',
            color: '#070b14',
            padding: '12px 28px',
            borderRadius: '10px',
            fontWeight: '800',
            fontSize: '14px',
            textDecoration: 'none',
            display: 'inline-block',
            fontFamily: 'var(--font-orbitron,sans-serif)',
          }}
        >
          {lang === 'ru' ? '📬 Уведомить меня' : '📬 Notify Me'}
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/modules/6" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '10px 0' }}>
          {lang === 'ru' ? navPrevRu : navPrevEn}
        </Link>
        <Link href="/modules/8" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '10px 0' }}>
          {lang === 'ru' ? navNextRu : navNextEn}
        </Link>
      </div>
    </div>
  )
}
