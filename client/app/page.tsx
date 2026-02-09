import Header from '@/components/Header'
import LandingPage from '@/components/LandingPage'
import OurSolution from '@/components/OurSolution'
import OurServices from '@/components/OurServices'
import StepToProcess from '@/components/StepToProcess'
import WhyChoose from '@/components/WhyChoose'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main>
      <Header />
      <LandingPage />
      <OurSolution />
      <OurServices />
      <StepToProcess />
      <WhyChoose />
      <Footer />
    </main>
  )
}