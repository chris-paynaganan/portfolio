import styles from './TestimonialCard.module.css'

function TestimonialCard({ testimonial }) {
  return (
    <div className={styles.card}>
      <span className={styles.quoteIcon}>&ldquo;</span>
      <p className={styles.quote}>{testimonial.quote}</p>
      <div className={styles.author}>
        <p className={styles.name}>{testimonial.name}</p>
        <p className={styles.title}>{testimonial.title}</p>
      </div>
    </div>
  )
}

export default TestimonialCard