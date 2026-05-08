import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { playClick } from './utils/sounds';

function App() {
  useEffect(() => {
    // Unlock audio context for browsers that block auto-play
    const unlockAudio = () => {
      playClick(); // Play a dummy click or short sound to unlock
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('scroll', unlockAudio);
    };
    
    window.addEventListener('click', unlockAudio);
    window.addEventListener('mousedown', unlockAudio);
    window.addEventListener('touchstart', unlockAudio);
    window.addEventListener('scroll', unlockAudio);

    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('mousedown', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('scroll', unlockAudio);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Achievements />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 px-4 text-center text-white/20 text-xs border-t border-white/5">
        Designed & Built by Amrish Kumar Tiwary • 2026
      </footer>
    </div>
  );
}

export default App;