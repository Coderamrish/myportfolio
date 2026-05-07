import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase block mb-4">Connectivity</span>
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-8">Let's Build <br /><span className="text-white/20 italic">Systems.</span></h2>
          <p className="text-white/30 text-xl font-light mb-12 max-w-2xl mx-auto">
            Available for architectural consulting, system design, and high-performance backend engineering roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <a 
              href={`mailto:${portfolioData.email}`}
              className="group p-10 rounded-[3rem] glass border border-white/5 flex items-center justify-between hover:border-primary/40 hover:bg-white/[0.05] transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                   <h4 className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Direct Email</h4>
                   <p className="text-white font-medium text-sm break-all">{portfolioData.email}</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-white/10 group-hover:text-primary transition-colors" />
            </a>

            <div className="p-10 rounded-[3rem] glass border border-white/5 flex items-center justify-between group hover:border-primary/40 transition-all">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                   <h4 className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Call / WhatsApp</h4>
                   <p className="text-white font-medium text-sm">{portfolioData.phone}</p>
                </div>
              </div>
              <MapPin size={20} className="text-white/10" />
            </div>

            <div className="p-12 rounded-[4rem] bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 relative overflow-hidden">
               <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4">Remote / Hybrid</h4>
                  <p className="text-white/40 text-sm mb-8 font-light">Based in Kolkata, India. Open to global opportunities in distributed systems and AI platforms.</p>
                  <div className="flex gap-4">
                     <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-black rounded-2xl hover:bg-white hover:text-black transition-all">
                        <LinkedinIcon size={20} />
                     </a>
                     <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-black rounded-2xl hover:bg-white hover:text-black transition-all">
                        <GithubIcon size={20} />
                     </a>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-12 md:p-16 rounded-[4rem] glass border border-white/10"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-white/20 text-xs font-black uppercase tracking-widest ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Amrish Kumar" 
                    className="w-full bg-white/5 border border-white/5 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-white/20 text-xs font-black uppercase tracking-widest ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full bg-white/5 border border-white/5 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/10"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-white/20 text-xs font-black uppercase tracking-widest ml-4">Architecture Brief</label>
                <textarea 
                  placeholder="Tell me about your system requirements..." 
                  rows="4" 
                  className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/10 resize-none"
                ></textarea>
              </div>
              <button 
                className="w-full bg-primary text-black font-black uppercase tracking-[0.2em] py-6 rounded-[2rem] hover:bg-white transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 group"
              >
                Dispatch Message
                <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
           <div className="text-white/10 text-[10px] uppercase tracking-[0.5em] font-black">
              Designed & Engineered for High Performance • 2026
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
