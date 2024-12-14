import ProcessList from './ProcessList';
import ProcessImage from './ProcessImage';

export default function ProcessSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-amber-600 tracking-wide uppercase">
            OUR PROCESS & INFRASTRUCTURE
          </h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Perfection at Every Step of the Process
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ProcessImage
            imageUrl="/Rice-Processing-Facility.jpeg"
            altText="Rice Processing Facility"
          />
          <ProcessList />
        </div>
      </div>
    </div>
  );
}