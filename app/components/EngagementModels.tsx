'use client';

import { motion } from 'framer-motion';
import { Users, DollarSign, Target } from 'lucide-react';

const models = [
  {
    icon: Users,
    title: 'Staff Augmentation',
    description:
      'Our staff augmentation model is specifically designed to match your ongoing projects\' specific needs.',
    cta: 'Partner with Specialists',
  },
  {
    icon: DollarSign,
    title: 'Fixed Price Model',
    description:
      'Lock in your costs upfront to ensure budget certainty and let\'s focus on achieving your project goals.',
    cta: 'Get a fixed Price Estimate',
  },
  {
    icon: Target,
    title: 'Dedicated Teams',
    description:
      'A flexible payment structure where costs are directly tied to your usage and project requirements.',
    cta: 'Engage our Expert Team',
  },
];

export default function EngagementModels() {
  return (
    <section className="relative overflow-hidden bg-[#050608] py-4 md:py-6">
      <div className="absolute inset-x-0 -bottom-12 h-10 bg-gradient-to-t from-[#0b1020] via-[#0b1020] to-transparent opacity-90" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050608] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight tracking-[-0.03em] mb-4">
            How can we engage?
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Adapt to your unique project needs with our tech-specific models,
            designed for smart, tech-savvy solutions.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
                className="group relative mx-auto overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-6 py-5 text-left shadow-[0_20px_80px_-40px_rgba(15,23,42,0.8)] transition duration-300 hover:border-purple-400/30 hover:bg-white/10 min-h-[18rem] md:max-w-[30rem]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
                  <div className="absolute -left-10 -bottom-8 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-purple-300 shadow-inner shadow-white/5">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2.5">
                    {model.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 leading-7 mb-5">
                    {model.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/15"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-purple-200">
                      →
                    </span>
                    {model.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
