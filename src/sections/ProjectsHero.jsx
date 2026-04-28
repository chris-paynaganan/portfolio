import styles from './ProjectsHero.module.css'

function ProjectsHero() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>My Work</span>
        <h1 className={styles.title}>
          Projects I've built with <em>purpose</em>
        </h1>
        <p className={styles.subtitle}>
          A collection of projects across branding, web design, and development. 
          Each one built with intention, care, and attention to detail.
        </p>
      </div>
    </section>
  )
}

export default ProjectsHero