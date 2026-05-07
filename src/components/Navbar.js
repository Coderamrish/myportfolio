import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, User, Mail, Layers, Star } from 'lucide-react';
import { playClick } from '../utils/sounds';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'stack', 'achievements', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -400 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <Home size={16} />, label: 'Home' },
    { id: 'about', icon: <User size={16} />, label: 'Bio' },
    { id: 'stack', icon: <Layers size={16} />, label: 'Tech' },
    { id: 'achievements', icon: <Star size={16} />, label: 'Wins' },
    { id: 'projects', icon: <Briefcase size={16} />, label: 'Work' },
    { id: 'contact', icon: <Mail size={16} />, label: 'Connect' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-4 w-full max-w-fit">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`p-1.5 rounded-full border flex items-center gap-1 transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-3xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]' 
            : 'bg-white/[0.03] backdrop-blur-xl border-white/5'
        }`}
      >
        <div className="pl-4 pr-3 border-r border-white/10 mr-1 hidden md:block">
           <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#3B82F6]" />
        </div>

        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={playClick}
            className={`relative px-4 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-2 ${
              activeSection === item.id ? 'text-black' : 'text-white/30 hover:text-white/80'
            }`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="nav-active-pill"
                className="absolute inset-0 bg-white rounded-full z-0 shadow-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item.icon}</span>
            <span className="relative z-10 hidden sm:block">{item.label}</span>
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
