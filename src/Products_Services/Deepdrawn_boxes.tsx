import React, { useRef, useEffect } from 'react';
import { Shield, PenTool as Tool, Bolt, Zap, HardHat, Skull } from 'lucide-react';
import deepdrawn from '../Public/deepdrawn box/deepdrawn_box.png';

const Deepdrawn_boxes = () => {
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
          backgroundImage: "url('https://media.istockphoto.com/id/1162866631/photo/power-lines.jpg?s=612x612&w=0&k=20&c=3YftLWt6hi5eFrpEoUZfF0gTMUnX869mwzTAIl39Mrk=')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out show">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="animate-float bg-white/10 backdrop-blur-lg p-6 rounded-3xl inline-block border border-white/20 rotate-6 hover:rotate-0 transition-all duration-500">
              <Shield className="h-20 w-20 text-[#00adef]" />
            </div>
            <div className="animate-float-delayed bg-white/10 backdrop-blur-lg p-6 rounded-3xl inline-block border border-white/20 -rotate-6 hover:rotate-0 transition-all duration-500">
              <Bolt className="h-20 w-20 text-[#00adef]" />
            </div>
          </div>
          
          
          
          <h1 className="text-8xl font-bold mb-6 text-white tracking-tight">
            Deepdrawn <span className="bg-gradient-to-r from-[#00adef] to-blue-600 text-transparent bg-clip-text">Boxes</span>
          </h1>
          
          <p className="text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-light">
            Advanced electrical enclosures for overhead-to-underground cable conversion
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800" ref={contentRef}>
        {/* Section 1 - Technical Overview */}
        <div className="w-full py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(0,173,239,0.25)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50">
              <h2 className="text-5xl font-bold mb-12 relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00adef] to-white">
                  Technical Overview
                </span>
                <div className="h-1 w-20 bg-[#00adef] mt-4 rounded-full" />
              </h2>
              <div className="space-y-12">
                <p className="text-xl leading-relaxed max-w-4xl text-gray-300">
                  Deep drawing is a specialized sheet metal forming process that creates seamless, one-piece enclosures ideal for electrical applications. This manufacturing technique produces boxes with superior structural integrity and environmental protection compared to traditional fabrication methods.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                  <div className="bg-gray-800/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#00adef]/10 transition-colors duration-300 group border border-gray-700/50">
                    <div className="p-3 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300">
                      <Shield className="h-6 w-6 text-[#00adef]" />
                    </div>
                    <span className="text-lg font-medium text-gray-300 group-hover:text-[#00adef] transition-colors duration-300">
                      IP68 Protection
                    </span>
                  </div>
                  <div className="bg-gray-800/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#00adef]/10 transition-colors duration-300 group border border-gray-700/50">
                    <div className="p-3 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300">
                      <HardHat className="h-6 w-6 text-[#00adef]" />
                    </div>
                    <span className="text-lg font-medium text-gray-300 group-hover:text-[#00adef] transition-colors duration-300">
                      IEC Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - 11kV Conversion Box */}
        <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] transform hover:scale-105 transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,173,239,0.4)] relative group border border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00adef]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={deepdrawn}
                  alt="Industrial Electrical Box"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(0,173,239,0.3)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50">
                <h2 className="text-5xl font-bold mb-8 relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00adef] to-white">
                    11kV Conversion Box
                  </span>
                  <div className="h-1 w-20 bg-[#00adef] mt-4 rounded-full" />
                </h2>
                <div className="space-y-8">
                  <p className="text-xl leading-relaxed text-gray-300">
                    Specifically engineered for converting 11kV overhead lines to underground cables, these boxes feature advanced safety mechanisms and clear warning systems. The design incorporates international safety standards and local utility requirements.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#00adef]/10 transition-colors duration-300 group border border-gray-700/50">
                      <div className="p-3 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300">
                        <Zap className="h-6 w-6 text-[#00adef]" />
                      </div>
                      <span className="text-lg font-medium text-gray-300 group-hover:text-[#00adef] transition-colors duration-300">
                        11kV Rating
                      </span>
                    </div>
                    <div className="bg-gray-800/30 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#00adef]/10 transition-colors duration-300 group border border-gray-700/50">
                      <div className="p-3 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300">
                        <Tool className="h-6 w-6 text-[#00adef]" />
                      </div>
                      <span className="text-lg font-medium text-gray-300 group-hover:text-[#00adef] transition-colors duration-300">
                        Utility Approved
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Safety Standards */}
        <div className="w-full py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(0,173,239,0.25)] transition-all duration-500 border border-gray-700/50">
              <h2 className="text-5xl font-bold mb-12 relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00adef] to-white">
                  Safety Standards
                </span>
                <div className="h-1 w-20 bg-[#00adef] mt-4 rounded-full" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800/30 p-8 rounded-2xl hover:bg-[#00adef]/10 transition-all duration-300 group border border-gray-700/50 transform hover:-translate-y-2">
                  <div className="p-4 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300 w-fit mb-6">
                    <Bolt className="h-8 w-8 text-[#00adef]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00adef] transition-colors duration-300">Voltage Protection</h3>
                  <p className="text-gray-300">Engineered to safely handle 11kV power distribution with comprehensive insulation and grounding systems for maximum safety.</p>
                </div>
                <div className="bg-gray-800/30 p-8 rounded-2xl hover:bg-[#00adef]/10 transition-all duration-300 group border border-gray-700/50 transform hover:-translate-y-2">
                  <div className="p-4 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300 w-fit mb-6">
                    <Shield className="h-8 w-8 text-[#00adef]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00adef] transition-colors duration-300">Environmental Rating</h3>
                  <p className="text-gray-300">IP68-rated protection ensures complete dust-tight sealing and protection against long-term immersion in water.</p>
                </div>
                <div className="bg-gray-800/30 p-8 rounded-2xl hover:bg-[#00adef]/10 transition-all duration-300 group border border-gray-700/50 transform hover:-translate-y-2">
                  <div className="p-4 rounded-xl bg-[#00adef]/10 group-hover:bg-[#00adef]/20 transition-colors duration-300 w-fit mb-6">
                    <Tool className="h-8 w-8 text-[#00adef]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00adef] transition-colors duration-300">Installation Standards</h3>
                  <p className="text-gray-300">Compliant with international electrical installation standards including IEC 61439 for low-voltage switchgear assemblies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deepdrawn_boxes;