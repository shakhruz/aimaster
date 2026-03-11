'use client'

import { useApp } from '@/lib/context'

const t = {
  ru: {
    badge: 'Ограниченный набор · 2026',
    title: 'AI Master Programme',
    subtitle: 'Годовая программа наставничества',
    desc: 'Персональная программа от Ашота Аширова — Chief AI Officer, ментора и практика. За 12 месяцев вы пройдёте путь от первого агента до уверенного AI-эксперта.',
    price: '$1 200',
    priceNote: 'за полный год · оплата разово или 2 части',
    cta: 'Записаться на программу',
    ctaNote: 'Осталось мест: 5 из 10',
    levels_title: 'Три уровня за год',
    levels: [
      { icon: '🎓', name: 'Мастер', months: 'Месяц 1–4', desc: 'Запускаешь персонального AI-агента. Автоматизируешь жизнь и работу.' },
      { icon: '💼', name: 'Эксперт', months: 'Месяц 5–8', desc: 'Обучаешь других. Первые клиенты. Настройка агентов на заказ.' },
      { icon: '🚀', name: 'Лидер', months: 'Месяц 9–12', desc: 'Ведёшь AI-трансформацию в компаниях. Масштабируешь.' },
    ],
    includes_title: 'Что входит в программу',
    includes: [
      { icon: '🎬', title: 'Видеоуроки', desc: 'Полный курс из 10+ модулей — от установки до продвинутых паттернов. Доступ навсегда.' },
      { icon: '📋', title: 'Материалы и чек-листы', desc: 'Готовые шаблоны SOUL.md, промпты, команды, таблицы инструментов. Всё скопируй и используй.' },
      { icon: '👥', title: 'Закрытое сообщество', desc: 'Группа сокурсников и экспертов. Telegram-чат, обмен опытом, разбор кейсов.' },
      { icon: '📞', title: '4 персональных созвона', desc: 'Один на один с Аштом. Разбор вашего кейса, обратная связь, корректировка пути. По 60 минут каждый.' },
      { icon: '🤖', title: 'AshotAI — ваш ментор 24/7', desc: 'AI-агент на базе этого курса. Отвечает на вопросы, ведёт по материалу, помогает между созвонами.' },
      { icon: '🔄', title: 'Обновления курса', desc: 'AI меняется быстро. Вы получаете все обновления материала в течение года бесплатно.' },
    ],
    mentor_title: 'Ваш ментор',
    mentor_name: 'Ашот Аширов',
    mentor_role: 'Chief AI Officer · AI практик · Ментор',
    mentor_bio: 'Запустил первого AI-агента для себя, затем для клиентов. Сейчас управляет командой из 4 специализированных агентов, каждый из которых работает 24/7. Помогает предпринимателям и компаниям внедрять AI в ядро бизнеса — не как инструмент, а как команду.',
    mentor_facts: ['3+ года в практическом AI', 'Клиенты из 5 стран', '10+ настроенных агентов для бизнеса', 'Ташкент · Dubai · работаю удалённо'],
    faq_title: 'Часто задаваемые вопросы',
    faq: [
      { q: 'Нужен ли технический background?', a: 'Нет. Если вы умеете пользоваться компьютером и готовы учиться — этого достаточно. Курс начинается с нуля.' },
      { q: 'Какое оборудование нужно?', a: 'Mac Mini (рекомендуем, $600-800) или любой компьютер на macOS/Linux. Подписка Claude Max ($100/мес) — основной инструмент.' },
      { q: 'Когда проходят созвоны?', a: 'По договорённости. Обычно раз в квартал — после прохождения каждого уровня. Часовой пояс любой.' },
      { q: 'Есть ли рассрочка?', a: 'Да. Можно разбить на 2 платежа по $600. Или обсудить индивидуально.' },
      { q: 'Что если программа не подойдёт?', a: '14 дней на возврат после первого модуля. Без вопросов.' },
    ],
    form_title: 'Оставить заявку',
    form_name: 'Имя',
    form_contact: 'Telegram или WhatsApp',
    form_goal: 'Ваша главная цель на ближайший год',
    form_submit: 'Отправить заявку',
    form_note: 'Я свяжусь в течение 24 часов',
  },
  en: {
    badge: 'Limited spots · 2026',
    title: 'AI Master Programme',
    subtitle: 'One-Year Mentorship Program',
    desc: 'A personal mentorship program by Ashot Ashirov — Chief AI Officer, mentor and practitioner. In 12 months, go from your first agent to a confident AI Expert.',
    price: '$1,200',
    priceNote: 'full year · pay once or in 2 installments',
    cta: 'Apply to the Programme',
    ctaNote: 'Spots remaining: 5 of 10',
    levels_title: 'Three Levels in One Year',
    levels: [
      { icon: '🎓', name: 'Master', months: 'Months 1–4', desc: 'Launch your personal AI agent. Automate your life and work.' },
      { icon: '💼', name: 'Expert', months: 'Months 5–8', desc: 'Train others. First clients. Build agents on demand.' },
      { icon: '🚀', name: 'Leader', months: 'Months 9–12', desc: 'Lead AI transformation in companies. Scale up.' },
    ],
    includes_title: "What's Included",
    includes: [
      { icon: '🎬', title: 'Video Lessons', desc: 'Full course of 10+ modules — from setup to advanced patterns. Lifetime access.' },
      { icon: '📋', title: 'Materials & Checklists', desc: 'Ready-made SOUL.md templates, prompts, commands, tool tables. Copy and use.' },
      { icon: '👥', title: 'Private Community', desc: 'Group of peers and experts. Telegram chat, experience sharing, case studies.' },
      { icon: '📞', title: '4 Personal Calls', desc: '1-on-1 with Ashot. Review your case, get feedback, course-correct. 60 min each.' },
      { icon: '🤖', title: 'AshotAI — Your 24/7 Mentor', desc: 'AI agent trained on this course. Answers questions, guides you between calls.' },
      { icon: '🔄', title: 'Course Updates', desc: 'AI moves fast. You get all content updates throughout the year for free.' },
    ],
    mentor_title: 'Your Mentor',
    mentor_name: 'Ashot Ashirov',
    mentor_role: 'Chief AI Officer · AI Practitioner · Mentor',
    mentor_bio: 'Built his first AI agent for himself, then for clients. Now manages a team of 4 specialized agents running 24/7. Helps entrepreneurs and companies embed AI at the core of their business — not as a tool, but as a team.',
    mentor_facts: ['3+ years in hands-on AI', 'Clients from 5 countries', '10+ business agents deployed', 'Tashkent · Dubai · remote'],
    faq_title: 'FAQ',
    faq: [
      { q: 'Do I need a technical background?', a: 'No. If you can use a computer and are willing to learn — that\'s enough. The course starts from zero.' },
      { q: 'What equipment is needed?', a: 'Mac Mini (recommended, $600-800) or any Mac/Linux computer. Claude Max subscription ($100/mo) — your main tool.' },
      { q: 'When are the calls?', a: 'By arrangement. Usually once per quarter — after completing each level. Any timezone.' },
      { q: 'Is there a payment plan?', a: 'Yes. Split into 2 payments of $600. Or discuss individually.' },
      { q: 'What if it\'s not for me?', a: '14-day refund after the first module. No questions asked.' },
    ],
    form_title: 'Apply Now',
    form_name: 'Name',
    form_contact: 'Telegram or WhatsApp',
    form_goal: 'Your main goal for the next year',
    form_submit: 'Submit Application',
    form_note: "I'll reach out within 24 hours",
  }
}

export default function ProgrammePage() {
  const { lang } = useApp()
  const tx = t[lang]

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '80px' }}>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '48px 0 40px' }}>
        <span style={{
          display: 'inline-block', background: '#1a3a2a', border: '1px solid #2d6a4f',
          borderRadius: '20px', padding: '4px 16px', fontSize: '0.8rem',
          color: '#52b788', marginBottom: '20px'
        }}>{tx.badge}</span>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
          background: 'linear-gradient(135deg, #68d391, #4299e1)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          marginBottom: '8px', lineHeight: 1.2
        }}>{tx.title}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>{tx.subtitle}</p>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.7 }}>{tx.desc}</p>

        {/* Price CTA */}
        <div style={{ background: 'var(--card)', border: '1px solid #2d6a4f', borderRadius: '16px', padding: '32px', display: 'inline-block', minWidth: '320px' }}>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: '#68d391' }}>{tx.price}</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px' }}>{tx.priceNote}</div>
          <a href="#apply" style={{
            display: 'block', background: 'linear-gradient(135deg, #276749, #2b6cb0)',
            color: 'white', padding: '14px 32px', borderRadius: '10px',
            textDecoration: 'none', fontWeight: 700, fontSize: '1rem', marginBottom: '12px'
          }}>{tx.cta}</a>
          <div style={{ color: '#f6ad55', fontSize: '0.82rem', fontWeight: 600 }}>⚡ {tx.ctaNote}</div>
        </div>
      </div>

      {/* Levels */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>{tx.levels_title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {tx.levels.map((l, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{l.icon}</div>
              <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{l.name}</div>
              <div style={{ fontSize: '0.78rem', color: '#68d391', marginBottom: '10px', fontWeight: 600 }}>{l.months}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{l.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Includes */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>{tx.includes_title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {tx.includes.map((item, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{item.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mentor */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', marginBottom: '48px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>{tx.mentor_title}</h2>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #276749, #2b6cb0)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem'
          }}>🤖</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)', marginBottom: '4px' }}>{tx.mentor_name}</div>
            <div style={{ color: '#68d391', fontSize: '0.85rem', marginBottom: '12px' }}>{tx.mentor_role}</div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '16px' }}>{tx.mentor_bio}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {tx.mentor_facts.map((f, i) => (
                <span key={i} style={{ background: '#1a202c', border: '1px solid var(--border)', borderRadius: '20px', padding: '3px 12px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>✓ {f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>{tx.faq_title}</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          {tx.faq.map((item, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Q: {item.q}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div id="apply" style={{ background: 'var(--card)', border: '1px solid #2d6a4f', borderRadius: '16px', padding: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>{tx.form_title}</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
          const form = e.target as HTMLFormElement
          const name = (form.elements.namedItem('name') as HTMLInputElement).value
          const contact = (form.elements.namedItem('contact') as HTMLInputElement).value
          const goal = (form.elements.namedItem('goal') as HTMLTextAreaElement).value
          const msg = `🎓 AI Master Programme Application\n\nName: ${name}\nContact: ${contact}\nGoal: ${goal}`
          window.open(`https://t.me/shakhruz_ashirov?text=${encodeURIComponent(msg)}`, '_blank')
        }}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>{tx.form_name}</label>
              <input name="name" required style={{
                width: '100%', background: '#0f1117', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '10px 14px', color: 'var(--text)',
                fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box'
              }} />
            </div>
            <div>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>{tx.form_contact}</label>
              <input name="contact" required style={{
                width: '100%', background: '#0f1117', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '10px 14px', color: 'var(--text)',
                fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box'
              }} placeholder="@username" />
            </div>
            <div>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>{tx.form_goal}</label>
              <textarea name="goal" required rows={3} style={{
                width: '100%', background: '#0f1117', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '10px 14px', color: 'var(--text)',
                fontSize: '0.95rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box'
              }} />
            </div>
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #276749, #2b6cb0)',
              color: 'white', padding: '14px', borderRadius: '10px',
              border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer'
            }}>{tx.form_submit}</button>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textAlign: 'center', margin: 0 }}>💬 {tx.form_note}</p>
          </div>
        </form>
      </div>

    </div>
  )
}
