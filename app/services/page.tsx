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
            Our Featured
            <span className="block">Work</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our satisfied clients reflect our portfolio of success and excellence in the tech industry. These projects are our trophies that showcase our skills and full potential in the development industry.
          </p>
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
