import { useEffect } from 'react'
import { FaGithubSquare, FaTimes } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const { title, img, description, techStack, url, github } = project

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-52 bg-slate-50 border-b border-slate-100">
          <img src={img} alt={title} className="w-full h-full object-contain" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white border border-slate-200 rounded-full p-1.5 hover:border-slate-400 transition-colors shadow-sm"
          >
            <FaTimes className="h-3.5 w-3.5 text-slate-500" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>

          {description && (
            <p className="text-slate-600 text-sm leading-relaxed mb-5">{description}</p>
          )}

          {techStack && techStack.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-1">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-500 transition-colors"
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
                className="flex items-center gap-1.5 px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-semibold rounded-md hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                <FaGithubSquare className="h-4 w-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
