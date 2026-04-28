import { useState } from 'react'
import { packages } from '../data/services'
import PackageCard from '../components/PackageCard'
import SectionHeader from '../components/SectionHeader'
import styles from './ServicesPackages.module.css'

const categories = ['All', 'Web Design', 'Development', 'Branding']

function ServicesPackages() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Packages"
          title="Simple, transparent pricing"
          subtitle="Choose a package that fits your needs. All packages include revisions and post-launch support."
          align="center"
        />

        {/* Category Tabs */}
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              highlighted={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPackages