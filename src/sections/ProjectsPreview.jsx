import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import styles from './ProjectsPreview.module.css'

function ProjectsPreview() {
  const featured = projects.slice(0, 3)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <SectionHeader
            label="Selected Work"
            title="Projects I'm proud of"
            subtitle="A curated selection of my recent work across branding, web design, and development."
          />
          <Button label="View All Projects" to="/projects" variant="outline" />
        </div>
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