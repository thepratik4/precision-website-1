import React from 'react';
import { Shield, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Image imports
import imgIATF2016 from '../Public/certificates/iatf2016.png';
import imgISO14001 from '../Public/certificates/iso14000.png';
import imgMSESLevelB from '../Public/certificates/MSES.png';

const Certification = () => {
  const certificates = [
    {
      id: 1,
      title: "IATF 16949:2016",
      category: "Quality Management System",
      description:
        "International Automotive Task Force certification for quality management systems in the automotive industry.",
      icon: Shield,
      validUntil: "2025",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600",
      certificateImage: imgIATF2016,
    },
    {
      id: 2,
      title: "ISO 14001:2015",
      category: "Environmental Management",
      description: "International standard for environmental management systems.",
      icon: Award,
      validUntil: "2024",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800&h=600",
      certificateImage: imgISO14001,
    },
    {
      id: 3,
      title: "MSES Level B",
      category: "Supplier Excellence",
      description:
        "Mahindra Supplier Excellence System certification with a score of 62%.",
      icon: Star,
      validUntil: "2024",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800&h=600",
      certificateImage: imgMSESLevelB,
    },
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Hero Section - Reduced height and padding */}
      <div className="relative bg-gradient-to-r from-[#00adef] to-[#0066ab] py-6 px-4">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our Certifications
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto">
              Recognized excellence through international standards and industry certifications
            </p>
          </motion.div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              {/* Top Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.imagePlaceholder}
                  alt={cert.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white/80 text-xs font-medium">
                    {cert.category}
                  </p>
                  <h3 className="text-white text-lg font-bold mt-1">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <p className="text-gray-700 text-sm">{cert.description}</p>

                {/* Individual Certificate Image - Render only if exists */}
                {cert.certificateImage && (
                  <div className="mt-4 border border-dashed border-gray-300 rounded-lg p-2 text-center">
                    <img
                      src={cert.certificateImage}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
