import React, { useRef } from 'react'
import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'

const Skills = () => {
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 bg-slate-50" id="skills">
      <div className="align-element mx-auto max-w-7xl px-8">
        <SectionTitle text="Tech Stack" />
        <div className="relative">
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white border-2 border-slate-200 rounded-full shadow-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 flex items-center justify-center text-2xl text-slate-700"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-hidden flex gap-6 scroll-smooth pb-4"
          >
            {skills.map((skill) => (
              <div key={skill.id} className="flex-shrink-0 w-[320px]">
                <SkillsCard {...skill} />
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white border-2 border-slate-200 rounded-full shadow-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 flex items-center justify-center text-2xl text-slate-700"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
export default Skills
