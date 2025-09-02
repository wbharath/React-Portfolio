import React from 'react'
import { experiences } from '../data'
import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
const Experiences = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="Professional experience" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
