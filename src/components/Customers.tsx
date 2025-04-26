import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Shield, Award } from 'lucide-react';
import MahindraLogo from '../Public/logos/mahindra-sport.png';
import ForceMotorsLogo from '../Public/logos/force-motors.png';
import RaychemLogo from '../Public/logos/raychem.png';
import CIEIndiaLogo from '../Public/logos/cie-india2.png';
import MahindraTracktors from '../Public/logos/Tractors.png';
import MahindraTrucks from '../Public/logos/Truck-Bus.png';
import eicher from '../Public/logos/Eicher.png';
import kirloskar from '../Public/logos/Kirloskar.svg';
import JBM from '../Public/logos/JBM.png';
import hyva from '../Public/logos/hyva.png';
import pinnacle from '../Public/logos/Pinnacle-logo.png';
import sonnax from '../Public/logos/Sonnax.png';

const Customers = () => {
  const customers = [
    { 
      
      logo: MahindraLogo,
    },
    { 
      
      logo: ForceMotorsLogo,
    },
    { 
     
      logo: CIEIndiaLogo,
    },
    { 
      
      logo: RaychemLogo,
    },
    { 
     
      logo: MahindraTracktors,
    },
    { 
      //name: 'Mahindra Trucks & Buses', 
      logo: MahindraTrucks,
    },
    { 
      
      logo: eicher,
    },
    { 
     
      logo: kirloskar,
    },
    { 
      
      logo: JBM,
    },
    { 
     
      logo: hyva,
    },
    { 
      
      logo: pinnacle,
    },
    { 
      
      logo: sonnax,
    },
   
  ];

  const certifications = [
    {
      icon: BadgeCheck,
      title: "IATF 16949:2016",
      description: "Quality Management System"
    },
    {
      icon: Shield,
      title: "ISO 14000 Certification",
      description: "Environmental Management System"
    },
    {
      icon: Award,
      title: "MSES - B - Level",
      description: "Manufacturing System Excellence"
    }
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
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#00adef]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Industry-Leading Customers
              </h2>
              <div className="h-1 w-24 bg-white mx-auto rounded-full" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-white/90 max-w-2xl mx-auto mt-6"
            >
              Trusted by leading automotive manufacturers for precision-engineered components
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {customers.map((customer, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative h-48 w-full flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src={customer.logo} 
                    alt={customer.name}
                    className="object-contain p-4 w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      minWidth: '120px',
                      minHeight: '120px',
                      padding: index >= 4 ? '0.5rem' : '1rem' 
                    }}
                  />
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-3 text-center"
                >
                  <h3 className="text-sm font-medium text-white">{customer.name}</h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
              >
                <cert.icon className="h-8 w-8 text-white" />
                <div>
                  <div className="text-sm font-semibold text-white">{cert.title}</div>
                  <div className="text-xs text-white/80">{cert.description}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Customers;