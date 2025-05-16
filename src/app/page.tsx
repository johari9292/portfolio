'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
} 