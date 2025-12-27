
import React from 'react';
import { motion } from 'framer-motion';
import { JOURNEY_STAGES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-32 px-6 bg-[#080808] relative overflow-hidden scroll-mt-24">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">THE EVOLUTION</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mb-6"
          ></motion.div>
          <p className="text-gray-400 max-w-xl text-lg font-light">
            Our proprietary incubation framework designed to take you from a single node to a global network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNEY_STAGES.map((stage, index) => {
            // @ts-ignore
            const Icon = LucideIcons[stage.icon];
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-3xl hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stage.accent} opacity-5 blur-3xl group-hover:opacity-15 transition-opacity duration-700`}></div>
                
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-white/10 transition-colors"
                >
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                </motion.div>
                
                <span className="text-xs font-mono text-gray-500 mb-2 block uppercase tracking-widest font-bold">Stage 0{stage.id}</span>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">{stage.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light mb-8">
                  {stage.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-white opacity-40 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  Detailed Roadmap <LucideIcons.ArrowRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
