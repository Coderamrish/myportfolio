import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClick } from '../utils/sounds';

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        <div className="relative glass p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-4 px-6 py-2 bg-primary text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            <Sparkles size={12} />
            Full Stack & AI Engineer
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative mb-8"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 animate-pulse"></div>
            <img
              src="https://github.com/Coderamrish.png"
              alt={portfolioData.name}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/5 bg-black z-10"
            />
            <div className="absolute bottom-1 right-1 bg-primary text-black p-2 rounded-full shadow-xl z-20">
               <ShieldCheck size={20} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-7xl font-display font-bold mb-4 tracking-tight"
          >
            {portfolioData.name}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 text-white/40 font-mono text-sm uppercase tracking-widest mb-8"
          >
             <MapPin size={16} />
             {portfolioData.location}
             <span className="w-1.5 h-1.5 bg-white/10 rounded-full" />
             <span className="text-primary font-bold">{portfolioData.education.gpa} GPA</span>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mb-12"
          >
            {portfolioData.role}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a 
              href={portfolioData.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={playClick}
              className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 text-white/40 hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <Github size={24} />
            </a>
            <a 
              href={portfolioData.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={playClick}
              className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 text-white/40 hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={portfolioData.socials.gfg} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={playClick}
              className="w-[56px] h-[56px] flex items-center justify-center bg-white/5 rounded-2xl hover:bg-white/10 text-white/40 hover:text-white transition-all font-bold text-xl hover:scale-110 active:scale-95"
            >
              G
            </a>
            <a 
              href={portfolioData.socials.resume} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={playClick}
              className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
            >
               Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
