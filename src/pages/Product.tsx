import React from 'react';

export default function Product() {
  return (
    <div className="min-h-screen bg-gray-50  py-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-6 lg:px-12 py-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Modern Rice Milling Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Experience superior rice processing with our state-of-the-art milling technology. 
                Designed for maximum efficiency and exceptional grain quality, our mills deliver 
                the perfect balance of productivity and precision.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
                alt="Modern Rice Mill"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Featured Product
          </h2>
          
          {/* Product Card */}
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Product Image */}
            <div className="relative h-80">
              <img 
                src="https://images.unsplash.com/photo-1612411014149-0a3d40e1b03d"
                alt="Premium Rice Grains"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Basmati Rice</h3>
              <p className="text-gray-600">
                Our signature long-grain basmati rice, carefully processed in state-of-the-art facilities. 
                Known for its aromatic fragrance, perfect length, and superior taste that elevates every dish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}