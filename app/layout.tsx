import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeContext'

export const metadata: Metadata = {
  title: 'Ayu Andini - Portfolio',
  description: 'Information Systems graduate with hands-on experience in Fullstack Web Development, Cloud Computing, and IT System Administration. Currently working as a Fullstack Development Mentor.',
  keywords: 'fullstack developer, web development, react, nextjs, nodejs, tech mentor, ayu andini',
  authors: [{ name: 'Ayu Andini' }],
  openGraph: {
    title: 'Ayu Andini - Portfolio',
    description: 'Fullstack Developer & Tech Mentor',
    url: 'https://ayu-andini.github.io',
    siteName: 'Ayu Andini Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
