import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Users, TrendingUp, Shield, Award } from 'lucide-react';

const Vision = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#00adef]" />,
      title: "Customer Focus",
      description: "Delivering delightful experiences to our esteemed customers through quality products and services"
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#00adef]" />,
      title: "Innovation",
      description: "Continuous improvement in production processes and operating systems"
    },
    {
      icon: <Users className="w-8 h-8 text-[#00adef]" />,
      title: "Employee Development",
      description: "Prioritizing training, wellbeing, and safety of our workforce"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#00adef]" />,
      title: "Sustainable Growth",
      description: "Ensuring moderate and consistent growth year after year"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#00adef]" />,
      title: "Quality Assurance",
      description: "Maintaining highest standards in manufacturing and delivery"
    },
    {
      icon: <Award className="w-8 h-8 text-[#00adef]" />,
      title: "Excellence",
      description: "Striving to be the preferred supplier in our industry"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#00adef] to-[#0066ab] py-24 md:py-32 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-20"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Driving Automotive Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Our Vision and Mission Fueling Innovation Since 1990
          </motion.p>
        </div>
      </div>

      {/* Vision & Mission Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-white rounded-2xl shadow-2xl p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-[#00adef]"
          >
            <div className="absolute -right-6 -top-6 w-14 h-14 bg-[#00adef] rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Group Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To ensure moderate growth every year by giving delightful experience to our esteemed customers by becoming preferred supplier of Fuel tank assay, Sheet metal parts, Tubular parts & welded assemblies.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative bg-white rounded-2xl shadow-2xl p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-[#0066ab]"
          >
            <div className="absolute -left-6 -top-6 w-14 h-14 bg-[#0066ab] rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To develop and supply fuel tanks, Sheet metal parts & assemblies to our customers with continuous emphasis on improving Productivity & quality by upgradation in production processes & day to day operating system to create delightful customer experience & add new business from existing & new customers. Emphasis will be given on training of employees, their wellbeing & safety.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-20"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              The fundamental principles guiding our operations and decisions
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00adef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-[#00adef]/10 rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 ml-4 mt-1">{value.title}</h3>
                </div>
                <p className="text-gray-600 pl-14">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
