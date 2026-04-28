import styles from './CTASection.module.css'
import coffeeCup from '../assets/images/coffee-cup.png'

function CTASection({
  title = "Let's have a virtual coffee",
  subtitle = "Whether you're looking to collaborate, discuss a project, or just want to connect, I'd love to chat about how we can work together.",
  buttonLabel = "Book an appointment",
  buttonHref = "https://calendly.com/uxbychrisph/the-virtual-coffee"
}) {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <span className={styles.buttonIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="7" y="14" width="2" height="2" rx="0.5" fill="white"/>
                  <rect x="11" y="14" width="2" height="2" rx="0.5" fill="white"/>
                  <rect x="15" y="14" width="2" height="2" rx="0.5" fill="white"/>
                  <rect x="7" y="18" width="2" height="2" rx="0.5" fill="white"/>
                  <rect x="11" y="18" width="2" height="2" rx="0.5" fill="white"/>
                </svg>
              </span>
              {buttonLabel}
            </a>
          </div>
          <div className={styles.imageWrap}>
            <img src={coffeeCup} alt="Coffee cup" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection