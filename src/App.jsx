import About from "./components/About"
import ExperienceTimeline from "./components/ExperienceTimeline"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import SKills from "./components/Skills"


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="hidden animate-wave"></div>
    <SKills/>
    <About/>
    <Projects/>
    <ExperienceTimeline/>
    </>
  )
}

export default App
