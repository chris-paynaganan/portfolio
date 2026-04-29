import { Link } from 'react-router-dom'
import styles from './HomeStatement.module.css'

function HomeStatement() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Big headline */}
        <p className={styles.headline}>
          <span className={styles.dark}>I'm a designer </span>
          <span className={styles.muted}>who likes building things that look good and work well. </span>
          <span className={styles.dark}>I explore ideas, test what clicks, and keep things simple from start to finish.</span>
        </p>

        {/* Bottom right — subtitle + button */}
        <div className={styles.bottom}>
          <p className={styles.subtitle}>
            From visuals to full websites, I work fast and keep it clean. Every project is built to feel right, function smoothly, and show what's possible.
          </p>
          <Link to="/projects" className={styles.button}>
            View my Projects
          </Link>
        </div>

      </div>
    </section>
  )
}

export default HomeStatement