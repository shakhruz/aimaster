'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Lang, Theme } from '@/types'

interface AppContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const AppContext = createContext<AppContextType>({
  lang: 'ru',
  setLang: () => {},
  theme: 'dark',
  setTheme: () => {},
})

export function useApp() {
  return useContext(AppContext)
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru')
  const [theme, setThemeState] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('aimaster_lang') as Lang | null
    const savedTheme = localStorage.getItem('aimaster_theme') as Theme | null
    if (savedLang) setLangState(savedLang)
    if (savedTheme) setThemeState(savedTheme)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme, mounted])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('aimaster_lang', l)
  }

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem('aimaster_theme', t)
    document.documentElement.setAttribute('data-theme', t)
  }

  if (!mounted) return <>{children}</>

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}
