import React from 'react';
import { ArrowRight, ArrowLeft, Clock, Award, Target, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

// Image imports
import imgHydraulicPress from '../Public/history/hydraulic_press.jpg';
import imgArmada from '../Public/history/armada.avif';
import imgScorpio2002 from '../Public/history/scorpio2002.png';
import imgISO16949 from '../Public/history/ISO-16949.jpg';
import imgMahindra2006 from '../Public/history/mahindra2006.png';
import imgXylo from '../Public/history/xylo.png';
import imgOffice from '../Public/history/office.png';
import imgHaridwar from '../Public/history/haridwar.png';
import img2014 from '../Public/history/2014.jpg';
import imgISO14000 from '../Public/history/iso14000.png';
import imgRaychemRPG from '../Public/history/raychemrpg.png';
import imgIATF2016 from '../Public/history/iatf2016.png';
import imgBoleroFootrest from '../Public/history/bolerofootrest.png';
import imgBatteryTreo from '../Public/history/batterytreo.png';
import imgTharFuelTank from '../Public/history/tharfueltank.png';
import imgPressShot2024 from '../Public/history/pressshot2024.jpg';
import imgRoboticWelding from '../Public/history/roboticwelding.webp';

const History = () => {
  const timelineEvents = [
    { 
      year: 1991,
      text: "First vendor among Nasik vendors to install hydraulic press & started manufacturing deep drawn sheet metal parts",
      image: imgHydraulicPress,
    },
    { 
      year: "1994-1998",
      text: "Supplied trimmed seats for CJ 500, Commander, Armada & marshal models",
      image: imgArmada,
    },
    { 
      year: 1996,
      text: "Initiated in-house manufacturing and supply of deep-drawn fuel tanks, offering a competitive advantage through a 10% price reduction compared to existing suppliers based in Mumbai and Baroda.",
      // no image for this event
    },
    { 
      year: 2002,
      text: "Successfully developed Fuel Tank Assay & seat frames for Scorpio",
      image: imgScorpio2002,
    },
    { 
      year: 2004,
      text: "Implemented ISO TS 16949 certification",
      image: imgISO16949,
    },
    { 
      year: 2006,
      text: "Implemented imported aluminum silicon coated steel for fuel tank assay, reduced warranty complaints to almost zero & enhanced brand image of Mahindra Vehicles",
      image: imgMahindra2006,
    },
    { 
      year: 2008,
      text: "Developed draw tooling's on our own & successfully developed Xylo Fuel tank assay",
      image: imgXylo,
    },
    { 
      year: 2012,
      text: "Started Factory at Chakan Pune to manufacturer Maxximo & Navistar Fuel Tanks",
      image: imgOffice,
    },
    { 
      year: 2013,
      text: "Haridwar plant commissioned to produce Bolero Fuel Tank",
      image: imgHaridwar,
    },
    { 
      year: 2014,
      text: "MSES - B - Level to Genext Precision Autotech Pvt Ltd",
      image: img2014,
    },
    { 
      year: 2015,
      text: "ISO 14000 Certification to Precision Auto Industries Pvt. Ltd",
      image: imgISO14000,
    },
    { 
      year: 2016,
      text: "Developed Deep drawn distribution box for Raychem RPG",
      image: imgRaychemRPG,
    },
    { 
      year: 2017,
      text: "Implemented IATF 16949:2016 certification",
      image: imgIATF2016,
    },
    { 
      year: 2022,
      text: "Developed Aluminium foot step for Bolero",
      image: imgBoleroFootrest,
    },
    { 
      year: 2023,
      text: "Developed Battery box for EV – Treo",
      image: imgBatteryTreo,
    },
    { 
      year: 2023,
      text: "Developed Thar Fuel Tank",
      image: imgTharFuelTank,
    },
    { 
      year: 2024,
      text: "Installed New Hydraulic Press 200T",
      image: imgPressShot2024,
    },
    { 
      year: 2025,
      text: "Robotic welding setup installed\nPress Brake machine installed",
      image: imgRoboticWelding,
    },
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: (index: number) => (index % 2 === 0 ? 100 : -100)
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-[#00adef] to-[#0066ab] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
              Driving Innovation Since 1991
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-12 px-4">
              From humble beginnings to industry leadership, our journey spans over three decades of excellence, innovation, and unwavering commitment to quality.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-12 px-4"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <Clock className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3 md:mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">30+</h3>
              <p className="text-sm md:text-base text-white/90">Years of Excellence</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-3 md:mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">15+</h3>
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

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#f9fafb" />
                <stop offset="100%" stopColor="#f3f4f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')",
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey Through Time</h2>
            <div className="w-20 h-1 bg-[#00adef] mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Vertical timeline line with gradient */}
            <div className="absolute left-[20px] md:left-1/2 w-1 h-full bg-gradient-to-b from-[#00adef] via-[#0066ab] to-transparent transform md:-translate-x-1/2" />

            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} mb-16 md:mb-24`}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={index}
                  variants={cardVariants}
                >
                  {/* Timeline Point with Directional Arrow */}
                  <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#00adef] to-[#0066ab] flex items-center justify-center z-10 shadow-lg">
                    {isEven ? (
                      <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-white animate-pulse" />
                    ) : (
                      <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 text-white animate-pulse" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-white rounded-xl shadow-xl p-6 md:p-8 h-full border border-gray-100 backdrop-blur-sm bg-white/90"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00adef] to-[#0066ab] rounded-t-xl"></div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0066ab] mb-3 md:mb-4">
                        {event.year}
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 whitespace-pre-line">
                        {event.text}
                      </p>
                      {event.image && (
                        <div className="mt-4 overflow-hidden rounded-lg shadow-md">
                          <img
                            src={event.image}
                            alt={`Achievement ${event.year}`}
                            className="w-full h-40 md:h-48 object-cover transform transition duration-500 hover:scale-105"
                          />
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer - Only visible on desktop */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;