import React from 'react'
import { experienceSkills } from '../data'

const ExperienceCard = ({ title, company, date, description, logo }) => {
  const companySkills = experienceSkills.filter((skill) =>
    skill.company.includes(company)
  )

  return (
    <div className="relative pl-20">
      {/* Timeline dot */}
      <div className="absolute left-8 top-6 w-4 h-4 -translate-x-1/2 rounded-full bg-slate-950 border-2 border-indigo-500 ring-4 ring-slate-950" />

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-7 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300">

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center p-2 bg-white shadow-md">
            {logo ? (
              <img src={logo} alt={company} className="w-full h-full object-contain" />
            ) : (
              <span className="text-slate-700 text-xs font-bold">
                {company.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white leading-snug">{title}</h3>
            <p className="text-indigo-400 text-sm font-semibold mt-0.5">{company}</p>
            <p className="text-slate-500 text-xs mt-1 font-mono">{date}</p>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2.5 mb-6">
          {description.map((item, index) => (
            <li key={index} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
              <span className="text-indigo-500 mt-1.5 flex-shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        {companySkills.length > 0 && (
          <div className="pt-5 border-t border-slate-800">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {companySkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded-md hover:border-indigo-600 hover:bg-indigo-950/40 transition-all duration-200 cursor-default"
                >
                  <div className="text-indigo-400 flex items-center justify-center">
                    {React.cloneElement(skill.icon, { className: 'w-4 h-4' })}
                  </div>
                  <span className="text-xs font-medium text-slate-400">{skill.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceCard
