import { Grain, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Grain className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">GoldenGrain Mills</span>
            </div>
            <p className="mt-4 text-gray-600">
              Quality rice processing for generations, delivering excellence in every grain.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-600 mr-2" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-600 mr-2" />
                <span className="text-gray-600">info@goldengrain.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-amber-600 mr-2" />
                <span className="text-gray-600">123 Mill Road, Rice Valley</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 8:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} GoldenGrain Mills. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}