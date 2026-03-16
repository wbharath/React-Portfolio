import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectsCard = ({ url, img, github, title, text, onImageHover }) => {
  return (
    <article className="bg-white rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm transition-all duration-200 overflow-hidden">
      <div
        className="relative overflow-hidden bg-slate-50 h-52 cursor-pointer group"
        onMouseEnter={onImageHover}
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-sm font-medium tracking-wide border border-white/40 px-4 py-1.5 rounded-full">
            View Details
          </span>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2">{title}</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{text}</p>
        <div className="flex gap-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500 transition-colors"
            >
              <TbWorldWww className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-md hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <FaGithubSquare className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
