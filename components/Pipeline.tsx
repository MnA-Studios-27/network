
import React from 'react';
import { motion } from 'framer-motion';
import { PIPELINE_STAGES } from '../constants';

const Pipeline: React.FC = () => {
  return (
    <section id="pipeline" className="py-32 px-6 bg-black relative overflow-hidden scroll-mt-24">
      {/* Background Motion Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">The Pipeline</span>
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            DREAMER <span className="text-gray-800">→</span> CREATOR <br className="md:hidden" /> <span className="text-gray-800">→</span> SERVICE <span className="text-gray-800">→</span> PRODUCT
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We don't just scale views. We architect industrial-grade infrastructure for 5-10 year residencies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-purple-600/50 to-transparent -translate-x-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PIPELINE_STAGES.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[2.5rem] relative group border-white/5 hover:border-white/10 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {stage.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-blue-500/60 uppercase tracking-widest">{stage.subtitle}</h4>
                    <h3 className="text-2xl font-black tracking-tight uppercase italic">{stage.title}</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                  {stage.description}
                </p>

                <ul className="space-y-4">
                  {stage.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-3 text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600/30"></div>
                      {detail}
                    </li>
                  ))}
                </ul>

                {stage.id === "V" && (
                  <div className="absolute top-6 right-6 bg-white text-black text-[9px] font-black px-3 py-1 rounded-full shadow-2xl animate-pulse uppercase tracking-widest">
                    The Gate
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[3rem] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent text-center relative overflow-hidden group"
        >
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-[100px]"
          />
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">50/50 ALIGNMENT.</h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg font-light">
              Zero upfront fees. Total synchronization. We invest our entire studio infrastructure and crew, aligning 50/50 on the lifetime value of your media IP and product brand.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pipeline;
