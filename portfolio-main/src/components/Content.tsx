import Image from 'next/image';
import Link from 'next/link';  // Importing Link from next/link

interface Project {
  name: string;
  image: string;
  description: string;
}

const Content: React.FC = () => {
  const projects: Project[] = [
    { 
      name: 'Blog', 
      image: '/images/blog.jpg', 
      description: 'A modern blog website built with Next.js and React for fast performance, featuring a clean design and smooth user experience.' 
    },
    { 
      name: 'E-commerce', 
      image: '/images/ecommerce.jpg', 
      description: 'A full-stack e-commerce platform with an intuitive shopping experience, including secure payment processing and product search functionality.' 
    },
    { 
      name: 'Portfolio', 
      image: '/images/portfolio.png', 
      description: 'A dynamic portfolio website that highlights my web development skills and projects, featuring smooth animations and responsive design.' 
    },
  ];

  return (
    <div className="animate-slide-left">
      <section id="projects" className="py-20 bg-gradient-to-r from-teal-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: 'url(/images/newbg.jpg)' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl text-center mb-10 font-bold text-white animate-fadeIn">My Projects</h2>
          <div className="w-60 h-1 mx-auto bg-teal-300 mb-9"></div> 

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-black border-2 border-teal-600 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90 animate-zoomIn"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
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

          {/* See More Projects Button */}
          <div className="flex justify-center mt-10">
            <Link
              href="/project"  // Link to the /project page
              className="text-white font-semibold text-2xl py-3 px-6 rounded-full border-2 border-teal-500 hover:bg-teal-700 transition-all duration-300 transform hover:scale-110"
            >
              See More Projects
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Content;
