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
      <footer className="bg-slate-950 border-t border-white/5 py-10 text-center">
        <p className="text-slate-500 text-sm">
          © 2025 Bharadwaj Racharla. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  )
}

export default App
