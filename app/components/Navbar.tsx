'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const servicesMenu = {
  'Software Development': [
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'App Deployment & Support',
    'UI/UX Design',
  ],
  'Emerging Technologies': [
    'AR/VR and MR',
    'Artificial Intelligence',
    'Blockchain Technology',
    'Internet of Things (IoT)',
  ],
  'Cloud Infrastructure': [
    'Cloud Implementation',
    'Cloud Migration',
    'DevOps',
    'AWS, Azure, GCP',
    'Cloud Security',
  ],
  'QA and Support': [
    'Automated and Manual Testing',
    'User Acceptance Testing (UAT)',
    'L1 L2 L3 Support',
    '24/7 On Demand Support',
  ],
};

const technologies = [
  'Android', 'Firebase', 'AWS', 'Azure', 'Docker', 'Figma', 'Flutter',
  'Java', 'Meta', 'JavaScript', 'Prisma', 'Svelte', 'Swift', 'Tailwind CSS',
  'TypeScript', 'Vue.js', 'WordPress',
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Resources', href: '#resources' },
    { name: 'Career', href: '#career' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Fusion<span className="text-purple-600">Web</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <a
                href="#services"
                className={`font-medium transition-colors duration-300 ${
                  isServicesHovered
                    ? 'text-purple-600'
                    : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
                }`}
              >
                Services
              </a>

              {/* Services Dropdown Menu */}
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[95vw] max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Service Categories */}
                      {Object.entries(servicesMenu).map(([category, items], idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-purple-600 font-semibold text-lg mb-3">
                            {category}
                          </h4>
                          <ul className="space-y-2">
                            {items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a
                                  href="#services"
                                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-sm"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Section */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h4 className="text-purple-600 font-semibold text-lg mb-4">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-400'
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Get in Touch Button */}
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-white text-gray-900 hover:bg-purple-600 hover:text-white'
                  : 'bg-white text-gray-900 hover:bg-purple-600 hover:text-white'
              }`}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <div
              className="space-y-2"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <a
                href="#services"
                className={`block font-medium transition-colors ${
                  isServicesHovered ? 'text-purple-600' : 'text-gray-700'
                }`}
              >
                Services
              </a>
              {isServicesHovered && (
                <div className="pl-4 space-y-2">
                  {Object.entries(servicesMenu).map(([category, items], idx) => (
                    <div key={idx}>
                      <h5 className="text-purple-600 font-semibold text-sm mb-1">
                        {category}
                      </h5>
                      <ul className="pl-4 space-y-1">
                        {items.slice(0, 3).map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <a
                              href="#services"
                              className="text-gray-600 text-sm"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-colors font-medium text-center"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
