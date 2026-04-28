import { NavLink } from 'react-router-dom'
import styles from './ProjectCard.module.css'

function ProjectCard({ project }) {
  return (
    <NavLink to={`/projects/${project.id}`} className={styles.card}>
      <div className={styles.thumbnail}>
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} />
        ) : (
          <div className={styles.placeholder} />
        )}
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>
        <span className={styles.link}>View Project →</span>
      </div>
    </NavLink>
  )
}

export default ProjectCard