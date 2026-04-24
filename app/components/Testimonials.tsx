'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Brijesh Pati',
    userId: '@brijesh_pati',
    date: 'March 2024',
    rating: 4,
    comment: 'One of the best devs I have come across. Ever reliable, great quality of code. Thorough & professional',
    videoThumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Brijesh',
  },
  {
    id: 2,
    name: 'Milton Loayza',
    userId: '@milton_loayza',
    date: 'February 2024',
    rating: 5,
    comment: 'Good communication. Delivers on time. Assists any critical issue via message live sessions.',
    videoThumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Milton',
  },
  {
    id: 3,
    name: 'Abdul-Majeed Ahmed',
    userId: '@abdul_ahmed',
    date: 'January 2024',
    rating: 5,
    comment: 'Great work with the React Native conversions. Cheers!',
    videoThumbnail: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abdul',
  },
  {
    id: 4,
    name: 'Bassam El Koussa',
    userId: '@bassam_koussa',
    date: 'December 2023',
    rating: 5,
    comment: 'Great experience with our team, high knowledge in React Components, outstanding results!',
    videoThumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bassam',
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
      visible.push({ ...testimonials[index], isActive: i === 0 });
    }
    return visible;
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#050608] overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/3 w-[300px] h-[300px] rounded-full blur-3xl bg-purple-500/20" />
        <div className="absolute -right-20 bottom-1/4 w-[350px] h-[350px] rounded-full blur-3xl bg-blue-500/15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-white mb-4 leading-tight">
              Our clients keep talking
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Listen to what they say about our services
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 ml-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/10 hover:bg-white/20 hover:border-purple-400/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/10 hover:bg-white/20 hover:border-purple-400/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                    testimonial.isActive
                      ? 'bg-gradient-to-br from-white/15 to-white/5 border-purple-400/40 shadow-2xl shadow-purple-500/20'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Video Thumbnail Section */}
                  <div className="relative overflow-hidden bg-black/40 h-48 md:h-56">
                    <div
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-cover bg-center"
                      style={{ backgroundImage: `url('${testimonial.videoThumbnail}')` }}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    {/* Comment Text */}
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>

                    {/* Star Rating */}
                    <div className="flex gap-1.5 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-white/20"
                        />
                      ))}
                    </div>

                    {/* User Profile Section */}
                    <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                      <div
                        className="w-12 h-12 rounded-full border-2 border-purple-400/50 object-cover flex-shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${testimonial.profilePic}')` }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white text-sm truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-400 truncate">
                          {testimonial.userId}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'bg-purple-500 w-8 h-2'
                  : 'bg-white/20 w-2 h-2 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
