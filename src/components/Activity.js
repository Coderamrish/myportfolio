import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Activity as ActivityIcon, Calendar, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { playClick, playWhoosh } from '../utils/sounds';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Activity = () => {
  return (
    <section id="activity" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => playWhoosh()}
          className="text-center mb-24"
        >
          <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase block mb-4">Live Metrics</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 italic">Performance <span className="text-white/20">Vitals.</span></h2>
          <div className="h-1.5 w-40 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* GitHub Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <GithubIcon size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
                <p className="text-white/40 text-sm font-mono tracking-widest">@{portfolioData.socials.github.split('/').pop()}</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stats Card */}
              <div className="group relative glass p-1 rounded-[2.5rem] border border-white/5 overflow-hidden transition-all hover:border-primary/20">
                <img 
                  src={`https://github-readme-stats.vercel.app/api?username=Coderamrish&show_icons=true&theme=transparent&title_color=facc15&text_color=ffffff&icon_color=facc15&border_color=ffffff00&hide_border=true&bg_color=00000000`} 
                  alt="GitHub Stats"
                  className="w-full h-auto"
                />
              </div>

              {/* Top Langs */}
              <div className="group relative glass p-1 rounded-[2.5rem] border border-white/5 overflow-hidden transition-all hover:border-primary/20">
                <img 
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Coderamrish&layout=compact&theme=transparent&title_color=facc15&text_color=ffffff&icon_color=facc15&border_color=ffffff00&hide_border=true&bg_color=00000000`} 
                  alt="Top Languages"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* LeetCode & Coding Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Coding Proficiency</h3>
                <p className="text-white/40 text-sm font-mono tracking-widest">Knight @ LeetCode</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* LeetCode Card */}
              <div 
                onClick={playClick}
                className="group relative glass p-8 rounded-[2.5rem] border border-white/5 overflow-hidden transition-all hover:border-primary/20 cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ActivityIcon size={120} />
                </div>
                
                <img 
                  src="https://leetcard.jacoblin.cool/coderamrish?theme=dark&font=Inter&ext=activity" 
                  alt="LeetCode Stats"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Custom Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col gap-2 group hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-2 text-primary">
                       <Calendar size={16} />
                       <span className="text-[10px] font-black uppercase tracking-widest">Streak</span>
                    </div>
                    <div className="text-3xl font-bold text-white group-hover:text-primary transition-colors">365+ Days</div>
                    <p className="text-white/20 text-xs">Continuous commits</p>
                 </div>
                 <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col gap-2 group hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-2 text-primary">
                       <Zap size={16} />
                       <span className="text-[10px] font-black uppercase tracking-widest">Peak Rating</span>
                    </div>
                    <div className="text-3xl font-bold text-white group-hover:text-primary transition-colors">2006</div>
                    <p className="text-white/20 text-xs">Global Rank 466</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contribution Graph (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 group relative glass p-8 md:p-12 rounded-[3rem] border border-white/5 overflow-hidden transition-all hover:border-primary/20"
        >
          <div className="flex items-center gap-4 mb-8">
             <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
             <h4 className="text-sm font-black uppercase tracking-[0.4em] text-white/40">Contribution Universe</h4>
          </div>
          <div className="overflow-x-auto pb-4">
             <img 
               src="https://github-readme-streak-stats.herokuapp.com/?user=Coderamrish&theme=transparent&hide_border=true&stroke=facc15&ring=facc15&fire=facc15&currStreakNum=ffffff&sideNums=ffffff&sideLabels=ffffff&dates=94a3b8" 
               alt="GitHub Streak"
               className="w-full min-w-[600px] h-auto"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activity;
