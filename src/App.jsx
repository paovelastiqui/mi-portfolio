import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
// import { Mode } from './components/Mode';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Toggle } from './components/Toggle';
import { Footer } from './components/Footer';
import './styles/index.css';


function App() {
  
  return (
    <>
      <Navbar />
      <Toggle />
      <Home />
      {/* <Mode /> */}
      <About />
      <Skills/>
      <Projects/>
      <Footer />
    </>
  )
}

export default App