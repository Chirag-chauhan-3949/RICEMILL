import { Menu, X, Grain } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Grain className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">GoldenGrain Mills</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-amber-600 transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</Link>
            <Link to="/product" className="text-gray-700 hover:text-amber-600 transition-colors">Product</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-amber-600">About Us</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}