import SectionTitle from './SectionTitle'
import companyBLogo from '../assets/medibliss.png'
import companyALogo from '../assets/tcs.png'
import companyCLogo from '../assets/citi.svg'

const companies = [
  { name: 'Medibliss', logo: companyBLogo },
  { name: 'Tata Consultancy Services', logo: companyALogo },
  { name: 'Citibank', logo: companyCLogo },
]

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

            {/* Company logos */}
            <div className="pt-6 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
                Previously worked at
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {companies.map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center gap-2.5 px-4 py-2.5 border border-slate-200 rounded-lg bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-5 object-contain"
                    />
                    <span className="text-slate-600 text-sm font-medium">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 hover:border-indigo-200 transition-colors">
              <p className="text-4xl font-bold text-slate-900">4+</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">Years of Experience</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 hover:border-indigo-200 transition-colors">
              <p className="text-4xl font-bold text-slate-900">15+</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">Projects Delivered</p>
            </div>
            <div className="p-6 border border-indigo-200 bg-indigo-50 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <p className="text-4xl font-bold text-indigo-600">Open</p>
              </div>
              <p className="text-slate-500 text-sm font-medium">to New Opportunities</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
