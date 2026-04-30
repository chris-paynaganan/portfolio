import { useParams, NavLink } from 'react-router-dom'
import { projects } from '../data/projects'
import TabPanel from '../components/TabPanel'
import OverviewTab from '../components/OverviewTab'
import ContextTab from '../components/ContextTab'
import ChallengeTab from '../components/ChallengeTab'
import ApproachTab from '../components/ApproachTab'
import OutcomeTab from '../components/OutcomeTab'
import ReflectionTab from '../components/ReflectionTab'
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
        <NavLink to="/projects">Back to Projects</NavLink>
      </div>
    )
  }

  const tabs = [
    {
      label: 'Overview',
      content: typeof project.tabs.overview === 'object'
        ? <OverviewTab
            text={project.tabs.overview.text}
            meta={project.tabs.overview.meta}
            callout={project.tabs.overview.callout}
          />
        : <p>{project.tabs.overview}</p>
    },
    {
      label: 'Context',
      content: typeof project.tabs.context === 'string' && project.tabs.context !== 'Context content here.'
        ? <ContextTab text={project.tabs.context} />
        : <p>{project.tabs.context}</p>
    },
    {
      label: 'Challenge',
      content: typeof project.tabs.challenge === 'object'
        ? <ChallengeTab text={project.tabs.challenge.text} constraints={project.tabs.challenge.constraints} />
        : <p>{project.tabs.challenge}</p>
    },
    {
      label: 'Approach',
      content: Array.isArray(project.tabs.approach)
        ? <ApproachTab items={project.tabs.approach} />
        : <p>{project.tabs.approach}</p>
    },
    {
      label: 'Outcome',
      content: typeof project.tabs.outcome === 'object'
        ? <OutcomeTab results={project.tabs.outcome.results} />
        : <p>{project.tabs.outcome}</p>
    },
    {
      label: 'Reflection',
      content: typeof project.tabs.reflection === 'object'
        ? <ReflectionTab sections={project.tabs.reflection.sections} callout={project.tabs.reflection.callout} />
        : <p>{project.tabs.reflection}</p>
    },
  ]

  const moreProjects = projects.filter((p) => p.id !== project.id).slice(0, 3)
  const problem = typeof project.problem === 'object' ? project.problem : { text: project.problem, bullets: [], callout: '' }

  return (
    <>
      {/* Project Header */}
      <section className={styles.header}>
        <div className="container">
          <NavLink to="/projects" className={styles.back}>
            Back to Projects
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
        <div className="container">

          {/* Problem */}
          <div className={styles.psoItem}>
            <h3 className={styles.psoLabel}>The Problem</h3>
            <div className={styles.psoContent}>
              {problem.text && <p className={styles.psoText}>{problem.text}</p>}
              {problem.bullets && problem.bullets.length > 0 && (
                <ul className={styles.psoBullets}>
                  {problem.bullets.map((b, i) => (
                    <li key={i} className={styles.psoBullet}>
                      <span className={styles.psoBulletDot} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {problem.callout && (
                <span className={styles.psoCallout}>{problem.callout}</span>
              )}
            </div>
          </div>

          {/* Solution */}
          <div className={styles.psoItem}>
            <h3 className={styles.psoLabel}>The Solution</h3>
            <div className={styles.psoContent}>
              <p className={styles.psoText}>{project.solution}</p>
            </div>
          </div>

          {/* Outcome */}
          <div className={styles.psoItem}>
            <h3 className={styles.psoLabel}>The Outcome</h3>
            <div className={styles.psoContent}>
              <p className={styles.psoText}>{project.outcome}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Summary Tabs */}
      <section className={styles.tabs}>
        <div className="container">
          <TabPanel tabs={tabs} />
        </div>
      </section>

      {/* Case Study Deep Dive */}
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