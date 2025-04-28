// history.tsx
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, Clock, Award, Target, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

// Image imports
import imgHydraulicPress from '../Public/history/hydraulic_press.png';
import imgArmada from '../Public/history/armada.avif';
import imgScorpio2002 from '../Public/history/scorpio2002.png';
import imgISO16949 from '../Public/history/ISO-16949.jpg';
import imgMahindra2006 from '../Public/history/mahindra2006.png';
import imgXylo from '../Public/history/xylo.png';
import imgOffice from '../Public/locations/chakan.jpg';
import imgHaridwar from '../Public/locations/haridwar.png';
import img2014 from '../Public/history/2014.jpg';
import imgISO14000 from '../Public/history/iso14000.png';
import imgRaychemRPG from '../Public/history/raychemrpg.png';
import imgIATF2016 from '../Public/history/iatf2016.png';
import imgBoleroFootrest from '../Public/history/bolerofootrest.png';
import imgBatteryTreo from '../Public/history/batterytreo.png';
import imgTharFuelTank from '../Public/fuel tank/Mahindra_thar.png';
import imgPressShot2024 from '../Public/history/pressshot2024.jpg';
import imgRoboticWelding from '../Public/history/roboticwelding.webp';
import pressbreak from '../Public/history/pressbreak.png';
// Stats animation variants (ensure this is defined or imported)
const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.6 } }
};

const History = () => {
  const timelineEvents = [
    { year: "1991", text: "Established with hydraulic press technology, serving automotive OEMs", image: imgHydraulicPress },
    { year: "1994-98", text: "supplied trimmedseats for CJ500, Commander, Armada & marshal models", image: imgArmada },
    { year: 1996, text: "Initiated in-house manufacturing and supply of deep-drawn fuel tanks, offering a competitive advantage through a 10% price reduction compared to existing suppliers based in Mumbai and Baroda." },
    { year: 2002, text: "Successfully developed Fuel Tank Assay & seat frames for Scorpio", image: imgScorpio2002 },
    { year: 2004, text: "Implemented ISO TS 16949 certification", image: imgISO16949 },
    { year: 2006, text: "Implemented imported aluminum silicon coated steel for fuel tank assay, reduced warranty complaints to almost zero & enhanced brand image of Mahindra Vehicles", image: imgMahindra2006 },
    { year: 2008, text: "Developed draw tooling's on our own & successfully developed Xylo Fuel tank assay", image: imgXylo },
    { year: 2012, text: "Started Factory at Chakan Pune to manufacturer Maxximo & Navistar Fuel Tanks", image: imgOffice },
    { year: 2013, text: "Haridwar plant commissioned to produce Bolero Fuel Tank", image: imgHaridwar },
    { year: 2014, text: "MSES - B - Level to Genext Precision Autotech Pvt Ltd", image: img2014 },
    { year: 2015, text: "ISO 14000 Certification to Precision Auto Industries Pvt. Ltd", image: imgISO14000 },
    { year: 2016, text: "Developed Deep drawn distribution box for Raychem RPG", image: imgRaychemRPG },
    { year: 2017, text: "Implemented IATF 16949:2016 certification", image: imgIATF2016 },
    { year: 2022, text: "Developed Aluminium foot step for Bolero", image: imgBoleroFootrest },
    { year: 2023, text: "Developed Battery box for EV – Treo", image: imgBatteryTreo },
    { year: 2023, text: "Developed Thar Fuel Tank", image: imgTharFuelTank },
    { year: 2024, text: "Installed New Hydraulic Press 200T", image: imgPressShot2024 },
    { year: 2025, text: "Robotic welding setup installed\nPress Brake machine installed", image: imgRoboticWelding },
    { year: 2025, text: "Press Brake machine installed", image: pressbreak },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    const scrollAmount = 500;
    const newScrollLeft = direction === 'right' ? container.scrollLeft + scrollAmount : container.scrollLeft - scrollAmount;
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const checkScroll = () => {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };
    container.addEventListener('scroll', checkScroll);
    return () => container.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setLineWidth(entry.target.scrollWidth);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-[#00adef] to-[#0066ab] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 px-4">Driving Innovation Since 1990</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-12 px-4">From humble beginnings to industry leadership, our journey spans over three decades of excellence, innovation, and unwavering commitment to quality.</p>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={statsVariants} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-12 px-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <Clock className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3 md:mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">30+</h3>
              <p className="text-sm md:text-base text-white/90">Years of Excellence</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3 md:mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">3+</h3>
              <p className="text-sm md:text-base text-white/90">Major Certifications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <Target className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3 md:mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">100+</h3>
              <p className="text-sm md:text-base text-white/90">Products Developed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3 md:mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">5</h3>
              <p className="text-sm md:text-base text-white/90">Manufacturing Units</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <div className="w-20 h-1 bg-[#00adef] mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            {showLeftButton && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4">
                <motion.button
                  onClick={() => handleScroll('left')}
                  className="p-3 rounded-full bg-white shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft className="w-6 h-6 text-[#0066ab]" />
                </motion.button>
              </div>
            )}

            {showRightButton && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4">
                <motion.button
                  onClick={() => handleScroll('right')}
                  className="p-3 rounded-full bg-white shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-6 h-6 text-[#0066ab]" />
                </motion.button>
              </div>
            )}

            {/* Timeline Line */}
            <div className="absolute top-16 left-0 w-full overflow-hidden pointer-events-none z-0">
              <div
                className="h-1 bg-gradient-to-r from-[#00adef] via-[#0066ab] to-gray-200"
                style={{ width: lineWidth }}
              />
            </div>

            {/* Scroll Container */}
            <motion.div
              ref={containerRef}
              className="relative pb-8 overflow-x-auto hide-scrollbar"
            >
              {/* Events Container */}
              <div className="inline-flex items-start gap-8 md:gap-16 px-4 relative z-10">
                {timelineEvents.map((event, idx) => (
                  <div key={idx} className="relative flex-shrink-0 w-64 md:w-72">
                    {/* Timeline Dot */}
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#00adef] to-[#0066ab] shadow-lg z-10">
                      <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-[72px] left-1/2 -translate-x-1/2 text-center z-20">
                      <span className="text-sm font-semibold bg-gradient-to-r from-[#00adef] to-[#0066ab] text-white px-4 py-1 rounded-full shadow-md">
                        {event.year}
                      </span>
                    </div>

                    {/* Event Card */}
                    <div className="mt-32 pb-4">
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 h-80 flex flex-col relative"
                        style={{ willChange: 'transform' }}
                      >
                        {event.image && (
                          <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                            <img
                              src={event.image}
                              alt={`${event.year} achievement`}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        )}
                        <div className="flex-grow overflow-y-auto pr-1 custom-scrollbar">
                          <p className="text-sm text-gray-700">{event.text}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c0c0c0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a0a0a0;
        }
      `}</style>
    </div>
  );
};

export default History;