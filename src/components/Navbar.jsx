import { useEffect, useState } from 'react'
import { links } from '../data'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <na
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          BR.
        </h2>
        <div className="hidden md:flex gap-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="capitalize text-sm font-medium tracking-wide text-slate-700 hover:text-emerald-600 transition-colors duration-300 relative group"
            >
              {link.text}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </na>
  )
}
export default Navbar
