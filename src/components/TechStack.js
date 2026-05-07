import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Database, Layout, Settings, Workflow, Zap, Code2, Globe, DatabaseZap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClick, playWhoosh } from '../utils/sounds';

const TechStack = () => {
  const stack = [
    {
      title: "Backend Core",
      icon: <Server className="text-blue-400" />,
      skills: portfolioData.skills.backend,
      color: "blue"
    },
    {
      title: "GenAI & ML",
      icon: <Cpu className="text-cyan-400" />,
      skills: portfolioData.skills.ai_ml,
      color: "cyan"
    },
    {
      title: "Data Systems",
      icon: <DatabaseZap className="text-purple-400" />,
      skills: portfolioData.skills.databases,
      color: "purple",
      featured: true
    },
    {
      title: "Infrastructure",
      icon: <Workflow className="text-yellow-400" />,
      skills: portfolioData.skills.devops,
      color: "yellow"
    }
  ];

  return (
    <section id="stack" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => playWhoosh()}
          className="text-center mb-24"
        >
          <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase block mb-4">Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold italic">Tech <span className="text-white/20">Arsenal.</span></h2>
          <div className="h-1.5 w-40 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={playClick}
              className={`group relative p-10 rounded-[3rem] glass border ${item.featured ? 'border-primary/40 bg-primary/5' : 'border-white/5'} overflow-hidden transition-all cursor-pointer`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {item.icon}
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-2xl text-white group-hover:text-primary transition-colors shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                {item.featured && (
                   <span className="ml-auto text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Primary</span>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {item.skills?.map((skill, sIndex) => (
                  <span 
                    key={sIndex} 
                    className={`px-4 py-2 ${item.featured ? 'bg-primary/20 text-white' : 'bg-white/5 text-white/40'} rounded-xl text-xs font-medium border border-white/5 group-hover:border-primary/20 group-hover:text-white transition-all`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${item.featured ? 'bg-primary/20' : 'bg-primary/10'} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* Core Languages */}
        <div className="mt-24 p-12 md:p-20 rounded-[4rem] border border-white/5 bg-white/[0.01] relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.6em] mb-16 text-center">Core Programming Proficiency</div>
           <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {portfolioData.skills.languages.map((lang, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10, scale: 1.1 }}
                  onClick={playClick}
                  className="flex flex-col items-center gap-6 group/lang cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-[2rem] glass border border-white/10 flex items-center justify-center text-3xl font-black text-white/20 group-hover/lang:text-primary group-hover/lang:border-primary/40 group-hover/lang:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500">
                    {lang[0]}
                  </div>
                  <span className="text-xs font-black text-white/20 group-hover/lang:text-white uppercase tracking-[0.3em] transition-colors">{lang}</span>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
