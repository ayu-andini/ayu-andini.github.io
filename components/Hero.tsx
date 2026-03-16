'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" 
      className="min-h-screen flex items-center justify-center mt-5 pt-20 px-4 pb-10 sm:px-6 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className={`space-y-2 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
              <p className="text-primary font-mono text-base sm:text-lg animate-delay-100">
                Hi there! 👋
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-600 dark:text-white">
                I'm <span className="gradient-text">Ayu Andini</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 dark:text-gray-300">
                Fullstack Web Developer <span className="text-primary">&</span>
                <br />
                Tech Education Mentor
              </h2>
            </div>

            <p className={`text-base sm:text-lg text-gray-500 dark:text-gray-400 light:text-gray-600 max-w-xl mx-auto lg:mx-0 ${mounted ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
              Information Systems graduate with hands-on experience in{' '}
              <span className="text-primary font-semibold">Fullstack Web Development</span> and{' '}
              <span className="text-accent font-semibold">IT System Administration</span>.
              Building scalable web applications, exploring modern technologies and sharing knowledge through mentoring.
            </p>

            <div className={`flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 ${mounted ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/ayu-andini"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 border-2 border-primary rounded-full text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 text-center"
              >
                View GitHub
              </a>
            </div>

            {/* Social Links */}
            <div className={`flex gap-3 sm:gap-4 pt-2 justify-center lg:justify-start ${mounted ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
              <a
                href="https://github.com/ayu-andini"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/5 light:bg-dark/5 hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ayu-andinii"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/5 light:bg-dark/5 hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-5 sm:h-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=ayuandi517@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/5 light:bg-dark/5 hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className={`lg:w-1/2 flex justify-center mt-4 lg:mt-0 ${mounted ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Main circle with gradient border */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
              <img src="/Ayu-Andini.png" alt="Ayu Andini" className="rounded-full"
              />
              </div>

              {/* Floating tech badges */}
              <div className="hidden sm:block absolute -top-6 -left-6 md:-top-8 md:-left-8 border-2 border-primary rounded-lg px-3 py-2 animate-float shadow-lg">
                <p className="font-mono text-xs md:text-sm text-primary">Node.js</p>
              </div>
              <div className="hidden sm:block absolute -top-4 -right-4 border-2 border-secondary rounded-lg px-3 py-2 animate-float shadow-lg" style={{ animationDelay: '0.5s' }}>
                <p className="font-mono text-xs md:text-sm text-secondary">Express.js</p>
              </div>
              <div className="hidden sm:block absolute -bottom-6 -left-8 md:-bottom-8 md:-left-12 border-2 border-accent rounded-lg px-3 py-2 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <p className="font-mono text-xs md:text-sm text-accent">PHP</p>
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-6 md:-right-8 border-2 border-primary rounded-lg px-3 py-2 animate-float shadow-lg" style={{ animationDelay: '1.5s' }}>
                <p className="font-mono text-xs md:text-sm text-primary">Laravel</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}
    </section>
  )
}
