'use client';

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
  return (
    <main className="min-h-screen overflow-x-hidden w-full bg-white">
      <Navbar />

      {/* Hero – purple gradient, faded "Careers", main heading */}
      <section className="relative bg-gradient-to-b from-purple-900/90 via-purple-800/80 to-purple-700/70 py-24 md:py-32 overflow-hidden flex items-center min-h-[280px]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-[clamp(4rem,15vw,10rem)] font-bold text-purple-500/20 select-none"
            aria-hidden
          >
            Careers
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Grow with global top talent.{' '}
            <span className="text-purple-400">Grow with us.</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/20" />
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

      {/* Experience culture – heading, paragraph, large image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Experience a culture of empowerment and inclusion.
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 md:mb-16">
            We prioritize a culture where every individual is empowered to
            innovate, contribute, and make decisions that matter.
          </p>
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] max-h-[420px] bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop"
              alt="Team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-purple-400/20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* Be part of something great – process intro + 3 cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-4">
            Be part of something great.
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-14 md:mb-20">
            FusionWeb makes hiring easier by breaking down the steps to working
            with us below. Our process evaluates candidates for technical
            knowledge, IQ, communications skills, and ability to work in a team
            environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {PROCESS_STEPS.map((step, i) => (
              <article
                key={i}
                className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our perks – heading, subtitle, 2x2 cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Our perks
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 md:mb-16">
            Let us help you build your ideal work-life balance with our amazing
            perks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {PERKS.map((perk, i) => (
              <article
                key={i}
                className="rounded-2xl bg-white border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {perk.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  <perk.icon className="w-6 h-6 text-gray-800" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join the ranks – black heading, paragraph, image gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Be part of something great.
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 md:mb-16">
            Join the ranks of visionaries, innovators, and creators, combining
            talent and technology to craft a future that is dynamic, inclusive,
            and groundbreaking.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((src, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100"
              >
                <Image
                  src={src}
                  alt={`Team and culture ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
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
