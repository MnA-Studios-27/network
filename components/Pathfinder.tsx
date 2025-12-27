
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';
import { Sparkles, Send, Bot, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Pathfinder: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "What do you love? Tell me your obsession, or let's find one together. I'll map your trajectory to a conglomerate." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const responseText = await geminiService.generatePathfinderResponse(input);
    const modelMessage: Message = { role: 'model', text: responseText };
    
    setMessages(prev => [...prev, modelMessage]);
    setLoading(false);
  };

  return (
    <section id="pathfinder" className="py-32 px-6 bg-black relative overflow-hidden scroll-mt-24">
      {/* Localized Motion Gradient for Pathfinder */}
      <motion.div 
        animate={{ 
          x: [-20, 20, -20],
          y: [-20, 20, -20],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={20} className="text-blue-500" />
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Discovery</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] uppercase italic">FIND YOUR <br /> OBSESSION.</h2>
          <p className="text-gray-500 text-xl font-light leading-relaxed mb-10 max-w-lg">
            Unsure where you fit? Tell us what moves you. We draw inspiration from current giants like AnM and Verse to find your unique lane.
          </p>
          
          <div className="space-y-4">
            {[
              "Share your interests or curiosities.",
              "Receive tailored creative suggestions.",
              "Map your exit through the Network pipeline."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 shrink-0 font-black text-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
                  {i + 1}
                </div>
                <p className="text-gray-400 font-medium group-hover:text-white transition-colors">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-8 h-[550px] flex flex-col relative border-white/5 shadow-2xl bg-white/[0.01]"
        >
          {/* Header UI */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-black text-[10px] tracking-widest uppercase">Discovery Engine</p>
                <p className="text-[9px] text-gray-500 uppercase font-black tracking-tighter flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-green-500"></span> Online
                </p>
              </div>
            </div>
            <Info size={14} className="text-gray-600" />
          </div>

          {/* Chat Container */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto space-y-6 pr-2 mb-6 scroll-smooth"
          >
            <AnimatePresence mode="popLayout">
              {messages.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[90%] p-5 rounded-3xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none font-medium' 
                      : 'bg-white/5 text-gray-400 rounded-tl-none border border-white/10'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-5 rounded-3xl rounded-tl-none border border-white/10 flex gap-1">
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full"></motion.span>
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full"></motion.span>
                  <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full"></motion.span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="relative">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tell me what you love or ask for suggestions..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-blue-600/50 transition-all font-medium placeholder:text-gray-600"
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
            >
              <Send size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pathfinder;
