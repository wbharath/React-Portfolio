import React from 'react'
import { useFetchProjects } from '../assets/fetchProjects' // adjust the path as needed
import ProjectsCard from './ProjectsCard'
import SectionTitle from './SectionTitle'

const Projects = () => {
  const { loading, projects } = useFetchProjects()
  // console.log(projects)

  if (loading) {
    return (
      <section className="py-20 align-element" id="projects">
        <SectionTitle text="web-creations and apps" />

        <div className="py-16 text-center">Loading...</div>
      </section>
    )
  }

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web-creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
