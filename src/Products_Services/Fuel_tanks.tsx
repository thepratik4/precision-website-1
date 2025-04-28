import React, { useEffect, useRef } from 'react';
import { Fuel, GaugeCircle, Weight } from 'lucide-react';
import img1 from '../Public/fuel tank/bolero_pick_up.png';
import img2 from '../Public/fuel tank/Mahindra_thar.png';
import img3 from '../Public/fuel tank/scorpio_signle_cab.png';
import img4 from '../Public/fuel tank/Maxximo.png';
import img5 from '../Public/fuel tank/bolero.png';
import img6 from '../Public/fuel tank/force_gurkha.png';
import img7 from '../Public/fuel tank/bolero_camper.png';
import img8 from '../Public/fuel tank/tractor.png';
import img9 from '../Public/fuel tank//Mahindra_truck.png';

const fuelTankData = [
  {
    title: "Bolero Pick-up Fuel Tank",
    image: img1,
    description: "60L capacity fuel tank with corrosion-resistant coating, perfect for commercial use with extended range capability",
    specs: { capacity: "60 Liters", material: "High-Grade Steel" }
  },
  {
    title: "Mahindra Thar 3 Door Fuel Tank",
    image: img2,
    description: "Specially designed 57L tank with off-road protection shield and multi-layer rust prevention",
    specs: { capacity: "57 Liters", material: "Reinforced Steel" }
  },
  {
    title: "Scorpio Single Cab Fuel Tank",
    image: img3,
    description: "65L capacity with advanced baffle system for improved fuel stability during rough terrain operation",
    specs: { capacity: "65 Liters", material: "Anti-Rust Steel" }
  },
  {
    title: "Maxximo Fuel Tank",
    image: img4,
    description: "Compact 45L design optimized for urban delivery vehicles with quick-fill neck design",
    specs: { capacity: "45 Liters", material: "Galvanized Steel" }
  },
  {
    title: "Bolero Fuel Tank",
    image: img5,
    description: "55L capacity with enhanced durability and specialized coating for extreme weather conditions",
    specs: { capacity: "55 Liters", material: "Premium Steel" }
  },
  {
    title: "Force Gurkha Fuel Tank",
    image: img6,
    description: "63L heavy-duty tank with reinforced mounting points and protective shields for extreme off-road use",
    specs: { capacity: "63 Liters", material: "Heavy-Duty Steel" }
  },
  {
    title: "Bolero Camper Fuel Tank",
    image: img7,
    description: "72L large capacity tank with special baffling for improved stability during long-distance travel",
    specs: { capacity: "72 Liters", material: "Enhanced Steel" }
  },
  {
    title: "Balwan Tractor Fuel Tank",
    image: img8,
    description: "85L high-capacity agricultural tank with specialized filtering system for farm use",
    specs: { capacity: "85 Liters", material: "Industrial Steel" }
  },
  {
    title: "Mahindra Truck Fuel Tank",
    image: img9,
    description: "200L extra-large capacity with advanced fuel monitoring system for long-haul transportation",
    specs: { capacity: "200 Liters", material: "Commercial Grade Steel" }
  }
];

const FuelTanks = () => {
  const cardsRef = useRef([]);
  const heroRef = useRef(null);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1136053255/photo/hand-refilling-the-car-with-fuel-at-the-refuel-station.jpg?s=612x612&w=0&k=20&c=lr7kl5_juwWGAnhMJ3x9WgDe6gK-d68r8aqQ9NKsiXY=')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out show">
          <div className="animate-float mb-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl inline-block border border-white/20">
              <Fuel className="h-20 w-20 text-[#00adef]" />
            </div>
          </div>
          <h1 className="text-8xl font-bold mb-6 text-white tracking-tight">
            Fuel  <span className="bg-gradient-to-r from-[#00adef] to-blue-600 text-transparent bg-clip-text">Tank</span>
          </h1>
          <p className="text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-light">
            Premium fuel tank assemblies engineered for performance and durability
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fuelTankData.map((item, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_90px_rgba(0,173,239,0.25)] transform transition-all duration-500 hover:-translate-y-3 border border-gray-700/50">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00adef]/0 to-[#00adef]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00adef] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mb-5 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3 group/spec">
                          <div className="p-2 rounded-xl bg-gray-800/50 border border-gray-700/50 group-hover/spec:bg-[#00adef]/10 group-hover/spec:border-[#00adef]/20 transition-all duration-300">
                            <GaugeCircle className="h-4 w-4 text-[#00adef]" />
                          </div>
                          <span className="text-gray-400 group-hover/spec:text-[#00adef] transition-colors duration-300">
                            {item.specs.capacity}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 group/spec">
                          <div className="p-2 rounded-xl bg-gray-800/50 border border-gray-700/50 group-hover/spec:bg-[#00adef]/10 group-hover/spec:border-[#00adef]/20 transition-all duration-300">
                            <Weight className="h-4 w-4 text-[#00adef]" />
                          </div>
                          <span className="text-gray-400 group-hover/spec:text-[#00adef] transition-colors duration-300">
                            {item.specs.material}
                          </span>
                        </div>
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

export default FuelTanks;
