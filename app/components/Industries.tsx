'use client';

import { motion } from 'framer-motion';

// All industries with their data
const industries = [
  {
    name: 'Healthcare',
    features: ['Telehealth', 'eRx', 'EMR', 'Remote Monitoring', 'Patient Portal'],
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80")',
    row: 'top',
    position: 'left',
  },
  {
    name: 'Education',
    features: ['Class Management', 'Student Learning', 'Progress Tracking'],
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80")',
    row: 'top',
    position: 'right',
  },
  {
    name: 'Retail & eCommerce',
    features: ['Product Catalog', 'CX', 'Order Processing', 'Inventory'],
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80")',
    row: 'top',
    position: 'right',
  },
  {
    name: 'HR & Business',
    features: ['Team Building', 'HR Technology', 'Leadership'],
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80")',
    row: 'bottom',
    position: 'left',
    colSpan: 1,
  },
  {
    name: 'Gaming',
    features: ['AR/VR', 'UX/UI', 'Multiplayer', 'Game Mechanics'],
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url("https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80")',
    row: 'bottom',
    position: 'middle',
    colSpan: 2,
  },
  {
    name: 'Energy',
    features: ['Sustainable Power', 'Sustainability', 'Eco-Friendly Solutions'],
    bgImage: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80")',
    row: 'bottom',
    position: 'right',
    colSpan: 1,
  },
];

export default function Industries() {
  const topRowIndustries = industries.filter(i => i.row === 'top');
  const bottomRowIndustries = industries.filter(i => i.row === 'bottom').sort((a, b) => {
    const order = { left: 0, middle: 1, right: 2 };
    return (order[a.position as keyof typeof order] || 0) - (order[b.position as keyof typeof order] || 0);
  });

  return (
    <section className="w-full bg-black py-6 md:py-[102px] lg:py-[66px] xl:py-[88px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-[18px] lg:gap-[30px] xl:gap-10">
          {/* First Row: Title/Description + 3 Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-[18px] lg:gap-[30px] xl:gap-10">
            {/* Left Side - Title and Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col items-start gap-[11px] lg:gap-[18px] xl:gap-6"
            >
              <h2 className="text-white text-[28px] lg:text-4xl xl:text-5xl font-semibold leading-[19px] md:leading-[15px] lg:leading-6 xl:leading-[33px]">
                Industries
              </h2>
              <p className="text-white text-sm md:text-lg lg:text-[21px] xl:text-[28px] font-medium leading-normal">
                Sector-Specific solutions to promise dynamic growth and assure quality.
              </p>
            </motion.div>

            {/* Right Side - Top Row Cards (Healthcare, Education, Retail) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-[18px] lg:gap-[30px] xl:gap-10">
              {topRowIndustries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group transition-all ease-in-out duration-400 relative w-full h-[138px] md:h-[158px] lg:h-[199px] xl:h-[265px] rounded-2xl md:rounded-[13px] lg:rounded-[23px] xl:rounded-[30px] overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all ease-in-out duration-400 opacity-40 group-hover:scale-110 group-hover:opacity-80"
                    style={{ backgroundImage: industry.bgImage }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between items-start pl-[15px] py-[15px] lg:pl-[21px] xl:pl-[30px] lg:py-[21px] xl:py-[30px] lg:gap-2 xl:gap-4">
                    <h3 className="text-white text-[20px] md:text-lg lg:text-[30px] xl:text-[40px] font-semibold leading-normal text-start">
                      {industry.name}
                    </h3>
                    
                    {/* Features - appear on hover */}
                    <div className="gap-x-1 lg:w-[70%] gap-y-2 group transition-all ease-in-out duration-400 flex flex-wrap opacity-0 group-hover:opacity-100">
                      {industry.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="w-fit py-[7px] px-[12px] lg:px-[18px] lg:py-[10px] text-black text-[10px] lg:text-xs xl:text-lg leading-normal font-semibold border border-black bg-white rounded-3xl"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second Row: 4-column grid (HR & Business: 1, Gaming: 2, Energy: 1) */}
          <div className="col-span-2 grid gap-6 md:grid-cols-4 md:gap-[18px] lg:gap-[30px] xl:gap-10">
            {bottomRowIndustries.map((industry, index) => {
              const colSpanClass = industry.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1';
              return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className={colSpanClass}
              >
                <div className="group transition-all ease-in-out duration-400 relative w-full h-[138px] md:h-[158px] lg:h-[199px] xl:h-[265px] rounded-2xl md:rounded-[13px] lg:rounded-[23px] xl:rounded-[30px] overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all ease-in-out duration-400 opacity-40 group-hover:scale-110 group-hover:opacity-80"
                    style={{ backgroundImage: industry.bgImage }}
                  />
                  
                  {/* Content */}
                  <div className={`relative z-10 h-full flex flex-col justify-between items-start pl-[15px] py-[15px] lg:pl-[21px] xl:pl-[30px] lg:py-[21px] xl:py-[30px] lg:gap-2 xl:gap-4 ${industry.name === 'Energy' ? 'w-full' : ''}`}>
                    <h3 className="text-white text-[20px] md:text-lg lg:text-[30px] xl:text-[40px] font-semibold leading-normal text-start">
                      {industry.name}
                    </h3>
                    
                    {/* Features - appear on hover */}
                    <div className={`gap-x-1 ${industry.name === 'Energy' ? 'w-full' : 'lg:w-[70%]'} gap-y-2 group transition-all ease-in-out duration-400 flex flex-wrap opacity-0 group-hover:opacity-100`}>
                      {industry.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="w-fit py-[7px] px-[12px] lg:px-[18px] lg:py-[10px] text-black text-[10px] lg:text-xs xl:text-lg leading-normal font-semibold border border-black bg-white rounded-3xl"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
