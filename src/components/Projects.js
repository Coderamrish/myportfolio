import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder, ArrowUpRight, Zap, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClick, playWhoosh } from '../utils/sounds';

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => playWhoosh()}
          className="text-center mb-24"
        >
          <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase block mb-4">Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 italic">Featured <span className="text-white/20">Architectures.</span></h2>
          <div className="h-1.5 w-40 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={playClick}
              className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden hover:border-primary/20 transition-all duration-700 cursor-pointer"
            >
              <div className="aspect-video md:aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[9px] font-black uppercase tracking-widest text-white bg-black/60 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-xl shadow-2xl">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Code2 size={20} />
                  </div>
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{project.subtitle}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-primary transition-colors flex items-center justify-between">
                   {project.title}
                   <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                
                <p className="text-white/40 text-lg mb-10 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center gap-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => { e.stopPropagation(); playClick(); }}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
