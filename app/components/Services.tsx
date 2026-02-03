'use client';

import { motion } from 'framer-motion';
import { Code, Sparkles, Cloud, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description:
      'Transform your ideas into reality with our cutting-edge software development services.',
    bgGradient: 'from-blue-600 via-purple-600 to-indigo-700',
    bgImage: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #4338ca 100%)',
  },
  {
    icon: Sparkles,
    title: 'Emerging Technologies',
    description:
      'Stay ahead of the curve with our expertise in emerging technologies.',
    bgGradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    bgImage: 'linear-gradient(135deg, #10b981 0%, #0d9488 50%, #0891b2 100%)',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Unlock the full potential of the cloud with our comprehensive cloud infrastructure services.',
    bgGradient: 'from-orange-500 via-red-500 to-pink-600',
    bgImage: 'linear-gradient(135deg, #f97316 0%, #ef4444 50%, #db2777 100%)',
  },
  {
    icon: Shield,
    title: 'QA and Support',
    description:
      'Ensure quality and reliability with our QA and support services. Like none other but us.',
    bgGradient: 'from-indigo-600 via-blue-600 to-purple-700',
    bgImage: 'linear-gradient(135deg, #4f46e5 0%, #2563eb 50%, #7c3aed 100%)',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">S</span>
            <span className="bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">ervices</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Silicon level delivery from ideation to digital solutions that solve
            your business problems in a secure and scalable manner.
          </p>
          
          {/* Explore services button - moved above cards */}
          <div className="text-center mb-12">
            <a
              href="#services"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-purple-600 hover:border-purple-600 hover:text-white"
            >
              {/* Arrow circle - starts on left (order-1), moves to right on hover (order-3) */}
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-700 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-100 group-hover:bg-white/20 group-hover:text-white order-1 group-hover:order-3 flex-shrink-0">
                <ArrowRight size={12} className="transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-200 group-hover:translate-x-0.5" />
              </span>
              {/* Text - stays in middle (order-2) */}
              <span className="transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-150 group-hover:text-white order-2 whitespace-nowrap">Explore services</span>
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white p-6 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-700 ease-out border border-gray-200"
              >
                {/* Animated Background Image/Gradient - Hidden by default, shown on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out`}
                  style={{
                    backgroundImage: service.bgImage,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-700"></div>
                  
                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
                  </div>
                </div>
                
                {/* Content with relative positioning */}
                <div className="relative z-10">
                  {/* Icon with color transition */}
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 transition-all duration-700 group-hover:scale-110 border border-gray-200 group-hover:border-white/30">
                    <Icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-700" strokeWidth={1.5} />
                  </div>
                  
                  {/* Title with color transition */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-700">
                    {service.title}
                  </h3>
                  
                  {/* Description with color transition */}
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-700 text-xs">
                    {service.description}
                  </p>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
