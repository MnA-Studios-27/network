
import React from 'react';

interface NavbarProps {
  setView: (view: 'home' | 'privacy' | 'legal') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (currentView !== 'home') {
      setView('home');
      // Timeout to wait for state update and render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex items-center justify-between bg-black/60 backdrop-blur-xl border-b border-white/5">
      <button 
        onClick={() => setView('home')}
        className="flex items-center gap-2 group outline-none"
      >
        <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center transition-transform group-hover:scale-110">
          <span className="text-black font-black text-xl italic">N</span>
        </div>
        <span className="font-bold tracking-tighter text-xl uppercase text-white">Network</span>
      </button>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-400">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">About</a>
        <a href="#journey" onClick={(e) => scrollToSection(e, 'journey')} className="hover:text-white transition-colors">The Journey</a>
        <a href="#pipeline" onClick={(e) => scrollToSection(e, 'pipeline')} className="hover:text-white transition-colors">Pipeline</a>
        <a href="#residents" onClick={(e) => scrollToSection(e, 'residents')} className="hover:text-white transition-colors">Residents</a>
        <a href="#pathfinder" onClick={(e) => scrollToSection(e, 'pathfinder')} className="hover:text-white transition-colors">Pathfinder AI</a>
      </div>

      <a 
        href="https://tally.so/r/Ek57gA" 
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all uppercase tracking-widest text-center shadow-lg"
      >
        Apply Now
      </a>
    </nav>
  );
};

export default Navbar;
