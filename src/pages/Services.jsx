import ServicesHero from '../sections/ServicesHero'
import ServicesOfferings from '../sections/ServicesOfferings'
import ServicesProcess from '../sections/ServicesProcess'
import ServicesPackages from '../sections/ServicesPackages'
import CTASection from '../components/CTASection'

function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesProcess />
      <ServicesPackages />
      <ServicesOfferings />
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