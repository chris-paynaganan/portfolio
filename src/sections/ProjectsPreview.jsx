import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import styles from './ProjectsPreview.module.css'

function ProjectsPreview() {
  const featured = projects.slice(0, 3)

  return (
    <section className={styles.section}>
      <div className="container">

        {/* Top row: title + button */}
        <div className={styles.top}>
          <h2 className={styles.title}>Projects I'm proud of</h2>
          <Link to="/projects" className={styles.button}>
            View all projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Two-column subtext */}
        <div className={styles.subtext}>
          <p>I've always believed the best work doesn't come from quick wins, it comes from showing up, putting in the hours, reworking the details, and pushing past what's "good enough." This collection reflects that process. Long nights, early mornings, too much coffee, and a constant drive to make every decision more intentional than the last.</p>
          <p>What you'll see here is a curated selection of projects across branding, web design, and development. Not just finished outputs, but work I'm genuinely proud of. Each one represents the level of thought, discipline, and care I bring into everything I build.</p>
        </div>

        {/* Mobile button */}
        <Link to="/projects" className={`${styles.button} ${styles.buttonMobile}`}>
          View all projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Grid */}
        <div className={styles.grid}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsPreview