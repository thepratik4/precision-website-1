import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const History = () => {
  const timelineEvents = [
    { 
      year: 1991,
      text: "First vendor among Nasik vendors to install hydraulic press & started manufacturing deep drawn sheet metal parts",
      image: "src/public/history/hydraulic_press.jpg"
    },
    { 
      year: "1994-1998",
      text: "Supplied trimmed seats for CJ 500, Commander, Armada & marshal models",
      image: "src/public/history/armada.avif"
    },
    { 
      year: 1996,
      text: "Initiated in-house manufacturing and supply of deep-drawn fuel tanks, offering a competitive advantage through a 10% price reduction compared to existing suppliers based in Mumbai and Baroda.",
      //image: "src/public/history/scorpio2002.png"
    },
    { 
      year: 2002,
      text: "Successfully developed Fuel Tank Assay & seat frames for Scorpio",
      image: "src/public/history/scorpio2002.png"
    },
    { 
      year: 2004,
      text: "Implemented ISO TS 16949 certification",
      image: "src/public/history/ISO-16949.jpg"
    },
    { 
      year: 2006,
      text: "Implemented imported aluminum silicon coated steel for fuel tank assay, reduced warranty complaints to almost zero & enhanced brand image of Mahindra Vehicles",
      image: "src/public/history/mahindra2006.png"
    },
    { 
      year: 2008,
      text: "Developed draw tooling's on our own & successfully developed Xylo Fuel tank assay",
      image: "src/public/history/xylo.png"
    },
    { 
      year: 2012,
      text: "Started Factory at Chakan Pune to manufacturer Maxximo & Navistar Fuel Tanks",
      image: "src/public/history/office.png"
    },
    { 
      year: 2013,
      text: "Haridwar plant commissioned to produce Bolero Fuel Tank",
      image: "src/public/history/Haridwar.png"
    },
    { 
      year: 2014,
      text: "MSES - B - Level to Genext Precision Autotech Pvt Ltd",
      image: "src/public/history/2014.jpg"
    },
    { 
      year: 2015,
      text: "ISO 14000 Certification to Precision Auto Industries Pvt. Ltd",
      image: "src/public/history/iso14000.png"
    },
    { 
      year: 2016,
      text: "Developed Deep drawn distribution box for Raychem RPG",
      image: "src/public/history/raychemrpg.png"
    },
    { 
      year: 2017,
      text: "Implemented IATF 16949:2016 certification",
      image: "src/public/history/iatf2016.png"
    },
    { 
      year: 2022,
      text: "Developed Aluminium foot step for Bolero",
      image: "src/public/history/bolerofootrest.png"
    },
    { 
      year: 2023,
      text: "Developed Battery box for EV – Treo",
      image: "src/public/history/batterytreo.png"
    },
    { 
      year: 2023,
      text: "Developed Thar Fuel Tank",
      image: "src/public/history/tharfueltank.png"
    },
    { 
      year: 2024,
      text: "Installed New Hydraulic Press 200T",
      image: "src/public/history/pressshot2024.jpg"
    },
    { 
      year: 2025,
      text: "Robotic welding setup installed\nPress Brake machine installed",
      image: "src/public/history/roboticwelding.webp"
    }
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

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Image Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-24 h-96 bg-gradient-to-r from-[#00adef] to-[#0066ab] rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="h-full flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white text-center p-8">
            Driving Innovation Since 1991
          </h2>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Vertical timeline */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-[#00adef] to-transparent transform -translate-x-1/2" />

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className={`relative flex ${isEven ? 'flex-row-reverse' : ''} mb-24 min-h-[300px]`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
                custom={index}
                variants={cardVariants}
              >
                {/* Timeline Point with Directional Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#00adef] flex items-center justify-center z-10 shadow-lg">
                  {isEven ? (
                    <ArrowRight className="w-6 h-6 text-white animate-pulse" />
                  ) : (
                    <ArrowLeft className="w-6 h-6 text-white animate-pulse" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${isEven ? 'pr-12' : 'pl-12'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-white rounded-xl shadow-2xl p-8 h-full border-2 border-gray-100"
                  >
                    <h3 className="text-2xl font-bold text-[#0066ab] mb-4">
                      {event.year}
                    </h3>
                    <p className="text-gray-700 mb-6 whitespace-pre-line">
                      {event.text}
                    </p>
                    {event.image && (
                      <div className="mt-4 overflow-hidden rounded-lg border-2 border-gray-100">
                        <img
                          src={event.image}
                          alt={`Achievement ${event.year}`}
                          className="w-full h-48 object-cover transform transition duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default History;