import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiSupabase, SiTailwindcss } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { DiRedis } from 'react-icons/di'
import { SiJenkins } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { FaAndroid } from 'react-icons/fa'
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

export const experiences = [
  {
    id: 1,
    title: 'Junior Software Engineer',
    company: 'Medibliss Transactions',
    logo: companyBLogo,
    description: [
      'Developed web applications using Java and Spring Boot, contributing to backend services and RESTful API development',
      'Built comprehensive Android application for Intellihub enabling real-time cryptocurrency trading and price monitoring',
      'Collaborated on full-stack development using HTML, CSS, and JavaScript while integrating third-party services',
      'Designed database schemas in PostgreSQL and MySQL with optimized queries for data retrieval',
      'Gained hands-on experience with AWS cloud platforms for application deployment and Agile development cycles'
    ],
    date: 'Aug 2020 - Aug 2021'
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Medibliss Transactions',
    logo: companyBLogo,
    description: [
      'Delivered complete Android application to Google Play Store achieving 5000+ downloads with high user ratings',
      'Led development of three key Android app features enhancing user engagement through improved UI/UX',
      'Created Multi Commodity Exchange (MCX) Android application for real-time trading and market analysis',
      'Developed two Android applications using modular architecture ensuring code reusability and maintenance efficiency',
      'Optimized Android app performance focusing on memory management and efficient data retrieval processes'
    ],
    date: 'Aug 2021 - Mar 2022'
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Tata Consultancy Services',
    logo: companyALogo,
    description: [
      'Developed and maintained 6+ Java-based applications using Spring Boot in Agile environment',
      'Optimized PostgreSQL queries reducing data retrieval times and enhancing overall system performance',
      'Designed secure APIs with FastAPI integrating machine learning models into production systems',
      'Implemented microservices architecture using Spring Boot and Docker enabling scalable modular services',
      'Streamlined deployment pipelines automating CI/CD processes with Jenkins reducing deployment times significantly'
    ],
    date: 'Mar 2022 - Sep 2023'
  }
]

export const experienceSkills = [
  {
    id: nanoid(),
    company: ['Medibliss Transactions', 'Tata Consultancy Services'],
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'React.js'
  },
  {
    id: nanoid(),
    company: ['Tata Consultancy Services'],
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: 'Next.js'
  },
  {
    id: nanoid(),
    company: ['NA'],
    icon: <SiSupabase className="h-16 w-16 text-emerald-500" />,
    text: 'Supabase'
  },
  {
    id: nanoid(),
    company: ['Medibliss Transactions', 'Tata Consultancy Services'],
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'HTML5'
  },
  {
    id: nanoid(),
    company: ['Medibliss Transactions', 'Tata Consultancy Services'],
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: 'Tailwind CSS'
  },
  {
    id: nanoid(),
    company: ['Tata Consultancy Services'],
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: 'Node.js'
  },
  {
    id: nanoid(),
    company: ['Medibliss Transactions', 'Tata Consultancy Services'],
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'JavaScript'
  },
  {
    id: nanoid(),
    company: ['Tata Consultancy Services'],
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: 'Python'
  },
  {
    id: nanoid(),
    company: ['NA'],
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: 'TypeScript'
  },
  {
    id: nanoid(),
    company: ['NA'],
    icon: <FaAws className="h-16 w-16 text-emerald-500" />,
    text: 'AWS'
  },
  {
    id: nanoid(),
    company: ['Medibliss Transactions'],
    icon: <FaAndroid className="h-16 w-16 text-emerald-500" />,
    text: 'Android'
  },
  {
    id: nanoid(),
    company: ['Medibliss Transactions', 'Tata Consultancy Services'],
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: 'Java'
  },
  {
    id: nanoid(),
    company: ['Tata Consultancy Services'],
    icon: <DiRedis className="h-16 w-16 text-emerald-500" />,
    text: 'Redis'
  },
  {
    id: nanoid(),
    company: ['Tata Consultancy Services'],
    icon: <SiJenkins className="h-16 w-16 text-emerald-500" />,
    text: 'Jenkins'
  },
  {
    id: nanoid(),
    company: ['Medibliss Transactions', 'Tata Consultancy Services'],
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: 'MySQL'
  },
  {
    id: nanoid(),
    company: ['Medibliss Transactions', 'Tata Consultancy Services'],
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: 'MongoDB'
  }
]
