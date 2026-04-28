import AboutHero from '../sections/AboutHero'
import AboutSkills from '../sections/AboutSkills'
import AboutTimeline from '../sections/AboutTimeline'
import CTASection from '../components/CTASection'

function About() {
  return (
    <>
      <AboutHero />
      <AboutSkills />
      <AboutTimeline />
      <CTASection
        title="Want to work together?"
        subtitle="I'm always open to new projects and collaborations."
        buttonLabel="Get In Touch"
        buttonTo="/contact"
      />
    </>
  )
}

export default About