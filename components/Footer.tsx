
import React from 'react';

interface FooterProps {
  setView: (view: 'home' | 'privacy' | 'legal') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setView('home');
    
    // Allow state to switch then scroll
    setTimeout(() => {
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
    }, 50);
  };

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 mb-6 group outline-none"
          >
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-black font-black text-sm italic">N</span>
            </div>
            <span className="font-bold tracking-tighter uppercase text-white">Network</span>
          </button>
          <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
            The elite incubator for the next generation of industrial-scale creators and entrepreneurs.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/mnastudios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer text-gray-400">
              <span className="text-[10px] font-bold">IG</span>
            </a>
            <a href="https://x.com/mnastudios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer text-gray-400">
              <span className="text-[10px] font-bold">X</span>
            </a>
            <a href="https://youtube.com/@mnastudios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer text-gray-400">
              <span className="text-[10px] font-bold">YT</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
          <div className="space-y-4">
            <p className="font-bold uppercase tracking-widest text-[10px] text-gray-500">Program</p>
            <a href="#journey" onClick={(e) => scrollToSection(e, 'journey')} className="block text-gray-400 hover:text-white transition-colors">The Journey</a>
            <a href="#pipeline" onClick={(e) => scrollToSection(e, 'pipeline')} className="block text-gray-400 hover:text-white transition-colors">The Pipeline</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block text-gray-400 hover:text-white transition-colors">Advantage</a>
          </div>
          <div className="space-y-4">
            <p className="font-bold uppercase tracking-widest text-[10px] text-gray-500">Community</p>
            <a href="#residents" onClick={(e) => scrollToSection(e, 'residents')} className="block text-gray-400 hover:text-white transition-colors">Residents</a>
            <a href="#pathfinder" onClick={(e) => scrollToSection(e, 'pathfinder')} className="block text-gray-400 hover:text-white transition-colors">Pathfinder AI</a>
            <a href="https://mnastudios.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">MNA Studios</a>
          </div>
          <div className="space-y-4">
            <p className="font-bold uppercase tracking-widest text-[10px] text-gray-500">Contact</p>
            <a href="https://tally.so/r/Ek57gA" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">Apply</a>
            <a href="mailto:hello@mnastudios.com" className="block text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-600">
        <p>© 2024 NETWORK BY MNA STUDIOS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <button onClick={() => setView('privacy')} className="hover:text-white transition-colors cursor-pointer outline-none uppercase">Privacy Policy</button>
          <button onClick={() => setView('legal')} className="hover:text-white transition-colors cursor-pointer outline-none uppercase">Legal</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
