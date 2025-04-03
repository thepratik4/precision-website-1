import React from 'react';
import { Shield, Factory, Award, PenTool as Tool } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Quality Assured',
      description: 'ISO 9001:2015 certified manufacturing processes ensuring highest quality standards',
    },
    {
      icon: <Factory className="h-6 w-6 text-blue-600" />,
      title: 'State-of-the-art Facilities',
      description: 'Modern manufacturing plants equipped with latest technology',
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: 'Industry Leading',
      description: 'Over 25 years of excellence in automotive component manufacturing',
    },
    {
      icon: <Tool className="h-6 w-6 text-blue-600" />,
      title: 'Custom Solutions',
      description: 'Tailored engineering solutions meeting specific client requirements',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Excellence in Manufacturing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Delivering precision-engineered automotive components with unmatched quality and reliability.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-white">
                  {feature.icon}
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;