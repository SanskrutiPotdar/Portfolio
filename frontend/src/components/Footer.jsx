import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Footer.module.css'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/images/Logo.jpeg'

/**
 * Footer Component
 * 
 * Renders the global footer section of the website. Uses the global LanguageContext
 * to display translated navigation links and brand text. Adapts dynamically to light
 * and dark themes using custom properties.
 */
export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear() // Dynamically fetch the current year

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand branding and subtitle */}
        <div className={styles.brand}>
  <img
    className={styles.logo}
    src={logo}
    alt={t('nav.logo')}
  />
  <p>{t('hero.subtitle')}</p>
</div>

        {/* Localized navigation indices */}
        <nav className={styles.links} aria-label="Footer navigation">
          <Link to="/">{t('nav.home')}</Link>
      
          <Link to="/articles">{t('nav.articles')}</Link>
          <Link to="/books">{t('nav.books')}</Link>
          <Link to="/poetry">{t('nav.poetry')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </nav>

        {/* Social communication hooks */}
        <div className={styles.social}>
          <a href="https://wa.me/919822525166" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">📱</a>
          <a href="mailto:pprarupi@gmail.com" aria-label="Email">✉️</a>
        </div>
      </div>

      {/* Copyright branding */}
      <div className={styles.copy}>
        <span>© {year} {t('nav.brand')}. All rights reserved.</span>
        <div className={styles.copySocial}>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="fa-brands fa-youtube fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/prashantpitaliya/?igsh=MWVhNGE1NjBremlnYg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.facebook.com/prashant.pitaliya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-pitaliya-18b289129/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
