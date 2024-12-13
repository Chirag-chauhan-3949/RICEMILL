import { Scale, Timer, Users } from 'lucide-react';

export default function Stats() {
  return (
    <div className="bg-amber-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          <div>
            <Scale className="h-12 w-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-lg">Tons Processed Annually</div>
          </div>
          <div>
            <Users className="h-12 w-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-lg">Happy Farmers</div>
          </div>
          <div>
            <Timer className="h-12 w-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-lg">Years of Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}