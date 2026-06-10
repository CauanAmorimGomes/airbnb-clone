import React, { useState } from 'react';
import { X, MapPin, Calendar, Users, Minus, Plus } from 'lucide-react';
import { SearchFilters } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (filters: Partial<SearchFilters>) => void;
  initialFilters: Partial<SearchFilters>;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSearch,
  initialFilters
}) => {
  const [location, setLocation] = useState(initialFilters.location || '');
  const [checkIn, setCheckIn] = useState(initialFilters.checkIn?.toISOString().split('T')[0] || '');
  const [checkOut, setCheckOut] = useState(initialFilters.checkOut?.toISOString().split('T')[0] || '');
  const [guests, setGuests] = useState(initialFilters.guests || 1);

  if (!isOpen) return null;

  const handleSearch = () => {
    onSearch({
      location,
      checkIn: checkIn ? new Date(checkIn) : null,
      checkOut: checkOut ? new Date(checkOut) : null,
      guests
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        {/* Modal */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-semibold">Search</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Location */}
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                Where
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search destinations"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Users className="w-4 h-4 mr-2" />
                Guests
              </label>
              <div className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg">
                <span className="text-gray-700">{guests} {guests === 1 ? 'guest' : 'guests'}</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="p-2 border border-gray-300 rounded-full hover:border-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={guests <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="p-2 border border-gray-300 rounded-full hover:border-gray-900 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
            <button
              onClick={() => {
                setLocation('');
                setCheckIn('');
                setCheckOut('');
                setGuests(1);
              }}
              className="text-sm font-semibold underline hover:text-gray-600 transition"
            >
              Clear all
            </button>
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
