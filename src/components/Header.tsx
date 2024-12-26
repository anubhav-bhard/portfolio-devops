import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sarah Chen</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        <div className="flex space-x-4 items-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
          </a>
          <Menu className="md:hidden w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}