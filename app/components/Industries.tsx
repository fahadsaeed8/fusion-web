'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    name: 'Healthcare',
    features: ['Telehealth', 'eRx', 'EMR', 'Remote Monitoring', 'Patient Portal'],
  },
  {
    name: 'Education',
    features: ['Class Management', 'Student Learning', 'Progress Tracking'],
  },
  {
    name: 'Retail & eCommerce',
    features: ['Product Catalog', 'CX', 'Order Processing', 'Inventory'],
  },
  {
    name: 'HR & Business',
    features: ['Team Building', 'HR Technology', 'Leadership'],
  },
  {
    name: 'Gaming',
    features: ['AR/VR', 'UX/UI', 'Multiplayer', 'Game Mechanics'],
  },
  {
    name: 'Energy',
    features: ['Sustainable Power', 'Sustainability', 'Eco-Friendly Solutions'],
  },
];

export default function Industries() {
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
            Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sector-Specific solutions to promise dynamic growth and assure
            quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {industries.map((industry, index) => {
            const gradients = [
              'from-blue-500/10 via-purple-500/5 to-pink-500/10',
              'from-green-500/10 via-emerald-500/5 to-teal-500/10',
              'from-orange-500/10 via-red-500/5 to-pink-500/10',
              'from-indigo-500/10 via-blue-500/5 to-cyan-500/10',
              'from-yellow-500/10 via-orange-500/5 to-red-500/10',
              'from-teal-500/10 via-cyan-500/5 to-blue-500/10',
            ];
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-gradient-to-br ${gradients[index % gradients.length]} p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 ${
                  isLarge ? 'md:col-span-1 lg:row-span-1' : ''
                }`}
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-0 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Icon placeholder */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {industry.name.charAt(0)}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-5 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  
                  <ul className="space-y-3">
                    {industry.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                        className="text-gray-700 flex items-center gap-3 group-hover:text-gray-900 transition-colors"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
