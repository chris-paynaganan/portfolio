import styles from './ServiceCard.module.css'

function ServiceCard({ service }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {service.icon ? (
          <img src={service.icon} alt={service.title} />
        ) : (
          <div className={styles.iconPlaceholder} />
        )}
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
    </div>
  )
}

export default ServiceCard