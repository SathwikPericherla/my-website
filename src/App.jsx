import { Certificates } from './components/Certificates'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { About } from './components/About'
import { Experience } from "./components/Experience"
import { Blog }  from './components/Blog'
import { Projects } from  './components/Projects'
import { Footer } from './components/Footer'


function App() {
  
  return (
  <>
  
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
<section id="blog-section">
  <Blog />
</section>
  <Footer/>
  </>
  )
}

export default App;