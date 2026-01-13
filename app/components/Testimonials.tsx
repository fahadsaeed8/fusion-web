'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Brijesh Pati',
    rating: 5,
    text: 'One of the best devs I have come across. Ever reliable, great quality of code. Thorough & professional',
  },
  {
    name: 'Milton Loayza',
    company: 'Bridged',
    rating: 5,
    text: 'Good communication. Delivers on time. Assists any critical issue via message live sessions.',
  },
  {
    name: 'Abdul-Majeed Ahmed',
    rating: 5,
    text: 'Great work with the React Native conversions. Cheers!',
  },
  {
    name: 'Bassam El Koussa',
    company: 'CoinLab',
    rating: 5,
    text: 'Great experience with TheHexaTown, high knowledge in React Components, outstanding results!',
  },
];

export default function Testimonials() {
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
            Our clients keep talking
          </h2>
          <p className="text-xl text-gray-600">
            Listen to what they say about our services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                {testimonial.company && (
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
