import React from 'react';
import fuelt from '../Public/fuel tank/Mahindra_thar.png'
import battery from '../Public/battery box/treo_ev.png'
import sheet from '../Public/sheets/sheet1.png'
const ProductGallery = () => {
  // Products array with product information
  const products = [
    {
      name: 'Fuel Tanks',
      description: 'High-quality fuel tanks with advanced safety features',
      image: fuelt,
    },
    {
      name: 'Battery Boxes',
      description: 'Durable battery boxes designed for optimal performance',
      image: battery,
    },
    {
      name: 'Sheet Metal Components',
      description: 'Precision-engineered sheet metal parts',
      image: sheet,
    },
  ];

  // Mapping for products to routes
  const routeMapping = {
    'FUEL TANKS': '/fuel_tanks',
    'BATTERY BOXES': '/battery_boxes',
    'SHEET METAL COMPONENTS': '/sheet_metal_parts',
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Products</h2>
          <p className="mt-4 text-lg text-gray-500">
            Discover our range of high-quality automotive components
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              // Get the route URL from mapping. Convert product name to uppercase to match key.
              const route = routeMapping[product.name.toUpperCase()];
              return (
                <div key={index} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                    <a href={route}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={route}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
