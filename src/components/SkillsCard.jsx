import React from 'react'

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-100 hover:border-emerald-200 hover:-translate-y-2">
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-slate-500 leading-relaxed">{text}</p>
    </article>
  )
}

export default SkillsCard
