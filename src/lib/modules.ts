import { Module, Level } from '@/types'

export const modules: Module[] = [
  { id: 0, title: { ru: 'Зачем OpenClaw?', en: 'Why OpenClaw?' }, icon: '🚀', level: 'master' },
  { id: 1, title: { ru: 'Быстрый старт', en: 'Quick Start' }, icon: '⚡', level: 'master' },
  { id: 2, title: { ru: 'Личность агента', en: 'Agent Personality' }, icon: '🤖', level: 'master' },
  { id: 3, title: { ru: 'Каналы связи', en: 'Communication' }, icon: '💬', level: 'master' },
  { id: 4, title: { ru: 'Скиллы и плагины', en: 'Skills & Plugins' }, icon: '🔧', level: 'master' },
  { id: 5, title: { ru: 'Безопасность', en: 'Security' }, icon: '🛡️', level: 'expert' },
  { id: 6, title: { ru: 'Субагенты', en: 'Sub-Agents' }, icon: '👥', level: 'expert' },
  { id: 7, title: { ru: 'Память и Second Brain', en: 'Memory & Second Brain' }, icon: '🧠', level: 'expert' },
  { id: 8, title: { ru: 'Скрапинг и данные', en: 'Scraping & Data' }, icon: '🌐', level: 'leader' },
  { id: 9, title: { ru: 'Соцсети', en: 'Social Media' }, icon: '📱', level: 'leader' },
  { id: 10, title: { ru: 'Продвинутые паттерны', en: 'Advanced Patterns' }, icon: '⚙️', level: 'leader' },
]

export const levels: Level[] = [
  {
    id: 'master',
    title: { ru: 'Master', en: 'Master' },
    description: {
      ru: 'Запусти персонального AI-агента для себя. OpenClaw + Claude в твоём распоряжении.',
      en: 'Launch a personal AI agent for yourself. OpenClaw + Claude at your disposal.',
    },
    icon: '🎓',
    color: '#68d391',
  },
  {
    id: 'expert',
    title: { ru: 'Expert', en: 'Expert' },
    description: {
      ru: 'Обучай других, консультируй, настраивай агентов на заказ. Монетизируй знания.',
      en: 'Train others, consult, customize agents on demand. Monetize your knowledge.',
    },
    icon: '💼',
    color: '#63b3ed',
  },
  {
    id: 'leader',
    title: { ru: 'Leader', en: 'Leader' },
    description: {
      ru: 'Веди AI-трансформацию организаций и бизнесов. Становись лидером изменений.',
      en: 'Lead AI transformation of organizations and businesses. Become a change leader.',
    },
    icon: '🚀',
    color: '#f6ad55',
  },
]
