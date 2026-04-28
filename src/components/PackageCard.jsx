import Button from './Button'
import styles from './PackageCard.module.css'

function PackageCard({ pkg, highlighted = false }) {
  return (
    <div className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}>
      <div className={styles.top}>
        {highlighted && <span className={styles.badge}>Most Popular</span>}
        <h3 className={styles.name}>{pkg.name}</h3>
        <p className={styles.price}>{pkg.price}</p>
        <p className={styles.description}>{pkg.description}</p>
      </div>
      <ul className={styles.features}>
        {pkg.features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <span className={styles.check}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        label="Get Started"
        to="/contact"
        variant={highlighted ? 'primary' : 'secondary'}
      />
    </div>
  )
}

export default PackageCard