import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar: React.FC = () => {
  return (
    <div className="container pt-8 mx-auto">
      <div className="flex justify-between items-center w-full max-w-screen-xl">
        
        {/* Brand Name */}
        <div className="text-xl font-medium">Rehmat</div>
        
        {/* Menu Items (Center aligned) */}
        <ul className="flex gap-10 lg:gap-16 justify-center flex-grow hidden md:flex">
          <li className="menulink"><a href="#hero">Home</a></li>
          <li className="menulink"><a href="#about">About</a></li>
          <li className="menulink"><a href="#skills">Skills</a></li>
          <li className="menulink"><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Icon (visible on mobile screens) */}
        <AiOutlineMenu className="md:hidden" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
