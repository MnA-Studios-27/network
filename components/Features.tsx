
import React from 'react';
import { CORE_FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">The Advantage</h2>
          <p className="text-gray-500">Why the world's top talent chooses Network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {CORE_FEATURES.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-all duration-500 border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
