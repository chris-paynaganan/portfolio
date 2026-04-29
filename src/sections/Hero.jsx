import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

import tbjImg    from '../assets/images/TBJ homepage.png'
import divinaImg from '../assets/images/Divina Law homepage.png'
import aiqueImg  from '../assets/images/aique landing page.png'
import wphImg    from '../assets/images/wph homepage.png'
import lgaImg    from '../assets/images/LGA&Co Homepage 1.png'

const IMAGES = [
  { src: lgaImg,    alt: 'LGA&Co Homepage' },
  { src: divinaImg, alt: 'Divina Law Homepage' },
  { src: tbjImg,    alt: 'The Brahmans Journal' },
  { src: wphImg,    alt: 'WPH Homepage' },
  { src: aiqueImg,  alt: 'Aique Landing Page' },
]

const DESKTOP_TRANSFORMS = [
  { x: -320, y: 40, rotate: -18, scale: 0.82 },
  { x: -165, y: 15, rotate: -9,  scale: 0.90 },
  { x: 0,    y: 0,  rotate: 0,   scale: 1.00 },
  { x: 165,  y: 15, rotate: 9,   scale: 0.90 },
  { x: 320,  y: 40, rotate: 18,  scale: 0.82 },
]

const MOBILE_TRANSFORMS = [
  { x: -120, y: 20, rotate: -12, scale: 0.85 },
  { x: -60,  y: 8,  rotate: -6,  scale: 0.92 },
  { x: 0,    y: 0,  rotate: 0,   scale: 1.00 },
  { x: 60,   y: 8,  rotate: 6,   scale: 0.92 },
  { x: 120,  y: 20, rotate: 12,  scale: 0.85 },
]

function Hero() {
  const cardsRef = useRef([])

  useEffect(() => {
    const CENTER = 2
    const isMobile = window.innerWidth <= 767
    const transforms = isMobile ? MOBILE_TRANSFORMS : DESKTOP_TRANSFORMS

    // Reset all cards to center, invisible
    cardsRef.current.forEach((el) => {
      if (!el) return
      el.style.transition = 'none'
      el.style.opacity = '0'
      el.style.transform = `translate(0px, 0px) rotate(0deg) scale(0.95)`
    })

    // Fade in center card
    const t1 = setTimeout(() => {
      const center = cardsRef.current[CENTER]
      if (center) {
        center.style.transition = 'opacity 0.6s ease'
        center.style.opacity = '1'
        center.style.transform = `translate(0px, 0px) rotate(0deg) scale(1)`
      }
    }, 100)

    // Fan out side cards
    const t2 = setTimeout(() => {
      cardsRef.current.forEach((el, i) => {
        if (!el || i === CENTER) return
        const { x, y, rotate, scale } = transforms[i]
        el.style.transition = 'opacity 0.5s ease, transform 0.7s cubic-bezier(0.32, 0.72, 0, 1)'
        el.style.opacity = '1'
        el.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`
      })
    }, 800)

    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <section className={styles.hero}>

      {/* Text — inside container */}
      <div className="container">
        <div className={styles.text}>
          <h1 className={styles.title}>
            <span className={styles.titleMuted}>UX designer </span>
            crafting revenue-driven online presence
          </h1>
          <p className={styles.subtitle}>
            Thoughtfully crafting websites that don't just look impressive but also guide visitors
            toward taking action, helping your brand grow and your business thrive.
          </p>
          <div className={styles.buttons}>
            <a
              href="https://calendly.com/uxbychrisph/the-virtual-coffee"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Chat with me
            </a>
            <a href="mailto:mark.payns@gmail.com" className={styles.btnSecondary}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Email me
            </a>
          </div>
        </div>
      </div>

      {/* Image stack — full bleed, outside container */}
      <div className={styles.imageStack}>
        {IMAGES.map((img, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className={styles.card}
            style={{ zIndex: i === 2 ? 5 : i < 2 ? i + 1 : 5 - i }}
          >
            <img src={img.src} alt={img.alt} className={styles.cardImg} />
          </div>
        ))}
      </div>

    </section>
  )
}

export default Hero