import { useNavigate } from 'react-router-dom'
import styles from './ProjectCard.module.css'

function ProjectCard({ project }) {
  const navigate = useNavigate()

  return (
    <div className={styles.card}>

      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {project.client && (
          <span className={styles.client}>{project.client}</span>
        )}
        <h3 className={styles.title}>{project.title}</h3>

        {/* Tags */}
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <p className={styles.description}>{project.shortDescription}</p>

        <button
          className={styles.button}
          onClick={() => navigate(`/projects/${project.id}`)}
        >
          View this Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

    </div>
  )
}

export default ProjectCard