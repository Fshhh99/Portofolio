'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:inipatrick40637@gmail.com',
      color: 'hover:text-cyan-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+6281226057377',
      color: 'hover:text-cyan-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      href: 'https://maps.google.com/?q=Bekasi+Selatan,+Bekasi',
      color: 'hover:text-cyan-400',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:inipatrick40637@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest inline-block">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Feel free to reach out if you have any questions or opportunities. I&apos;m always happy to connect and discuss how I can contribute to your projects.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'inipatrick40637@gmail.com',
                    href: 'mailto:inipatrick40637@gmail.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+62 812 2605 7377',
                    href: 'tel:+6281226057377',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Bekasi Selatan, Bekasi, Indonesia',
                    href: 'https://maps.google.com/?q=Bekasi+Selatan,+Bekasi',
                  },
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      className="group flex items-start gap-4 p-4 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/20 hover:border-cyan-400/60 rounded-lg transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20 group-hover:border-cyan-400/60 transition-colors flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{contact.label}</p>
                        <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className={`p-3 rounded-lg bg-slate-800 border border-cyan-400/20 hover:border-cyan-400/60 text-gray-400 transition-all duration-300 ${social.color}`}
                        title={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 focus:border-cyan-400 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-cyan-400/20 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
