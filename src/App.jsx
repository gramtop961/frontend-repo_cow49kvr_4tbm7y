import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import ProfessionalsCarousel from './components/ProfessionalsCarousel'
import Testimonials from './components/Testimonials'
import BrandStory from './components/BrandStory'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <WhyChoose />
        <ProfessionalsCarousel />
        <Testimonials />
        <BrandStory />
      </main>
      <Footer />
    </div>
  )
}

export default App