import React, { useState } from 'react'
import { experiences } from '../data'
import SectionTitle from './SectionTitle'

const TimelineItem = ({ experience, index, openId, setOpenId }) => {
  const isOpen = openId === experience.id
  const handleClick = () => {
    setOpenId(isOpen ? null : experience.id)
  }

  // For larger screens, decide which side the card should appear
  const isEven = index % 2 === 0

  return (
    <div className="relative w-full pb-10 pt-10">
      {/* Hide the line on small screens if you wish */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full border-l-2 border-gray-300" />

      {/* Logo container */}
      <div
        onClick={handleClick}
        className="relative z-10 mx-auto w-16 h-16 flex items-center justify-center 
                   rounded-full border-2 border-gray-300 bg-white cursor-pointer"
      >
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Detail card (conditionally displayed) */}
      {isOpen && (
        <div
          className={`
            md:absolute md:top-1/2 md:-translate-y-1/2 md:max-w-sm
            ${isEven ? 'md:left-[60%]' : 'md:right-[60%]'} 
            sm:relative sm:mt-4 sm:mx-auto sm:w-full
            p-6 bg-white shadow-md rounded-md
          `}
        >
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <h4 className="text-md text-gray-600">{experience.company}</h4>
          <span className="text-sm text-gray-500">{experience.date}</span>
          <p className="mt-2 text-gray-700">
            {experience.description}
          </p>
        </div>
      )}
    </div>
  )
}

const VerticalTimeline = () => {
  // Initialize with the first experience open by default.
  const [openId, setOpenId] = useState(experiences[0]?.id || null)

  return (
    <div className="mx-auto w-full sm:max-w-3xl px-4">
      {/* Centered Section title */}
      <div className="text-center mt-8">
        <SectionTitle text="Experience Timeline" />
      </div>

      {/* Extra margin so the first item/card doesn’t overlap the title */}
      <div className="mt-16">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            index={index}
            openId={openId}
            setOpenId={setOpenId}
          />
        ))}
      </div>
    </div>
  )
}

export default VerticalTimeline
