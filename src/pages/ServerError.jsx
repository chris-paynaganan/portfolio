import { NavLink } from 'react-router-dom'
import styles from './ErrorPage.module.css'

function ServerError() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.code}>500</span>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.subtitle}>
          We are experiencing a server issue. Please try again later.
        </p>
        <NavLink to="/" className={styles.button}>
          Back to Home
        </NavLink>
      </div>
    </section>
  )
}

export default ServerError