'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Hiring Hash',
    description:
      'A next-gen platform for precise, efficient hiring—tailored to meet your unique recruitment needs.',
    tech: ['MongoDB', 'React', 'Node.js'],
    gradient: 'from-blue-600 via-purple-600 to-pink-600',
  },
  {
    title: 'Digital Twin App',
    description:
      'By creating a virtual replica of our building, we integrated IoT data in real-time, that allowed us remote-monitoring, precise-controlling, and efficient decision making.',
    tech: ['IoT', 'React', 'MongoDB'],
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
  },
  {
    title: 'Golfy - VR',
    description:
      'Experience the greens from home—play, practice, and perfect your swing with Virtual Reality Golf.',
    tech: ['VR', 'Unity', 'React'],
    gradient: 'from-orange-600 via-red-600 to-pink-600',
  },
  {
    title: 'Agriculture App',
    description:
      'Based on the idea of "Knowing is better than Hoping", the Agriculture App aids in expecting the outcome of their crops.',
    tech: ['AI/ML', 'React', 'Python'],
    gradient: 'from-indigo-600 via-blue-600 to-purple-600',
  },
  {
    title: 'Zero Cheating',
    description:
      'The Zero Cheating Assessment Extension is aimed at enhancing the fairness and integrity of online examinations.',
    tech: ['Chrome Ext', 'JavaScript', 'Google API'],
    gradient: 'from-yellow-600 via-orange-600 to-red-600',
  },
  {
    title: 'Smart NFC',
    description:
      'Make complex actions quick, short and secure with NFC\'s contactless communication',
    tech: ['NFC', 'React', 'Node.js'],
    gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-20 md:py-28 bg-[#050608] overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl bg-purple-500/10" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full blur-3xl bg-blue-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our satisfied clients reflect our portfolio of success and excellence in tech. industry. These projects are our trophies that showcase our skills and full potential in the development industry.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20">
                
                {/* Animated gradient header */}
                <motion.div
                  className={`relative h-56 md:h-64 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                  initial={{ opacity: 0.8, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.08 + 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  {/* Animated decorative elements */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Project number badge */}
                  <motion.div
                    className="absolute top-6 left-6 z-10"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08 + 0.3,
                    }}
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 group-hover:bg-white/25 transition-all duration-500">
                      <span className="text-white font-black text-xl">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <div className="p-6 md:p-8 relative">
                  {/* Title */}
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08 + 0.2,
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08 + 0.3,
                    }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08 + 0.4,
                    }}
                  >
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/10 text-white text-xs font-medium rounded-full border border-white/15 group-hover:border-purple-400/40 group-hover:bg-purple-500/20 transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.a
                    href="#"
                    className="group/btn inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 bg-white/10 text-white font-semibold transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-purple-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08 + 0.5,
                    }}
                  >
                    <span className="text-sm">View Project</span>
                    <motion.span
                      className="flex items-center justify-center w-5 h-5"
                      animate={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </motion.a>
                </div>

                {/* Bottom gradient accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#"
            className="group/cta relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/10 text-white font-semibold text-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <span>View All Case Studies</span>
            <motion.span
              className="flex items-center justify-center w-6 h-6"
              animate={{ x: 0 }}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
