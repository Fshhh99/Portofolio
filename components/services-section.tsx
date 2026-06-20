'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Server, Zap, Code, Shield, Cpu } from 'lucide-react';

export function ServicesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Network,
      title: 'Network Configuration',
      description: 'Design and implementation of robust network architectures using MikroTik and Cisco solutions.',
      color: 'from-cyan-400 to-blue-400',
    },
    {
      icon: Server,
      title: 'System Administration',
      description: 'Linux server setup, maintenance, and optimization for reliable infrastructure performance.',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Troubleshooting, monitoring, and securing network connectivity for stable operations.',
      color: 'from-teal-400 to-cyan-400',
    },
    {
      icon: Zap,
      title: 'On-Site Deployment',
      description: 'Professional Wi-Fi network installation and configuration at client locations.',
      color: 'from-cyan-400 to-teal-400',
    },
    {
      icon: Code,
      title: 'Network Simulation',
      description: 'Advanced network modeling using Cisco Packet Tracer for design validation.',
      color: 'from-emerald-400 to-cyan-400',
    },
    {
      icon: Cpu,
      title: 'Infrastructure Design',
      description: 'Comprehensive network planning and architecture design for scalable systems.',
      color: 'from-cyan-400 to-emerald-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">
              Services & Specializations
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl">
              Comprehensive technical capabilities in network engineering and system administration
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/20 hover:border-cyan-400/60 rounded-xl p-8 transition-all duration-300 overflow-hidden">
                    {/* Background gradient glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />
                    
                    {/* Icon with gradient background */}
                    <div className={`relative mb-6 inline-block p-4 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-10 border border-cyan-400/20 group-hover:border-cyan-400/60 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
