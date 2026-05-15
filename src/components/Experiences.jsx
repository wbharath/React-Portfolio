import { experiences } from '../data'
import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'

const Experiences = () => {
  return (
    <section className="py-24 bg-slate-950" id="experience">
      <div className="align-element mx-auto max-w-4xl px-8">
        <SectionTitle text="Professional Experience" dark />
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-5 bottom-5 w-px bg-slate-800" />
          <div className="space-y-8">
            {[...experiences].reverse().map((experience) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
