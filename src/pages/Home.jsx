import Hero from '../sections/Hero'
import ProjectsPreview from '../sections/ProjectsPreview'
import ServicesPreview from '../sections/ServicesPreview'
import HomeInquiry from '../sections/HomeInquiry'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <ServicesPreview />
      <HomeInquiry />
      <CTASection />
    </>
  )
}

export default Home