import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-purple-600 to-blue-700 text-white py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo / Copyright Section */}
        <div className="text-center sm:text-left">
          <p className="text-xl font-semibold mb-4 sm:mb-0">
            © 2024 Bilal Shaheen
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center space-x-6 mt-4 sm:mt-0">
          <Link
            href="https://wa.me/923173123243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300 transform hover:scale-110"
          >
            <FaWhatsapp className="w-6 h-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/bilal-shaheen-437016244/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>

          <Link
            href="https://github.com/BilalShaheen09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300 transform hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-full h-px bg-white opacity-20 my-6" />
      
      {/* Additional Text or Credits */}
      <div className="text-center">
        <p className="text-sm text-white opacity-70">Created with ❤️ by Bilal Shaheen</p>
      </div>
    </footer>
  );
};

export default Footer;
