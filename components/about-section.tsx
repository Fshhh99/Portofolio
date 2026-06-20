'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < end) {
          return prev + Math.ceil(end / 20);
        }
        clearInterval(timer);
        return end;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{Math.min(count, end)}</span>;
}

export function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Years Training', value: 4 },
    { label: 'Certifications', value: 2 },
    { label: 'Projects', value: 5 },
    { label: 'Technologies', value: 8 },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">About Me</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">
                Professional Summary
              </h2>
            </motion.div>
          </div>

          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-cyan-400 pl-6">
                <span className="italic text-cyan-400">Undergraduate Information Technology student</span> at Telkom University Jakarta with a strong background in Computer and Network Engineering.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I specialize in network configuration, system administration, and infrastructure design. My experience includes MikroTik configuration, Linux server management, and hands-on network troubleshooting through both vocational training and professional internships.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                I&apos;m passionate about learning new technologies and solving complex networking problems. I work systematically and collaboratively in technical environments, with a strong focus on network stability, security, and performance optimization.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                As an active member of Google Developer On Campus at Telkom University, I engage with cutting-edge technologies and collaborate with peers on innovative solutions.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/20 hover:border-cyan-400/60 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      <CountUp end={stat.value} />
                      {stat.value > 1 && stat.label !== 'Years Training' && stat.label !== 'Certifications' ? '+' : ''}
                    </div>
                    <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
