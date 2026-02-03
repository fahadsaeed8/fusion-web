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

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
                className="group relative bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] border border-gray-100 hover:border-purple-200 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-700 text-center cursor-pointer overflow-hidden"
              >
                {/* Decorative background pattern on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                {/* Content wrapper with relative positioning */}
                <div className="relative z-10">
                  {/* Icon with purple background */}
                  <div className="w-11 h-11 md:w-12 md:h-12 bg-purple-100 group-hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-purple-700 group-hover:text-white transition-colors duration-400" />
                  </div>

                  {/* Title - smaller to match card size */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-white mb-2.5 transition-colors duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                    {model.title}
                  </h3>

                  {/* Description - smaller text */}
                  <p className="text-sm text-gray-600 group-hover:text-white/90 mb-4 leading-relaxed transition-colors duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                    {model.description}
                  </p>
                </div>

                {/* CTA Button - smaller, seamless transitions */}
                <div className="relative z-10">
                  {index === 1 ? (
                    <a
                      href="#contact"
                      className="inline-block px-4 py-2 text-sm rounded-full bg-purple-600 text-white font-medium transition-all duration-350 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-purple-700 hover:scale-[1.02]"
                    >
                      {model.cta}
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="group/btn relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-medium transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:bg-white group-hover:border-white group-hover:text-purple-600 mx-auto"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-700 group-hover:bg-purple-600 group-hover:text-white transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-75 order-1 group-hover:order-3 flex-shrink-0">
                        <span className="text-xs transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-100 group-hover:translate-x-0.5">→</span>
                      </span>
                      <span className="transition-colors duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-100 group-hover:text-purple-600 order-2 whitespace-nowrap">{model.cta}</span>
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
