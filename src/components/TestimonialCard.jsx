import styles from './TestimonialCard.module.css'

function TestimonialCard({ testimonial }) {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>"{testimonial.quote}"</p>
      <div className={styles.author}>
        <div className={styles.avatar}>
          {testimonial.avatar ? (
            <img src={testimonial.avatar} alt={testimonial.name} />
          ) : (
            <div className={styles.avatarPlaceholder}>
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{testimonial.name}</p>
          <p className={styles.title}>{testimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard