import { useEffect, useState } from 'react'
import { links } from '../data'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-sm border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 py-5 flex justify-between items-center">
        <span className="text-lg font-bold text-white tracking-tight">BR.</span>
        <div className="hidden md:flex items-center gap-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 tracking-wide capitalize"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
