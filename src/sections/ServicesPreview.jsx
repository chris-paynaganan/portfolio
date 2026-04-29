import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import styles from './ServicesPreview.module.css'

function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Top row: title + button */}
        <div className={styles.top}>
          <h2 className={styles.title}>Services tailored to your needs</h2>
          <Link to="/services" className={styles.button}>
            View all services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Two-column subtext */}
        <div className={styles.subtext}>
          <p>From concept to launch, I offer end-to-end design and development services built around what your business actually needs.</p>
          <p>Whether it's branding, web design, or development, every service is intentional and designed to move you forward.</p>
        </div>

        {/* Mobile button */}
        <Link to="/services" className={`${styles.button} ${styles.buttonMobile}`}>
          View all services
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesPreview