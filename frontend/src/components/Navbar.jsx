import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/images/logo.jpeg';

const links = [
  { to: '/', labelKey: 'nav.home' },
  
  { to: '/articles', labelKey: 'nav.articles' },
  { to: '/books', labelKey: 'nav.books' },
  { to: '/poetry', labelKey: 'nav.poetry' },

  { to: '/contact', labelKey: 'nav.contact' },
]

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const loc = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '')
  }, [theme])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [loc.pathname])

  const toggleTheme = () => {
    const t = theme === 'dark' ? 'light' : 'dark'
    setTheme(t)
    localStorage.setItem('theme', t)
  }

  return (
    <>
      {/* Overlay for mobile menu */}
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}

      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.brand}>
  <img
    src={logo}
    alt="Prashant Pitaliya"
    className={styles.logo}
    onClick={() => window.open(logo, '_blank')}
  />
</Link>

          <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Main navigation">
            {links.map(({ to, labelKey }) => (
              <Link
                key={to}
                to={to}
                className={`${styles.link} ${loc.pathname === to ? styles.active : ''}`}
                onClick={() => setOpen(false)}
              >
                {t(labelKey)}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button
              onClick={toggleLanguage}
              className={styles.langBtn}
              aria-label="Toggle language"
            >
              {language === 'en' ? 'मराठी' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className={styles.themeBtn}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <Link to="/admin" className={styles.userBtn} aria-label="Open admin page">
              👤
            </Link>
            <button
              className={styles.burger}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
