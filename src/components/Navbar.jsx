import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import avatar from '../assets/images/avatar.jpeg'

const mainLinks = [
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'About Me', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const utilityLinks = [
  { label: 'FAQ', path: '/faq' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms and Condition', path: '/terms' },
]

const ChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [retracted, setRetracted] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setRetracted(true)
      } else if (currentScrollY < lastScrollY.current) {
        setRetracted(false)
      }

      setScrolled(currentScrollY > 20)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const footer = document.querySelector('footer')
    if (footer) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHidden(true)
          } else {
            setHidden(false)
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(footer)
      return () => {
        window.removeEventListener('scroll', handleScroll)
        observer.disconnect()
      }
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.wrapper} ${hidden ? styles.wrapperHidden : ''}`}>
      <nav className={`
        ${styles.navbar}
        ${scrolled ? styles.scrolled : ''}
        ${menuOpen ? styles.expanded : ''}
        ${retracted && !menuOpen ? styles.retracted : ''}
      `}>

        {/* Top Bar */}
        <div className={styles.topBar}>

          {/* Left — Avatar + Name */}
          <NavLink to="/" className={styles.brand} onClick={closeMenu}>
            <div className={styles.avatarWrapper}>
              <img src={avatar} alt="Chris Paynaganan" className={styles.avatar} />
            </div>
            <span className={styles.name}>Chris Paynaganan</span>
          </NavLink>

          {/* Center — Desktop Nav Links */}
          <div className={`${styles.desktopLinks} ${retracted && !menuOpen ? styles.hideLinks : ''}`}>
            {mainLinks.map((link, index) => (
              <div key={link.path} className={styles.linkWrapper}>
                {index !== 0 && <span className={styles.divider}>|</span>}
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.activeLink}` : styles.link
                  }
                >
                  {link.label}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Right — CTA + Hamburger */}
          <div className={`${styles.right} ${retracted && !menuOpen ? styles.hideLinks : ''}`}>
            <NavLink to="/contact" className={styles.ctaButton} onClick={closeMenu}>
              <span className={styles.ctaIcon}><ChatIcon /></span>
              Chat with me
            </NavLink>
            <button
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
            </button>
          </div>

        </div>

        {/* Extended Menu */}
        <div className={`${styles.extendedMenu} ${menuOpen ? styles.extendedMenuOpen : ''}`}>
          <div className={styles.extendedMenuInner}>
            <div className={styles.menuGrid}>
              <div className={styles.menuColumn}>
                <span className={styles.menuLabel}>Quick Links</span>
                {mainLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={styles.menuLink}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <div className={styles.menuColumn}>
                <span className={styles.menuLabel}>Quick Links</span>
                {utilityLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={styles.menuLink}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/contact" className={styles.menuCta} onClick={closeMenu}>
              <span className={styles.ctaIcon}><ChatIcon /></span>
              Chat with me
            </NavLink>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar