'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's code the future together!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Your dream project is just a click away.
          </p>
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-6 py-6 rounded-full border border-white bg-white text-blue-600 text-base font-semibold transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gray-100 shadow-lg h-14"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Arrow circle - starts on left (order-1), moves to right on hover (order-3) */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-100 group-hover:bg-black group-hover:text-white order-1 group-hover:order-3 flex-shrink-0">
              <ArrowRight size={16} className="transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-200 group-hover:translate-x-0.5" />
            </span>
            {/* Text - stays in middle (order-2) */}
            <span className="transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-150 order-2 whitespace-nowrap">Get in Touch</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
