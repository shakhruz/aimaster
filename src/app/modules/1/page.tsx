'use client'

import { useState, useEffect } from 'react'
import { useApp } from '@/lib/context'
import CopyButton from '@/components/CopyButton'
import Link from 'next/link'

const t = {
  ru: {
    title: 'Модуль 1 — Быстрый старт',
    subtitle: 'Системные требования, установка, Gateway, Telegram подключение',
    duration: '⏱ 45 мин · ⚡ Практика',
    progress: 'Прогресс модуля',
    nav_prev: '← Модуль 0: Зачем OpenClaw',
    nav_next: 'Модуль 2: Личность агента →',
    req_title: '💻 Системные требования',
    install_title: '⚡ Установка за 3 команды',
    dir_title: '📁 Структура директорий',
    telegram_title: '📱 Telegram — подключение',
    audit_title: '🔍 Онбординг аудит-промпт',
    checks: [
      'Node.js v22+ установлен',
      'OpenClaw установлен (npx openclaw onboard)',
      'Gateway запущен и работает',
      'Web UI открывается на localhost:18789',
      'Telegram бот создан и подключён',
      'Первый тест пройден — агент отвечает',
    ],
  },
  en: {
    title: 'Module 1 — Quick Start',
    subtitle: 'System requirements, installation, Gateway, Telegram connection',
    duration: '⏱ 45 min · ⚡ Practice',
    progress: 'Module Progress',
    nav_prev: '← Module 0: Why OpenClaw',
    nav_next: 'Module 2: Agent Identity →',
    req_title: '💻 System Requirements',
    install_title: '⚡ Installation in 3 Commands',
    dir_title: '📁 Directory Structure',
    telegram_title: '📱 Telegram — Connection',
    audit_title: '🔍 Onboarding Audit Prompt',
    checks: [
      'Node.js v22+ installed',
      'OpenClaw installed (npx openclaw onboard)',
      'Gateway running and working',
      'Web UI opens at localhost:18789',
      'Telegram bot created and connected',
      'First test passed — agent responds',
    ],
  },
}

const STORAGE_KEY = 'aimaster_module_1_checks'

const auditPrompt = `Проведи полный аудит моей установки OpenClaw. Проверь 9 пунктов и ответь по каждому:

1. ВЕРСИЯ — какая версия OpenClaw установлена? Актуальная ли?
2. МОДЕЛЬ — какую AI модель используешь? Это claude-sonnet-4-6 или другая?
3. БЕЗОПАСНОСТЬ — запусти openclaw security audit и сообщи результат. Есть ли критические уязвимости?
4. ФАЙЛЫ — есть ли SOUL.md, AGENTS.md, USER.md, MEMORY.md, HEARTBEAT.md в workspace?
5. КАНАЛЫ — какие каналы связи настроены? (Telegram, WhatsApp, Discord)
6. TODOIST — есть ли доступ к Todoist API? Проверь переменную TODOIST_API_TOKEN
7. ВЕБ — можешь ли ты искать в интернете? Сделай тестовый поиск: «OpenClaw последняя версия»
8. ПАМЯТЬ — прочитай последний дневной лог из memory/. Есть ли записи?
9. CRON — есть ли настроенные cron задачи? Выполни: openclaw cron list

Для каждого пункта: ✅ OK / ⚠️ Проблема / ❌ Не настроено`

const dirStructure = `~/.openclaw/
  openclaw.json        # основной конфиг (JSON5)
  .env                 # API ключи и секреты
  workspace/
    SOUL.md            # личность агента
    AGENTS.md          # правила поведения
    USER.md            # профиль пользователя
    IDENTITY.md        # краткое «кто я»
    TOOLS.md           # заметки об инструментах
    MEMORY.md          # долгосрочная память
    HEARTBEAT.md       # чеклист периодических задач
    memory/
      2026-03-11.md    # дневной лог`

export default function Module1Page() {
  const { lang } = useApp()
  const text = t[lang]
  const [checks, setChecks] = useState<boolean[]>(Array(text.checks.length).fill(false))

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

  const cardStyle = {
    background: 'rgba(13,21,38,0.8)',
    border: '1px solid rgba(0,212,255,0.15)',
    borderRadius: '14px',
    padding: '24px',
    marginBottom: '20px',
  }

  const codeBoxStyle = {
    background: 'rgba(0,0,0,0.5)',
    border: '1px solid rgba(0,212,255,0.2)',
    borderRadius: '10px',
    padding: '14px 16px',
    fontFamily: 'monospace',
    fontSize: '13px',
    color: '#e2e8f0',
    lineHeight: '1.8',
    position: 'relative' as const,
  }

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 20px 80px' }}>

      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
        <Link href="/modules/0" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>{text.nav_prev}</Link>
        <Link href="/modules/2" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>{text.nav_next}</Link>
      </div>

      {/* Header */}
      <div style={{ ...cardStyle, background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)', marginBottom: '28px' }}>
        <div style={{ fontSize: '13px', color: '#00d4ff', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>MODULE 01</div>
        <h1 style={{
          fontSize: 'clamp(26px,5vw,40px)', fontWeight: '900', fontFamily: 'var(--font-orbitron,sans-serif)',
          background: 'linear-gradient(135deg,#00d4ff,#9b59ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '10px',
        }}>{text.title}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '14px' }}>{text.subtitle}</p>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '100px', padding: '4px 14px' }}>{text.duration}</span>
      </div>

      {/* Requirements */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#00d4ff', marginBottom: '16px' }}>{text.req_title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px' }}>
          {[
            { icon: '💻', label: 'macOS / Linux / Windows', sub: 'Все платформы поддерживаются' },
            { icon: '⚡', label: 'Node.js 22+', sub: 'Минимальная версия для работы' },
            { icon: '🧠', label: 'Mac Mini M4 Pro рекомендуется', sub: '24GB RAM для локальных моделей' },
            { icon: '💳', label: 'Claude Max $100/мес', sub: 'Или API ключ Anthropic' },
          ].map((r) => (
            <div key={r.label} style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.1)', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{r.icon}</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)', marginBottom: '4px' }}>{r.label}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{r.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '16px' }}>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
            {lang === 'ru' ? 'Проверить версию Node:' : 'Check Node version:'}
          </div>
          <div style={{ ...codeBoxStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>node --version<span style={{ color: '#4a5568' }}>  # нужно v22+</span></span>
            <CopyButton text="node --version" />
          </div>
        </div>
      </div>

      {/* Installation */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#00d4ff', marginBottom: '16px' }}>{text.install_title}</h2>

        {[
          {
            step: '1',
            label: lang === 'ru' ? 'Установка через onboard wizard' : 'Install via onboard wizard',
            desc: lang === 'ru' ? 'Запускает интерактивный мастер: API ключи, каналы, workspace' : 'Runs interactive wizard: API keys, channels, workspace',
            cmd: 'npx openclaw onboard',
          },
          {
            step: '2',
            label: lang === 'ru' ? 'Запустить Gateway' : 'Start Gateway',
            desc: lang === 'ru' ? 'Главный демон — должен работать постоянно' : 'Main daemon — must run continuously',
            cmd: 'openclaw gateway start',
          },
          {
            step: '3',
            label: lang === 'ru' ? 'Проверить статус' : 'Check status',
            desc: lang === 'ru' ? 'Убедись что Gateway работает и активная модель настроена' : 'Verify Gateway is running and active model is configured',
            cmd: 'openclaw gateway status',
          },
          {
            step: '4',
            label: lang === 'ru' ? 'Открыть Web UI' : 'Open Web UI',
            desc: lang === 'ru' ? 'Gateway UI на порту 18789 — управление агентом через браузер' : 'Gateway UI on port 18789 — manage agent via browser',
            cmd: 'http://localhost:18789',
          },
        ].map((item) => (
          <div key={item.step} style={{ display: 'flex', gap: '16px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,212,255,0.07)' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,212,255,0.15)',
              border: '2px solid rgba(0,212,255,0.4)', color: '#00d4ff', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '14px', fontWeight: '800', flexShrink: 0, fontFamily: 'var(--font-orbitron,sans-serif)',
            }}>
              {item.step}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '6px' }}>{item.label}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px' }}>{item.desc}</div>
              <div style={{ ...codeBoxStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <code style={{ color: '#39ff85' }}>{item.cmd}</code>
                <CopyButton text={item.cmd} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Directory structure */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#00d4ff', marginBottom: '16px' }}>{text.dir_title}</h2>
        <div style={{ ...codeBoxStyle }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {lang === 'ru' ? 'ФАЙЛОВАЯ СТРУКТУРА' : 'FILE STRUCTURE'}
            </span>
            <CopyButton text={dirStructure} />
          </div>
          <pre style={{ margin: 0, color: '#a0aec0', fontSize: '12px', lineHeight: '1.9' }}>{dirStructure}</pre>
        </div>
      </div>

      {/* Telegram */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#00d4ff', marginBottom: '16px' }}>{text.telegram_title}</h2>
        {[
          { num: '1', title: lang === 'ru' ? 'Создай бота через @BotFather' : 'Create bot via @BotFather', desc: lang === 'ru' ? 'Напиши /newbot → задай имя → получи токен вида 1234567890:AAH...' : 'Send /newbot → set name → get token like 1234567890:AAH...', cmd: '' },
          { num: '2', title: lang === 'ru' ? 'Добавь токен в openclaw.json' : 'Add token to openclaw.json', desc: '', cmd: 'channels: {\n  telegram: {\n    botToken: "твой_токен",\n    allowedUsers: ["твой_telegram_id"]\n  }\n}' },
          { num: '3', title: lang === 'ru' ? 'Перезапусти Gateway' : 'Restart Gateway', desc: '', cmd: 'openclaw gateway restart' },
          { num: '4', title: lang === 'ru' ? 'Тест: отправь /status боту' : 'Test: send /status to bot', desc: lang === 'ru' ? 'Агент должен ответить своим статусом, версией и активной моделью.' : 'Agent should respond with its status, version and active model.', cmd: '' },
        ].map((step) => (
          <div key={step.num} style={{ display: 'flex', gap: '16px', marginBottom: '18px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(0,212,255,0.15)', border: '2px solid rgba(0,212,255,0.4)', color: '#00d4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', flexShrink: 0 }}>{step.num}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '6px' }}>{step.title}</div>
              {step.desc && <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>{step.desc}</div>}
              {step.cmd && (
                <div style={{ ...codeBoxStyle, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <pre style={{ margin: 0, fontSize: '12px', color: '#a0aec0', flex: 1 }}>{step.cmd}</pre>
                  <CopyButton text={step.cmd} />
                </div>
              )}
            </div>
          </div>
        ))}

        <div style={{ marginTop: '16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '10px', padding: '14px 16px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            {lang === 'ru' ? 'КОМАНДЫ В TELEGRAM' : 'TELEGRAM COMMANDS'}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '13px', color: '#a0aec0', lineHeight: '1.8' }}>
              {'/status     # статус агента и версия\n/models     # текущая AI модель\n/reasoning  # вкл/выкл режим reasoning\n/memory     # показать MEMORY.md\n/help       # список команд'}
            </pre>
            <CopyButton text={'/status\n/models\n/reasoning\n/memory\n/help'} />
          </div>
        </div>
      </div>

      {/* Audit prompt */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#00d4ff', marginBottom: '8px' }}>{text.audit_title}</h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px' }}>
          {lang === 'ru' ? 'Один промпт для полной проверки. Отправь агенту после установки:' : 'One prompt for full verification. Send to agent after installation:'}
        </p>
        <div style={{ background: 'rgba(155,89,255,0.05)', border: '1px solid rgba(155,89,255,0.2)', borderRadius: '10px', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '11px', color: '#9b59ff', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {lang === 'ru' ? '📋 ОНБОРДИНГ АУДИТ — ПОЛНАЯ ПРОВЕРКА' : '📋 ONBOARDING AUDIT — FULL CHECK'}
            </span>
            <CopyButton text={auditPrompt} />
          </div>
          <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px', color: '#a0aec0', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>{auditPrompt}</pre>
        </div>
      </div>

      {/* Progress */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)' }}>{text.progress}</h2>
          <span style={{ fontSize: '13px', color: '#00d4ff', fontWeight: '700' }}>{done}/{checks.length} ({pct}%)</span>
        </div>
        <div style={{ height: '4px', background: 'rgba(0,212,255,0.1)', borderRadius: '2px', marginBottom: '20px' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#00d4ff,#9b59ff)', borderRadius: '2px', transition: 'width 0.3s' }} />
        </div>
        {text.checks.map((label, i) => (
          <div key={i} onClick={() => toggle(i)} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: i < text.checks.length - 1 ? '1px solid rgba(0,212,255,0.07)' : 'none', cursor: 'pointer' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '6px', border: `2px solid ${checks[i] ? '#00d4ff' : 'rgba(0,212,255,0.3)'}`, background: checks[i] ? 'rgba(0,212,255,0.2)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, transition: 'all 0.2s' }}>
              {checks[i] ? '✓' : ''}
            </div>
            <span style={{ color: checks[i] ? 'var(--text)' : 'var(--text-secondary)', fontSize: '14px', textDecoration: checks[i] ? 'line-through' : 'none', opacity: checks[i] ? 0.7 : 1 }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/modules/0" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '10px 0' }}>{text.nav_prev}</Link>
        <Link href="/modules/2" style={{ background: 'linear-gradient(135deg,#00d4ff,#9b59ff)', color: '#070b14', padding: '12px 28px', borderRadius: '10px', fontWeight: '800', fontSize: '15px', textDecoration: 'none', fontFamily: 'var(--font-orbitron,sans-serif)' }}>{text.nav_next}</Link>
      </div>
    </div>
  )
}
