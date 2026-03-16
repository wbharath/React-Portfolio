import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="align-element mx-auto max-w-7xl px-8">
        <SectionTitle text="About Me" />
        <div className="grid md:grid-cols-3 gap-16 items-start">
          <div className="md:col-span-2 space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>
              I am a{' '}
              <span className="font-semibold text-slate-900">Full Stack Developer</span>{' '}
              based in Toronto, ON, specializing in web development. With a robust command
              of React.js, Next.js, Supabase, MongoDB, Node.js, and Python, I design and
              build scalable, user-centric solutions that address complex challenges.
            </p>
            <p>
              I have a strong track record in deploying applications on platforms like
              Vercel and Netlify, ensuring high performance, optimized speed, and seamless
              integration of secure REST APIs.
            </p>
            <p>
              My approach combines technical expertise with a passion for continuous
              learning, thriving in agile environments and consistently delivering
              efficient and precise results.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 border border-slate-200 rounded-xl">
              <p className="text-4xl font-bold text-slate-900">3+</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">Years of Experience</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl">
              <p className="text-4xl font-bold text-slate-900">10+</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">Projects Delivered</p>
            </div>
            <div className="p-6 border border-indigo-200 bg-indigo-50 rounded-xl">
              <p className="text-4xl font-bold text-indigo-600">Open</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">to New Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
