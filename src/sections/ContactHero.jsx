import styles from './ContactHero.module.css'

function ContactHero() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>Contact</span>
        <h1 className={styles.title}>
          Let's build something <em>great</em> together
        </h1>
        <p className={styles.subtitle}>
          Have a project in mind or just want to say hello? 
          Fill out the form and I'll get back to you within 24-48 hours.
        </p>
      </div>
    </section>
  )
}

export default ContactHero