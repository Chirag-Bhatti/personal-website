import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Chirag Bhatti — Software Engineer, ex-Formula 1',
  description:
    'Software engineer who switched lanes from mechanical engineering in the automotive and Formula 1 sectors. Career, tools, and projects.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f1013',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-caution focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-caution-foreground"
        >
          Skip to Content
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
