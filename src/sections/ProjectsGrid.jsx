import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import styles from './ProjectsGrid.module.css'

function getAllTags(projects) {
  const tags = projects.flatMap((p) => p.tags)
  return ['All', ...new Set(tags)]
}

function ProjectsGrid() {
  const [activeTag, setActiveTag] = useState('All')

  const tags = getAllTags(projects)

  const filtered =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <section className={styles.section}>
      <div className="container">

        {/* Filter Tabs */}
        <div className={styles.filters}>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filter} ${activeTag === tag ? styles.active : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No projects found for this category.</p>
          </div>
        )}

      </div>
    </section>
  )
}

export default ProjectsGrid