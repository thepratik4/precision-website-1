import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import MahindraLogo from '../Public/logos/mahindra.png';
import ForceMotorsLogo from '../Public/logos/force-motors.png';
import RaychemLogo from '../Public/logos/raychem.png';
import CIEIndiaLogo from '../Public/logos/cie-india2.png';
import MahindraTracktors from '../Public/logos/Tractors.png';
import MahindraTrucks from '../Public/logos/Truck-Bus.png';

const Customers = () => {
  const customers = [
    { 
      name: 'Mahindra & Mahindra', 
      logo: MahindraLogo,
    },
    { 
      name: 'Force Motors', 
      logo: ForceMotorsLogo,
    },
    { 
      name: 'CIE Automotive India', 
      logo: CIEIndiaLogo,
    },
    { 
      name: 'Raychem RPG®', 
      logo: RaychemLogo,
    },
    { 
      name: 'Mahindra Tractors', 
      logo: MahindraTracktors,
    },
    { 
      name: 'Mahindra Trucks & Buses', 
      logo: MahindraTrucks,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Our Industry-Leading Customers 
            <div className="mt-2 h-1 w-16 bg-[#00adef] inline-block rounded-full" />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Proudly supplying precision automotive components to industry leaders 
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {customers.map((customer, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative p-2"
            >
              <div className="h-48 w-full flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-gray-100">
                <img 
                  src={customer.logo} 
                  alt={customer.name}
                  className="object-contain p-4 w-full h-full"
                  style={{ 
                    minWidth: '120px',
                    minHeight: '120px',
                    padding: index >= 4 ? '0.5rem' : '1rem' 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm max-w-sm mx-auto"
        >
          <BadgeCheck className="h-8 w-8 text-[#00adef]" />
          <div>
            <div className="text-sm font-semibold text-gray-800">IATF 16949 Certified</div>
            <div className="text-xs text-gray-600">Quality Assured Manufacturing</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Customers;