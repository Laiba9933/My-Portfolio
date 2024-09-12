import React from "react";
import { FaGithub, FaLinkedin,  FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Left */}
        <div className="mb-4 md:mb-0">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className="text-xl font-bold">Laiba's Portfolio</h1>
          <p className="text-sm">Building the future, one line of code at a time.</p>
        </div>

        {/* Footer Center: Navigation Links */}
        <div className="flex space-x-4">
          <a href="#hero" className="hover:text-cyan-500">Home</a>
          <a href="#about" className="hover:text-cyan-500">About</a>
          <a href="#skill" className="hover:text-cyan-500">Skill</a>
          <a href="#contact" className="hover:text-cyan-500">Contact</a>
        </div>

        {/* Footer Right: Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/laiba9933" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/laiba-khalid-3a1467298/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://wa.me/923558901911?text=Hello%20Laiba,%20I%20found%20your%20portfolio!" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Laiba. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
