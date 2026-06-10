# Airbnb Clone 🏠

A modern, feature-rich Airbnb clone built with React, TypeScript, and Tailwind CSS, showcasing advanced search capabilities, interactive maps, and comprehensive SEO optimization.

## 🚀 Technologies

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React Leaflet** - Interactive maps
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

## ✨ Features

### 🔍 Advanced Search
- **Location Search** - Search by city, country, or property name
- **Date Selection** - Check-in and check-out date pickers
- **Guest Management** - Specify number of guests
- **Real-time Results** - Instant filtering as you search

### 🎛️ Comprehensive Filters
- **Price Range** - Adjustable price slider
- **Property Type** - Entire place, private room, or shared room
- **Rooms & Beds** - Filter by bedrooms, beds, and bathrooms
- **Amenities** - WiFi, Kitchen, Pool, Parking, AC, and more
- **Booking Options** - Instant book and Superhost filters
- **Active Filter Count** - Visual indicator of applied filters

### 🗺️ Interactive Map View
- **Leaflet Integration** - High-quality, interactive maps
- **Property Markers** - Visual property locations
- **Map Popups** - Quick property previews on marker click
- **Auto-fit Bounds** - Map automatically adjusts to show all properties
- **Toggle View** - Switch between grid and map views

### 🏡 Property Features
- **Image Galleries** - Multiple property images with navigation
- **Detailed Information** - Full property descriptions
- **Host Profiles** - Host name and Superhost status
- **Amenities List** - Complete amenity details
- **Rating System** - Star ratings and review counts
- **Favorite System** - Save properties to favorites
- **Price Calculator** - Dynamic pricing with dates and fees

### 📱 Responsive Design
- **Mobile-First** - Optimized for all screen sizes
- **Tablet Support** - Perfect layout on medium screens
- **Desktop Experience** - Full-featured desktop interface
- **Touch-Friendly** - Easy navigation on touch devices

### 🎯 SEO Optimization
- **Dynamic Meta Tags** - Updates based on search filters
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Rich Twitter previews
- **Semantic HTML** - Proper heading structure
- **Structured Data** - Search engine friendly markup
- **Canonical URLs** - Proper URL management

### 🎨 UI/UX Features
- **Category Browsing** - Quick category selection (Beach, Mountains, City, etc.)
- **Smooth Animations** - Polished transitions and hover effects
- **Modal Dialogs** - Clean search and filter modals
- **Loading States** - Smooth user experience
- **Empty States** - Helpful messages when no results
- **Sticky Header** - Always accessible navigation

### 💎 Additional Features
- **Property Details Page** - Full-screen property view
- **Booking Calculator** - Calculate total with service fees
- **Cancellation Policies** - Clear policy information
- **Footer Navigation** - Comprehensive site links
- **Professional Design** - Airbnb-inspired aesthetics

## 📊 Sample Data

The application includes 10 diverse properties from around the world:
- Beachfront villas in Malibu & Bali
- Mountain cabins in Aspen
- Urban lofts in New York & Tokyo
- European apartments in Paris & London
- Luxury properties in Dubai & Santorini
- Rural retreats in Tuscany

## 🎯 Key Highlights

### Advanced Search Algorithm
The search system filters properties based on:
- Location matching (city, country, title)
- Guest capacity requirements
- Price range constraints
- Property type preferences
- Amenity requirements
- Room and bed counts
- Superhost status

### Performance Optimizations
- **useMemo** hooks for expensive filtering operations
- **Lazy loading** for images
- **Efficient re-renders** with React best practices
- **Optimized bundle size** with code splitting

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where needed
- Screen reader friendly

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Main navigation header
│   ├── Categories.tsx       # Category filter bar
│   ├── SearchModal.tsx      # Advanced search modal
│   ├── Filters.tsx          # Filter panel
│   ├── PropertyCard.tsx     # Property grid item
│   ├── PropertyDetail.tsx   # Full property view
│   ├── MapView.tsx          # Interactive map
│   └── SEO.tsx             # SEO meta tags manager
├── data/
│   └── properties.ts        # Sample property data
├── types/
│   └── index.ts            # TypeScript interfaces
├── App.tsx                 # Main application
└── index.css              # Global styles
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🎨 Design Philosophy

This Airbnb clone follows modern web design principles:
- **Clean & Minimal** - Focus on content
- **Consistent** - Unified design language
- **Intuitive** - Easy to navigate
- **Performant** - Fast and responsive
- **Accessible** - Inclusive for all users

## 🔧 Customization

The application is highly customizable:
- Add more properties in `src/data/properties.ts`
- Modify filters in `src/components/Filters.tsx`
- Customize styles in Tailwind classes
- Extend TypeScript interfaces in `src/types/index.ts`

## 📈 Future Enhancements

Potential features to add:
- User authentication
- Real booking system
- Payment integration
- Review and rating system
- Host dashboard
- Multi-language support
- Currency conversion
- Calendar availability
- Real-time notifications

## 📝 License

This is a demonstration project built for educational purposes.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
