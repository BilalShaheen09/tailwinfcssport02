import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

const About: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-purple-700 text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 p-8 rounded-xl shadow-2xl bg-opacity-90 backdrop-blur-lg">
        
        {/* Left Side - Profile Picture */}
        <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center lg:justify-start lg:pl-8 xl:pl-12 mb-8 lg:mb-0">
          <Image
            src="/images/bilal.png" // Replace with your image path
            alt="Your Name"
            width={200}
            height={200}
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full shadow-lg border-4 border-teal-500 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Right Side - About Text */}
        <div className="w-full lg:w-2/3 space-y-10 text-center lg:text-left">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-4">
              I am Bilal Shaheen and I am a web developer specializing in creating pixel-perfect responsive and visually appealing designs.
              Let's bring creativity to the next level.
            </p>
          </div>
        </div>
      </div>

      {/* Hire Me Button */}
      <div className="text-center mt-16">
        <a
          href="https://hackathon-milestone1-2updated.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-8 py-3 border-2 border-teal-500 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-teal-600 hover:scale-105 flex items-center justify-center animate-pulse space-x-2"
        >
          <span className="text-white hover:bg-teal-600 font-semibold text-lg transition-all duration-200 transform hover:scale-105">
            Hire Me
          </span>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="absolute rounded-full opacity-75 bg-teal-500 blur-lg" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
};

export default About;
