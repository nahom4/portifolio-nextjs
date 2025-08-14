"use client";

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Initialize with Deep Ocean theme background
    document.body.classList.add('bg-pattern-ocean', 'bg-animated', 'bg-floatiJavaScript/TypeScriptng-shapes');
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background layer */}
      <div className="fixed inset-0 bg-background -z-10" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </div>
      
      <ThemeSwitcher />
    </div>
  );
}