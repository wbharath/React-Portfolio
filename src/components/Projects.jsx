import { useState, useRef } from 'react'
import { useFetchProjects } from '../assets/fetchProjects'
import ProjectsCard from './ProjectsCard'
import ProjectModal from './ProjectModal'
import SectionTitle from './SectionTitle'

const Projects = () => {
  const { projects, loading, error } = useFetchProjects()
  const [selectedProject, setSelectedProject] = useState(null)
  const closingRef = useRef(false)

  const handleClose = () => {
    closingRef.current = true
    setSelectedProject(null)
    setTimeout(() => { closingRef.current = false }, 400)
  }

  if (loading) {
    return (
      <section className="py-24 bg-slate-50" id="projects">
        <div className="align-element mx-auto max-w-7xl px-8">
          <div className="text-center text-slate-600">Loading projects...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-24 bg-slate-50" id="projects">
        <div className="align-element mx-auto max-w-7xl px-8">
          <div className="text-center text-red-600">Error loading projects</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-slate-50" id="projects">
      <div className="align-element mx-auto max-w-7xl px-8">
        <SectionTitle text="Featured Projects" />
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectsCard
              key={project.id}
              {...project}
              onImageHover={() => { if (!closingRef.current) setSelectedProject(project) }}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleClose}
        />
      )}
    </section>
  )
}

export default Projects
