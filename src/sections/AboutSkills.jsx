import SectionHeader from '../components/SectionHeader'
import styles from './AboutSkills.module.css'

const skills = [
  { category: 'Design', items: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop'] },
  { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Notion', 'Slack'] },
  { category: 'Other', items: ['SEO Basics', 'Accessibility', 'Performance', 'Responsive Design'] },
]

function AboutSkills() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Skills & Tools"
          title="What I work with"
          subtitle="A mix of design and development tools I use to bring ideas to life."
          align="center"
        />
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSkills