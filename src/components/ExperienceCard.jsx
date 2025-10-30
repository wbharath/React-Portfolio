import React from 'react'
import { experienceSkills } from '../data'

const ExperienceCard = ({ title, company, date, description, logo }) => {
  const companySkills = experienceSkills.filter((skill) =>
    skill.company.includes(company)
  )

  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-emerald-200 p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 flex-shrink-0 bg-emerald-50 rounded-xl flex items-center justify-center p-2">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-800 mb-1">{title}</h3>
          <p className="text-emerald-600 font-medium mb-1">{company}</p>
          <p className="text-slate-500 text-sm">{date}</p>
        </div>
      </div>

  
      <ul className="space-y-3 mb-6">
        {description.map((item, index) => (
          <li
            key={index}
            className="flex gap-2 text-slate-600 text-sm leading-relaxed"
          >
            <span className="text-emerald-600 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

     
      {companySkills.length > 0 && (
        <div className="pt-6 border-t border-slate-100">
          <h4 className="text-sm font-semibold text-slate-700 mb-3">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-3">
            {companySkills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-emerald-600 hover:bg-emerald-50 transition-all duration-200 cursor-pointer"
              >
                <div className="text-emerald-600 flex items-center justify-center">
                  {React.cloneElement(skill.icon, { className: 'w-5 h-5' })}
                </div>
                <span className="text-sm font-medium text-slate-700">
                  {skill.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default ExperienceCard
