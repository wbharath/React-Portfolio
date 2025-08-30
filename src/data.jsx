import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiSupabase, SiTailwindcss } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si' // TypeScript icon
import { FaAws } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { DiRedis } from 'react-icons/di'
import { SiJenkins } from 'react-icons/si' // Jenkins icon
import { SiMysql } from 'react-icons/si' // MySQL icon
import { SiMongodb } from 'react-icons/si' // MongoDB icon
import { FaAndroid } from 'react-icons/fa' // Proxy for Android Studio
import companyBLogo from './assets/medibliss.png'
import companyALogo from './assets/tcs.png'

export const skills = [
  {
    id: nanoid(),
    title: 'React.js',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Developed dynamic interfaces using React.js with component-based architecture.'
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: 'Built server-rendered applications for improved performance and SEO.'
  },
  {
    id: nanoid(),
    title: 'Supabase',
    icon: <SiSupabase className="h-16 w-16 text-emerald-500" />,
    text: 'Implemented real-time databases and authentication with Supabase.'
  },
  {
    id: nanoid(),
    title: 'HTML5',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Crafted semantic and accessible web layouts using HTML5.'
  },
  {
    id: nanoid(),
    title: 'CSS (Tailwind)',
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: 'Styled modern, responsive designs efficiently with Tailwind CSS.'
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: 'Developed scalable server-side applications and APIs using Node.js.'
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Built interactive applications using modern JavaScript features.'
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: 'Utilized Python for data analysis, automation, and backend development.'
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: 'Enhanced code quality and type safety in large-scale JavaScript projects with TypeScript.'
  },
  {
    id: nanoid(),
    title: 'Amazon AWS',
    icon: <FaAws className="h-16 w-16 text-emerald-500" />,
    text: 'Deployed and managed scalable cloud infrastructure using AWS services.'
  },
  {
    id: nanoid(),
    title: 'Android Studio',
    icon: <FaAndroid className="h-16 w-16 text-emerald-500" />, // Proxy icon
    text: 'Developed and debugged Android applications using Android Studio and related tools.'
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: 'Built robust backend services and Android apps with Java and frameworks like Spring Boot.'
  },
  {
    id: nanoid(),
    title: 'Redis',
    icon: <DiRedis className="h-16 w-16 text-emerald-500" />,
    text: 'Implemented high-performance caching and session management with Redis.'
  },
  {
    id: nanoid(),
    title: 'Jenkins',
    icon: <SiJenkins className="h-16 w-16 text-emerald-500" />,
    text: 'Automated CI/CD pipelines and deployments using Jenkins for efficient workflows.'
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: 'Designed and managed relational databases with optimized queries using MySQL.'
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: 'Developed flexible, scalable NoSQL databases with MongoDB for modern applications.'
  }
]

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#experience', text: 'experience' }
]

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.'
  }
]

export const experiences = [
  {
    id: 1,
    title: 'Junior Software Engineer',
    company: 'Medibliss Transactions',
    logo: companyBLogo,
    description:
      'Built responsive websites with Drupal and WordPress aligned with client branding, and managed social media campaigns on Facebook, Instagram, and LinkedIn, increasing engagement and leads by 84%.',
    date: 'Aug 2020 - Aug 2021'
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Medibliss Transactions',
    logo: companyBLogo,
    description:
      'Developed and maintained Android applications, including the MCX app, ensuring backend functionality met business requirements. Managed the deployment process to the Google Play Store for timely releases and compliance. Created a custom Android solution for Spotflock to meet specific client needs and maintained application quality through comprehensive unit testing. Contributed to backend development to improve stability and scalability.',
    date: ' Aug 2021 - Mar 2022'
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Tata Consultancy Services',
    logo: companyALogo,
    description:
      'Developed backend services in Java with Spring Boot, improved data retrieval using PostgreSQL, implemented secure APIs with FastAPI, integrated machine learning models, and automated deployments with Jenkins.',
    date: 'Mar 2022 - Sep 2023'
  }
]
