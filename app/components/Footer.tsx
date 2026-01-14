'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold text-white mb-4">
              Fusion<span className="text-blue-400">Web</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Delivering custom digital solutions to ensure your business stays
              competitive and future-ready.
            </p>
          </div>

          <div className="min-w-0">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Emerging Technologies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  QA and Support
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@fusionweb.com</span>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="text-white font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 – Copyright. All rights reserved
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
