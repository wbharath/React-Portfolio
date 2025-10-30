import bharad from '../assets/bharad.png'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-32 pb-20"
      id="home"
    >
      <div className="align-element mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-12">
        <article className="space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            I'm{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Bharadwaj Racharla
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 font-light">
            Full Stack Developer
          </p>
          <p className="text-lg text-slate-500 leading-relaxed">
            Turning ideas into reality with clean code and modern design
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-x-4 pt-4">
            <a
              href="https://github.com/yourusername"
              className="group"
              aria-label="GitHub"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-400 group-hover:text-slate-700 transition-all duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8 text-slate-400 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110" />
            </a>
          </div>
        </article>
        <article className="hidden md:flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-80 h-80 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-9xl font-bold shadow-2xl">
            BR
          </div>
        </article>
      </div>
    </div>
  )
}
export default Hero
