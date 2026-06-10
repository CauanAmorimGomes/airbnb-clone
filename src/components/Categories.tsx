import React, { useState } from 'react';

const categories = [
  { id: 'all', label: 'All', icon: '🏠' },
  { id: 'beach', label: 'Beach', icon: '🏖️' },
  { id: 'mountains', label: 'Mountains', icon: '⛰️' },
  { id: 'city', label: 'City', icon: '🏙️' },
  { id: 'luxury', label: 'Luxury', icon: '💎' },
  { id: 'countryside', label: 'Countryside', icon: '🌾' },
  { id: 'tropical', label: 'Tropical', icon: '🌴' },
  { id: 'historic', label: 'Historic', icon: '🏛️' },
  { id: 'modern', label: 'Modern', icon: '🏢' },
];

interface CategoriesProps {
  onCategoryChange?: (category: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onCategoryChange }) => {
  const [selected, setSelected] = useState('all');

  const handleClick = (id: string) => {
    setSelected(id);
    onCategoryChange?.(id);
  };

  return (
    <div className="border-b bg-white sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleClick(category.id)}
              className={`flex flex-col items-center min-w-[60px] pb-2 border-b-2 transition ${
                selected === category.id
                  ? 'border-gray-900 opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <span className="text-2xl mb-1">{category.icon}</span>
              <span className="text-xs font-semibold whitespace-nowrap">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
