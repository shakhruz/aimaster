'use client'

import { useState, useEffect } from 'react'
import { useApp } from '@/lib/context'
import CopyButton from '@/components/CopyButton'
import Link from 'next/link'

const STORAGE_KEY = 'aimaster_module_3_checks'

const telegramConfig = `channels: {
  telegram: {
    botToken: "твой_токен",
    allowedUsers: ["твой_telegram_id"]
  }
}`

const whisperInstall = `pip install openai-whisper
# или через Groq API (быстрее, бесплатно):
# GROQ_API_KEY=gsk_xxx в ~/.openclaw/.env`

const whisperCmd = `~/bin/ffmpeg -i voice.ogg -ar 16000 -ac 1 /tmp/audio.wav -y
whisper /tmp/audio.wav --language Russian --model small --output_format txt`

const waUrl = `http://localhost:18789/channels/whatsapp`

const checksRu = [
  'Telegram бот создан в @BotFather',
  'Токен добавлен в openclaw.json',
  'Gateway перезапущен после настройки',
  'Бот отвечает на /status',
  'allowedUsers настроен — только ты управляешь агентом',
  'WhatsApp подключён (второй номер)',
  'Голосовые сообщения транскрибируются (Whisper)',
  'Реакции работают (👀 ✅ ❤️)',
]

const checksEn = [
  'Telegram bot created in @BotFather',
  'Token added to openclaw.json',
  'Gateway restarted after configuration',
  'Bot responds to /status',
  'allowedUsers configured — only you control the agent',
  'WhatsApp connected (second number)',
  'Voice messages transcribed (Whisper)',
  'Reactions work (👀 ✅ ❤️)',
]

export default function Module3Page() {
  const { lang } = useApp()
  const checks_list = lang === 'ru' ? checksRu : checksEn
  const [checks, setChecks] = useState<boolean[]>(Array(checks_list.length).fill(false))

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
  const pct = Math.round((done / checks_list.length) * 100)

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
    fontSize: '12px',
    color: '#a0aec0',
    lineHeight: '1.8',
  }

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 20px 80px' }}>

      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
        <Link href="/modules/2" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
          {lang === 'ru' ? '← Модуль 2: Личность агента' : '← Module 2: Agent Identity'}
        </Link>
        <Link href="/modules/4" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
          {lang === 'ru' ? 'Модуль 4: Скиллы →' : 'Module 4: Skills →'}
        </Link>
      </div>

      {/* Header */}
      <div style={{ ...cardStyle, background: 'rgba(57,255,133,0.04)', border: '1px solid rgba(57,255,133,0.2)', marginBottom: '28px' }}>
        <div style={{ fontSize: '13px', color: '#39ff85', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>MODULE 03</div>
        <h1 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: '900', fontFamily: 'var(--font-orbitron,sans-serif)', background: 'linear-gradient(135deg,#39ff85,#00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '10px' }}>
          {lang === 'ru' ? 'Модуль 3 — Каналы связи' : 'Module 3 — Communication Channels'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '14px' }}>
          {lang === 'ru' ? 'Подключение мессенджеров, голосовые сообщения с транскрипцией, multi-device continuity' : 'Connecting messengers, voice messages with transcription, multi-device continuity'}
        </p>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'rgba(57,255,133,0.06)', border: '1px solid rgba(57,255,133,0.15)', borderRadius: '100px', padding: '4px 14px' }}>
          {lang === 'ru' ? '⏱ 90 мин · ⚡ Практика' : '⏱ 90 min · ⚡ Practice'}
        </span>
      </div>

      {/* Telegram */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#39ff85', marginBottom: '16px' }}>
          📱 {lang === 'ru' ? 'Telegram — самый простой способ' : 'Telegram — Easiest Way'}
        </h2>

        {[
          {
            num: '1',
            title: lang === 'ru' ? 'Создай бота через @BotFather' : 'Create bot via @BotFather',
            desc: lang === 'ru' ? 'Напиши /newbot → задай имя → получи токен вида 1234567890:AAH...' : 'Send /newbot → set name → get token like 1234567890:AAH...',
            cmd: '',
          },
          {
            num: '2',
            title: lang === 'ru' ? 'Добавь токен в openclaw.json' : 'Add token to openclaw.json',
            desc: '',
            cmd: telegramConfig,
          },
          {
            num: '3',
            title: lang === 'ru' ? 'Перезапусти Gateway' : 'Restart Gateway',
            desc: '',
            cmd: 'openclaw gateway restart',
          },
          {
            num: '4',
            title: lang === 'ru' ? 'Тест: отправь /status боту' : 'Test: send /status to bot',
            desc: lang === 'ru' ? 'Агент должен ответить своим статусом, версией и активной моделью.' : 'Agent should respond with its status, version and active model.',
            cmd: '',
          },
        ].map((step) => (
          <div key={step.num} style={{ display: 'flex', gap: '16px', marginBottom: '18px', paddingBottom: '18px', borderBottom: '1px solid rgba(57,255,133,0.07)' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(57,255,133,0.1)', border: '2px solid rgba(57,255,133,0.4)', color: '#39ff85', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', flexShrink: 0 }}>{step.num}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '6px' }}>{step.title}</div>
              {step.desc && <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>{step.desc}</div>}
              {step.cmd && (
                <div style={codeBoxStyle}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                    <pre style={{ margin: 0, flex: 1, whiteSpace: 'pre-wrap' }}>{step.cmd}</pre>
                    <CopyButton text={step.cmd} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Telegram commands */}
        <div style={{ marginTop: '4px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(57,255,133,0.15)', borderRadius: '10px', padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '12px', color: '#39ff85', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {lang === 'ru' ? '📟 КОМАНДЫ TELEGRAM-БОТА' : '📟 TELEGRAM BOT COMMANDS'}
            </span>
            <CopyButton text={'/status\n/models\n/reasoning\n/memory\n/help'} />
          </div>
          <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '13px', color: '#a0aec0', lineHeight: '1.9' }}>
            {'/status     # статус агента и версия\n/models     # текущая AI модель\n/reasoning  # вкл/выкл режим reasoning\n/memory     # показать MEMORY.md\n/help       # список команд'}
          </pre>
        </div>
      </div>

      {/* Reactions */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#39ff85', marginBottom: '16px' }}>
          {lang === 'ru' ? '👍 Реакции и emoji-команды' : '👍 Reactions and Emoji Commands'}
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.7' }}>
          {lang === 'ru'
            ? 'OpenClaw поддерживает emoji-реакции для статусов задач. Агент ставит реакции как сигналы:'
            : 'OpenClaw supports emoji reactions for task statuses. Agent sets reactions as signals:'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '10px' }}>
          {[
            { emoji: '👀', label: lang === 'ru' ? 'Увидел, начинаю работать' : 'Seen, starting work' },
            { emoji: '✅', label: lang === 'ru' ? 'Задача выполнена' : 'Task completed' },
            { emoji: '⚡', label: lang === 'ru' ? 'Важно, взял в работу' : 'Important, in progress' },
            { emoji: '❤️', label: lang === 'ru' ? 'Тронуло / понравилось' : 'Appreciated / liked' },
            { emoji: '😂', label: lang === 'ru' ? 'Смешно' : 'Funny' },
            { emoji: '🔥', label: lang === 'ru' ? 'Отличная идея' : 'Great idea' },
          ].map((r) => (
            <div key={r.emoji} style={{ background: 'rgba(57,255,133,0.04)', border: '1px solid rgba(57,255,133,0.1)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '6px' }}>{r.emoji}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#39ff85', marginBottom: '12px' }}>
          💬 {lang === 'ru' ? 'WhatsApp — требует выделенный номер' : 'WhatsApp — Requires Dedicated Number'}
        </h2>

        <div style={{ background: 'rgba(255,100,50,0.05)', border: '1px solid rgba(255,100,50,0.2)', borderRadius: '10px', padding: '14px', marginBottom: '16px', display: 'flex', gap: '10px' }}>
          <span style={{ fontSize: '16px', flexShrink: 0 }}>⚠️</span>
          <div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#ff6432', marginBottom: '4px' }}>
              {lang === 'ru' ? 'Важно: нужен отдельный номер для агента' : 'Important: Need a separate number for the agent'}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {lang === 'ru'
                ? 'Нельзя использовать личный WhatsApp — агент перехватит все входящие. Купи вторую SIM-карту или используй виртуальный номер (Zadarma $4/мес, TextNow бесплатно).'
                : "Can't use personal WhatsApp — the agent will intercept all incoming messages. Get a second SIM or use a virtual number (Zadarma $4/mo, TextNow free)."}
            </div>
          </div>
        </div>

        {[
          { num: '1', title: lang === 'ru' ? 'Создай новый WhatsApp аккаунт на втором номере' : 'Create new WhatsApp account on second number', desc: lang === 'ru' ? 'Физический телефон или виртуальный номер (Zadarma $4/мес, TextNow бесплатно)' : 'Physical phone or virtual number (Zadarma $4/mo, TextNow free)', cmd: '' },
          { num: '2', title: lang === 'ru' ? 'Открой Gateway UI и перейди к каналу WhatsApp' : 'Open Gateway UI and go to WhatsApp channel', desc: '', cmd: waUrl },
          { num: '3', title: lang === 'ru' ? 'Отсканируй QR-код с телефона' : 'Scan QR code from phone', desc: lang === 'ru' ? 'WhatsApp → Настройки → Связанные устройства → Привязать устройство → Сканировать QR' : 'WhatsApp → Settings → Linked Devices → Link Device → Scan QR', cmd: '' },
        ].map((step) => (
          <div key={step.num} style={{ display: 'flex', gap: '16px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(57,255,133,0.1)', border: '2px solid rgba(57,255,133,0.3)', color: '#39ff85', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', flexShrink: 0 }}>{step.num}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '4px' }}>{step.title}</div>
              {step.desc && <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}>{step.desc}</div>}
              {step.cmd && (
                <div style={codeBoxStyle}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <code style={{ color: '#39ff85' }}>{step.cmd}</code>
                    <CopyButton text={step.cmd} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Whisper */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#39ff85', marginBottom: '8px' }}>
          🎙 {lang === 'ru' ? 'Голосовые сообщения — транскрипция Whisper' : 'Voice Messages — Whisper Transcription'}
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px' }}>
          {lang === 'ru' ? 'Агент автоматически транскрибирует голосовые. Настройка:' : 'Agent automatically transcribes voice messages. Setup:'}
        </p>

        <div style={codeBoxStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '11px', color: '#39ff85', fontWeight: '700', textTransform: 'uppercase' }}>
              {lang === 'ru' ? 'УСТАНОВКА WHISPER' : 'INSTALL WHISPER'}
            </span>
            <CopyButton text={whisperInstall} />
          </div>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{whisperInstall}</pre>
        </div>

        <div style={{ ...codeBoxStyle, marginTop: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '11px', color: '#39ff85', fontWeight: '700', textTransform: 'uppercase' }}>
              {lang === 'ru' ? 'ТРАНСКРИПЦИЯ ВРУЧНУЮ' : 'MANUAL TRANSCRIPTION'}
            </span>
            <CopyButton text={whisperCmd} />
          </div>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{whisperCmd}</pre>
        </div>

        <div style={{ marginTop: '14px', background: 'rgba(57,255,133,0.05)', border: '1px solid rgba(57,255,133,0.15)', borderRadius: '10px', padding: '12px 14px' }}>
          <div style={{ fontSize: '13px', color: '#39ff85', fontWeight: '600', marginBottom: '4px' }}>💡 Groq API — быстрее и бесплатно</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            {lang === 'ru' ? 'Добавь GROQ_API_KEY в ~/.openclaw/.env — OpenClaw автоматически использует Groq Whisper вместо локального.' : 'Add GROQ_API_KEY to ~/.openclaw/.env — OpenClaw automatically uses Groq Whisper instead of local.'}
          </div>
        </div>
      </div>

      {/* Progress */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)' }}>
            {lang === 'ru' ? 'Прогресс модуля' : 'Module Progress'}
          </h2>
          <span style={{ fontSize: '13px', color: '#39ff85', fontWeight: '700' }}>{done}/{checks_list.length} ({pct}%)</span>
        </div>
        <div style={{ height: '4px', background: 'rgba(57,255,133,0.1)', borderRadius: '2px', marginBottom: '20px' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#39ff85,#00d4ff)', borderRadius: '2px', transition: 'width 0.3s' }} />
        </div>
        {checks_list.map((label, i) => (
          <div key={i} onClick={() => toggle(i)} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: i < checks_list.length - 1 ? '1px solid rgba(57,255,133,0.07)' : 'none', cursor: 'pointer' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '6px', border: `2px solid ${checks[i] ? '#39ff85' : 'rgba(57,255,133,0.3)'}`, background: checks[i] ? 'rgba(57,255,133,0.15)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, transition: 'all 0.2s' }}>
              {checks[i] ? '✓' : ''}
            </div>
            <span style={{ color: checks[i] ? 'var(--text)' : 'var(--text-secondary)', fontSize: '14px', textDecoration: checks[i] ? 'line-through' : 'none', opacity: checks[i] ? 0.7 : 1 }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/modules/2" style={{ color: '#39ff85', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '10px 0' }}>
          {lang === 'ru' ? '← Модуль 2' : '← Module 2'}
        </Link>
        <Link href="/modules/4" style={{ background: 'linear-gradient(135deg,#39ff85,#00d4ff)', color: '#070b14', padding: '12px 28px', borderRadius: '10px', fontWeight: '800', fontSize: '15px', textDecoration: 'none', fontFamily: 'var(--font-orbitron,sans-serif)' }}>
          {lang === 'ru' ? 'Модуль 4: Скиллы →' : 'Module 4: Skills →'}
        </Link>
      </div>
    </div>
  )
}
