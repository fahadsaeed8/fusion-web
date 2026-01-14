'use client';

import { motion } from 'framer-motion';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'AWS',
  'Docker',
  'Kubernetes',
  'MongoDB',
];

export default function Technologies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Web Technologies
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Prominent Technologies we engage in
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We choose technology to suit your product, specific business goals
            and stage innovation.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
