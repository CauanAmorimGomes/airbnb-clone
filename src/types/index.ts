export interface Property {
  id: string;
  title: string;
  type: 'entire-place' | 'private-room' | 'shared-room';
  location: {
    city: string;
    country: string;
    coordinates: [number, number];
  };
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  host: {
    name: string;
    avatar: string;
    superhost: boolean;
  };
  amenities: string[];
  bedrooms: number;
  beds: number;
  bathrooms: number;
  guests: number;
  description: string;
  cancellationPolicy: string;
}

export interface SearchFilters {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  priceRange: [number, number];
  propertyType: string[];
  amenities: string[];
  bedrooms: number;
  beds: number;
  bathrooms: number;
  instantBook: boolean;
  superhost: boolean;
}
