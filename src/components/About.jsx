import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="align-element mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-12 text-white flex items-center justify-center h-96 shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-3xl font-bold">Code & Coffee</h3>
            </div>
          </div>
        </div>
        <article>
          <SectionTitle text="About Me" />
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              I am a skilled{' '}
              <span className="font-semibold text-slate-800">
                Full Stack Developer
              </span>{' '}
              based in Toronto, ON, specializing in web development. With a
              robust command of React.js, Next.js, Supabase, MongoDB, Node.js,
              and Python, I design and build scalable, user-centric solutions
              that address complex challenges.
            </p>
            <p>
              I have a strong track record in deploying applications on
              platforms like Vercel and Netlify, ensuring high performance,
              optimized speed, and seamless integration of secure REST APIs.
            </p>
            <p>
              My approach combines technical expertise with a passion for
              continuous learning, thriving in agile environments and
              consistently delivering efficient and precise results.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
