import React, { useRef, useEffect } from 'react';
import { Battery, BatteryCharging, Shield, Zap, Gauge } from 'lucide-react';
import treo from '../Public/battery box/treo_ev.jpg';

const Battery_boxes = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

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
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section with Parallax */}
      <div 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=3272&ixlib=rb-4.0.3')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out show">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="animate-float bg-white/10 backdrop-blur-lg p-6 rounded-3xl inline-block border border-white/20 rotate-6 hover:rotate-0 transition-all duration-500">
              <Battery className="h-20 w-20 text-[#00adef]" />
            </div>
            <div className="animate-float-delayed bg-white/10 backdrop-blur-lg p-6 rounded-3xl inline-block border border-white/20 -rotate-6 hover:rotate-0 transition-all duration-500">
              <BatteryCharging className="h-20 w-20 text-[#00adef]" />
            </div>
          </div>
          
          <h1 className="text-8xl font-bold mb-6 text-white tracking-tight">
            EV Battery <span className="bg-gradient-to-r from-[#00adef] to-blue-600 text-transparent bg-clip-text">Solutions</span>
          </h1>
          
          <p className="text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-light">
            Next-generation battery housing technology for electric vehicles
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800" ref={contentRef}>
        {/* Section 1 - Advanced Battery Housing */}
        <div className="w-full py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(0,173,239,0.25)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50">
              <h2 className="text-5xl font-bold mb-12 relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00adef] to-white">
                  Advanced Battery Housing
                </span>
                <div className="h-1 w-20 bg-[#00adef] mt-4 rounded-full" />
              </h2>
              <div className="space-y-12">
                <p className="text-xl leading-relaxed max-w-4xl text-gray-300">
                  Our state-of-the-art battery housing system is designed to provide maximum protection and optimal performance for electric vehicle batteries. The advanced thermal management system ensures consistent temperature control and enhanced battery life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                  <div className="bg-gray-800/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#00adef]/10 transition-colors duration-300 group border border-gray-700/50">
                    <div className="p-3 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300">
                      <Shield className="h-6 w-6 text-[#00adef]" />
                    </div>
                    <span className="text-lg font-medium text-gray-300 group-hover:text-[#00adef] transition-colors duration-300">
                      IP67 Protection
                    </span>
                  </div>
                  <div className="bg-gray-800/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#00adef]/10 transition-colors duration-300 group border border-gray-700/50">
                    <div className="p-3 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300">
                      <Battery className="h-6 w-6 text-[#00adef]" />
                    </div>
                    <span className="text-lg font-medium text-gray-300 group-hover:text-[#00adef] transition-colors duration-300">
                      Smart BMS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Mahindra Treo EV */}
        <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] transform hover:scale-105 transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,173,239,0.4)] relative group border border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00adef]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={treo} 
                  alt="Mahindra Treo EV"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(0,173,239,0.3)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50">
                <h2 className="text-5xl font-bold mb-8 relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00adef] to-white">
                    Mahindra Treo EV
                  </span>
                  <div className="h-1 w-20 bg-[#00adef] mt-4 rounded-full" />
                </h2>
                <div className="space-y-8">
                  <p className="text-xl leading-relaxed text-gray-300">
                    The Mahindra Treo is an electric three-wheeler auto designed for last-mile connectivity and cargo solutions. It features a powerful lithium-ion battery system that delivers consistent performance and longer range.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#00adef]/10 transition-colors duration-300 group border border-gray-700/50">
                      <div className="p-3 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300">
                        <Zap className="h-6 w-6 text-[#00adef]" />
                      </div>
                      <span className="text-lg font-medium text-gray-300 group-hover:text-[#00adef] transition-colors duration-300">
                        7.37 kWh Battery
                      </span>
                    </div>
                    <div className="bg-gray-800/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#00adef]/10 transition-colors duration-300 group border border-gray-700/50">
                      <div className="p-3 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300">
                        <Gauge className="h-6 w-6 text-[#00adef]" />
                      </div>
                      <span className="text-lg font-medium text-gray-300 group-hover:text-[#00adef] transition-colors duration-300">
                        170 km Range
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battery_boxes;