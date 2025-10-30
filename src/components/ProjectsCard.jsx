import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-emerald-200">
      <div className="relative overflow-hidden h-64">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">{title}</h2>
        <p className="text-slate-600 leading-relaxed mb-6">{text}</p>
        <div className="flex gap-4">
          <a
            href={url}
            className="flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300 font-medium"
          >
            <TbWorldWww className="h-5 w-5" />
            <span>Live Demo</span>
          </a>
          <a
            href={github}
            className="flex items-center gap-2 px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-medium"
          >
            <FaGithubSquare className="h-5 w-5" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
