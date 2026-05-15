import { useFetchProjects } from '../assets/fetchProjects'
import SectionTitle from './SectionTitle'
import ProjectsCard from './ProjectsCard'
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const FeaturedCard = ({ title, img, description, techStack, url, github }) => (
  <article className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-200 hover:shadow-xl transition-all duration-300 group">
    <div className="grid md:grid-cols-2 min-h-[400px]">
      <div className="relative overflow-hidden bg-slate-100 min-h-[220px]">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-md border border-indigo-100 uppercase tracking-widest">
            ★ Featured
          </span>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
          {techStack?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-3 pt-6">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-500 transition-colors"
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
              className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-700 text-sm font-semibold rounded-md hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <FaGithubSquare className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
)

const Projects = () => {
  const { projects, loading } = useFetchProjects()

  if (loading) {
    return (
      <section className="py-24 bg-slate-50" id="projects">
        <div className="mx-auto max-w-7xl px-8 text-center text-slate-500">
          Loading projects...
        </div>
      </section>
    )
  }

  const [featured, ...rest] = projects

  return (
    <section className="py-24 bg-slate-50" id="projects">
      <div className="align-element mx-auto max-w-7xl px-8">
        <SectionTitle text="Featured Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured && <FeaturedCard {...featured} />}
          {rest.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
