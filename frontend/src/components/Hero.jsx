import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from '../styles/Hero.module.css'
import { profileImageSrc } from '../utils/assets'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const nameParts = t('hero.title').split(' ')

  const stats = [
    { value: '300+', label: t('hero.lectures') },
    { value: '14+', label: t('hero.books') },
    { value: '50K+', label: t('hero.livesTouched') },
    { value: '15+', label: t('hero.experience') },
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.div
          className={styles.profileWrap}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.ring} aria-hidden="true" />
          {profileImageSrc && (
            <img
              src={profileImageSrc}
              alt="Prashant Pitaliya"
              className={styles.avatar}
            />
          )}
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>{t('hero.welcome')}</p>
          <h1 className={styles.name}>
            {nameParts[0]}<br />{nameParts[1]}
          </h1>
          <p className={styles.subtitle}>
            {t('hero.subtitle')}
          </p>
          <p className={styles.desc}>
            {t('hero.desc')}
          </p>
          <div className={styles.ctas}>
            <Link to="/articles" className={styles.btnPrimary}>{t('hero.btnArticles')}</Link>
          </div>
        </motion.div>
      </div>

      <div className={styles.statsRow}>
        {stats.map(({ value, label }) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
