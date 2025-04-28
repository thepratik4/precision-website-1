import React from 'react';
import { Factory, PenTool as Tool, Wrench, Notebook as Robot } from 'lucide-react';
import img1 from '../Public/fuel tank/fuelassembly.png'
import img2 from '../Public/history/pressshot2024.jpg'
import img3 from '../Public/history/hydraulic_press.png'
const capabilities = [
  {
    title: 'Fuel Tank Assembly',
    icon: <Factory className="w-8 h-8 text-[#00adef]" />,
    image: img1,
    description: 'State-of-the-art manufacturing facility for fuel tank assemblies'
  },
  {
    title: 'Press Shop Operations',
    icon: <Tool className="w-8 h-8 text-[#00adef]" />,
    image: img2,
    description: 'Advanced press shop with high-precision equipment'
  },
  {
    title: 'Hydraulic Press',
    icon: <Wrench className="w-8 h-8 text-[#00adef]" />,
    image: img3,
    description: 'Specialized hydraulic press operations for complex components'
  },
  {
    title: 'Robotic Welding',
    icon: <Robot className="w-8 h-8 text-[#00adef]" />,
    image: 'https://media.istockphoto.com/id/174273685/photo/high-tech-industrial-robotic-welding-machines.webp?a=1&b=1&s=612x612&w=0&k=20&c=RBkFR521DtMEXxcKwqcnL5IX8gcj5OBv4VPLfZFK9OM=',
    description: 'Automated robotic welding systems for precise assembly'
  }
];

const Capabilities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Our <span className="bg-gradient-to-r from-[#00adef] to-slate-400 text-transparent bg-clip-text">Capabilities</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Manufacture & Supply of Fuel Tank Assy, Foot steps, Tubular components, Welded assemblies
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(255,255,255,0.15)] transform transition-all duration-500 hover:-translate-y-2 border border-slate-700/50"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm p-3 rounded-xl border border-slate-700/50 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {capability.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-white transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {capability.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00adef] to-slate-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;