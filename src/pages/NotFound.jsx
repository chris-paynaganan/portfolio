import { NavLink } from 'react-router-dom'
import styles from './ErrorPage.module.css'

function NotFound() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.subtitle}>
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <NavLink to="/" className={styles.button}>
          Back to Home
        </NavLink>
      </div>
    </section>
  )
}

export default NotFound