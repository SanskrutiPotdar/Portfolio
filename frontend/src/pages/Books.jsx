import React, { useState } from 'react'
import styles from '../styles/Books.module.css'
import { bookImages } from '../utils/assets'
import { useLanguage } from '../context/LanguageContext'
import CategoryItems from '../components/CategoryItems'

export default function Books(){
  const { t } = useLanguage()
  const [lightbox, setLightbox] = useState(null)
  const books = bookImages.filter(img => !/profile-placeholder/i.test(img.filename))
  return (
    <section className={styles.achievements} id="books">
      <div className="container">
        <h1 className="section-title">{t('books.title')}</h1>
        <p className="section-subtitle">{t('books.desc')}</p>
        <div className={styles.booksGrid}>
          {books.map((img, i)=> {
            const titleKey = [
              'books.firstBookTitle',
              'books.secondBookTitle',
              'books.thirdBookTitle',
              'books.fourthBookTitle'
            ][i]
            const displayTitle = titleKey ? t(titleKey) : img.title
            return (
             <div
  className={styles.bookCard}
  key={i}
  data-aos="zoom-in"
>
  <div
    className={styles.bookCover}
    onClick={() => setLightbox(img.src)}
  >
    <img src={img.src} alt={displayTitle} />
  </div>

  <div className={styles.bookInfo}>
    <h3>{displayTitle}</h3>
    <div className={styles.bookActions}>
  <button
    className={styles.previewBtn}
    onClick={() => setLightbox(img.src)}
  >
    Preview
  </button>

  {img.amazonLink && (
    <a
      href={img.amazonLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.amazonBtn}
    >
      🛒Buy on Amazon
    </a>
  )}
</div>
  </div>
</div>
            )
          })}
          {lightbox && (
            <div className={styles.lightbox} onClick={() => setLightbox(null)}>
              <button type="button" className={styles.close}>×</button>
              <img src={lightbox} alt="preview" />
            </div>
          )}
        </div>
      </div>
      <div className="container" style={{ marginTop: 32 }}>
        <h2 className="section-title">Latest Books</h2>
        <CategoryItems category="Book" />
      </div>
    </section>
  )
}
