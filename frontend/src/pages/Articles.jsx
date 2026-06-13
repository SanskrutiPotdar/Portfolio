import React, { useState } from 'react'
import styles from '../styles/Articles.module.css'
import { pdfs, pdfImages, images } from '../utils/assets'
import { useLanguage } from '../context/LanguageContext'
import CategoryItems from '../components/CategoryItems'

function PdfCard({ pdf, previewImage }) {
  const { t, language } = useLanguage()
  const [viewerOpen, setViewerOpen] = useState(false)


  return (
    <>
      <article className={styles.card} data-aos="fade-up">
        <div className={styles.preview} onClick={() => setViewerOpen(true)}>
          {previewImage ? (
            <img src={previewImage} alt={pdf.title} className={styles.previewObj} />
          ) : (
            <object
              data={`${pdf.src}#page=1&view=Fit`}
              type="application/pdf"
              className={styles.previewObj}
              aria-label={`Preview of ${pdf.title}`}
            >
              <div className={styles.previewFallback}>
                <span>📄</span>
                <p>PDF Preview</p>
              </div>
            </object>
          )}
          <div className={styles.previewOverlay}>
            <span>{language === 'en' ? 'Click to view' : 'पाहण्यासाठी क्लिक करा'}</span>
          </div>
        </div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardTitle}>{pdf.title}</h4>
          <p className={styles.cardMeta}>PDF Document</p>
          <div className={styles.cardActions}>
            <button className={styles.viewBtn} onClick={() => setViewerOpen(true)}>
              👁 {t('articles.view')}
            </button>
            <a href={pdf.src} download className={styles.downloadBtn}>
              ⬇ {t('articles.download')}
            </a>
            <a href={pdf.src} target="_blank" rel="noopener noreferrer" className={styles.openBtn}>
              ↗ {language === 'en' ? 'Open' : 'उघडा'}
            </a>
          </div>
        </div>
      </article>

      {viewerOpen && (
        <div className={styles.modal} onClick={() => setViewerOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{pdf.title}</h3>
              <div className={styles.modalActions}>
                <a href={pdf.src} download className={styles.modalBtn}>⬇ {t('articles.download')}</a>
                <a href={pdf.src} target="_blank" rel="noopener noreferrer" className={styles.modalBtn}>↗ {language === 'en' ? 'Open in Tab' : 'नवीन टॅबमध्ये उघडा'}</a>
                <button className={styles.modalClose} onClick={() => setViewerOpen(false)}>✕</button>
              </div>
            </div>
            <div className={styles.modalBody}>
              {previewImage ? (
                <img src={previewImage} alt={pdf.title} className={styles.pdfIframe} style={{ objectFit: 'contain' }} />
              ) : (
                <iframe src={`${pdf.src}#toolbar=1`} title={pdf.title} className={styles.pdfIframe} />
              )}
              <div className={styles.mobileFallback}>
                <p>{language === 'en' ? 'Preview not available on this device.' : 'या डिव्हाइसवर पूर्वावलोकन उपलब्ध नाही.'}</p>
                <a href={pdf.src} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                  {language === 'en' ? 'Open PDF ↗' : 'पीडीएफ उघडा ↗'}
                </a>
                <a href={pdf.src} download className={styles.downloadBtn}>{t('articles.download')} ⬇</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function Articles() {
  const { t, language } = useLanguage()
  const [query, setQuery] = useState('')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const previewMap = {
    'Celebrity Profile Continue Update Low.pdf': pdfImages.find(img => /p1/i.test(img.filename))?.src,
    'प्रशांत पितालिया संक्षिप्त.pdf': pdfImages.find(img => /p2/i.test(img.filename))?.src,
  }
  const filtered = pdfs.filter(pdf =>
    pdf.title.toLowerCase().includes(query.toLowerCase())
  )

const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      (prev + 1) % galleryImages.length
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

const galleryImages = images.filter(img => {
  const filename = img.filename.toLowerCase();

  return (
    !filename.includes('profile-placeholder') &&
    filename !== 'prahant pitaliya.jpeg' &&
    filename !== 'logo.jpeg'
  );
});
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div>
            <h1 className="section-title">{t('articles.title')}</h1>
            <p className="section-subtitle">
              {t('articles.subtitle')}
            </p>
          </div>
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              className={styles.search}
              placeholder={t('articles.searchPlaceholder')}
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search publications"
            />
          </div>
        </div>

        {/* Featured article */}
        <article className={styles.featured} data-aos="fade-up">
          <div className={styles.featuredBadge}>{language === 'en' ? 'Featured Essay' : 'वैशिष्ट्यपूर्ण निबंध'}</div>
          <h2 className={styles.featuredTitle}>{t('articles.featuredTitle')}</h2>
          {language === 'en' && <p className={styles.featuredSub}>Mantras for a Positive Life</p>}
          <div className={styles.featuredBody}>
            <p>{t('articles.featuredP1')}</p>
            <p>
              {t('articles.featuredP2_prefix')}
              <strong>{t('articles.featuredP2_bold')}</strong>
              {t('articles.featuredP2_suffix')}
            </p>
            <p>
              {t('articles.featuredP3_prefix')}
              <strong>{t('articles.featuredP3_bold')}</strong>
              {t('articles.featuredP3_suffix')}
            </p>
            <p>
              {t('articles.featuredP4_prefix')}
              <strong>{t('articles.featuredP4_bold')}</strong>
              {t('articles.featuredP4_suffix')}
            </p>
            <p>
              {t('articles.featuredP5_prefix')}
              <strong>{t('articles.featuredP5_bold')}</strong>
              {t('articles.featuredP5_suffix')}
            </p>
            <p>{t('articles.featuredP6')}</p>
          </div>
          <p className={styles.signature}>— {t('articles.signatureName')}</p>
        </article>
        
{/* Gallery items moved into Articles */}
<section className={styles.articlesGallery} id="articles-gallery">
  <div className="container">
    <h1 className="section-title">{t('gallery.title')}</h1>
    <p className="section-subtitle">{t('gallery.desc')}</p>

    <div className={styles.articlesGalleryGrid}>
  {images
    .filter(img => {
  const filename = img.filename.toLowerCase();

  return (
    !filename.includes('profile-placeholder') &&
    filename !== 'prahant pitaliya.jpeg' &&
    filename !== 'logo.jpeg'
  );
})
    .map((img, i) => (
      <button
        type="button"
        key={i}
        className={styles.articlesGalleryItem}
        data-aos="zoom-in"
        onClick={() => setLightboxIndex(i)}
      >
        <img src={img.src} alt={img.title} loading="lazy" />
      </button>
    ))}
</div>
        {lightboxIndex !== null && (
  <div
    className={styles.lightbox}
    onClick={() => setLightboxIndex(null)}
  >
    <button
      className={styles.closeButton}
      onClick={(e) => {
        e.stopPropagation();
        setLightboxIndex(null);
      }}
    >
      ✕
    </button>

    <button
      className={styles.prev}
      onClick={prevImage}
    >
      ❮
    </button>

    <img
      src={galleryImages[lightboxIndex]?.src}
      alt={galleryImages[lightboxIndex]?.title}
      onClick={(e) => e.stopPropagation()}
    />

    <button
      className={styles.next}
      onClick={nextImage}
    >
      ❯
    </button>
  </div>
)}
  </div>
</section>


        {/* Items added via Admin */}
        <section style={{ marginTop: 40 }}>
          <h2>{language === 'en' ? 'Latest Articles' : 'नवीनतम लेख'}</h2>
          <CategoryItems category="Article" />
        </section>
      </div>

         {/* PDF Grid
        <div className={styles.gridHeader}>
          <h2>{language === 'en' ? 'PDF Publications' : 'पीडीएफ प्रकाशने'} {filtered.length > 0 && `(${filtered.length})`}</h2>
        </div>

        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map(pdf => (
              <PdfCard key={pdf.src} pdf={pdf} previewImage={previewMap[pdf.filename]} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>{t('articles.noPdfs')}</p>
        )} */}
      
    </div>
  )
}
