import React, { useState } from 'react';
import styles from '../styles/Gallery.module.css';
import { useLanguage } from '../context/LanguageContext';
import { poetryImages } from '../utils/assets';
import CategoryItems from '../components/CategoryItems';

export default function Poetry() {
  const { t } = useLanguage();

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(
      (prev) => (prev + 1) % poetryImages.length
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex(
      (prev) => (prev - 1 + poetryImages.length) % poetryImages.length
    );
  };

  return (
    <section className={styles.gallery} id="poetry">
      <div className="container">
        <h1 className="section-title">{t('poetry.title')}</h1>
        <p className="section-subtitle">{t('poetry.desc')}</p>

        <div className={styles.grid}>
          {poetryImages.map((img, index) => (
            <div key={img.filename} className={styles.item}>
              <img
                src={img.src}
                alt={img.title}
                onClick={() => setLightboxIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className={styles.close}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
          >
            ×
          </button>

          <button
            type="button"
            className={styles.prev}
            onClick={prevImage}
          >
            ❮
          </button>

          <img
            src={poetryImages[lightboxIndex]?.src}
            alt={poetryImages[lightboxIndex]?.title}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className={styles.next}
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      )}

      <div className="container" style={{ marginTop: 32 }}>
        <h2 className="section-title">Latest Poetry</h2>
        <CategoryItems category="Poetry" />
      </div>
    </section>
  );
}