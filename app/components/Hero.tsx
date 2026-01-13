'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden w-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We're Building Apps
            <br />
            <span className="text-blue-600">of Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Delivering custom digital solutions to ensure your business stays
            competitive and future-ready.
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-blue-600 bg-blue-600 text-white text-lg font-semibold transition-all duration-500 ease-in-out hover:bg-blue-700 hover:border-blue-700 shadow-lg"
          >
            {/* Arrow circle - starts on left (order-1), moves to right on hover (order-3) */}
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white transition-all duration-500 ease-in-out delay-75 group-hover:bg-black group-hover:text-white order-1 group-hover:order-3">
              <ArrowRight size={18} className="transition-transform duration-500 ease-in-out delay-150 group-hover:translate-x-0.5" />
            </span>
            {/* Text - stays in middle (order-2) */}
            <span className="transition-colors duration-500 ease-in-out delay-100 order-2">Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
