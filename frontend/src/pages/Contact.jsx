import React from 'react'
import styles from '../styles/Contact.module.css'
import { useLanguage } from '../context/LanguageContext'

export default function Contact(){
  const { t } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const subject = form.subject.value.trim()
    const message = form.message.value.trim()
    const mobile = form.mobile.value.trim()

    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}${mobile ? `\nMobile: ${mobile}` : ''}`
    const encoded = encodeURIComponent(text)
    const url = `https://wa.me/917499534305?text=${encoded}`

    window.open(url, '_blank')
  }

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <h1 className="section-title">{t('contact.title')}</h1>
        <div className={styles.contactInfo}>
        </div>
        <div className={styles.grid}>
          <div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input name="name" placeholder={t('contact.name')} required />
              <input name="email" placeholder={t('contact.email')} type="email" required />
              <input name="subject" placeholder="Subject" required />
              <input name="mobile" placeholder={t('contact.mobile')} />
              <textarea name="message" placeholder={t('contact.message')} rows={5} required />
              <button className={styles.btn} type="submit">{t('contact.send')}</button>
            </form>
          </div>
          <div className={styles.mapWrap}>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01925402298!2d144.9630583153156!3d-37.81410797975117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f4b0f3%3A0x5045675218ce240!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau" className={styles.map} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
