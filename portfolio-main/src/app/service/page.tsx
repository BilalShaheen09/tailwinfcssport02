'use client';

import { FaReact, FaNodeJs, FaPython, FaCss3Alt, FaDatabase, FaGit } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 via-blue-600 to-purple-700 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-10 flex flex-col lg:flex-row gap-10 items-center justify-between w-full">

        {/* Left Section (Skill Categories) */}
        <div className="w-full lg:w-1/3 space-y-8">
          <h2 className="text-4xl font-bold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400">
            Skills Overview
          </h2>

          {/* Skill Categories */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-6 bg-black bg-opacity-60 rounded-lg border-2 border-teal-400 shadow-lg hover:bg-opacity-80 transition">
              <FaReact className="text-teal-500 text-2xl" />
              <span className="text-lg">React.js</span>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-black bg-opacity-60 rounded-lg border-2 border-teal-400 shadow-lg hover:bg-opacity-80 transition">
              <FaNodeJs className="text-teal-500 text-2xl" />
              <span className="text-lg">Node.js</span>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-black bg-opacity-60 rounded-lg border-2 border-teal-400 shadow-lg hover:bg-opacity-80 transition">
              <FaPython className="text-teal-500 text-2xl" />
              <span className="text-lg">Python</span>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-black bg-opacity-60 rounded-lg border-2 border-teal-400 shadow-lg hover:bg-opacity-80 transition">
              <FaCss3Alt className="text-teal-500 text-2xl" />
              <span className="text-lg">CSS3</span>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-black bg-opacity-60 rounded-lg border-2 border-teal-400 shadow-lg hover:bg-opacity-80 transition">
              <FaDatabase className="text-teal-500 text-2xl" />
              <span className="text-lg">Databases</span>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-black bg-opacity-60 rounded-lg border-2 border-teal-400 shadow-lg hover:bg-opacity-80 transition">
              <FaGit className="text-teal-500 text-2xl" />
              <span className="text-lg">Git & GitHub</span>
            </div>
          </div>
        </div>

        {/* Right Section (Skill Details) */}
        <div className="w-full lg:w-2/3 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-4xl font-bold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400">
            Skill Details
          </h2>

          {/* Skill Detail Cards */}
          <div className="space-y-6">
            {/* React.js Skill */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border-2 border-teal-400 shadow-lg">
              <h3 className="text-xl font-semibold text-teal-300">React.js</h3>
              <p className="text-lg mt-2">
                I have extensive experience building modern web applications using React.js. I specialize in creating responsive user interfaces, handling state management with hooks, and working with RESTful APIs and GraphQL.
              </p>
            </div>

            {/* Node.js Skill */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border-2 border-teal-400 shadow-lg">
              <h3 className="text-xl font-semibold text-teal-300">Node.js</h3>
              <p className="text-lg mt-2">
                With Node.js, I have built scalable and high-performance backend applications. I am familiar with Express.js for creating RESTful APIs and have experience integrating databases like MongoDB and MySQL.
              </p>
            </div>

            {/* Python Skill */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border-2 border-teal-400 shadow-lg">
              <h3 className="text-xl font-semibold text-teal-300">Python</h3>
              <p className="text-lg mt-2">
                I have worked with Python for web development, automation, and data analysis. I am proficient in frameworks like Django and Flask and have experience working with libraries like Pandas and NumPy.
              </p>
            </div>

            {/* CSS3 Skill */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border-2 border-teal-400 shadow-lg">
              <h3 className="text-xl font-semibold text-teal-300">CSS3</h3>
              <p className="text-lg mt-2">
                I have a strong foundation in front-end development with CSS3. I use modern CSS techniques like Flexbox, Grid, and animations to build visually appealing and responsive web pages.
              </p>
            </div>

            {/* Databases Skill */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border-2 border-teal-400 shadow-lg">
              <h3 className="text-xl font-semibold text-teal-300">Databases</h3>
              <p className="text-lg mt-2">
                I have hands-on experience working with various databases, including SQL-based databases (PostgreSQL, MySQL) and NoSQL databases (MongoDB). I can design efficient database schemas and write optimized queries.
              </p>
            </div>

            {/* Git & GitHub Skill */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border-2 border-teal-400 shadow-lg">
              <h3 className="text-xl font-semibold text-teal-300">Git & GitHub</h3>
              <p className="text-lg mt-2">
                I use Git for version control in all my projects. I am familiar with GitHub for collaboration, managing pull requests, and maintaining an organized version history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
