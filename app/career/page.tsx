'use client';
import { useEffect } from "react";
import Image from 'next/image';
import Navbar from '../components/Navbar';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import {
  FileText,
  Users,
  ClipboardCheck,
  Fuel,
  BarChart3,
  Laptop,
  PartyPopper,
} from 'lucide-react';

const JOBS = [
  { title: 'Content Creator Intern', details: 'onsite | full-time' },
  { title: 'Sales Development Executive', details: 'onsite | full-time' },
  { title: 'Software Engineer', details: 'onsite | full-time' },
  { title: 'UI/UX Designer', details: 'remote | full-time' },
  { title: 'Project Manager', details: 'onsite | full-time' },
  { title: 'QA Engineer', details: 'onsite | full-time' },
];

const PROCESS_STEPS = [
  {
    icon: FileText,
    title: 'Application',
    description:
      'Submit your online application through our website. Our Talent Acquisition talent will access your skills and experience.',
  },
  {
    icon: Users,
    title: 'Interview',
    description:
      'A face-to-face interview will follow so that we can familiarize you with your expertise and experience in the field.',
  },
  {
    icon: ClipboardCheck,
    title: 'Decision & Offer',
    description:
      'Congratulations! You have been selected. Sign the agreement and begin the on-boarding process with us.',
  },
];


const PERKS = [
  {
    icon: Fuel,
    title: 'Fuel Allowance',
    description:
      'Enjoy seamless commutes with company-covered fuel expenses.',
  },
  {
    icon: BarChart3,
    title: 'Leave Encashment',
    description:
      'Get compensated for your unused leave and maximize your benefits.',
  },
  {
    icon: Laptop,
    title: 'Office Devices',
    description:
      'Work smarter with a high-performance devices, fully covered by us.',
  },
  {
    icon: PartyPopper,
    title: 'Quarterly Dinner',
    description:
      'Unwind, connect, and celebrate team success over a delightful dinner.',
  },
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
];

export default function CareerPage() {

 useEffect(() => {
  const elements = document.querySelectorAll(".career-appear, .career-block");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add class when it enters the screen
          entry.target.classList.add("show");
        } else {
          // Remove class when it leaves the screen
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.2, // Triggers when 20% is visible
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

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
            Grow with global
            <span className="block">top talent.</span>
            <span className="block text-purple-400">Grow with us.</span>
          </h1>
        </div>
      </div>
      </section>

      {/* We're Hiring – white bg, heading, paragraph, job cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            We&apos;re Hiring
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 md:mb-16">
            We prioritize a culture where every individual is empowered to
            innovate, contribute, and make decisions that matter.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {JOBS.map((job, i) => (
              <article
                key={i}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">{job.details}</p>
                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-purple-600 text-purple-600 text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors"
                  >
                    Apply now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience culture – heading, paragraph */}
      <section className="view py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='career-block'><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Experience a culture of empowerment and inclusion.
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10 md:mb-12">
            We prioritize a culture where every individual is empowered to
            innovate, contribute, and make decisions that matter.
          </p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto w-full">

  {PROCESS_STEPS.map((step, i) => (
    <div key={i} className="career-appear">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-purple-300 hover:-translate-y-1 p-8 text-center">

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-purple-100 flex items-center justify-center">
          <step.icon className="w-7 h-7 text-purple-700" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {step.description}
        </p>

      </div>
    </div>
  ))}

</div>
</div>
</section>
<section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Our perks
          </h2>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 md:mb-16">
            Let us help you build your ideal work-life balance with our amazing perks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

            {PERKS.map((perk, i) => (
              <div key={i} className="career-appear">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-purple-300 hover:-translate-y-1 p-6 flex justify-between items-start">

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {perk.description}
                    </p>
                  </div>

                  <perk.icon className="w-6 h-6 text-black" />

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
      Be part of something great.
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12 md:mb-16">
      Join the ranks of visionaries, innovators, and creators, combining talent
      and technology to craft a future that is dynamic, inclusive, and groundbreaking.
    </p>

  </div>

  {/* Slider */}
  <div className="max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
    <div className="flex gap-6 slider-track whitespace-nowrap">

      {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
        <div key={i} className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px]">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-purple-300 hover:-translate-y-1">
            <Image
              src={img}
              alt={`Gallery ${i}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
      {/* CTA + Footer */}
      <div className="relative bg-white">
        <CTA />
        <Footer />
      </div>
    </main>
  );
}