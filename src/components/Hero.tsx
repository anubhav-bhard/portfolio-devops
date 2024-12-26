import React from 'react';
import { Terminal, Cloud, GitBranch } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="flex gap-4 mb-6">
          <Terminal className="w-10 h-10 text-blue-400" />
          <Cloud className="w-10 h-10 text-blue-400" />
          <GitBranch className="w-10 h-10 text-blue-400" />
        </div>
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Anubhav Bhardwaj
          </span>
        </h1>
        <h2 className="text-4xl font-bold mb-6">DevOps Engineer</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Automating infrastructure, streamlining deployments, and building reliable systems
          with 3 years of hands-on experience in modern DevOps practices.
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full 
          font-semibold transition transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}