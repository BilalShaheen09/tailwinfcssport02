'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/images/shaheen.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { FcServices } from "react-icons/fc";
import { FaGithub, FaFilePdf } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 md:py-6 relative max-w-screen-lg h-16"> {/* Adjusted height here */}
          {/* Logo */}
          <div id="logo" className="flex-shrink-0">
            <Image src={logo} alt="logo" width={120} height={120} className="cursor-pointer" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex text-xl font-semibold space-x-8 items-center mx-auto">
            <Link href="/" className="hover:text-yellow-400 transition-all duration-300"><b>Home</b></Link>
            <Link href="/about" className="hover:text-yellow-400 transition-all duration-300"><b>About</b></Link>
            <Link href="/project" className="hover:text-yellow-400 transition-all duration-300"><b>Projects</b></Link>
            <Link href="/service" className="hover:text-yellow-400 transition-all duration-300"><b>Skills</b></Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-all duration-300"><b>Contact</b></Link>
            <Link href="https://github.com/BilalShaheen09" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-all duration-300">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://hackathon-milestone1-2updated.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-all duration-300">
              <FaFilePdf className="w-5 h-5" />
            </Link>
          </nav>

          {/* Hamburger Icon */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white flex flex-col items-start space-y-4 py-4 px-6">
            <Link href="/" className="p-3 hover:text-yellow-400 flex items-center" onClick={toggleMenu}>
              <IoHomeOutline className="mr-3" /> Home
            </Link>
            <Link href="/about" className="p-3 hover:text-yellow-400 flex items-center" onClick={toggleMenu}>
              <MdOutlineRoundaboutRight className="mr-3" /> About
            </Link>
            <Link href="/project" className="p-3 hover:text-yellow-400 flex items-center" onClick={toggleMenu}>
              <GoProjectSymlink className="mr-3" /> Projects
            </Link>
            <Link href="/service" className="p-3 hover:text-yellow-400 flex items-center" onClick={toggleMenu}>
              <FcServices className="mr-3" /> Services
            </Link>
            <Link href="/contact" className="p-3 hover:text-yellow-400 flex items-center" onClick={toggleMenu}>
              <IoMdContact className="mr-3" /> Contact
            </Link>
            <Link href="https://github.com/BilalShaheen09" target="_blank" rel="noopener noreferrer" className="p-3 hover:text-yellow-400 flex items-center" onClick={toggleMenu}>
              <FaGithub className="mr-3" /> Github
            </Link>
            <Link href="https://hackathon-milestone1-2updated.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-3 hover:text-yellow-400 flex items-center" onClick={toggleMenu}>
              <FaFilePdf className="mr-3" /> My CV
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
