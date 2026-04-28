import ServicesHero from '../sections/ServicesHero'
import ServicesProcess from '../sections/ServicesProcess'
import ServicesPackages from '../sections/ServicesPackages'
import CTASection from '../components/CTASection'

function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesProcess />
      <ServicesPackages />
      <CTASection
        title="Ready to get started?"
        subtitle="Let's talk about your project and find the right package for you."
        buttonLabel="Start a Project"
        buttonTo="/contact"
      />
    </>
  )
}

export default Services