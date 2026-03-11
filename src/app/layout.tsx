import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/lib/context'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'AI Master — Запусти своего AI-агента',
  description: 'Трёхуровневая программа обучения AI: Master, Expert, Leader',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark">
      <body>
        <AppProvider>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ flex: 1, marginLeft: '240px', padding: '2rem', maxWidth: '100%' }}>
              {children}
            </main>
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
