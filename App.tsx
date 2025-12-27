
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Journey from './components/Journey';
import Pipeline from './components/Pipeline';
import Creators from './components/Creators';
import Pathfinder from './components/Pathfinder';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Privacy from './components/Privacy';
import Legal from './components/Legal';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [view, setView] = useState<'home' | 'privacy' | 'legal'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'privacy':
        return <Privacy />;
      case 'legal':
        return <Legal />;
      default:
        return (
          <>
            <Hero />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Stats />
            </motion.div>
            <Features />
            <Journey />
            <Pipeline />
            <Creators />
            <Pathfinder />
            <section id="apply" className="py-48 px-6 flex flex-col items-center justify-center text-center bg-white text-black relative overflow-hidden scroll-mt-24">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter uppercase italic leading-[0.8]">
                  THE LAST <br /> MILE.
                </h2>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-medium opacity-60 leading-tight tracking-tight">
                  From Dreamer to Viral Powerhouse to Conglomerate. We build the physical and digital infrastructure for your global exit.
                </p>
                <motion.a 
                  href="https://tally.so/r/Ek57gA"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-16 py-6 bg-black text-white font-black rounded-full transition-all text-xl uppercase tracking-widest shadow-2xl hover:shadow-black/40"
                >
                  Start Residency
                </motion.a>
              </motion.div>
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap text-[25vw] font-black leading-none uppercase italic">
                NETWORK NETWORK NETWORK NETWORK
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-600 selection:text-white bg-black">
      <Particles />
      <Navbar setView={setView} currentView={view} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setView={setView} />
    </div>
  );
}

export default App;
