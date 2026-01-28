'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Education',
  'Business',
  'Gaming',
  'Agriculture',
] as const;

type Category = (typeof CATEGORIES)[number];

const PROJECTS = [
  {
    id: '1',
    title: 'Hiring Hash',
    description:
      'A next-gen platform for precise, efficient hiring—tailored to meet your unique recruitment needs.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Business' as Category,
    gradient: ['from-emerald-600', 'via-teal-600', 'to-cyan-700'],
  },
  {
    id: '2',
    title: 'Zero Cheating',
    description:
      'The Zero Cheating Assessment Extension is aimed at enhancing the fairness and integrity of online examinations. This extension can help conduct assessments by differentiating the AI and IQ written content.',
    tech: ['JavaScript', 'Chrome Extension', 'MERN Stack', 'Google API'],
    category: 'Education' as Category,
    gradient: ['from-orange-400', 'via-amber-400', 'to-yellow-500'],
  },
  {
    id: '3',
    title: 'Digital Twin App',
    description:
      'By creating a virtual replica of our building, we integrated IoT data in real-time, that allowed us remote-monitoring, precise-controlling, and efficient decision making.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Business' as Category,
    gradient: ['from-indigo-500', 'via-purple-500', 'to-pink-500'],
  },
  {
    id: '4',
    title: 'Smart NFC',
    description:
      "Make complex actions quick, short and secure with NFC's contactless communication.",
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Business' as Category,
    gradient: ['from-violet-600', 'via-purple-600', 'to-fuchsia-600'],
  },
  {
    id: '5',
    title: 'Golfy - VR',
    description:
      'Experience the greens from home—play, practice, and perfect your swing with Virtual Reality Golf.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Gaming' as Category,
    gradient: ['from-rose-500', 'via-pink-500', 'to-purple-500'],
  },
  {
    id: '6',
    title: 'Customer Support App',
    description:
      'This Customer Support App enabled our client to customize their schedule for every day of the week, every hour of the day and even add special days to the calendar.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Business' as Category,
    gradient: ['from-purple-500', 'via-pink-500', 'to-rose-500'],
  },
  {
    id: '7',
    title: 'Agriculture App',
    description:
      'Based on the idea of "Knowing is better than Hoping", the Agriculture App aids in expecting the outcome of their crops. This app employs Artificial Intelligence (AI) for maintenance and surveillance.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Agriculture' as Category,
    gradient: ['from-green-600', 'via-emerald-600', 'to-teal-600'],
  },
];

export default function ServicesPage() {
  const [selected, setSelected] = useState<Category>('All');

  const filteredProjects =
    selected === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selected);

  return (
    <main className="min-h-screen overflow-x-hidden w-full bg-white">
      <Navbar />

      {/* Hero – black bg, Our Featured Work, description, purple decorative arcs */}
      <section className="relative bg-black py-20 md:py-28 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Featured Work
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                Our satisfied clients reflect our portfolio of success and
                excellence in the tech industry. These projects are our trophies
                that showcase our skills and full potential in the development
                industry.
              </p>
            </div>
            <div className="relative hidden lg:flex justify-end items-center h-64">
              {/* Decorative purple arcs – hourglass-like */}
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 border-2 border-purple-500/40 rounded-full scale-150 origin-center" />
                <div className="absolute inset-2 border-2 border-purple-400/50 rounded-full scale-150 origin-center" />
                <div className="absolute inset-4 border-2 border-purple-300/60 rounded-full scale-150 origin-center" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 border-2 border-purple-500/30 rounded-t-full border-b-0" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 border-2 border-purple-500/30 rounded-b-full border-t-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category filters + project cards – white bg */}
      <section id="services" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-0.5 bg-purple-600 transition-opacity duration-200 ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* Card image / gradient header */}
                  <div
                    className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.gradient.join(' ')}`}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg border border-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="group/btn inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 text-gray-600 group-hover/btn:bg-purple-100 group-hover/btn:text-purple-600 transition-colors">
                        <ArrowRight size={14} />
                      </span>
                      View Case Study
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="relative bg-white">
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
