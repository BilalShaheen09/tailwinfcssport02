'use client';

import Image from 'next/image';

interface Project {
  name: string;
  image: string;
  link: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    { 
      name: 'Blog', 
      image: '/images/blog.jpg', // Updated image path
      link: 'https://my-app-delta-two-79.vercel.app/', 
      description: 'A modern blog website built with Next.js and React for fast performance, featuring a clean design and smooth user experience.' 
    },
    { 
      name: 'E-commerce', 
      image: '/images/ecommerce.jpg', // Updated image path
      link: 'https://new-e-commerce-4d2v.vercel.app/', 
      description: 'A full-stack e-commerce platform with an intuitive shopping experience, including secure payment processing and product search functionality.' 
    },
    { 
      name: 'Portfolio', 
      image: '/images/portfolio.png', // Updated image path
      link: 'https://html-portfolio-pink.vercel.app/', 
      description: 'A dynamic portfolio website that highlights my web development skills and projects, featuring smooth animations and responsive design.' 
    },
    { 
      name: 'Todo list app', 
      image: '/images/todo.jpg', // Updated image path
      link: 'https://to-do-list-app-three-dusky.vercel.app/', 
      description: 'A task management app designed to help users stay organized, with real-time data integration and a clean, mobile-responsive UI.' 
    },
    { 
      name: 'Static Resume', 
      image: '/images/cvv.png', // Updated image path
      link: 'https://static-drab.vercel.app/', 
      description: 'A minimalistic static resume website showcasing personal achievements, education, and work experience, built with Vue.js.' 
    },
    { 
      name: 'Resume Builder', 
      image: '/images/resume.png', // Updated image path
      link: 'https://finally-prepared-ehmg.vercel.app/', 
      description: 'An interactive resume builder that allows users to craft professional resumes with drag-and-drop functionality and live preview.' 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-purple-700 to-teal-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: 'url(/images/new-bg.jpg)' }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl text-center mb-10 font-bold text-white animate-fadeIn">Featured Projects</h2>
        
        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gradient-to-r from-teal-700 to-cyan-600 border-2 border-teal-500 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
                width={400}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-300">{project.name}</h3>
                <p className="text-gray-200 text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
