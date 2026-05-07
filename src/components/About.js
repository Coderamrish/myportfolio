import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ExternalLink, FileText, Cpu, MapPin, Sparkles, Layout } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClick, playWhoosh } from '../utils/sounds';

const About = () => {
  return (
    <section id="about" className="py-32 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        {/* Left Side: Story & Vision */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => playWhoosh()}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
             <Layout size={12} />
             Engineering Profile
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight">About <br /><span className="text-white/20 italic">Amrish.</span></h2>
          
          <div className="relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 mb-10 group hover:border-primary/20 transition-all">
             <div className="absolute -top-4 -left-4 p-4 bg-primary rounded-2xl text-black shadow-xl group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
             </div>
             <p className="text-white/60 leading-relaxed text-xl font-light italic">
                "{portfolioData.summary}"
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-8 rounded-[2.5rem] glass border border-white/5 hover:bg-white/5 transition-all">
                <h4 className="text-primary font-black text-xs uppercase tracking-widest mb-4">Focus</h4>
                <div className="text-white font-medium">Full Stack & AI Systems</div>
             </div>
             <div className="p-8 rounded-[2.5rem] glass border border-white/5 hover:bg-white/5 transition-all">
                <h4 className="text-primary font-black text-xs uppercase tracking-widest mb-4">Availability</h4>
                <div className="text-white font-medium">Open to Global Roles</div>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Education & Publications */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Education Card */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-4">
              <GraduationCap className="text-primary" size={28} />
              Academics
            </h3>
            <div 
              onClick={playClick}
              className="p-10 rounded-[3rem] glass border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-all cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform">
                 <GraduationCap size={150} />
              </div>
              <h4 className="text-white font-bold text-2xl mb-2">{portfolioData.education.institution}</h4>
              <p className="text-primary text-lg font-bold mb-6">{portfolioData.education.degree}</p>
              
              <div className="flex flex-wrap gap-6 text-white/40 font-mono text-sm">
                <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                   <span className="text-white/80 font-bold">GPA: {portfolioData.education.gpa}</span>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                   <span>{portfolioData.education.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Research Publications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-4">
              <BookOpen className="text-primary" size={28} />
              Publications
            </h3>
            <div className="space-y-6">
              {portfolioData.research.map((paper, index) => (
                <motion.a 
                  key={index}
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="block p-8 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:bg-white/10 hover:border-primary/20 transition-all relative"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">{paper.type}</span>
                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-[0.3em]">{paper.status}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2">{paper.title}</h4>
                  <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest group-hover:text-white/60 transition-colors">
                     View Document <ExternalLink size={12} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
