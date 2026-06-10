import { useState, useMemo } from 'react';
import { Map } from 'lucide-react';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { SearchModal } from './components/SearchModal';
import { Filters } from './components/Filters';
import { PropertyCard } from './components/PropertyCard';
import { PropertyDetail } from './components/PropertyDetail';
import { MapView } from './components/MapView';
import { SEO } from './components/SEO';
import { properties } from './data/properties';
import { Property, SearchFilters } from './types';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMapView, setIsMapView] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [, setSelectedCategory] = useState('all');
  const [filters, setFilters] = useState<Partial<SearchFilters>>({
    location: '',
    checkIn: null,
    checkOut: null,
    guests: 1,
    priceRange: [0, 1000],
    propertyType: [],
    amenities: [],
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    instantBook: false,
    superhost: false
  });

  // Filter properties based on search and filters
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Location filter
      if (filters.location) {
        const searchLower = filters.location.toLowerCase();
        const matchLocation = 
          property.location.city.toLowerCase().includes(searchLower) ||
          property.location.country.toLowerCase().includes(searchLower) ||
          property.title.toLowerCase().includes(searchLower);
        if (!matchLocation) return false;
      }

      // Guests filter
      if (filters.guests && property.guests < filters.guests) return false;

      // Price filter
      if (filters.priceRange) {
        if (property.price > filters.priceRange[1]) return false;
      }

      // Property type filter
      if (filters.propertyType && filters.propertyType.length > 0) {
        if (!filters.propertyType.includes(property.type)) return false;
      }

      // Amenities filter
      if (filters.amenities && filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(amenity =>
          property.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }

      // Bedrooms filter
      if (filters.bedrooms && filters.bedrooms > 0) {
        if (property.bedrooms < filters.bedrooms) return false;
      }

      // Beds filter
      if (filters.beds && filters.beds > 0) {
        if (property.beds < filters.beds) return false;
      }

      // Bathrooms filter
      if (filters.bathrooms && filters.bathrooms > 0) {
        if (property.bathrooms < filters.bathrooms) return false;
      }

      // Superhost filter
      if (filters.superhost && !property.host.superhost) return false;

      return true;
    });
  }, [filters]);

  const handleSearch = (searchFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...searchFilters }));
  };

  const handleFiltersChange = (newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Generate dynamic SEO based on filters
  const generateSEO = () => {
    let title = 'Airbnb Clone - Find Your Perfect Stay';
    let description = 'Discover unique vacation rentals around the world.';

    if (filters.location) {
      title = `Vacation Rentals in ${filters.location} - Airbnb Clone`;
      description = `Find the perfect vacation rental in ${filters.location}. Browse ${filteredProperties.length} properties.`;
    }

    return { title, description };
  };

  const seoData = generateSEO();

  return (
    <div className="min-h-screen bg-white">
      <SEO title={seoData.title} description={seoData.description} />
      
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      <Categories onCategoryChange={setSelectedCategory} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Filters filters={filters} onFiltersChange={handleFiltersChange} />
            <span className="text-sm text-gray-600">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
            </span>
          </div>
          <button
            onClick={() => setIsMapView(!isMapView)}
            className={`flex items-center space-x-2 px-4 py-2 border rounded-lg font-semibold transition ${
              isMapView
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-gray-300 hover:border-gray-900'
            }`}
          >
            <Map className="w-4 h-4" />
            <span>{isMapView ? 'Hide Map' : 'Show Map'}</span>
          </button>
        </div>

        {/* Results */}
        {isMapView ? (
          <div className="h-[calc(100vh-280px)]">
            <MapView
              properties={filteredProperties}
              onPropertyClick={setSelectedProperty}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onClick={() => setSelectedProperty(property)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-semibold mb-2">No properties found</h3>
                <p className="text-gray-600">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
        initialFilters={filters}
      />

      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Safety information</a></li>
                <li><a href="#" className="hover:underline">Cancellation options</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Airbnb.org</a></li>
                <li><a href="#" className="hover:underline">Support refugees</a></li>
                <li><a href="#" className="hover:underline">Combating discrimination</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Hosting</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Try hosting</a></li>
                <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
                <li><a href="#" className="hover:underline">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Newsroom</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Investors</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <div className="mb-4 md:mb-0">
              © 2024 Airbnb Clone. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:underline">Privacy</a>
              <span>·</span>
              <a href="#" className="hover:underline">Terms</a>
              <span>·</span>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
