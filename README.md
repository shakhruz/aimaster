# ⚡ AI Master — Курс ИИ Мастеров

> Запусти своего персонального AI-агента. Стань мастером, экспертом, лидером.

**🔗 Живой сайт:** https://aimaster.ashotai.com  
**📋 Чек-лист:** https://openclaw-checklist-ru.vercel.app  
**🤖 AshotAI бот:** [@AshotAI_bot](https://t.me/AshotAI_bot) — твой ментор по курсу 24/7

---

## 🎯 О курсе

**AI Master** — практический курс по запуску персонального AI-агента на базе [OpenClaw](https://openclaw.ai).  
Не теория. Не ChatGPT. Настоящий агент который работает на тебя 24/7.

### Три уровня:

| 🎓 Master | 💼 Expert | 🚀 Leader |
|-----------|-----------|-----------|
| Запустил агента для себя | Обучаешь других, консультируешь | Трансформируешь организации |
| Автоматизировал жизнь | Первые клиенты на настройку | AI в ядре бизнеса |
| Месяцы 1–4 | Месяцы 5–8 | Месяцы 9–12 |

### 11 модулей:

```
🎓 MASTER
  Модуль 0 — Зачем OpenClaw? (ChatGPT vs личный агент)
  Модуль 1 — Быстрый старт (установка, Gateway, Claude)
  Модуль 2 — Личность агента (SOUL.md, USER.md, HEARTBEAT.md)
  Модуль 3 — Каналы связи (Telegram, WhatsApp, голос)
  Модуль 4 — Скиллы и плагины (15 проверенных инструментов)

💼 EXPERT  
  Модуль 5 — Безопасность (12-пунктный чеклист)
  Модуль 6 — Субагенты (Parent↔Child архитектура)
  Модуль 7 — Память и Second Brain

🚀 LEADER
  Модуль 8 — Веб-скрапинг (Exa, Firecrawl, Apify)
  Модуль 9 — Социальные сети (LinkedIn, Telegram userbot)
  Модуль 10 — Продвинутые паттерны (cron, Docker, VPS)
```

---

## 🚀 Запустить локально

```bash
git clone https://github.com/shakhruz/aimaster
cd aimaster
npm install
npm run dev
# → http://localhost:3000
```

**Требования:** Node.js 18+

---

## 🤝 Как контрибьютить

Это открытый курс — **ученики и эксперты** могут улучшать материал!

### Что можно добавлять:
- 📝 **Контент модулей** — уроки, примеры, промпты, команды
- 🌐 **Переводы** — сейчас есть RU/EN, нужны другие языки
- 🐛 **Баги** — что-то не работает? Открой Issue
- 💡 **Идеи** — новые модули, фичи сайта, кейсы из практики
- 🔧 **Код** — улучшения UI, новые компоненты

### Процесс:

1. **Fork** репозитория
2. Создай ветку: `git checkout -b feat/module-1-content`
3. Внеси изменения
4. **Pull Request** → Ашот ревьюит и мёрджит

### Структура контента:

```
src/
├── lib/modules.ts    ← список модулей (название, уровень, иконка)
├── lib/i18n.ts       ← переводы RU/EN
└── app/
    └── modules/      ← страницы модулей (создавай тут!)
        ├── [0]/page.tsx   ← Зачем OpenClaw?
        ├── [1]/page.tsx   ← Быстрый старт
        └── ...
```

Подробнее в [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📚 Стек

- **Next.js 15** + TypeScript
- **Tailwind CSS 4**
- **localStorage** для прогресса чеклистов
- **i18n:** RU + EN (легко добавить язык)
- Деплой: **Vercel** (автоматически при push в main)

---

## 🎓 AI Master Programme — Менторство

Хочешь пройти курс с личным наставником?

**[AI Master Programme →](https://aimaster.ashotai.com/programme)**  
$1200 / год · 4 созвона · закрытое сообщество · AshotAI бот 24/7

---

## 👤 Автор

**Ашот Аширов** — Chief AI Officer, AI практик, ментор  
🔗 [ashotai.com](https://ashotai.com) · Telegram: [@shakhruz_ashirov](https://t.me/shakhruz_ashirov)

---

## ⭐ Если полезно — поставь звезду!

Это помогает курсу расти и охватывать больше людей.

[![GitHub stars](https://img.shields.io/github/stars/shakhruz/aimaster?style=social)](https://github.com/shakhruz/aimaster/stargazers)

---

*Powered by [OpenClaw](https://openclaw.ai) + Claude · Made with ❤️ in Tashkent*
