import ProjectsHero from '../sections/ProjectsHero'
import ProjectsGrid from '../sections/ProjectsGrid'
import CTASection from '../components/CTASection'

function Projects() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <CTASection
        title="Like what you see?"
        subtitle="Let's build something great together."
        buttonLabel="Start a Project"
        buttonTo="/contact"
      />
    </>
  )
}

export default Projects