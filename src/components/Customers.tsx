// Customers.tsx
import React from 'react';
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
      className: 'h-20 w-48' // Large size
    },
    { 
      name: 'Force Motors', 
      logo: ForceMotorsLogo,
      className: 'h-14 w-28' // Compact size
    },
    { 
      name: 'CIE India', 
      logo: CIEIndiaLogo,
      className: 'h-30 w-56' // Largest size (3.5x bigger than default)
    },
    { 
      name: 'Raychem®', 
      logo: RaychemLogo,
      className: 'h-20 w-40' // Medium size
    },
    { 
      name: 'Mahindra Tracktors', 
      logo: MahindraTracktors,
      className: 'h-20 w-55' // Large size
    },
    { 
      name: 'Mahindra Trucks', 
      logo: MahindraTrucks,
      className: 'h-20 w-55' // Large size
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Trusted By</h2>
          <p className="mt-4 text-lg text-gray-600">
            Partnering with industry leaders in automotive manufacturing
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {customers.map((customer, index) => (
            <div key={index} className="flex justify-center p-4 hover:scale-105 transition-transform">
              <img 
                src={customer.logo} 
                alt={customer.name} 
                className={`object-contain opacity-75 hover:opacity-100 transition-opacity ${
                  customer.className || 'h-16 w-32'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;