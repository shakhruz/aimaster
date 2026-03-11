import type { Metadata } from 'next'
import { Orbitron, Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/lib/context'
import Navigation from '@/components/Navigation'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Master — Запусти своего AI-агента',
  description: 'Трёхуровневая программа обучения AI: Master, Expert, Leader',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark" className={`${orbitron.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <AppProvider>
          <div className="stars-bg" style={{ display: 'flex', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ flex: 1, marginLeft: '240px', padding: '2rem', maxWidth: '100%', position: 'relative', zIndex: 1 }}>
              {children}
            </main>
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
