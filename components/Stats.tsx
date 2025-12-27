
import React from 'react';
import { motion } from 'framer-motion';
import { IMPACT_STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-black/50 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none grid grid-cols-12 gap-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white h-full"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
        {IMPACT_STATS.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center group cursor-default"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-5xl md:text-8xl font-black tracking-tighter mb-4 font-mono text-gradient transition-all duration-700"
            >
              {stat.value}{stat.suffix}
            </motion.div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-white/90 mb-2">
              {stat.label}
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-blue-500 font-bold opacity-60">
              {stat.sub}
            </div>
            
            {/* Animated underline */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '40%' }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              className="h-[2px] bg-white/10 mx-auto mt-6 group-hover:bg-blue-500/50 transition-colors"
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
