import { useRef } from 'react'
import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'

const Skills = () => {
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-24 bg-slate-50" id="skills">
      <div className="align-element mx-auto max-w-7xl px-8">
        <SectionTitle text="Tech Stack" />
        <div className="relative">
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 flex items-center justify-center text-slate-500 text-xl"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-hidden flex gap-5 scroll-smooth pb-2"
          >
            {skills.map((skill) => (
              <div key={skill.id} className="flex-shrink-0 w-[300px]">
                <SkillsCard {...skill} />
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 flex items-center justify-center text-slate-500 text-xl"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

export default Skills
