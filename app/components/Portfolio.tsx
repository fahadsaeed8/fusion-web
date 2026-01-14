'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Hiring Hash',
    description:
      'A next-gen platform for precise, efficient hiring—tailored to meet your unique recruitment needs.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    title: 'Digital Twin App',
    description:
      'By creating a virtual replica of our building, we integrated IoT data in real-time, that allowed us remote-monitoring, precise-controlling, and efficient decision making.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    title: 'Golfy - VR',
    description:
      'Experience the greens from home—play, practice, and perfect your swing with Virtual Reality Golf.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    title: 'Agriculture App',
    description:
      'Based on the idea of "Knowing is better than Hoping", the Agriculture App aids in expecting the outcome of their crops. This app employs Artificial Intelligence (AI) for maintenance and surveillance.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    title: 'Zero Cheating',
    description:
      'The Zero Cheating Assessment Extension is aimed at enhancing the fairness and integrity of online examinations. This extension can help conduct assessments by differentiating the AI and IQ written content.',
    tech: ['JavaScript', 'Chrome Extension', 'MERN Stack', 'Google API'],
  },
  {
    title: 'Smart NFC',
    description:
      'Make complex actions quick, short and secure with NFC\'s contactless communication',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our satisfied clients reflect our portfolio of success and
            excellence in tech. industry. These projects are our trophies that
            showcase our skills and full potential in the development industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const gradients = [
              ['from-blue-500', 'via-purple-500', 'to-pink-500'],
              ['from-emerald-500', 'via-teal-500', 'to-cyan-500'],
              ['from-orange-500', 'via-red-500', 'to-pink-500'],
              ['from-indigo-500', 'via-blue-500', 'to-purple-500'],
              ['from-yellow-500', 'via-orange-500', 'to-red-500'],
              ['from-cyan-500', 'via-blue-500', 'to-indigo-500'],
            ];
            const currentGradient = gradients[index % gradients.length];
            const isFeatured = index === 0 || index === 2;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-blue-200 ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Image/Header Section with Scroll Animation */}
                <motion.div 
                  className="relative h-56 overflow-hidden"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {/* Animated Gradient Background with Zoom Effect */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${currentGradient.join(' ')}`}
                    initial={{ opacity: 0.6, scale: 1.3, rotate: -2 }}
                    whileInView={{ opacity: 0.95, scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: index * 0.1 + 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
                  </motion.div>
                  
                  {/* Additional animated overlay for depth */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1 + 0.4,
                    }}
                  />
                  
                  {/* Animated Pattern overlay */}
                  <motion.div 
                    className="absolute inset-0 opacity-10"
                    initial={{ opacity: 0, rotate: -10 }}
                    whileInView={{ opacity: 0.1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <div className="absolute top-4 right-4 w-24 h-24 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                  </motion.div>
                  
                  {/* Animated Project number badge */}
                  <motion.div 
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300 z-10"
                    initial={{ opacity: 0, x: -20, y: -20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1 + 0.4,
                      ease: "easeOut"
                    }}
                  >
                    <span className="text-white font-bold text-lg">0{index + 1}</span>
                  </motion.div>
                  
                  {/* Animated Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0, y: 0 }}
                    viewport={{ once: false }}
                  >
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {project.description}
                    </p>
                  </motion.div>
                  
                  {/* Animated decorative glow effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.1 + 0.3,
                    }}
                  >
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: ["-50%", "-48%", "-50%"],
                        y: ["-50%", "-52%", "-50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Content Section */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200 group-hover:border-blue-200 group-hover:from-blue-50 group-hover:to-purple-50 group-hover:text-blue-700 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* CTA Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group/link"
                  >
                    <span>View Case Study</span>
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                
                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-900 font-semibold transition-all duration-500 ease-in-out hover:bg-blue-600 hover:border-blue-600 hover:text-white"
          >
            {/* Arrow circle - starts on left (order-1), moves to right on hover (order-3) */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 transition-all duration-500 ease-in-out delay-75 group-hover:bg-black group-hover:text-white order-1 group-hover:order-3">
              <span className="transition-transform duration-500 ease-in-out delay-150 group-hover:translate-x-0.5">→</span>
            </span>
            {/* Text - stays in middle (order-2) */}
            <span className="transition-colors duration-500 ease-in-out delay-100 group-hover:text-white order-2">All Case studies</span>
          </a>
        </div>
      </div>
    </section>
  );
}
