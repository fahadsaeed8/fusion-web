'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Brijesh Pati',
    rating: 4,
    text: 'One of the best devs I have come across. Ever reliable, great quality of code. Thorough & professional',
  },
  {
    name: 'Milton Loayza',
    company: 'Bridged',
    rating: 5,
    text: 'Good communication. Delivers on time. Assists any critical issue via message live sessions.',
  },
  {
    name: 'Abdul-Majeed Ahmed',
    rating: 5,
    text: 'Great work with the React Native conversions. Cheers!',
  },
  {
    name: 'Bassam El Koussa',
    company: 'CoinLab',
    rating: 5,
    text: 'Great experience with TheHexaTown, high knowledge in React Components, outstanding results!',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], index, isActive: i === 0 });
    }
    return visible;
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our clients keep talking
            </h2>
            <p className="text-xl text-gray-300">
              Listen to what they say about our services
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white/30 bg-gray-800 hover:bg-gray-700 hover:border-white/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white/30 bg-gray-800 hover:bg-gray-700 hover:border-white/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="grid md:grid-cols-3 gap-6"
            >
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.index}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl border transition-all duration-500 ${
                    testimonial.isActive
                      ? 'bg-white border-gray-200 shadow-xl'
                      : 'bg-gray-800 border-gray-700'
                  }`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 fill-yellow-400 text-yellow-400 ${
                          testimonial.isActive ? '' : 'opacity-80'
                        }`}
                      />
                    ))}
                  </div>
                  <p
                    className={`mb-4 leading-relaxed ${
                      testimonial.isActive
                        ? 'text-gray-900'
                        : 'text-gray-300'
                    }`}
                  >
                    {testimonial.text}
                  </p>
                  <div>
                    <p
                      className={`font-semibold ${
                        testimonial.isActive
                          ? 'text-gray-900'
                          : 'text-white'
                      }`}
                    >
                      {testimonial.name}
                    </p>
                    {testimonial.company && (
                      <p
                        className={`text-sm ${
                          testimonial.isActive
                            ? 'text-gray-600'
                            : 'text-gray-400'
                        }`}
                      >
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
