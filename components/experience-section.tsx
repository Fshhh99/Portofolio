'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function ExperienceSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const experiences = [
    {
      id: 'exp-1',
      type: 'Work Experience',
      title: 'Network Engineering Intern',
      company: 'PT Rtiga Global Media',
      period: 'Aug 2021 – Dec 2021',
      location: 'Jakarta, Indonesia',
      details: [
        'Installed and configured Wi-Fi networks at client locations (on-site deployment)',
        'Performed network configuration and simulation using Cisco Packet Tracer and MikroTik',
        'Monitored network traffic to ensure stable and reliable connectivity',
      ],
    },
    {
      id: 'edu-1',
      type: 'Education',
      title: 'Bachelor of Information Technology',
      company: 'Telkom University Jakarta',
      period: 'Aug 2023 – Present',
      location: 'Jakarta, Indonesia',
      details: [
        'Specialized in network engineering and system administration',
        'Active member of Google Developer On Campus community',
        'Participating in workshops, coding sessions, and collaborative projects',
      ],
    },
    {
      id: 'edu-2',
      type: 'Education',
      title: 'Computer and Network Engineering',
      company: 'SMK Negeri 1 Bekasi',
      period: 'July 2020 – May 2023',
      location: 'Bekasi, Indonesia',
      details: [
        'Vocational training in computer hardware and network infrastructure',
        'Hands-on experience with network troubleshooting and configuration',
        'Obtained MikroTik Certified Network Associate (2022)',
      ],
    },
    {
      id: 'org-1',
      type: 'Organization',
      title: 'Member',
      company: 'Google Developer On Campus - Telkom University Jakarta',
      period: '2023',
      location: 'Jakarta, Indonesia',
      details: [
        'Actively participated in workshops, coding sessions, and collaborative projects on web, mobile, and cloud development',
        'Engaged in peer-learning activities to strengthen technical and problem-solving skills',
        'Collaborated with cross-functional student teams to explore Google technologies',
      ],
    },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Work Experience':
        return 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400';
      case 'Education':
        return 'bg-teal-400/10 border-teal-400/30 text-teal-400';
      case 'Organization':
        return 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400';
      default:
        return 'bg-gray-400/10 border-gray-400/30 text-gray-400';
    }
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Professional Journey</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">
              Experience & Education
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-teal-400 to-transparent" />

            {/* Timeline items */}
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative pl-32"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-900 ring-2 ring-cyan-400"
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setExpandedId(expandedId === experience.id ? null : experience.id)}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/20 hover:border-cyan-400/60 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                    {/* Type badge */}
                    <div className="flex items-start justify-between mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getTypeColor(experience.type)}`}>
                        {experience.type}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-cyan-400 transition-transform duration-300 ${expandedId === experience.id ? 'rotate-180' : ''}`}
                      />
                    </div>

                    {/* Main content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{experience.company}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400 mb-4">
                      <span>{experience.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{experience.location}</span>
                    </div>

                    {/* Expandable details */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={
                        expandedId === experience.id
                          ? { height: 'auto', opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-cyan-400/20 space-y-2">
                        {experience.details.map((detail, idx) => (
                          <div key={idx} className="flex gap-3 text-gray-300 text-sm">
                            <span className="text-cyan-400 font-bold mt-1">•</span>
                            <p>{detail}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
