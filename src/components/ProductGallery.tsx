import React from 'react';

const ProductGallery = () => {
  const products = [
    {
      name: 'Fuel Tanks',
      description: 'High-quality fuel tanks with advanced safety features',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Battery Boxes',
      description: 'Durable battery boxes designed for optimal performance',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Sheet Metal Components',
      description: 'Precision-engineered sheet metal parts',
      image: 'https://images.unsplash.com/photo-1531758558631-4ab1c359e2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

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
            {products.map((product, index) => (
              <div key={index} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;