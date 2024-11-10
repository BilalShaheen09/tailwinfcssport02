'use client';

import { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const SkillsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -180, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 180, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-8 text-shadow">
          My Skills
        </h2>
        <div className="w-36 h-1 mx-auto bg-teal-300 mb-12 rounded-full"></div>

        {/* Skills Container with Horizontal Scroll */}
        <div className="relative flex items-center">
          {/* Left Arrow (visible only on mobile) */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-teal-700 hover:bg-teal-600 md:hidden transition-all"
            onClick={scrollLeft}
            aria-label="Scroll Left"
          >
            &#10094;
          </button>

          {/* Scrollable Skills Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto px-4 py-2 scrollbar-hide md:overflow-x-hidden"
          >
            <SkillCard icon={<FaHtml5 />} title="HTML" description="Structuring Web Content" />
            <SkillCard icon={<FaCss3Alt />} title="CSS" description="Styling Websites" />
            <SkillCard icon={<SiTypescript />} title="TypeScript" description="Enhanced JavaScript" />
            <SkillCard icon={<SiNextdotjs />} title="Next.js" description="React Framework" />
            <SkillCard icon={<FaFigma />} title="Figma" description="UI/UX Design" />
            
          </div>

          {/* Right Arrow (visible only on mobile) */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-teal-700 hover:bg-teal-600 md:hidden transition-all"
            onClick={scrollRight}
            aria-label="Scroll Right"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <div className="min-w-[200px] max-w-[250px] bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 text-white p-6 rounded-lg shadow-2xl flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl hover:rotate-2 duration-300 ease-in-out">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-shadow">{title}</h3>
    <p className="text-center text-sm">{description}</p>
  </div>
);

export default SkillsSection;
