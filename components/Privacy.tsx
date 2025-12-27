
import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <section className="py-32 px-6 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-12 text-gradient">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-12 uppercase tracking-[0.2em] font-bold">Last Updated: October 2024</p>
          
          <div className="space-y-12 text-gray-300 font-light leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">1. Information We Collect</h2>
              <p>Network by MNA Studios collects information you provide directly to us when you apply for residency via Tally, interact with our Pathfinder AI, or contact us. This includes your name, social media handles, email address, and professional background.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">2. How We Use Your Data</h2>
              <p>We use your information to assess residency applications, personalize your experience with our strategic AI tools, and communicate program updates. We do not sell your personal data to third parties.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">3. Third-Party Services</h2>
              <p>Our site utilizes Google Gemini API for the Pathfinder AI and Tally.so for application management. Your interactions with these services are governed by their respective privacy policies. We recommend reviewing them.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4">5. Contact Us</h2>
              <p>For questions regarding this policy, please reach out to <a href="mailto:hello@mnastudios.com" className="text-blue-500 hover:underline">hello@mnastudios.com</a>.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
