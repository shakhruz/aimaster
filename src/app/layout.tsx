'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

  if (!mounted) {
    return (
      <html lang="ru" data-theme="dark">
        <body style={{ background: '#0f1117' }} />
      </html>
    )
  }

  return (
    <html lang={lang} data-theme={theme}>
      <head>
        <title>AI Master — Запусти своего AI-агента</title>
        <meta name="description" content="Трёхуровневая программа обучения AI: Master, Expert, Leader" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppContext.Provider value={{ lang, setLang, theme, setTheme }}>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ flex: 1, marginLeft: '240px', padding: '2rem', maxWidth: '100%' }}>
              {children}
            </main>
          </div>
        </AppContext.Provider>
      </body>
    </html>
  )
}
