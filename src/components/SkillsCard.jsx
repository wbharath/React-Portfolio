const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-sm transition-all duration-200">
      <div className="mb-4">{icon}</div>
      <h4 className="text-base font-semibold text-slate-800 mb-1.5">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
    </article>
  )
}

export default SkillsCard
