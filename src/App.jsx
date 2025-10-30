import About from './components/About'
import Experiences from './components/Experiences'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Experiences />
      <footer className="bg-slate-900 text-white py-12 text-center">
        <p className="text-slate-400">
          © 2025 Bharadwaj Racharla. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
