import React from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-white py-6 text-center">
        <p>&copy; 2024 Anubhav Bhardwaj. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;