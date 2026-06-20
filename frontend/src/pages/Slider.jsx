import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Slider.module.css'
import Lightbox from 'yet-another-react-lightbox'
import { FiDownload } from 'react-icons/fi'

import 'swiper/css'
import 'swiper/css/pagination'
import 'yet-another-react-lightbox/styles.css'

import S1 from '../assets/slider/S1.jpeg'
import S2 from '../assets/slider/S2.jpeg'
import S3 from '../assets/slider/S3.jpeg'
import S4 from '../assets/slider/S4.jpeg'
import S5 from '../assets/slider/S5.jpeg'
import S6 from '../assets/slider/S6.jpeg'
import S7 from '../assets/slider/S7.jpeg'
import S8 from '../assets/slider/S8.jpeg'

export default function AboutSlider() {
  const navigate = useNavigate()

  const slides = [
    { image: S1 },
    { image: S2 },
    { image: S3 },
    { image: S4 },
    { image: S5 },
    { image: S6 },
    { image: S7 },
    { image: S8 },
  ]

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const lightboxSlides = slides.map(slide => ({
  src: slide.image
}))

  const clickTimeout = useRef(null)

const handleClick = (index) => {
  clickTimeout.current = setTimeout(() => {
    setIndex(index)
    setOpen(true)
  }, 250)
}

const handleDoubleClick = () => {
  clearTimeout(clickTimeout.current)
  navigate('/downloads?category=celebrity')
}
  useEffect(() => {
    return () => {
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current)
      }
    }
  }, [])
console.log(lightboxSlides)
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className={styles.aboutSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className={styles.swiperImage}
              style={{ cursor: 'pointer' }}
                onClick={() => handleClick(index)}
               onDoubleClick={handleDoubleClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
  open={open}
  close={() => setOpen(false)}
  index={index}
  slides={lightboxSlides}
/>

{open && (
  <button
    className={styles.lightboxDownloadBtn}
    onClick={() => navigate('/downloads?category=celebrity')}
    aria-label="Download"
  >
    <FiDownload size={20} />
  </button>
)}
      </div>
    )
}