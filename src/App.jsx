import { Certificates } from './components/Certificates'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { About } from './components/About'
import { Experience } from "./components/Experience"
import { Contact }  from './components/Contact'
import { Projects } from  './components/Projects'
import { Footer } from './components/Footer'


function App() {
  
  return (
  <div className='overflow-x-hidden'>
  <NavBar />
<section id="home-section">
  <Hero />
</section>
<section id="about-section">
  <About />
</section>
<section id="experience-section">
  <Experience />
</section>
<section id="projects-section">
  <Projects />
</section>
<section id="certificates-section">
  <Certificates />
</section>
<section id="contact-section">
  <Contact />
</section>
  <Footer/>
  </div>
  )
}

export default App;