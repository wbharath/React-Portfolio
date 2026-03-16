import React from 'react'
import { experienceSkills } from '../data'

const ExperienceCard = ({ title, company, date, description, logo }) => {
  const companySkills = experienceSkills.filter((skill) =>
    skill.company.includes(company)
  )

  return (
    <article className="bg-white rounded-xl border border-slate-200 p-7 hover:border-indigo-200 hover:shadow-sm transition-all duration-200">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 flex-shrink-0 border border-slate-200 rounded-lg flex items-center justify-center p-1.5 bg-white">
          <img src={logo} alt={company} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-slate-900 leading-snug">{title}</h3>
          <p className="text-indigo-600 text-sm font-medium mt-0.5">{company}</p>
          <p className="text-slate-400 text-xs mt-0.5 font-mono">{date}</p>
        </div>
      </div>

      <ul className="space-y-2.5 mb-6">
        {description.map((item, index) => (
          <li key={index} className="flex gap-2.5 text-slate-600 text-sm leading-relaxed">
            <span className="text-indigo-400 mt-1.5 flex-shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {companySkills.length > 0 && (
        <div className="pt-5 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {companySkills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-1.5 px-2.5 py-1.5 border border-slate-200 rounded-md hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 cursor-default"
              >
                <div className="text-indigo-500 flex items-center justify-center">
                  {React.cloneElement(skill.icon, { className: 'w-4 h-4' })}
                </div>
                <span className="text-xs font-medium text-slate-600">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default ExperienceCard
