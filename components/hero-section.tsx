'use client';

import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function HeroSection() {
  const [isHoveredCV, setIsHoveredCV] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Rafly_Firmansyah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block"
              >
                <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Network Engineering & IT</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Rafly <span className="text-cyan-400">Firmansyah</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-300 max-w-lg leading-relaxed"
              >
                Information Technology student at Telkom University with expertise in network engineering, system administration, and infrastructure design.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Download CV Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHoveredCV(true)}
                onHoverEnd={() => setIsHoveredCV(false)}
                onClick={handleDownloadCV}
                className="group relative px-8 py-4 bg-cyan-500 text-slate-900 font-semibold rounded-lg overflow-hidden flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors duration-300"
              >
                <Download size={20} />
                <span>Download CV</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  initial={false}
                  animate={isHoveredCV ? { opacity: 0.1 } : { opacity: 0 }}
                />
              </motion.button>

              {/* Contact Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHoveredContact(true)}
                onHoverEnd={() => setIsHoveredContact(false)}
                href="mailto:inipatrick40637@gmail.com"
                className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg overflow-hidden flex items-center justify-center gap-2 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail size={20} />
                <span>Contact Me</span>
                <motion.div
                  className="absolute inset-0 bg-cyan-400 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={isHoveredContact ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-colors duration-300">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent pointer-events-none rounded-2xl" />
              
              <Image
                src="/rafly-profile.png"
                alt="Rafly Firmansyah - Network Engineering Professional"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-slate-900 border border-cyan-400/30 rounded-lg p-4 shadow-lg backdrop-blur-sm"
            >
              <p className="text-sm text-gray-400">Certified Network Associate</p>
              <p className="text-xs text-cyan-400 font-semibold">MikroTik • 2022</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
