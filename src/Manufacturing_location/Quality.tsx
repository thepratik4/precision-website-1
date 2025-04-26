import React from 'react';
import { Award, BookOpen, TreePine, Gauge } from 'lucide-react';

const certifications = [
  {
    title: 'ISO 14001:2015',
    description: 'International standard for environmental management systems.',
    icon: <Award className="w-6 h-6 text-[#00adef]" />
  },
  {
    title: 'IATF 16949:2016',
    description: 'Automotive Quality Management System certification for global standards',
    icon: <Gauge className="w-6 h-6 text-[#00adef]" />
  }
];

const features = [
  {
    title: 'Press Brake Machine',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=800',
    description: 'State-of-the-art press brake machinery for precise metal forming'
  },
  {
    title: 'Powdercoating Plant',
    image: 'https://images.unsplash.com/photo-1581092334247-ddef2a41a4f7?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced powdercoating facility for superior finish quality'
  }
];

const Quality = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Quality <span className="bg-gradient-to-r from-[#00adef] to-slate-400 text-transparent bg-clip-text">Excellence</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Committed to continuous improvement and the highest quality standards
          </p>
        </div>

        {/* Key Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <BookOpen className="w-12 h-12 text-[#00adef]" />,
              title: "Employee Training",
              description: "Continuous skill development and quality awareness programs"
            },
            {
              icon: <TreePine className="w-12 h-12 text-[#00adef]" />,
              title: "Environmental Compliance",
              description: "Adherence to environmental standards and sustainable practices"
            },
            {
              icon: <Award className="w-12 h-12 text-[#00adef]" />,
              title: "Quality Assurance",
              description: "Rigorous quality control and testing procedures"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(255,255,255,0.15)] transform transition-all duration-500 hover:-translate-y-2 border border-slate-700/50"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl w-20 h-20 mx-auto mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center border border-slate-700/50">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 text-center group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00adef] to-slate-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Our Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(255,255,255,0.15)] transform transition-all duration-500 hover:-translate-y-2 border border-slate-700/50"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
                <div className="relative z-10 flex items-start space-x-6 p-8">
                  <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 border border-slate-700/50">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-slate-200 group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {cert.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00adef] to-slate-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Quality;