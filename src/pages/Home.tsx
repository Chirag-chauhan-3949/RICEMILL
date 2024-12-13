import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import ProcessSection from '../components/home/ProcessSection/ProcessSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax Effect */}
      <div 
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1568201402596-ececec1aac61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Premium Rice Processing<br />for Quality Results</h1>
            <p className="text-2xl mb-8 max-w-2xl">Experience the finest rice milling services with state-of-the-art technology and decades of expertise.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 transition-colors rounded-lg text-white text-lg font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">Delivering excellence in every grain</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <Award className="h-16 w-16 text-amber-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">State-of-the-art milling technology ensuring the highest quality output for your rice processing needs.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <Users className="h-16 w-16 text-amber-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600">Our experienced professionals are dedicated to delivering the best results for every batch of rice processed.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <Clock className="h-16 w-16 text-amber-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Quick Processing</h3>
              <p className="text-gray-600">Efficient milling process with quick turnaround times to meet your scheduling needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <ProcessSection />

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <div className="bg-amber-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl text-white mb-12">Contact us today to learn more about our rice milling solutions</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}