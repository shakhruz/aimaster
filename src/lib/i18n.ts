import { Lang } from '@/types'

export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      modules: 'Модули',
      levels: 'Уровни',
      about: 'О курсе',
    },
    hero: {
      title: 'AI Master',
      subtitle: 'Запусти своего персонального AI-агента',
      description:
        'Трёхуровневая программа обучения: от личного агента до AI-трансформации организаций',
      cta: 'Начать с Модуля 1',
      ctaSub: 'Бесплатно • Без регистрации',
    },
    levels: {
      title: 'Три уровня мастерства',
      subtitle: 'Каждый уровень открывает новые возможности',
    },
    modules: {
      title: 'Программа курса',
      subtitle: '11 модулей от основ до продвинутых паттернов',
      module: 'Модуль',
      locked: 'Заблокирован',
      available: 'Доступен',
      completed: 'Пройден',
    },
    theme: {
      dark: 'Тёмная',
      light: 'Светлая',
    },
    progress: {
      title: 'Прогресс',
      completed: 'выполнено',
    },
    copy: {
      copy: 'Копировать',
      copied: 'Скопировано!',
    },
    footer: {
      made: 'Создано с помощью',
      rights: 'Все права защищены',
    },
  },
  en: {
    nav: {
      home: 'Home',
      modules: 'Modules',
      levels: 'Levels',
      about: 'About',
    },
    hero: {
      title: 'AI Master',
      subtitle: 'Launch Your Personal AI Agent',
      description:
        'A three-level training program: from personal agent to AI transformation of organizations',
      cta: 'Start with Module 1',
      ctaSub: 'Free • No registration',
    },
    levels: {
      title: 'Three Levels of Mastery',
      subtitle: 'Each level unlocks new possibilities',
    },
    modules: {
      title: 'Course Program',
      subtitle: '11 modules from basics to advanced patterns',
      module: 'Module',
      locked: 'Locked',
      available: 'Available',
      completed: 'Completed',
    },
    theme: {
      dark: 'Dark',
      light: 'Light',
    },
    progress: {
      title: 'Progress',
      completed: 'completed',
    },
    copy: {
      copy: 'Copy',
      copied: 'Copied!',
    },
    footer: {
      made: 'Built with',
      rights: 'All rights reserved',
    },
  },
}

export function t(lang: Lang, key: string): string {
  const keys = key.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[lang]
  for (const k of keys) {
    value = value?.[k]
  }
  return value ?? key
}
