import { Property } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Stunning Beachfront Villa',
    type: 'entire-place',
    location: {
      city: 'Malibu',
      country: 'United States',
      coordinates: [34.0259, -118.7798]
    },
    price: 450,
    rating: 4.9,
    reviews: 127,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Sarah Johnson',
      avatar: '👩‍💼',
      superhost: true
    },
    amenities: ['WiFi', 'Pool', 'Beach Access', 'Kitchen', 'Parking', 'Air Conditioning'],
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    guests: 8,
    description: 'Experience luxury living in this stunning beachfront villa with panoramic ocean views.',
    cancellationPolicy: 'Free cancellation for 48 hours'
  },
  {
    id: '2',
    title: 'Cozy Mountain Cabin',
    type: 'entire-place',
    location: {
      city: 'Aspen',
      country: 'United States',
      coordinates: [39.1911, -106.8175]
    },
    price: 280,
    rating: 4.8,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Michael Brown',
      avatar: '👨‍🦰',
      superhost: true
    },
    amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Parking', 'Heating', 'Mountain View'],
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    guests: 6,
    description: 'Escape to the mountains in this charming cabin surrounded by nature.',
    cancellationPolicy: 'Free cancellation for 48 hours'
  },
  {
    id: '3',
    title: 'Modern Downtown Loft',
    type: 'entire-place',
    location: {
      city: 'New York',
      country: 'United States',
      coordinates: [40.7128, -74.0060]
    },
    price: 195,
    rating: 4.7,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Emily Chen',
      avatar: '👩',
      superhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'Workspace', 'TV', 'Elevator'],
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    guests: 4,
    description: 'Stay in the heart of Manhattan in this stylish industrial loft.',
    cancellationPolicy: 'Moderate cancellation policy'
  },
  {
    id: '4',
    title: 'Tropical Paradise Bungalow',
    type: 'entire-place',
    location: {
      city: 'Bali',
      country: 'Indonesia',
      coordinates: [-8.3405, 115.0920]
    },
    price: 125,
    rating: 4.9,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Wayan Surya',
      avatar: '🧑',
      superhost: true
    },
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Garden', 'Outdoor Shower', 'Air Conditioning'],
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    guests: 4,
    description: 'Relax in this beautiful traditional Balinese bungalow with private pool.',
    cancellationPolicy: 'Free cancellation for 48 hours'
  },
  {
    id: '5',
    title: 'Luxury Paris Apartment',
    type: 'entire-place',
    location: {
      city: 'Paris',
      country: 'France',
      coordinates: [48.8566, 2.3522]
    },
    price: 320,
    rating: 4.8,
    reviews: 94,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Pierre Dubois',
      avatar: '👨‍🦱',
      superhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Balcony', 'Eiffel Tower View', 'Elevator', 'Heating'],
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    guests: 4,
    description: 'Experience Parisian elegance in this beautifully renovated apartment with Eiffel Tower views.',
    cancellationPolicy: 'Free cancellation for 48 hours'
  },
  {
    id: '6',
    title: 'Historic London Townhouse',
    type: 'entire-place',
    location: {
      city: 'London',
      country: 'United Kingdom',
      coordinates: [51.5074, -0.1278]
    },
    price: 275,
    rating: 4.6,
    reviews: 78,
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'James Wilson',
      avatar: '👨‍💼',
      superhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Fireplace', 'Garden', 'Heating', 'Workspace'],
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    guests: 6,
    description: 'Stay in a beautifully preserved Victorian townhouse in central London.',
    cancellationPolicy: 'Moderate cancellation policy'
  },
  {
    id: '7',
    title: 'Minimalist Tokyo Studio',
    type: 'private-room',
    location: {
      city: 'Tokyo',
      country: 'Japan',
      coordinates: [35.6762, 139.6503]
    },
    price: 85,
    rating: 4.7,
    reviews: 142,
    images: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Yuki Tanaka',
      avatar: '👩‍🦱',
      superhost: true
    },
    amenities: ['WiFi', 'Kitchen Access', 'Air Conditioning', 'Workspace'],
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    guests: 2,
    description: 'Experience authentic Tokyo living in this beautifully designed minimalist studio.',
    cancellationPolicy: 'Flexible cancellation'
  },
  {
    id: '8',
    title: 'Seaside Greek Villa',
    type: 'entire-place',
    location: {
      city: 'Santorini',
      country: 'Greece',
      coordinates: [36.3932, 25.4615]
    },
    price: 380,
    rating: 5.0,
    reviews: 68,
    images: [
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Nikos Papadopoulos',
      avatar: '👨',
      superhost: true
    },
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Sea View', 'Outdoor Dining', 'Air Conditioning'],
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    guests: 6,
    description: 'Stunning whitewashed villa with infinity pool and breathtaking caldera views.',
    cancellationPolicy: 'Free cancellation for 48 hours'
  },
  {
    id: '9',
    title: 'Desert Oasis in Dubai',
    type: 'entire-place',
    location: {
      city: 'Dubai',
      country: 'United Arab Emirates',
      coordinates: [25.2048, 55.2708]
    },
    price: 520,
    rating: 4.9,
    reviews: 112,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Ahmed Al-Rashid',
      avatar: '🧔',
      superhost: true
    },
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Gym', 'Parking', 'Air Conditioning', 'Concierge'],
    bedrooms: 5,
    beds: 6,
    bathrooms: 4,
    guests: 10,
    description: 'Luxury penthouse with panoramic city views and world-class amenities.',
    cancellationPolicy: 'Strict cancellation policy'
  },
  {
    id: '10',
    title: 'Rustic Tuscan Farmhouse',
    type: 'entire-place',
    location: {
      city: 'Tuscany',
      country: 'Italy',
      coordinates: [43.7696, 11.2558]
    },
    price: 240,
    rating: 4.8,
    reviews: 87,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop'
    ],
    host: {
      name: 'Maria Rossi',
      avatar: '👩‍🦳',
      superhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Garden', 'Vineyard', 'Fireplace', 'Parking'],
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    guests: 8,
    description: 'Authentic farmhouse in the heart of Tuscany surrounded by vineyards and olive groves.',
    cancellationPolicy: 'Moderate cancellation policy'
  }
];
