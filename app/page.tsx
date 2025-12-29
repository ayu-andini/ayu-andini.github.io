'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from '@/components/ThemeContext'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider>
      <main className="relative">
        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-primary/20 dark:bg-primary/10 light:bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-secondary/20 dark:bg-secondary/20 light:bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-accent/10 dark:bg-accent/10 light:bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  )
}
