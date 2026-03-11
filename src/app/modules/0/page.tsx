'use client'

import { useState, useEffect } from 'react'
import { useApp } from '@/lib/context'
import CopyButton from '@/components/CopyButton'
import Link from 'next/link'

const t = {
  ru: {
    title: 'Модуль 0 — Зачем OpenClaw',
    subtitle: 'Архитектура, отличия от ChatGPT/Claude, реальные кейсы',
    duration: '⏱ 20 мин · 📖 Обзор',
    progress: 'Прогресс модуля',
    nav_next: 'Модуль 1: Быстрый старт →',
    nav_home: '← К курсу',
    what_title: 'Что такое OpenClaw',
    what_desc: 'OpenClaw — open-source daemon (250K+ ⭐ на GitHub), который запускается на твоей машине и подключает AI к любым мессенджерам.',
    feat1_title: 'OpenClaw = Daemon',
    feat1_desc: 'Локальный процесс на твоей машине. Не SaaS — работает без облака, данные не уходят к третьим лицам.',
    feat2_title: 'Gateway + Channels',
    feat2_desc: 'Один агент — несколько интерфейсов. WhatsApp, Telegram, Discord, iMessage — всё через один Gateway.',
    feat3_title: 'Skills = Руки агента',
    feat3_desc: 'Маркетплейс из 5700+ расширений. Поиск, скрапинг, email, календарь, код — всё подключается командой.',
    compare_title: '🆚 OpenClaw vs ChatGPT',
    param: 'Параметр',
    openclaw: 'OpenClaw',
    chatgpt: 'ChatGPT / Claude Web',
    manus: 'Manus AI',
    cases_title: '🏆 Реальные кейсы',
    cases_personal: 'Личная продуктивность:',
    cases_biz: 'Бизнес и разработка:',
    cta_title: 'Что ты построишь в курсе',
    cta_desc: 'Персональный AI-агент с именем и характером (SOUL.md), доступный через Telegram и WhatsApp, с памятью между сессиями, 3–5 рабочими скиллами, утренним брифингом и базовой защитой от атак.',
    checks: ['Понял что такое OpenClaw', 'Изучил архитектуру (Gateway + Channels + Skills)', 'Нашёл свой кейс использования', 'Готов к установке'],
  },
  en: {
    title: 'Module 0 — Why OpenClaw',
    subtitle: 'Architecture, differences from ChatGPT/Claude, real use cases',
    duration: '⏱ 20 min · 📖 Overview',
    progress: 'Module Progress',
    nav_next: 'Module 1: Quick Start →',
    nav_home: '← To Course',
    what_title: 'What is OpenClaw',
    what_desc: 'OpenClaw is an open-source daemon (250K+ ⭐ on GitHub) that runs on your machine and connects AI to any messaging apps.',
    feat1_title: 'OpenClaw = Daemon',
    feat1_desc: 'Local process on your machine. Not SaaS — works without the cloud, data never leaves to third parties.',
    feat2_title: 'Gateway + Channels',
    feat2_desc: 'One agent — multiple interfaces. WhatsApp, Telegram, Discord, iMessage — all through one Gateway.',
    feat3_title: 'Skills = Agent Arms',
    feat3_desc: '5700+ extensions marketplace. Search, scraping, email, calendar, code — all connected with one command.',
    compare_title: '🆚 OpenClaw vs ChatGPT',
    param: 'Parameter',
    openclaw: 'OpenClaw',
    chatgpt: 'ChatGPT / Claude Web',
    manus: 'Manus AI',
    cases_title: '🏆 Real Use Cases',
    cases_personal: 'Personal productivity:',
    cases_biz: 'Business & development:',
    cta_title: 'What you will build',
    cta_desc: 'A personal AI agent with a name and personality (SOUL.md), accessible via Telegram and WhatsApp, with memory between sessions, 3–5 working skills, morning briefing and basic attack protection.',
    checks: ['Understood what OpenClaw is', 'Learned the architecture (Gateway + Channels + Skills)', 'Found your use case', 'Ready for installation'],
  },
}

const compareRows = {
  ru: [
    ['Хранение данных', '✅ Локально на твоей машине', 'В облаке провайдера', 'В облаке Manus'],
    ['Каналы связи', '✅ WhatsApp, TG, Discord, iMessage', 'Только веб-интерфейс', 'Только веб-интерфейс'],
    ['Память между сессиями', '✅ Да, через markdown файлы', 'Ограниченно (Projects)', 'Да, облачная'],
    ['Расширяемость', '✅ 5700+ скиллов, API, хуки', 'Плагины (ограничено)', 'Встроенные инструменты'],
    ['Стоимость', '✅ Бесплатно (open source) + API', '$20–200/мес подписка', '$50+/мес'],
    ['Контроль над агентом', '✅ Полный (SOUL.md, AGENTS.md)', 'Custom Instructions', 'Ограниченный'],
  ],
  en: [
    ['Data storage', '✅ Locally on your machine', 'In provider cloud', 'In Manus cloud'],
    ['Channels', '✅ WhatsApp, TG, Discord, iMessage', 'Web interface only', 'Web interface only'],
    ['Memory between sessions', '✅ Yes, via markdown files', 'Limited (Projects)', 'Yes, cloud'],
    ['Extensibility', '✅ 5700+ skills, API, hooks', 'Plugins (limited)', 'Built-in tools'],
    ['Cost', '✅ Free (open source) + API', '$20–200/mo subscription', '$50+/mo'],
    ['Agent control', '✅ Full (SOUL.md, AGENTS.md)', 'Custom Instructions', 'Limited'],
  ],
}

const STORAGE_KEY = 'aimaster_module_0_checks'

export default function Module0Page() {
  const { lang } = useApp()
  const text = t[lang]
  const rows = compareRows[lang]
  const [checks, setChecks] = useState<boolean[]>([false, false, false, false])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setChecks(JSON.parse(saved))
  }, [])

  const toggle = (i: number) => {
    const next = checks.map((v, idx) => idx === i ? !v : v)
    setChecks(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  const done = checks.filter(Boolean).length
  const pct = Math.round((done / checks.length) * 100)

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 20px 80px' }}>

      {/* Nav top */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <Link href="/" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
          {text.nav_home}
        </Link>
        <Link href="/modules/1" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
          {text.nav_next}
        </Link>
      </div>

      {/* Header */}
      <div style={{
        background: 'rgba(0,212,255,0.05)',
        border: '1px solid rgba(0,212,255,0.2)',
        borderRadius: '16px',
        padding: '32px',
        marginBottom: '28px',
      }}>
        <div style={{ fontSize: '13px', color: '#00d4ff', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          MODULE 00
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
          {text.title}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '14px' }}>{text.subtitle}</p>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '100px', padding: '4px 14px' }}>
          {text.duration}
        </span>
      </div>

      {/* What is OpenClaw */}
      <div style={{ background: 'rgba(13,21,38,0.8)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '14px', padding: '24px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#00d4ff', marginBottom: '12px' }}>🦞 {text.what_title}</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px' }}>{text.what_desc}</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '14px', marginTop: '20px' }}>
          {[
            { icon: '🦞', title: text.feat1_title, desc: text.feat1_desc },
            { icon: '🔌', title: text.feat2_title, desc: text.feat2_desc },
            { icon: '🧩', title: text.feat3_title, desc: text.feat3_desc },
          ].map((f) => (
            <div key={f.title} style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: '10px', padding: '16px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{f.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Compare table */}
      <div style={{ background: 'rgba(13,21,38,0.8)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '14px', padding: '24px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#00d4ff', marginBottom: '16px' }}>{text.compare_title}</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr>
                {[text.param, text.openclaw, text.chatgpt, text.manus].map((h) => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', borderBottom: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff', fontWeight: '700', fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(0,212,255,0.06)' }}>
                  <td style={{ padding: '10px 12px', color: 'var(--text)', fontWeight: '600' }}>{row[0]}</td>
                  <td style={{ padding: '10px 12px', color: '#39ff85', fontWeight: '600' }}>{row[1]}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{row[2]}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Real cases */}
      <div style={{ background: 'rgba(13,21,38,0.8)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '14px', padding: '24px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#00d4ff', marginBottom: '16px' }}>{text.cases_title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>{text.cases_personal}</div>
            {[
              '☀️ ' + (lang === 'ru' ? 'Утренний брифинг (погода + задачи + новости)' : 'Morning briefing (weather + tasks + news)'),
              '📧 ' + (lang === 'ru' ? 'Фильтрация и приоритизация почты' : 'Email filtering and prioritization'),
              '📅 ' + (lang === 'ru' ? 'Автоблокировка времени в календаре' : 'Auto-blocking time in calendar'),
              '💰 ' + (lang === 'ru' ? 'Трекинг расходов и split после поездок' : 'Expense tracking and trip split'),
              '📝 ' + (lang === 'ru' ? 'Еженедельный review по транскриптам' : 'Weekly review from meeting transcripts'),
            ].map((item) => (
              <div key={item} style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '2', padding: '2px 0' }}>{item}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>{text.cases_biz}</div>
            {[
              '🤝 ' + (lang === 'ru' ? 'Customer Support первой линии' : 'First-line Customer Support'),
              '📊 ' + (lang === 'ru' ? 'Sales Development (SDR автоматизация)' : 'Sales Development (SDR automation)'),
              '🔧 ' + (lang === 'ru' ? 'GitHub issues + code review' : 'GitHub issues + code review'),
              '🔬 ' + (lang === 'ru' ? 'Background research через субагентов' : 'Background research via sub-agents'),
              '🏠 ' + (lang === 'ru' ? 'Smart home (Homey + Google Places)' : 'Smart home (Homey + Google Places)'),
            ].map((item) => (
              <div key={item} style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '2', padding: '2px 0' }}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.08),rgba(155,89,255,0.08))', border: '1px solid rgba(0,212,255,0.25)', borderRadius: '14px', padding: '24px', marginBottom: '28px' }}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>💡</div>
        <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#00d4ff', marginBottom: '10px' }}>{text.cta_title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>{text.cta_desc}</p>
      </div>

      {/* Progress checklist */}
      <div style={{ background: 'rgba(13,21,38,0.8)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '14px', padding: '24px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)' }}>{text.progress}</h2>
          <span style={{ fontSize: '13px', color: '#00d4ff', fontWeight: '700' }}>{done}/{checks.length} ({pct}%)</span>
        </div>
        <div style={{ height: '4px', background: 'rgba(0,212,255,0.1)', borderRadius: '2px', marginBottom: '20px' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#00d4ff,#9b59ff)', borderRadius: '2px', transition: 'width 0.3s' }} />
        </div>
        {text.checks.map((label, i) => (
          <div key={i} onClick={() => toggle(i)} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: i < text.checks.length - 1 ? '1px solid rgba(0,212,255,0.07)' : 'none', cursor: 'pointer' }}>
            <div style={{
              width: '20px', height: '20px', borderRadius: '6px',
              border: `2px solid ${checks[i] ? '#00d4ff' : 'rgba(0,212,255,0.3)'}`,
              background: checks[i] ? 'rgba(0,212,255,0.2)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '12px', flexShrink: 0, transition: 'all 0.2s',
            }}>
              {checks[i] ? '✓' : ''}
            </div>
            <span style={{ color: checks[i] ? 'var(--text)' : 'var(--text-secondary)', fontSize: '14px', textDecoration: checks[i] ? 'line-through' : 'none', opacity: checks[i] ? 0.7 : 1 }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link href="/modules/1" style={{
          background: 'linear-gradient(135deg,#00d4ff,#9b59ff)',
          color: '#070b14',
          padding: '12px 28px',
          borderRadius: '10px',
          fontWeight: '800',
          fontSize: '15px',
          textDecoration: 'none',
          fontFamily: 'var(--font-orbitron,sans-serif)',
        }}>
          {text.nav_next}
        </Link>
      </div>
    </div>
  )
}
