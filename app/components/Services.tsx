'use client';

import { motion } from 'framer-motion';
import { Code, Sparkles, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description:
      'Transform your ideas into reality with our cutting-edge software development services.',
  },
  {
    icon: Sparkles,
    title: 'Emerging Technologies',
    description:
      'Stay ahead of the curve with our expertise in emerging technologies.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Unlock the full potential of the cloud with our comprehensive cloud infrastructure services.',
  },
  {
    icon: Shield,
    title: 'QA and Support',
    description:
      'Ensure quality and reliability with our QA and support services. Like none other but us.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Silicon level delivery from ideation to digital solutions that solve
            your business problems in a secure and scalable manner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            Explore services
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
