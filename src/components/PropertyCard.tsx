import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="group cursor-pointer" onClick={onClick}>
      {/* Image Carousel */}
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full transition"
        >
          <Heart
            className={`w-5 h-5 ${isFavorite ? 'fill-rose-500 stroke-rose-500' : 'stroke-gray-700'}`}
          />
        </button>

        {/* Superhost Badge */}
        {property.host.superhost && (
          <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            SUPERHOST
          </div>
        )}

        {/* Image Navigation Dots */}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Property Info */}
      <div className="space-y-1">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">
              {property.location.city}, {property.location.country}
            </h3>
            <p className="text-gray-600 text-sm truncate">{property.title}</p>
          </div>
          <div className="flex items-center space-x-1 ml-2">
            <Star className="w-4 h-4 fill-gray-900" />
            <span className="text-sm font-semibold">{property.rating}</span>
            <span className="text-sm text-gray-600">({property.reviews})</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm">
          {property.guests} guests · {property.bedrooms} bedrooms · {property.beds} beds
        </p>
        
        <div className="pt-1">
          <span className="font-semibold">${property.price}</span>
          <span className="text-gray-600"> / night</span>
        </div>
      </div>
    </div>
  );
};
