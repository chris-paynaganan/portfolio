import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import styles from './ProjectsGrid.module.css'

function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.header}>
          <h2 className={styles.title}>What I can do for you.</h2>
          <div className={styles.headerSub}>
            <p>Every service is built around one goal — making sure what we create actually works for your business, not just looks good on a screen.</p>
            <p>Whether you need one thing done well or the whole picture handled end-to-end, here is what I bring to the table.</p>
          </div>
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

export default ServicesGrid