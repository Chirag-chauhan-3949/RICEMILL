import { ReactNode } from 'react';

interface ProcessCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  icon: ReactNode;
}

export default function ProcessCard({ title, description, isOpen, onToggle, icon }: ProcessCardProps) {
  return (
    <div 
      className={`bg-white rounded-lg p-6 cursor-pointer transition-all duration-300 ${
        isOpen ? 'shadow-lg scale-102' : 'hover:shadow-md'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-amber-600">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <button className="text-amber-600">
          {isOpen ? '−' : '+'}
        </button>
      </div>
      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}