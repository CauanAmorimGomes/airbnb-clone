import React, { useState } from 'react';
import { X, Star, Share2, Heart, MapPin, Wifi, Car, Wind, Shield } from 'lucide-react';
import { Property } from '../types';

interface PropertyDetailProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onClose }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  if (!property) return null;

  const amenityIcons: { [key: string]: React.ReactNode } = {
    'WiFi': <Wifi className="w-5 h-5" />,
    'Parking': <Car className="w-5 h-5" />,
    'Air Conditioning': <Wind className="w-5 h-5" />,
    'Pool': <span className="text-xl">🏊</span>,
    'Kitchen': <span className="text-xl">🍳</span>,
    'Workspace': <span className="text-xl">💼</span>,
  };

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const nights = Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * property.price : 0;
  };

  const nights = calculateTotal() / (property.price || 1);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b z-10 px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Share</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Save</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {/* Title */}
          <h1 className="text-3xl font-semibold mb-2">{property.title}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-gray-900" />
              <span className="font-semibold">{property.rating}</span>
              <span className="text-gray-600">({property.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{property.location.city}, {property.location.country}</span>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
            <div className="col-span-2 row-span-2">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Host Info */}
              <div className="pb-8 border-b">
                <h2 className="text-2xl font-semibold mb-4">
                  Hosted by {property.host.name}
                </h2>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span>{property.guests} guests</span>
                  <span>·</span>
                  <span>{property.bedrooms} bedrooms</span>
                  <span>·</span>
                  <span>{property.beds} beds</span>
                  <span>·</span>
                  <span>{property.bathrooms} bathrooms</span>
                </div>
                {property.host.superhost && (
                  <div className="mt-4 flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-rose-500 stroke-rose-500" />
                    <span className="font-semibold">{property.host.name} is a Superhost</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="pb-8 border-b">
                <h3 className="text-xl font-semibold mb-4">About this place</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="pb-8 border-b">
                <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-3">
                      <div className="text-gray-700">
                        {amenityIcons[amenity] || <span className="text-xl">✓</span>}
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cancellation */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Cancellation policy</h3>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 mt-1 text-gray-700" />
                  <p className="text-gray-700">{property.cancellationPolicy}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 border rounded-xl shadow-xl p-6">
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-semibold">${property.price}</span>
                    <span className="text-gray-600">/ night</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-2">
                    <Star className="w-4 h-4 fill-gray-900" />
                    <span className="font-semibold">{property.rating}</span>
                    <span className="text-gray-600">({property.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold mb-1">CHECK-IN</label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">CHECK-OUT</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">GUESTS</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      {Array.from({ length: property.guests }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'guest' : 'guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition mb-4">
                  Reserve
                </button>

                {checkIn && checkOut && nights > 0 && (
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="underline">${property.price} x {nights} nights</span>
                      <span>${property.price * nights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="underline">Service fee</span>
                      <span>${Math.round(property.price * nights * 0.14)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span>${calculateTotal() + Math.round(property.price * nights * 0.14)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
