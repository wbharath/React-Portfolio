import React from 'react'
import { experienceSkills } from '../data'
import ExperienceSkills from './ExperienceSkills'
const ExperienceCard = ({ logo, title, date, description, company }) => {
  console.log('Company prop:', company)

  const skills = experienceSkills.filter((skill) => {
    if (skill.company.includes('NA')) return false
    return skill.company.includes(company)
  })

  console.log('Filtered skills count:', skills.length)
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 flex items-center justify-center">
          <img src={logo} alt={title} className="w-16 h-16 object-contain" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-slate-500">{date}</p>
        </div>
      </div>
      <div className="mt-4 text-slate-700 leading-relaxed">
        {description.map((point, index) => (
          <div key={index} className="mb-2">
            • {point}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {skills.map((skill) => (
          <ExperienceSkills key={skill.id} {...skill} />
        ))}
      </div>
    </article>
  )
}

export default ExperienceCard
