import { Shield, Target, History } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About GoldenGrain Mills
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A legacy of excellence in rice processing, serving farmers and
              communities since 1970
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Rice Mill Facility"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 1970, GoldenGrain Mills has been at the forefront of
                rice processing technology and innovation. What started as a
                small family-owned mill has grown into one of the region's most
                trusted rice processing facilities.
              </p>
              <p className="text-gray-600">
                Our commitment to quality, combined with continuous investment
                in modern technology, has helped us maintain our position as an
                industry leader while staying true to our founding principles of
                integrity and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in every grain we process
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our processes and technology
              </p>
            </div>
            <div className="text-center p-6">
              <History className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Heritage</h3>
              <p className="text-gray-600">
                Preserving traditional values while embracing modern methods
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
