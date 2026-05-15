import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-slate-950 flex items-center pt-24 pb-20 relative overflow-hidden"
      id="home"
      style={{
        backgroundImage:
          'radial-gradient(rgba(99, 102, 241, 0.09) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-8 w-full relative">
        <div className="max-w-3xl space-y-7">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-700 rounded-full">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-300 text-xs font-medium tracking-wide">
              Available for new opportunities
            </span>
          </div>

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

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-8 py-1">
            <div>
              <p className="text-2xl font-bold text-white">4+</p>
              <p className="text-slate-500 text-xs mt-0.5 tracking-wide">Years Experience</p>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-slate-500 text-xs mt-0.5 tracking-wide">Projects Shipped</p>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <p className="text-2xl font-bold text-white">3</p>
              <p className="text-slate-500 text-xs mt-0.5 tracking-wide">Companies</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
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
          </div>

          {/* Social links */}
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
