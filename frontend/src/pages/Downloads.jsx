import React from "react";
import styles from "../styles/Downloads.module.css";
import { pdfs, pdfImages } from "../utils/assets";
import { useLanguage } from "../context/LanguageContext";
import { useSearchParams } from 'react-router-dom'
import CategoryItems from '../components/CategoryItems'

export default function Downloads() {
  const { language } = useLanguage();

  const previewMap = Object.fromEntries(
    pdfImages.map(img => [
      img.filename.replace(/\.[^.]+$/, ".pdf"),
      img.src
    ])
  );

  const [searchParams] = useSearchParams()

  const category = searchParams.get('category')

  return (
    <>
    <div className="container">
      <div className={styles.gridHeader}>
        <h2>
          {language === "en"
            ? "PDF Downloads"
            : "पीडीएफ प्रकाशने"}
        </h2>
      </div>

      {category === 'celebrity' && (
  <h3 className={styles.categoryTitle}>
  </h3>
)}

      <div className={styles.grid}>
        {pdfs.map(pdf => (
          <div key={pdf.src} className={styles.card}>
            <div className={styles.previewWrapper}>
              {previewMap[pdf.filename] ? (
                <img
                  src={previewMap[pdf.filename]}
                  alt={pdf.title}
                  className={styles.preview}
                />
              ) : (
                <div className={styles.noPreview}>
                  📄 PDF Preview
                </div>
              )}
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.title}>{pdf.title}</h3>

              <div className={styles.actions}>
                <a
                  href={pdf.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.openBtn}
                >
                  👁 Open
                </a>

                <a
                  href={pdf.src}
                  download
                  className={styles.downloadBtn}
                >
                  ⬇ Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className="container" style={{ marginTop: 32 }}>
  <h2 className="section-title">Latest Downloads</h2>
  <CategoryItems category="Downloads" />
</div>
      </div>
    </>
  );
}