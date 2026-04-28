import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import styles from './ServicesPreview.module.css'

function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <SectionHeader
            label="What I Do"
            title="Services tailored to your needs"
            subtitle="From concept to launch, I offer end-to-end design and development services."
          />
          <Button label="View All Services" to="/services" variant="outline" />
        </div>
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