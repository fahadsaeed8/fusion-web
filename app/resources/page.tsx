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

      {/* Hero – modern full-screen dark gradient */}
      <section className="relative w-full bg-white overflow-hidden">
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
          <h1 className="text-white font-extrabold uppercase leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[68px]">
            Blogs
          </h1>
          <p className="mt-5 sm:mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Expert Insights & Industry Trends | Stay Updated with Our Blog – Your Go-To Source for Development, Design, and Innovation. Explore Tips, Strategies, and Success Stories to Elevate Your Brand.
          </p>
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
