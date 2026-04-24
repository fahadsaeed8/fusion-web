'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      <div className="relative min-h-screen overflow-hidden rounded-bl-[120px] rounded-br-[120px] bg-[#090F1F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121936] via-[#161C3F] to-[#090F1F]" />
        <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(170deg, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0.16) 1px, transparent 1px, transparent 11px)',
            }}
          />
        </div>

        <div
          className="absolute left-1/2 top-[78%] -translate-x-1/2 w-[920px] h-[920px] rounded-full bg-black/55 blur-[120px] pointer-events-none"
          aria-hidden
        />
      <div
        className="absolute left-[12%] top-[56%] w-[420px] h-[420px] rounded-full bg-black/45 blur-[90px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute right-[8%] top-[52%] w-[460px] h-[460px] rounded-full bg-black/45 blur-[100px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -left-20 -bottom-20 w-[360px] h-[360px] rounded-full blur-3xl bg-[#A78BFA]/35 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -right-16 top-8 w-[280px] h-[280px] rounded-full blur-3xl bg-[#60A5FA]/25 pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-extrabold uppercase leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[68px]">
            We are Building Apps
            <span className="block text-purple-400 italic font-extrabold">of Tomorrow</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Delivering custom digital solutions to ensure your business stays
            competitive and future-ready.
          </p>
          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold shadow-xl shadow-purple-500/20 transition duration-300 hover:from-purple-600 hover:to-blue-600"
            >
              <ArrowRight size={16} />
              Get in Touch
            </a>
          </div>
        </motion.div>        </div>      </div>
    </section>
  );
}
