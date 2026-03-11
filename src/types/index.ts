export type Lang = 'ru' | 'en'

export type Theme = 'dark' | 'light'

export type ModuleLevel = 'master' | 'expert' | 'leader'

export type ModuleStatus = 'locked' | 'available' | 'completed'

export interface Module {
  id: number
  title: {
    ru: string
    en: string
  }
  icon: string
  level: ModuleLevel
  status?: ModuleStatus
}

export interface Level {
  id: ModuleLevel
  title: {
    ru: string
    en: string
  }
  description: {
    ru: string
    en: string
  }
  icon: string
  color: string
}
