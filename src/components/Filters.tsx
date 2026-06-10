import React, { useState } from 'react';
import { SlidersHorizontal, X, DollarSign, Home, Bed, Bath, Star, Zap } from 'lucide-react';
import { SearchFilters } from '../types';

interface FiltersProps {
  filters: Partial<SearchFilters>;
  onFiltersChange: (filters: Partial<SearchFilters>) => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFiltersChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState(filters);

  const propertyTypes = ['Entire Place', 'Private Room', 'Shared Room'];
  const amenitiesList = ['WiFi', 'Kitchen', 'Pool', 'Parking', 'Air Conditioning', 'Heating', 'Workspace', 'TV'];

  const handleApply = () => {
    onFiltersChange(localFilters);
    setIsOpen(false);
  };

  const handleReset = () => {
    const resetFilters: Partial<SearchFilters> = {
      priceRange: [0, 1000],
      propertyType: [],
      amenities: [],
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      instantBook: false,
      superhost: false
    };
    setLocalFilters(resetFilters);
    onFiltersChange(resetFilters);
  };

  const activeFiltersCount = [
    localFilters.propertyType?.length || 0,
    localFilters.amenities?.length || 0,
    localFilters.bedrooms || 0,
    localFilters.beds || 0,
    localFilters.bathrooms || 0,
    localFilters.instantBook ? 1 : 0,
    localFilters.superhost ? 1 : 0
  ].reduce((a, b) => a + (b > 0 ? 1 : 0), 0);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-900 transition"
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span className="font-semibold">Filters</span>
        {activeFiltersCount > 0 && (
          <span className="bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setIsOpen(false)} />
            
            <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b z-10 flex items-center justify-between p-6">
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-semibold">Filters</h2>
                <div className="w-9" />
              </div>

              <div className="p-6 space-y-8">
                {/* Price Range */}
                <div className="border-b pb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <DollarSign className="w-5 h-5" />
                    <h3 className="text-lg font-semibold">Price Range</h3>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={localFilters.priceRange?.[1] || 1000}
                      onChange={(e) => setLocalFilters({
                        ...localFilters,
                        priceRange: [0, parseInt(e.target.value)]
                      })}
                      className="w-full accent-rose-500"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">$0</span>
                      <span className="font-semibold">${localFilters.priceRange?.[1] || 1000}+</span>
                    </div>
                  </div>
                </div>

                {/* Property Type */}
                <div className="border-b pb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Home className="w-5 h-5" />
                    <h3 className="text-lg font-semibold">Property Type</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {propertyTypes.map((type) => {
                      const value = type.toLowerCase().replace(' ', '-');
                      const isSelected = localFilters.propertyType?.includes(value) || false;
                      return (
                        <button
                          key={type}
                          onClick={() => {
                            const current = localFilters.propertyType || [];
                            setLocalFilters({
                              ...localFilters,
                              propertyType: isSelected
                                ? current.filter(t => t !== value)
                                : [...current, value]
                            });
                          }}
                          className={`p-4 border-2 rounded-lg text-sm font-medium transition ${
                            isSelected
                              ? 'border-gray-900 bg-gray-50'
                              : 'border-gray-200 hover:border-gray-900'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Rooms and Beds */}
                <div className="border-b pb-8">
                  <h3 className="text-lg font-semibold mb-4">Rooms and Beds</h3>
                  <div className="space-y-4">
                    {[
                      { key: 'bedrooms', label: 'Bedrooms', icon: Bed },
                      { key: 'beds', label: 'Beds', icon: Bed },
                      { key: 'bathrooms', label: 'Bathrooms', icon: Bath }
                    ].map(({ key, label, icon: Icon }) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4" />
                          <span className="font-medium">{label}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          {[0, 1, 2, 3, 4, 5].map((num) => (
                            <button
                              key={num}
                              onClick={() => setLocalFilters({ ...localFilters, [key]: num })}
                              className={`w-10 h-10 rounded-lg font-medium transition ${
                                (localFilters[key as keyof SearchFilters] || 0) === num
                                  ? 'bg-gray-900 text-white'
                                  : 'border border-gray-300 hover:border-gray-900'
                              }`}
                            >
                              {num === 0 ? 'Any' : num}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="border-b pb-8">
                  <h3 className="text-lg font-semibold mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {amenitiesList.map((amenity) => {
                      const isSelected = localFilters.amenities?.includes(amenity) || false;
                      return (
                        <button
                          key={amenity}
                          onClick={() => {
                            const current = localFilters.amenities || [];
                            setLocalFilters({
                              ...localFilters,
                              amenities: isSelected
                                ? current.filter(a => a !== amenity)
                                : [...current, amenity]
                            });
                          }}
                          className={`p-3 border-2 rounded-lg text-sm font-medium transition text-left ${
                            isSelected
                              ? 'border-gray-900 bg-gray-50'
                              : 'border-gray-200 hover:border-gray-900'
                          }`}
                        >
                          {amenity}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Booking Options */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Booking Options</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5" />
                        <div>
                          <div className="font-medium">Instant Book</div>
                          <div className="text-sm text-gray-600">Book without waiting for approval</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={localFilters.instantBook || false}
                        onChange={(e) => setLocalFilters({ ...localFilters, instantBook: e.target.checked })}
                        className="w-5 h-5 accent-rose-500"
                      />
                    </label>
                    <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                        <div>
                          <div className="font-medium">Superhost</div>
                          <div className="text-sm text-gray-600">Stay with recognized hosts</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={localFilters.superhost || false}
                        onChange={(e) => setLocalFilters({ ...localFilters, superhost: e.target.checked })}
                        className="w-5 h-5 accent-rose-500"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t p-6 flex items-center justify-between">
                <button
                  onClick={handleReset}
                  className="text-sm font-semibold underline hover:text-gray-600 transition"
                >
                  Clear all
                </button>
                <button
                  onClick={handleApply}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition"
                >
                  Show results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
