import React, { useRef, useEffect } from 'react';
import { Cog, Wrench, Box } from 'lucide-react';
import sheet1 from '../Public/sheets/sheet1.png';
import sheet2 from '../Public/sheets/sheet2.png';
import sheet3 from '../Public/sheets/sheet3.png';
import sheet4 from '../Public/sheets/sheet4.png';
import sheet5 from '../Public/sheets/sheet5.png';
import sheet6 from '../Public/sheets/sheet6.png';
import sheet7 from '../Public/sheets/sheet7.png';
import sheet8 from '../Public/sheets/sheet8.png';
import sheet9 from '../Public/sheets/sheet9.png';

const metalPartsData = [
  {
    title: "Side Steps / Foot Boards / Rock Sliders",
    image: sheet1,
    description: "Precision-engineered distribution solutions",
    category: "Distribution"
  },
  {
    title: "Side Steps / Foot Boards / Rock Sliders",
    image: sheet2,
    description: "Heavy-duty industrial grade footsteps",
    category: "Footsteps"
  },
  {
    title: "Mini Steps and Guard Plate",
    image: sheet3,
    description: "Custom tubular parts manufacturing",
    category: "Tubular"
  },
  {
    title: "Pipes with Mounting Tabs",
    image: sheet4,
    description: "High-precision sheet metal components",
    category: "Precision"
  },
  {
    title: "Sheet Metal Brackets and Covers",
    image: sheet5,
    description: "Vehicle-specific mounting solutions",
    category: "Automotive"
  },
  {
    title: "Custom Enclosures",
    image: sheet6,
    description: "Tailored enclosure manufacturing",
    category: "Enclosures"
  },
  {
    title: "Mounting Panels",
    image: sheet7,
    description: "Reliable mounting bases for control systems",
    category: "Panels"
  },
  {
    title: "Pipes with Mounting Tabs",
    image: sheet8,
    description: "Pipes with Mounting Tabs",
    category: "Covers"
  },
  {
    title: "Ventilation Ducts",
    image: sheet9,
    description: "Optimized airflow components for industry",
    category: "Ventilation"
  }
];

const Sheet_metal_parts = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <div 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/490855086/photo/welder-working-in-workshop.jpg?s=612x612&w=0&k=20&c=dMr3SutOP_e70it5Yml4fmkgRQQAGdqEu1rh5K-3xlQ=')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out show">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="animate-float bg-white/10 backdrop-blur-lg p-6 rounded-3xl inline-block border border-white/20 rotate-6 hover:rotate-0 transition-all duration-500">
              <Cog className="h-20 w-20 text-[#00adef]" />
            </div>
            <div className="animate-float-delayed bg-white/10 backdrop-blur-lg p-6 rounded-3xl inline-block border border-white/20 -rotate-6 hover:rotate-0 transition-all duration-500">
              <Wrench className="h-20 w-20 text-[#00adef]" />
            </div>
          </div>
          
          <h1 className="text-8xl font-bold mb-6 text-white tracking-tight">
            Sheet Metal <span className="bg-gradient-to-r from-[#00adef] to-slate-400 text-transparent bg-clip-text">Solutions</span>
          </h1>
          
          <p className="text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-light">
            Precision engineering meets industrial excellence in every component
          </p>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metalPartsData.map((item, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="group relative bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(255,255,255,0.15)] transform transition-all duration-500 hover:-translate-y-2 border border-slate-700/50">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
                  <div className="relative">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-slate-900/80 text-slate-200 text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm border border-slate-700/50">
                        {item.category}
                      </span>
                    </div>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-sm font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-end">
                      <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-600/50 transition-colors duration-300 border border-slate-600/50">
                        <Box className="h-5 w-5 text-slate-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheet_metal_parts;
