'use client';

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative z-10 -mt-10 -mb-14 md:-mt-12 md:-mb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-xl"
          style={{
            boxShadow: '0 -12px 40px -4px rgba(0,0,0,0.28), 0 20px 50px -12px rgba(0,0,0,0.1), 0 8px 25px -8px rgba(139, 92, 246, 0.1)',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left: text */}
            <div>
              <p className="text-gray-500 text-sm sm:text-base mb-1">
                Your dream project is just a click away.
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Let&apos;s code the future together!
              </h2>
            </div>

            {/* Right: Get in Touch button – same UI as Explore services */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-purple-600 hover:border-purple-600 hover:text-white shrink-0 w-fit"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-700 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-100 group-hover:bg-white/20 group-hover:text-white order-1 group-hover:order-3 flex-shrink-0">
                <ArrowRight size={12} className="transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-200 group-hover:translate-x-0.5" />
              </span>
              <span className="transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-150 group-hover:text-white order-2 whitespace-nowrap">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
