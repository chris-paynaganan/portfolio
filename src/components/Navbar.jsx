import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/nav'
import styles from './Navbar.module.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>

        {/* Logo */}
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          Chris<span>.</span>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className={styles.ctaButton} onClick={closeMenu}>
            Let's Talk
          </NavLink>
        </nav>

        {/* Hamburger for Mobile */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`}></span>
        </button>

      </div>
    </header>
  )
}

export default Navbar