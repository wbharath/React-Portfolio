import React from 'react'
import { experiences } from '../data'
import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
const Experiences = () => {
  return (
    <section className="py-24 bg-white" id="experience">
      <div className="align-element mx-auto max-w-7xl px-8">
        <SectionTitle text="Professional Experience" />
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
