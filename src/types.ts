export type PageId = 'home' | 'about' | 'rooms' | 'gallery' | 'nearby' | 'contact' | 'room-detail';

export interface HeroSlide {
  id: string;
  image: string;
  tagline: string;
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  badge: string;
}

export interface Room {
  id: string;
  name: string;
  tagline: string;
  category: 'premium-ac' | 'streamside-ac' | 'streamside-non-ac' | 'entire-villa';
  priceINR: number;
  priceUSD: number;
  originalPriceINR?: number;
  space?: string;
  capacity: string;
  bed: string;
  view: string;
  acType: 'A/C' | 'Non-A/C' | 'Climate Controlled';
  description: string;
  fullDescription: string;
  images: string[];
  keyHighlights: string[];
  amenities: {
    icon: string;
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  hasBalcony: boolean;
  hasBunkBed: boolean;
  hasStreamView: boolean;
  isEntireVilla?: boolean;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  distanceKm: number;
  category: 'Viewpoint' | 'Nature & Lake' | 'Adventure' | 'Waterfall' | 'Heritage & Culture' | 'Wildlife & Flora';
  isPrivate?: boolean;
  duration: string;
  description: string;
  image: string;
  bestTimeToVisit?: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'villa' | 'pool' | 'nature';

  // category: 'villa' | 'rooms' | 'stream' | 'dining' | 'nature';
  image: string;
  caption: string;
  alt: string;
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  guests: number;
  adults: number;
  children: number;
  selectedRoomId: string;
  includeBarbeque: boolean;
  includeCampfire: boolean;
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
}
