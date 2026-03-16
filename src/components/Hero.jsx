import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center pt-24 pb-20" id="home">
      <div className="mx-auto max-w-7xl px-8 w-full">
        <div className="max-w-3xl space-y-8">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
            Full Stack Developer — Toronto, ON
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            Bharadwaj<br />Racharla
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-xl">
            I build scalable web applications and clean digital experiences.
            Specializing in React, Next.js, and full-stack development.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-500 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/Bharadwaj_Resume.pdf"
              download
              className="px-7 py-3 border border-slate-700 text-slate-300 text-sm font-semibold rounded-md hover:border-indigo-500 hover:text-indigo-400 transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="text-slate-500 text-sm font-medium hover:text-white transition-colors"
            >
              Contact me →
            </a>
          </div>
          <div className="flex gap-x-4 pt-1">
            <a
              href="https://github.com/wbharath"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-600 hover:text-white transition-colors"
            >
              <FaGithubSquare className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/durgasaib"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-600 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
