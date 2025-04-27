import React from 'react';
import { MapPin, Factory, Truck } from 'lucide-react';
import nashik1 from '../Public/locations/ambad1.jpg';
import nashik2 from '../Public/locations/ambad2.jpg';
import genext from '../Public/locations/satpur.png';
import pune from '../Public/locations/chakan.jpg';
import haridwar from '../Public/locations/haridwar.png';

const locations = [
  {
    name: 'PRECISION AUTO INDUSTRIES',
    city: 'AMBAD, NASHIK',
    address: 'MIDC Ambad Industrial Area, Nashik, Maharashtra',
    image:nashik1,
    coordinates: { top: '25%', left: '68%' }
  },
  {
    name: 'PRECISION AUTO INDUSTRIES PVT.LTD',
    city: 'AMBAD, NASHIK',
    address: 'MIDC Ambad Industrial Estate, Nashik, Maharashtra',
    image: nashik2,
    coordinates: { top: '28%', left: '70%' }
  },
  {
    name: 'GENEXT PRECISION AUTO TECH PV.LTD',
    city: 'SATPUR, NASHIK',
    address: 'MIDC Satpur Industrial Area, Nashik, Maharashtra',
    image: genext,
    coordinates: { top: '31%', left: '72%' }
  },
  {
    name: 'PRECISION AUTO COMPONENTS PVT.LTD',
    city: 'CHAKAN, PUNE',
    address: 'MIDC Chakan Industrial Area Phase II, Pune, Maharashtra',
    image: pune,
    coordinates: { top: '34%', left: '74%' }
  },
  {
    name: 'HARIDWAR PRECISION AUTO PVT.LTD',
    city: 'HARIDWAR',
    address: 'Industrial Area, SIDCUL, Haridwar, Uttarakhand',
    image: haridwar,
    coordinates: { top: '20%', left: '65%' }
  }
];

const Location = () => {
  const [activeLocation, setActiveLocation] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Our <span className="bg-gradient-to-r from-[#00adef] to-slate-400 text-transparent bg-clip-text">Manufacturing</span> Facilities
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategically located plants across India serving the automotive industry
          </p>

          {/* Precision Auto Start Info */}
          <div className="mt-10 animate-fadeInUp opacity-0 animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 bg-slate-700/40 border border-slate-600 rounded-xl p-6 shadow-lg backdrop-blur-md text-gray-100 max-w-3xl mx-auto">
            <Truck className="w-10 h-10 text-[#00adef] shrink-0" />
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold">PRECISION AUTO</p>
              <p className="text-sm text-gray-300">
                Started journey of component manufacturing in <span className="font-bold text-white">April 1990</span> with <span className="font-bold text-white">Mahindra FJ Truck</span> press parts.
              </p>
            </div>
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(255,255,255,0.15)] transform transition-all duration-500 hover:-translate-y-2 border border-slate-700/50"
              onMouseEnter={() => setActiveLocation(index)}
              onMouseLeave={() => setActiveLocation(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-[#00adef]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold transform transition-transform duration-300 group-hover:scale-110">
                  {location.city}
                </div>
              </div>

              <div className="p-8 relative">
                <div className="flex items-start mb-2">
                  <div className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 border border-slate-700/50">
                    <Factory className="w-6 h-6 text-[#00adef]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors duration-300">
                      {location.name}
                    </h3>
                    <p className="text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                      {location.address}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00adef] to-slate-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
