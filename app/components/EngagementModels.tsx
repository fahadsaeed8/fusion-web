'use client';

import { motion } from 'framer-motion';
import { Users, DollarSign, Target } from 'lucide-react';

const models = [
  {
    icon: Users,
    title: 'Staff Augmentation',
    description:
      'Our staff augmentation model is specifically designed to match your ongoing projects\' specific needs.',
    cta: 'Partner with Specialists',
  },
  {
    icon: DollarSign,
    title: 'Fixed Price Model',
    description:
      'Lock in your costs upfront to ensure budget certainty and let\'s focus on achieving your project goals.',
    cta: 'Get a fixed Price Estimate',
  },
  {
    icon: Target,
    title: 'Dedicated Teams',
    description:
      'A flexible payment structure where costs are directly tied to your usage and project requirements.',
    cta: 'Engage our Expert Team',
  },
];

export default function EngagementModels() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle vertical stripes pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(168, 85, 247, 0.1) 2px, rgba(168, 85, 247, 0.1) 4px)',
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How can we engage?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adapt to your unique project needs with our tech-specific models,
            designed for smart, tech-savvy solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                }}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-700 text-center cursor-pointer overflow-hidden"
              >
                {/* Decorative background pattern on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                </div>
                
                {/* Content wrapper with relative positioning */}
                <div className="relative z-10">
                  {/* Icon with purple background */}
                  <div className="w-16 h-16 bg-purple-100 group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-purple-700 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  {/* Title with color transition */}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                    {model.title}
                  </h3>
                  
                  {/* Description with color transition */}
                  <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-500">
                    {model.description}
                  </p>
                </div>
                
                {/* CTA Button - Simple purple button for Fixed Price Model, arrow button for others */}
                <div className="relative z-10">
                  {index === 1 ? (
                    // Fixed Price Model - Simple purple button
                    <a
                      href="#contact"
                      className="inline-block px-6 py-3 rounded-full bg-purple-600 text-white font-semibold transition-all duration-300 hover:bg-purple-700 hover:scale-105"
                    >
                      {model.cta}
                    </a>
                  ) : (
                    // Other cards - Arrow button style
                    <a
                      href="#contact"
                      className="group/btn relative inline-flex items-center gap-3 px-6 py-6 rounded-full border border-gray-300 bg-white text-gray-900 font-semibold transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-white group-hover:border-white group-hover:text-purple-600 h-14 mx-auto"
                    >
                      {/* Arrow circle - starts on left (order-1), moves to right on hover (order-3) */}
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 group-hover:bg-purple-600 group-hover:text-white transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-100 order-1 group-hover:order-3 flex-shrink-0">
                        <span className="transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-200 group-hover:translate-x-0.5">→</span>
                      </span>
                      {/* Text - stays in middle (order-2) */}
                      <span className="transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-150 group-hover:text-purple-600 order-2 whitespace-nowrap">{model.cta}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
