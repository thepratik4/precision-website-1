import React from 'react';

const ProductGallery = () => {
  // Products array with product information
  const products = [
    {
      name: 'Fuel Tanks',
      description: 'High-quality fuel tanks with advanced safety features',
      image: 'https://images.unsplash.com/photo-1705601010126-5374e1219675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZ1ZWwlMjB0YW5rfGVufDB8fDB8fHww',
    },
    {
      name: 'Battery Boxes',
      description: 'Durable battery boxes designed for optimal performance',
      image: 'https://images.unsplash.com/photo-1653933686284-8414eb9ebdf4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Sheet Metal Components',
      description: 'Precision-engineered sheet metal parts',
      image: 'https://images.unsplash.com/photo-1697698532602-ccf880036281?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
