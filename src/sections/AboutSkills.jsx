import styles from './AboutSkills.module.css'

const values = [
  {
    icon: '👤',
    title: 'User-first, always.',
    description1: 'I design based on how people actually behave, not assumptions or personal taste.',
    description2: 'By asking the right questions early and validating needs, I make sure the outcome reflects what users and the business truly need, not what I want to design.',
  },
  {
    icon: '⚙️',
    title: 'Systems over chaos',
    description1: 'I rely on structure to keep projects clear, accessible, and scalable.',
    description2: 'Design systems, clear frameworks, and informed decisions reduce friction, maintain consistency, and make collaboration straightforward from start to finish.',
  },
  {
    icon: '📏',
    title: 'Built to scale',
    description1: 'I design beyond the immediate launch. Every decision considers future growth, new features, and long term usability.',
    description2: 'The goal is to deliver work that can adapt, expand, and remain effective as the product or business evolves, without needing constant rework.',
  },
]

function AboutSkills() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>My Design Values</h2>
        <p className={styles.subtitle}>
          These values shape how I approach every project, from the first conversation to final 
          delivery. They guide how I think through problems, make decisions, and collaborate with 
          clients and teams. Rather than following trends or personal preference, I rely on these 
          principles to keep the work focused, structured, and aligned with real user and business 
          needs. Every project I take on is built on these foundations.
        </p>
        <div className={styles.cards}>
          {values.map((value) => (
            <div key={value.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{value.icon}</span>
                <h3 className={styles.cardTitle}>{value.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p>{value.description1}</p>
                <p>{value.description2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSkills