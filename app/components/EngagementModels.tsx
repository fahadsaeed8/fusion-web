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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How can we engage?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adapt to your unique project needs with our tech-specific models,
            designed for smart, tech-savvy solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {model.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {model.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  {model.cta} →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
