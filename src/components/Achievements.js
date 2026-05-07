import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Target, ExternalLink, Award, Star, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClick, playWhoosh } from '../utils/sounds';

const iconMap = {
  "Award": <Award className="text-yellow-400" />,
  "Trophy": <Trophy className="text-purple-400" />,
  "Code": <Code className="text-blue-400" />,
  "Star": <Star className="text-orange-400" />,
  "Zap": <Zap className="text-cyan-400" />,
  "Target": <Target className="text-red-400" />,
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onViewportEnter={() => playWhoosh()}
        className="mb-24 text-center"
      >
        <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase block mb-4">Milestones & Recognition</span>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 italic">The <span className="text-white/20">Hall of Fame.</span></h2>
        <div className="h-1.5 w-40 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={playClick}
            className="group relative p-10 rounded-[3rem] glass border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
               {React.cloneElement(iconMap[item.icon] || <Trophy />, { size: 160 })}
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/20 transition-all duration-500">
                  {iconMap[item.icon] || <Trophy className="text-primary" />}
                </div>
                {item.link && item.link !== "#" && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <h3 className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{item.title}</h3>
              <div className="text-3xl font-bold mb-4 text-white/90 group-hover:text-white transition-colors">{item.value}</div>
              <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
