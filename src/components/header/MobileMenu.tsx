import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-800 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
}