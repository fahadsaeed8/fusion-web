'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const BLOG_CARDS = [
  {
    id: '1',
    title: 'Carbon Credits on the Blockchain',
    image: '/images/blockchain.jpg',
    time: '5 min',
    tag: 'Blockchain',
  },
  {
    id: '2',
    title: 'The Importance of Software Quality Assurance (SQA)',
    image: '/images/sqa.jpg',
    time: '5 min',
    tag: 'Software Quality Assurance',
  },
  {
    id: '3',
    title: 'Blockchain and AI: A Revolution',
    image: '/images/blockchain.jpg',
    time: '6 min',
    tag: 'Blockchain',
  },
  {
    id: '4',
    title: 'Project Management Approaches: Predictive, Adaptive, and Hybrid',
    image: '/images/project.jpg',
    time: '4 min',
    tag: 'Project Management',
  },
];

const CATEGORIES = [
  'All',
  'Blockchain',
  'Project Management',
  'Software Quality Assurance',
] as const;

type Category = (typeof CATEGORIES)[number];

export default function ResourcesPage() {
  const [selected, setSelected] = useState<Category>('All');

  const filteredCards =
    selected === 'All'
      ? BLOG_CARDS
      : BLOG_CARDS.filter((card) => card.tag === selected);

  return (
    <main className="min-h-screen overflow-x-hidden w-full bg-white">
      <Navbar />

      {/* Hero – dark background, Blogs heading + paragraph, smaller text, centered top/bottom */}
      <section className="relative bg-black py-16 md:py-20 overflow-hidden flex items-center min-h-[200px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Blogs
              </h1>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Expert Insights & Industry Trends | Stay Updated with Our Blog –
                Your Go-To Source for Development, Design, and Innovation. Explore
                Tips, Strategies, and Success Stories to Elevate Your Brand.
              </p>
            </div>
            <div className="relative hidden lg:block h-64">
              {/* Decorative purple shapes – stacked, gradient */}
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-purple-600/40 blur-3xl" />
              <div className="absolute bottom-4 right-8 w-36 h-36 rounded-full bg-purple-500/50 blur-2xl" />
              <div className="absolute bottom-12 right-16 w-24 h-24 rounded-full bg-purple-400/60 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Category filters + card grid – light background */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs – centered, purple underline when selected/hover */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 border-b border-gray-200 pb-6 mb-10">
            {CATEGORIES.map((cat) => {
              const isSelected = selected === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className="group relative pb-1 text-sm md:text-base font-medium transition-colors duration-200"
                >
                  <span
                    className={
                      isSelected
                        ? 'text-gray-900'
                        : 'text-gray-500 group-hover:text-gray-700'
                    }
                  >
                    {cat}
                  </span>
                  {/* Purple line – visible when selected or on hover */}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-0.5 bg-purple-600 transition-opacity duration-200 ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Card grid – transitional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCards.map((card, i) => (
                <motion.article
                  key={card.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-3 left-3 z-10 bg-black text-white text-xs font-medium px-2.5 py-1 rounded-md">
                      {card.tag}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 bg-white text-black px-4 py-2 rounded-full text-xs font-medium">
                        → Read
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                      <span className="text-white/90 text-[10px]">Read</span>
                      <span className="text-white font-semibold text-xs">{card.time}</span>
                    </div>
                  </div>
                  <h3 className="p-4 text-gray-800 font-semibold text-sm leading-snug">
                    {card.title}
                  </h3>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA above footer – same as home */}
      <div className="relative bg-white">
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
