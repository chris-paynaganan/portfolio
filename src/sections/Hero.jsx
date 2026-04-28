import Button from '../components/Button'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <span className={styles.label}>Available for Work</span>
          <h1 className={styles.title}>
            Designing digital experiences that <em>matter</em>
          </h1>
          <p className={styles.subtitle}>
            I'm Chris, a designer and developer crafting purposeful, 
            beautiful, and functional websites for brands that want to stand out.
          </p>
          <div className={styles.buttons}>
            <Button label="View My Work" to="/projects" variant="primary" />
            <Button label="Let's Talk" to="/contact" variant="secondary" />
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.imagePlaceholder} />
        </div>
      </div>
    </section>
  )
}

export default Hero