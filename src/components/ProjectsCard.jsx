import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectsCard = ({ title, img, description, techStack, url, github }) => {
  return (
    <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-200 hover:shadow-lg transition-all duration-300 group flex flex-col">
      <div className="relative overflow-hidden bg-slate-100 h-44">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {description}
        </p>

        {techStack?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="px-2.5 py-1 bg-slate-100 text-slate-400 text-xs font-medium rounded-md">
                +{techStack.length - 4}
              </span>
            )}
          </div>
        )}

        <div className="flex gap-2.5">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500 transition-colors"
            >
              <TbWorldWww className="h-3.5 w-3.5" />
              Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-md hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <FaGithubSquare className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
