import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
          I am a skilled Full Stack developer based in Halifax, NS, specializing in web  development. With a robust command of React.js, Next.js, Superbase, MongoDB, Node.js and Python. I design and build scalable, user-centric solutions that address complex challenges.
          <br></br>
I have a strong track record in deploying applications on platforms like Vercel and Netlify, ensuring high performance, optimized speed, and seamless integration of secure REST APIs. My approach combines technical expertise with a passion for continuous learning, thriving in agile environments and consistently delivering efficient and precise results.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
