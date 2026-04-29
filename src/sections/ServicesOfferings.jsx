import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import SectionHeader from '../components/SectionHeader'
import styles from './ServicesOfferings.module.css'

function ServicesOfferings() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="What I Do"
          title="Services tailored to your needs"
          subtitle="From concept to launch, I offer end-to-end design and development services."
        />
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOfferings