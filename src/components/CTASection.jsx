import Button from './Button'
import styles from './CTASection.module.css'

function CTASection({
  title = "Let's work together",
  subtitle = "Have a project in mind? Let's talk about it.",
  buttonLabel = "Get In Touch",
  buttonTo = "/contact"
}) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <Button label={buttonLabel} to={buttonTo} variant="primary" />
      </div>
    </section>
  )
}

export default CTASection