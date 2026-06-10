import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Property } from '../types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue with Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapViewProps {
  properties: Property[];
  onPropertyClick: (property: Property) => void;
  selectedProperty?: Property | null;
}

const MapController: React.FC<{ properties: Property[] }> = ({ properties }) => {
  const map = useMap();

  useEffect(() => {
    if (properties.length > 0) {
      const bounds = L.latLngBounds(properties.map(p => p.location.coordinates));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [properties, map]);

  return null;
};

export const MapView: React.FC<MapViewProps> = ({ properties, onPropertyClick }) => {
  const defaultCenter: [number, number] = properties.length > 0
    ? properties[0].location.coordinates
    : [20, 0];

  return (
    <div className="h-full w-full">
      <MapContainer
        center={defaultCenter}
        zoom={3}
        className="h-full w-full rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController properties={properties} />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={property.location.coordinates}
            eventHandlers={{
              click: () => onPropertyClick(property)
            }}
          >
            <Popup>
              <div className="min-w-[200px]">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="font-semibold mb-1">{property.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {property.location.city}, {property.location.country}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">${property.price}/night</span>
                  <span className="text-sm">⭐ {property.rating}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
