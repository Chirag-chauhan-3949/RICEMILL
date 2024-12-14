import React from "react";

const products = [
  {
    id: 1,
    type: "RAW",
    name: "RAW BHUSA",
    description: "Raw BHUSA rice for quality processing and milling.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 2,
    type: "RAW",
    name: "RAW KHANDA",
    description: "Raw KHANDA rice with long grains for better quality.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 3,
    type: "RAW",
    name: "RAW NAKKHI",
    description: "NAKKHI rice ideal for traditional milling.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 4,
    type: "RAW",
    name: "RAW KODHA",
    description: "Kodha rice perfect for making aromatic rice dishes.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 5,
    type: "PARBOILED",
    name: "PARBOILED KHANDA",
    description: "Parboiled KHANDA rice suitable for high-quality processing.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 6,
    type: "PARBOILED",
    name: "PARBOILED NAKKHI",
    description: "Parboiled NAKKHI rice offering enhanced texture and flavor.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 7,
    type: "PARBOILED",
    name: "PARBOILED KODHA",
    description:
      "Kodha Parboiled rice with perfect processing and milling quality.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
];

export default function Product() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
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
                Experience superior rice processing with our state-of-the-art
                milling technology. Designed for maximum efficiency and
                exceptional grain quality, our mills deliver the perfect balance
                of productivity and precision.
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
            Our Rice Products
          </h2>

          {/* Product List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <span className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-white py-2 px-4 rounded text-sm font-semibold shadow-md hover:scale-105 transform transition duration-200 w-40 text-center">
                    {product.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
