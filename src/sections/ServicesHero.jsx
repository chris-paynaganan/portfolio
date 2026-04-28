import styles from './ServicesHero.module.css'

function ServicesHero() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>What I Offer</span>
        <h1 className={styles.title}>
          Services built around <em>your goals</em>
        </h1>
        <p className={styles.subtitle}>
          Whether you need a brand identity, a website, or both — I offer 
          end-to-end design and development services tailored to your needs 
          and budget.
        </p>
      </div>
    </section>
  )
}

export default ServicesHero