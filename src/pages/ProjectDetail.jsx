import { useParams, NavLink } from 'react-router-dom'
import { projects } from '../data/projects'
import TabPanel from '../components/TabPanel'
import CaseStudyAccordion from '../components/CaseStudyAccordion'
import TestimonialCard from '../components/TestimonialCard'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project not found</h1>
        <NavLink to="/projects">← Back to Projects</NavLink>
      </div>
    )
  }

  const tabs = [
    { label: 'Overview',   content: <p>{project.tabs.overview}</p> },
    { label: 'Context',    content: <p>{project.tabs.context}</p> },
    { label: 'Challenge',  content: <p>{project.tabs.challenge}</p> },
    { label: 'Approach',   content: <p>{project.tabs.approach}</p> },
    { label: 'Outcome',    content: <p>{project.tabs.outcome}</p> },
    { label: 'Reflection', content: <p>{project.tabs.reflection}</p> },
  ]

  const moreProjects = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <>
      {/* Project Header */}
      <section className={styles.header}>
        <div className="container">
          <NavLink to="/projects" className={styles.back}>
            ← Back to Projects
          </NavLink>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.shortDescription}</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className={styles.heroImage}>
        <div className="container">
          <div className={styles.imagePlaceholder}>
            {project.thumbnail && (
              <img src={project.thumbnail} alt={project.title} />
            )}
          </div>
        </div>
      </section>

      {/* Problem / Solution / Outcome */}
      <section className={styles.pso}>
        <div className={`container ${styles.psoGrid}`}>
          <div className={styles.psoItem}>
            <h3 className={styles.psoLabel}>Problem</h3>
            <p className={styles.psoText}>{project.problem}</p>
          </div>
          <div className={styles.psoItem}>
            <h3 className={styles.psoLabel}>Solution</h3>
            <p className={styles.psoText}>{project.solution}</p>
          </div>
          <div className={styles.psoItem}>
            <h3 className={styles.psoLabel}>Outcome</h3>
            <p className={styles.psoText}>{project.outcome}</p>
          </div>
        </div>
      </section>

      {/* Quick Summary Tabs */}
      <section className={styles.tabs}>
        <div className="container">
          <TabPanel tabs={tabs} />
        </div>
      </section>

      {/* Case Study Deep Dive — accordion */}
      {project.caseStudy && project.caseStudy.length > 0 && (
        <section className={styles.caseStudy}>
          <div className="container">
            <div className={styles.caseStudyHeader}>
              <h2 className={styles.caseStudyTitle}>Deep dive</h2>
              <p className={styles.caseStudySub}>
                A closer look at the thinking, decisions, and details behind the work.
              </p>
            </div>
            <CaseStudyAccordion sections={project.caseStudy} />
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className={styles.testimonial}>
          <div className={styles.testimonialInner}>
            <h2 className={styles.testimonialTitle}>What the client said</h2>
            <TestimonialCard testimonial={project.testimonial} />
          </div>
        </section>
      )}

      {/* More Projects */}
      {moreProjects.length > 0 && (
        <section className={styles.more}>
          <div className="container">
            <h2 className={styles.moreTitle}>More Projects</h2>
            <div className={styles.moreGrid}>
              {moreProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Interested in working together?"
        subtitle="Let's talk about your project and make it happen."
        buttonLabel="Get In Touch"
        buttonTo="/contact"
      />
    </>
  )
}

export default ProjectDetail