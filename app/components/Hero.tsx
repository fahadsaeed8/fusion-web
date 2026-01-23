'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black w-full">
      {/* Dark Background with Bokeh Lights */}
      <div className="absolute inset-0 overflow-hidden w-full">
        {/* Blurred background overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        
        {/* Bokeh light effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            We're Building Apps
            <br />
            <span className="text-purple-400 italic">of Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Delivering custom digital solutions to ensure your business stays
            competitive and future-ready.
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-900 text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-purple-600 hover:border-purple-600 hover:text-white shadow-lg"
          >
            {/* Arrow circle - starts on left (order-1), moves to right on hover (order-3) */}
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-700 group-hover:bg-white/20 group-hover:text-white transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-100 order-1 group-hover:order-3 flex-shrink-0">
              <ArrowRight size={12} className="transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-200 group-hover:translate-x-0.5" />
            </span>
            {/* Text - stays in middle (order-2) */}
            <span className="transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-150 group-hover:text-white order-2 whitespace-nowrap">Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
