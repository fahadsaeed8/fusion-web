'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ChevronUp } from 'lucide-react';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative pt-24 md:pt-28 pb-16 -mt-14 md:-mt-16 text-gray-300"
      style={{
        background: [
          'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(49, 46, 129, 0.85) 0%, rgba(30, 27, 75, 0.4) 35%, transparent 65%)',
          '#0f0f0f',
        ].join(', '),
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold text-white mb-4">
              Fusion<span className="text-purple-600">Web</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Delivering custom digital solutions to ensure your business stays
              competitive and future-ready.
            </p>
            <h4 className="text-white font-semibold mb-2">Subscribe to our newsletter</h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
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
            <h4 className="text-white font-semibold mb-4">Locations</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-white font-semibold mb-2">USA</h5>
                <p className="text-gray-400 text-sm">
                  DE, USA,<br />
                  8 The Green, STE R<br />
                  Dover, DE 19901
                </p>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">PAK</h5>
                <p className="text-gray-400 text-sm">
                  7/B-3 Aziz Avenue, Canal Rd,<br />
                  Gulberg-V Lahore, 54000
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm mb-1">USA</p>
                <a href="tel:+13027869990" className="text-white hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  +1 (302) 786-9990
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">PAK</p>
                <a href="tel:+923164067232" className="text-white hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  +92 (316) 4067232
                </a>
              </div>
              <div>
                <a href="mailto:contact@fusionweb.com" className="text-white hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  contact@fusionweb.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex gap-3 order-2 md:order-1 shrink-0">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 order-1 md:order-2 text-sm text-gray-400 md:flex-1 md:justify-center">
            <p>© 2024 FusionWeb. All rights reserved</p>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white border-2 border-purple-800 text-black flex items-center justify-center hover:bg-gray-50 transition-colors order-3 shrink-0"
            aria-label="Go to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
