import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedClients from './components/TrustedClients';
import Services from './components/Services';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import EngagementModels from './components/EngagementModels';
import Testimonials from './components/Testimonials';
import FeaturedSlider from './components/FeaturedSlider';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <TrustedClients />
      <Services />
      <Industries />
      <Portfolio />
      <Technologies />
      <EngagementModels />
      <Testimonials />
      {/* Slider + CTA + Footer: white and footer bg meet behind CTA, no separating line */}
      <div className="relative bg-white">
        <FeaturedSlider />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
