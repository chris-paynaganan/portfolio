import SectionHeader from '../components/SectionHeader'
import styles from './AboutTimeline.module.css'

const timeline = [
  {
    year: '2024 — Present',
    role: 'Freelance Designer & Developer',
    company: 'Self-employed',
    description: 'Working with clients across various industries to design and build purposeful digital experiences.',
  },
  {
    year: '2022 — 2024',
    role: 'UI/UX Designer',
    company: 'Company Name',
    description: 'Designed user interfaces and experiences for web and mobile applications.',
  },
  {
    year: '2020 — 2022',
    role: 'Junior Web Developer',
    company: 'Company Name',
    description: 'Built and maintained websites and web applications for various clients.',
  },
]

function AboutTimeline() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Experience"
          title="My journey so far"
          subtitle="A timeline of my professional experience and growth."
        />
        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.year}>{item.year}</div>
              <div className={styles.content}>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTimeline