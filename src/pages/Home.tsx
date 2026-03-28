import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
export function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#D4A574] selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </div>);

}