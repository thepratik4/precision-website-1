import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Factory, Calendar, Award } from 'lucide-react';
import FuelT from '../Public/achievement section/haridwar.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

const AchievementSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-24 bg-[#00adef]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#008fc9] to-[#00adef]/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Manufacturing Excellence
              </h2>
              <div className="h-1 w-24 bg-white/50 rounded-full" />
            </div>

            {/* Information Box */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Award className="h-8 w-8 text-[#00adef]" />
                </div>
                <div>
                  <div className="text-5xl font-black text-[#00adef]">4M+</div>
                  <h3 className="text-lg font-medium text-gray-600">Units of fuel tank supplied to M&M</h3>
                </div>
              </div>
              <div className="border-t pt-6">
              <p className="text-lg text-gray-700">
               <span className="font-semibold text-[#008fc9]">Trusted Partner</span> of<br />
               <span className="font-bold" style={{ color: '#E5223E' }}>Mahindra & Mahindra</span> since 1996
              </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <Factory className="h-8 w-8 text-[#00adef]" />
                  <div>
                    <div className="text-3xl font-bold text-gray-800">5+</div>
                    <div className="text-sm text-gray-600">Production Plants</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-[#00adef]" />
                  <div>
                    <div className="text-3xl font-bold text-gray-800">30+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div variants={fadeInRight} className="relative">
            <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-2xl">
              <motion.img
                src={FuelT}
                alt="Advanced manufacturing"
                className="w-full h-[600px] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                loading="lazy"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-white p-4 pr-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Fuel className="h-6 w-6 text-[#00adef]" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Est. 1991</div>
                    <div className="text-xs text-gray-600">Pioneers in Automotive Manufacturing</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quality Assurance */}
            <div className="mt-8 flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">IATF 16949 Certified</div>
                <div className="text-sm text-gray-600">Quality Management System</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AchievementSection;