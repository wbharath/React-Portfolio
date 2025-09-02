import React from 'react'

const ExperienceSkills = ({ icon }) => {
  return (
    <div className="flex gap-2 items-center justify-center border border-gray-300 rounded-lg px-2 py-2 hover:border-emerald-700 hover:bg-emerald-50 transition-all duration-200 cursor-pointer">
      <div className="w-6 h-6 text-slate-600 flex items-center justify-center">
        {icon}
      </div>
    </div>
  )
}

export default ExperienceSkills
