
import React from 'react';
import { motion } from 'framer-motion';

const Legal: React.FC = () => {
  return (
    <section className="py-32 px-6 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-12 text-gradient">Legal Terms</h1>
          <p className="text-gray-400 text-sm mb-12 uppercase tracking-[0.2em] font-bold">Residency & Partnership Framework</p>
          
          <div className="space-y-12 text-gray-300 font-light leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">1. Incubation Residency</h2>
              <p>Residency at Network is a partnership-based program. Acceptance into the program does not constitute an employment agreement. Participants (Residents) remain independent contractors unless specified in a separate formal partnership agreement.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">2. The 50/50 Alignment</h2>
              <p>Our core model operates on a 50/50 alignment. MNA Studios provides full production infrastructure, studio access, and specialized crews. In exchange, the parties agree to a shared equity or revenue model on media IP and derived products. Specific terms are detailed in the "Residency Partnership Agreement" signed upon onboarding.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">3. Intellectual Property</h2>
              <p>All trademarks, logos, and proprietary frameworks displayed on this site are the property of MNA Studios. Residents retain ownership of their individual persona, while business entities created during residency are governed by the joint partnership terms.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">4. Pathfinder AI Disclaimer</h2>
              <p>Pathfinder AI is a strategic discovery tool provided "as-is." Suggestions provided by the AI are for informational purposes and do not constitute financial or legal advice. Network is not responsible for business decisions made based on AI output.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">5. Jurisdiction</h2>
              <p>These terms and any disputes arising from your use of this site or the Network program are governed by the laws of the jurisdiction in which MNA Studios is registered.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Legal;
