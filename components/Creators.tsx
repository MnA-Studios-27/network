
import React from 'react';
import { motion } from 'framer-motion';
import { CREATOR_COHORT } from '../constants';
import { Instagram, ArrowUpRight } from 'lucide-react';

const Creators: React.FC = () => {
  return (
    <section id="residents" className="py-32 px-6 bg-black relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Cohort 2024</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic leading-[0.9]">
              ACTIVE <br /> RESIDENTS.
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              These are the creators currently navigating our pipeline—transforming raw obsession into industrial-grade service agencies.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400">
              <span className="font-bold text-xs uppercase">03</span>
            </div>
            <div className="h-12 flex items-center px-6 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-500">
              Selected from 500+
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CREATOR_COHORT.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-900 relative mb-8">
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Instagram Links Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {creator.instagram && (
                    <a 
                      href={creator.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <span>@{creator.handle}</span>
                      <Instagram size={14} />
                    </a>
                  )}
                  {creator.second_link && (
                    <a 
                      href={creator.second_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 bg-black/80 text-white backdrop-blur-md border border-white/20 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:border-white/40 transition-colors"
                    >
                      <span>{creator.agency}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">{creator.role}</span>
                  <div className="h-px flex-1 bg-white/5"></div>
                </div>
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{creator.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-3">
                  {creator.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creators;
