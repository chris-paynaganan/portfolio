import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        {/* Copyright */}
        <p className={styles.copy}>
          © {year} Chris Paynaganan. All creative content protected.
        </p>

        {/* Utility Links */}
        <nav className={styles.links}>
          <NavLink to="/faq" className={styles.link}>FAQ</NavLink>
          <NavLink to="/privacy-policy" className={styles.link}>Privacy Policy</NavLink>
          <NavLink to="/terms" className={styles.link}>Terms and Conditions</NavLink>
        </nav>

        {/* Social Icons */}
        <div className={styles.socials}>

          {/* Email */}
          <a href="mailto:mark.payns@gmail.com" className={styles.icon} aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/chrispaynaganandesign" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/chrispaynaganan/" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer