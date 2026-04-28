import styles from './AboutTimeline.module.css'

const timeline = [
  {
    role: 'Freelance Product Designer',
    company: 'Fourge Studio',
    description: 'Independent product design lead owning concept development, wireframes, user flow planning, and UI systems for multiple client projects.',
  },
  {
    role: 'UI UX Designer',
    company: 'True Blue Solutions PH',
    description: 'Designed user interfaces and experiences for web and mobile applications across healthcare and staffing platforms.',
  },
  {
    role: 'Customer Support',
    company: 'Asia Premier One Source, Inc.',
    description: 'Answered calls and monitored test takers online ensuring 100% protocol compliance across 500+ online exams.',
  },
]

function AboutTimeline() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>My Journey so far</h2>
        <p className={styles.subtitle}>
          This is a look at how my career has unfolded so far, from where I started to where I am 
          now. Each step, role, and challenge played a part in shaping how I think, work, and grow. 
          It's not just about what I've done, but how those experiences built on each other over 
          time and led me to where I am today.
        </p>
        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.dot} />
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