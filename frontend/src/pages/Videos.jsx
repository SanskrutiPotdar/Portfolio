import React, { useState } from 'react'
import styles from '../styles/Videos.module.css'
import { useLanguage } from '../context/LanguageContext'
import CategoryItems from '../components/CategoryItems'

/**
 * Videos Component
 * 
 * Showcases a localized list of lecture and keynote videos.
 * Features an interactive overlay modal for playing videos in a responsive iframe.
 * If a video doesn't have an active embed, it degrades gracefully to a localized "Coming Soon" card.
 */
export default function Videos() {
  const { t } = useLanguage()
  
  // State to hold the currently selected video to play in the lightbox modal
  const [activeVideo, setActiveVideo] = useState(null)

  // Array of keynote lectures / corporate session videos
  const videos = [
    {
      id: 'video_1',
      title: t('videos.v1_title'),
      subtitle: t('videos.v1_sub'),
      embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Active YouTube video embed URL
      thumb: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Dynamic YT thumbnail asset
    },
    {
      id: 'placeholder_2',
      title: t('videos.v2_title'),
      subtitle: t('videos.v2_sub'),
      embed: null, // Placeholder status
      thumb: null,
    },
    {
      id: 'placeholder_3',
      title: t('videos.v3_title'),
      subtitle: t('videos.v3_sub'),
      embed: null, // Placeholder status
      thumb: null,
    },
  ]

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title">{t('videos.title')}</h1>
        <p className="section-subtitle">
          {t('videos.subtitle')}
        </p>

        <div className={styles.grid}>
          {videos.map((v) => (
            <div key={v.id} className={styles.card} data-aos="fade-up">
              <div
                className={styles.thumb}
                onClick={() => v.embed && setActiveVideo(v)}
              >
                {v.thumb ? (
                  <img src={v.thumb} alt={v.title} />
                ) : (
                  <div className={styles.thumbPlaceholder}>
                    <div className={styles.playBtn}>▶</div>
                    <p className={styles.comingSoon}>{t('videos.comingSoon')}</p>
                  </div>
                )}
              </div>
              <div className={styles.info}>
                <h3>{v.title}</h3>
                <p>{v.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta} data-aos="fade-up">
          <h3>{t('videos.ctaTitle')}</h3>
          <p>{t('videos.ctaDesc')}</p>
          <a href="/contact" className={styles.ctaBtn}>{t('videos.ctaBtn')}</a>
        </div>
      </div>

      <div className="container" style={{ marginTop: 32 }}>
        <h2 className="section-title">Latest Videos</h2>
        <CategoryItems category="Video" />
      </div>

      {activeVideo?.embed && (
        <div className={styles.modal} onClick={() => setActiveVideo(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveVideo(null)}>✕</button>
            <iframe
              src={activeVideo.embed}
              title={activeVideo.title}
              frameBorder="0"
              allowFullScreen
              className={styles.iframe}
            />
          </div>
        </div>
      )}
    </div>
  )
}
