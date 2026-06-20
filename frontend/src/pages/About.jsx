import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/About.module.css'
import { profileImageSrc } from '../utils/assets'
import { useLanguage } from '../context/LanguageContext'
import Slider from './Slider'

export default function About() {
  const { t } = useLanguage()

  const roles = [
    { icon: '✍️', title: t('about.author'), desc: t('about.authorDesc') },
    { icon: '🪶', title: t('about.poet'), desc: t('about.poetDesc') },
    { icon: '🎯', title: t('about.careerGuide'), desc: t('about.GuideDesc') },
    { icon: '🧑‍🏫', title: t('about.CorporateTrainer'), desc: t('about.trainerDesc') },
    { icon: '🤝', title: t('about.CommunityMobilizer'), desc: t('about.communityDesc') },
    { icon: '🙏', title: t('about.SpirityalMentor'), desc: t('about.spiritualDesc') }
  ]

  const timeline = [
    { year: '1995', event: t('about.t1995') },
    { year: '1997', event: t('about.t1997') },
    { year: '1997', event: t('about.tt1997') },
    { year: '2000', event: t('about.t2000') },
    { year: '2002', event: t('about.t2002') },
    { year: '2004', event: t('about.t2004') },
    { year: '2005', event: t('about.t2005') },
    { year: '2006', event: t('about.t2006') },
    { year: '2009', event: t('about.t2009') },
    { year: '2010', event: t('about.t2010') },
    { year: '2010', event: t('about.tt2010') },
    { year: '2011', event: t('about.t2011') },
    { year: '2012', event: t('about.t2012') },
    { year: '2012', event: t('about.tt2012') },
    { year: '2013', event: t('about.t2013') },
    { year: '2013', event: t('about.tt2013') },
    { year: '2015', event: t('about.t2015') },
    { year: '2016', event: t('about.t2016') },
    { year: '2017', event: t('about.t2017') },
    { year: '2018', event: t('about.t2018') },
    { year: '2020', event: t('about.t2020') },
    { year: '2021', event: t('about.t2021') },
    { year: '2026', event: t('about.t2026') }
  ]

  return (
    <div className={styles.page}>
       {/* NEW SLIDER SECTION */}
  <section className={styles.sliderSection}>
    <div className="container">
      <Slider />
    </div>
  </section>
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.photoCol}>
              {profileImageSrc && (
                <div className={styles.photoWrap}>
                  <img src={profileImageSrc} alt="Prashant Pitaliya" className={styles.photo} />
                </div>
              )}
              <div className={styles.quickInfo}>
                <div className={styles.infoItem}><span>📍</span> {t('about.location')}</div>
                <div className={styles.infoItem}><span>🌐</span> {t('about.languages')}</div>
                <div className={styles.infoItem}><span>📗</span> {t('about.booksStat')}</div>
              </div>
            </div>
            <div>
              <p className={styles.eyebrow}>{t('about.eyebrow')}</p>
              <h1 className={styles.heading}>{t('hero.title')}</h1>
              <p className={styles.bio}>
                {t('about.desc')}
              </p>
              <p className={styles.bio}>
                {t('about.desc2')}
              </p>
              <Link to="/downloads">
  <button type="button" className={styles.downloadBtn}>
    📄 {t('about.downloadProfile')}
  </button>
</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className="container">
          <h2 className="section-title">{t('about.whatIDo')}</h2>
          <div className={styles.rolesGrid}>
            {roles.map(({ icon, title, desc }) => (
              <div key={title} className={styles.roleCard} data-aos="fade-up">
                <div className={styles.roleIcon}>{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className="container">
          <h2 className="section-title">{t('about.career')}</h2>
          <p className="section-subtitle">{t('about.careerSubtitle')}</p>
          <div className={styles.timeline}>
            {timeline.map(({ year, event }, i) => (
              <div key={year} className={styles.timelineItem} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className={styles.timelineYear}>{year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineText}>{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
