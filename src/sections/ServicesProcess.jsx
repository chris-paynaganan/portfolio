import SectionHeader from '../components/SectionHeader'
import styles from './ServicesProcess.module.css'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start with a deep dive into your goals, audience, and vision. This shapes everything that follows.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'I map out the approach — from sitemap and content structure to design direction and technical stack.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'I create wireframes and high-fidelity designs in Figma, iterating until everything feels right.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'I build the product with clean, maintainable code — responsive across all devices and screen sizes.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'After thorough testing, we go live. I handle deployment and make sure everything runs smoothly.',
  },
  {
    number: '06',
    title: 'Support',
    description: 'Post-launch, I am available for updates, improvements, and ongoing support as your business grows.',
  },
]

function ServicesProcess() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="How I Work"
          title="My process, start to finish"
          subtitle="A clear and collaborative process that keeps you informed at every step."
          align="center"
        />
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesProcess