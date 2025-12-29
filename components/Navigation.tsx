'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#tech', label: 'Tech Stack' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    // { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-300">
            <span className="gradient-text">Ayu Andini</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 dark:text-gray-300  hover:text-primary transition-colors duration-300 relative group text-sm xl:text-base"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="px-4 xl:px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-sm xl:text-base"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Navigation - Theme Toggle & Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              className="text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-[72px] left-0 right-0 z-40 lg:hidden animate-fade-i">
            <div className="px-6 py-4 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block mt-3 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
