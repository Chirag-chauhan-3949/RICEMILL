import { useState } from 'react';
import { Microscope, Package, Cog, Factory, Award } from 'lucide-react';
import ProcessCard from './ProcessCard';

const processes = [
  {
    title: "Strong R&D",
    description: "Our dedicated R&D setup drives innovation, ensuring the highest quality, hygienic products for our customers.",
    icon: <Microscope className="h-6 w-6" />
  },
  {
    title: "Customised Packaging",
    description: "Flexible packaging solutions tailored to meet your specific requirements and market needs.",
    icon: <Package className="h-6 w-6" />
  },
  {
    title: "State-of-the-Art Machinery",
    description: "Advanced processing equipment ensuring consistent quality and efficient production.",
    icon: <Cog className="h-6 w-6" />
  },
  {
    title: "Extensive Production Capacity",
    description: "Large-scale facilities capable of handling high-volume processing requirements.",
    icon: <Factory className="h-6 w-6" />
  },
  {
    title: "High Quality Products",
    description: "Premium rice products meeting international quality standards and customer expectations.",
    icon: <Award className="h-6 w-6" />
  }
];

export default function ProcessList() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {processes.map((process, index) => (
        <ProcessCard
          key={index}
          title={process.title}
          description={process.description}
          icon={process.icon}
          isOpen={index === openIndex}
          onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
}