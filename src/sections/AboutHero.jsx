import styles from './AboutHero.module.css'

function AboutHero() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <span className={styles.label}>About Me</span>
          <h1 className={styles.title}>
            Designer, developer, and <em>problem solver</em>
          </h1>
          <p className={styles.bio}>
            I'm Chris Paynaganan, a designer and developer based in the Philippines. 
            I specialize in creating purposeful digital experiences that help brands 
            connect with their audience in meaningful ways.
          </p>
          <p className={styles.bio}>
            With a passion for clean design and solid code, I bridge the gap between 
            how things look and how they work — delivering products that are both 
            beautiful and functional.
          </p>
        </div>
        <div className={styles.image}>
          <div className={styles.imagePlaceholder} />
        </div>
      </div>
    </section>
  )
}

export default AboutHero