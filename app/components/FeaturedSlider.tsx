'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const cards = [
  {
    title: 'Carbon Credits on the Blockchain',
    image: '/images/blockchain.jpg',
    time: '5 min',
    tag: 'Blockchain',
  },
  {
    title: 'The Importance of Software Quality Assurance (SQA)',
    image: '/images/sqa.jpg',
    time: '5 min',
    tag: 'Software Quality Assurance',
  },
  {
    title: 'Blockchain and AI: A Revolution',
    image: '/images/blockchain.jpg',
    time: '6 min',
    tag: 'Blockchain',
  },
  {
    title: 'Project Management Approaches: Predictive, Adaptive, and Hybrid',
    image: '/images/project.jpg',
    time: '4 min',
    tag: 'Project Management',
  },
];

const CARD_WIDTH = 320;
const CARD_HEIGHT = 176;
const CARD_GAP = 20;
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP;

export default function FeaturedSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amount = dir === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-20 md:pb-28 bg-white">
      {/* Centered container – title, arrows, and slider wrapped */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading + Arrows */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Insights Unleashed:{' '}
            <span className="text-purple-600">Explore, Learn, Transform</span>
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Slider – smaller rectangular cards, centered */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
        {cards.map((card, i) => (
          <motion.article
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0 cursor-pointer"
            style={{ width: CARD_WIDTH }}
          >
            {/* Image block – smaller rectangular card */}
            <div
              className="relative rounded-xl overflow-hidden group"
              style={{ height: CARD_HEIGHT }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="320px"
              />

              {/* Dark hover overlay */}
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden
              />

              {/* Tag – bottom-left of image */}
              <span
                className="absolute bottom-3 left-3 z-10 bg-black text-white text-[10px] font-medium px-2.5 py-1 rounded-md transition-opacity duration-300 group-hover:opacity-0"
                aria-hidden
              >
                {card.tag}
              </span>

              {/* Hover: center Read button */}
              <div
                className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden
              >
                <span className="inline-flex items-center gap-1.5 bg-white text-black px-4 py-2 rounded-full text-xs font-medium">
                  → Read
                </span>
              </div>

              {/* Hover: bottom-left time (replaces tag visually) */}
              <div
                className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col"
                aria-hidden
              >
                <span className="text-white/90 text-xs">Read</span>
                <span className="text-white font-semibold">{card.time}</span>
              </div>
            </div>

            {/* Title below the card */}
            <h3 className="mt-2 text-gray-700 font-semibold text-xs leading-snug">
              {card.title}
            </h3>
          </motion.article>
        ))}
        </div>
      </div>
    </section>
  );
}
