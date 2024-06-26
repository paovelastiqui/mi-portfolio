import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
// import { Modal } from './components/Modal';
import './styles/index.css'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Footer />
      {/* <Modal/> */}
    </>
  )
}

export default App