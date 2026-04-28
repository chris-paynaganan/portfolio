import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/nav'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>

        {/* Logo + Tagline */}
        <div className={styles.brand}>
          <NavLink to="/" className={styles.logo}>
            Chris<span>.</span>
          </NavLink>
          <p className={styles.tagline}>
            Designing experiences that matter.
          </p>
        </div>

        {/* Nav Links */}
        <nav className={styles.links}>
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={styles.link}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Utility Links */}
        <nav className={styles.utility}>
          <NavLink to="/faq" className={styles.link}>FAQ</NavLink>
          <NavLink to="/privacy-policy" className={styles.link}>Privacy Policy</NavLink>
          <NavLink to="/terms" className={styles.link}>Terms & Conditions</NavLink>
        </nav>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p>© {year} Chris Paynaganan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer