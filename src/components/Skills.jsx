import React, { useRef } from 'react';
import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
  const scrollRef = useRef(null);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack" />
      <div className="relative mt-6">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 
                     bg-white border rounded-full p-2 shadow 
                     hover:bg-gray-100 transition-colors"
        >
          &#8249;
        </button>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden flex gap-8 scroll-smooth"
        >
          {skills.map((skill) => (
            <div key={skill.id} className="flex-shrink-0 w-[300px]">
              <SkillsCard {...skill} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 
                     bg-white border rounded-full p-2 shadow 
                     hover:bg-gray-100 transition-colors"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Skills;
