import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import HowWeWork from './components/HowWeWork'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <HowWeWork />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
