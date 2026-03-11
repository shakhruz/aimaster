# Contributing to AI Master 🤝

Спасибо что хочешь улучшить курс! Это открытый проект — каждый может добавить свою лепту.

## Типы вклада

### 📝 Контент модулей (самое важное!)

Каждый модуль — это страница в `src/app/modules/[N]/page.tsx`.  
Сейчас большинство модулей пустые — **нужны уроки, примеры, промпты!**

**Как добавить контент в модуль:**

```bash
# Создай файл для модуля N
# Пример: src/app/modules/1/page.tsx
```

Структура страницы модуля:
```tsx
'use client'
import { useApp } from '@/lib/context'

export default function Module1Page() {
  const { lang } = useApp()
  
  return (
    <div>
      <h1>Быстрый старт / Quick Start</h1>
      {/* Твой контент здесь */}
    </div>
  )
}
```

### 🌐 Переводы

Файл переводов: `src/lib/i18n.ts`

Хочешь добавить язык? Открой Issue или PR с:
1. Новый тип в `src/types/index.ts`: добавь язык в `Lang`
2. Добавь переводы в `i18n.ts`
3. Обнови `LangToggle.tsx`

### 🐛 Баги

[Открой Issue](https://github.com/shakhruz/aimaster/issues/new?template=bug_report.md) с:
- Что произошло
- Что ожидалось
- Скриншот (если есть)
- Браузер / ОС

### 💡 Идеи

[Открой Discussion](https://github.com/shakhruz/aimaster/discussions) или Issue с тегом `enhancement`.

---

## Процесс PR

1. Fork репозитория
2. `git checkout -b feat/твоя-фича`
3. Внеси изменения
4. `npm run build` — убедись что нет ошибок
5. Commit: `git commit -m "feat: добавил контент модуля 1"`
6. Push и открой Pull Request

**Ашот ревьюит все PR** и мёрджит хороший контент.

---

## Соглашения

- **Коммиты:** `feat:`, `fix:`, `docs:`, `content:`
- **Язык контента:** добавляй на обоих языках (RU + EN) когда возможно
- **Промпты:** всегда оборачивай в `<CopyButton>` компонент
- **Команды терминала:** используй code-блоки

---

## Вопросы?

- Telegram: [@shakhruz_ashirov](https://t.me/shakhruz_ashirov)
- AshotAI бот: помогает понять как работает сайт и курс
