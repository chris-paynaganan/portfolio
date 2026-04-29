import Hero from '../sections/Hero'
import HomeStatement from '../sections/HomeStatement'
import ProjectsPreview from '../sections/ProjectsPreview'
import ServicesPreview from '../sections/ServicesPreview'
import HomeInquiry from '../sections/HomeInquiry'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <>
      <Hero />
      <HomeStatement />
      <ProjectsPreview />
      <ServicesPreview />
      <HomeInquiry />
      <CTASection />
    </>
  )
}

export default Home