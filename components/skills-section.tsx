'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Zap } from 'lucide-react';

export function SkillsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const technicalSkills = [
    'MikroTik',
    'Linux Server',
    'Network Troubleshooting',
    'Cisco Packet Tracer',
    'Wi-Fi Configuration',
    'System Administration',
    'Network Monitoring',
    'Infrastructure Design',
  ];

  const nonTechnicalSkills = [
    'Collaboration',
    'Adaptability',
    'Technical Communication',
    'Analytical Thinking',
    'Time Management',
    'Attention to Procedure',
    'Problem-Solving',
    'Team Work',
  ];

  const certifications = [
    {
      title: 'MikroTik Certified Network Associate',
      year: '2022',
      issuer: 'MikroTik',
    },
    {
      title: 'Certification Basic Network Computing',
      year: '2022',
      issuer: 'ID-Networkers',
    },
  ];

  const languages = [
    { name: 'Indonesia', level: 'Fluent' },
    { name: 'English', level: 'Basic' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="relative py-20 overflow-hidden">
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
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Capabilities</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">
              Skills & Certifications
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 rounded-full text-sm font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/20">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Non-Technical Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl font-semibold text-white">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {nonTechnicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 border border-teal-400/30 hover:border-teal-400/60 text-teal-300 rounded-full text-sm font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-400/20">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications & Languages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-400/20 hover:border-emerald-400/60 rounded-lg p-4 transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-gray-400">{cert.issuer}</p>
                        </div>
                        <span className="text-sm font-semibold text-emerald-400 whitespace-nowrap">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-400/20 hover:border-blue-400/60 rounded-lg p-4 transition-all duration-300">
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {lang.name}
                        </h4>
                        <span className="text-sm font-semibold text-blue-400 px-3 py-1 bg-blue-400/10 border border-blue-400/20 rounded-full">
                          {lang.level}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
