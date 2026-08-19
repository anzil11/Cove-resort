import React, { useEffect } from 'react';
import { PageId } from '../types';
import { RESORT_INFO } from '../data/resortData';

interface SEOProps {
  page: PageId;
  customTitle?: string;
  customDescription?: string;
}

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  path: string;
  ogImage: string;
}

const PAGE_META_CONFIG: Record<PageId, PageMeta> = {
  home: {
    title: "THE COVE LAKKIDI — Luxury Stream Side A-Frame Villa & Resort in Wayanad",
    description: "Experience quiet luxury at The Cove Lakkidi. Stream side 4-bedroom A-frame private villa, handcrafted pine wooden A/C suites, private natural stream bathing, and campfire hospitality in Wayanad, Kerala.",
    keywords: "The Cove Lakkidi, Wayanad resorts, Lakkidi resort, stream side villa Wayanad, A-frame villa Kerala, luxury wooden suites Wayanad, private stream resort, Vythiri resorts, Wayanad tourism",
    path: "/",
    ogImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85"
  },
  about: {
    title: "About Our Sanctuary | The Cove Lakkidi — Architecture, Nature & Heritage",
    description: "Discover the architectural philosophy, 700m elevation rainforest microclimate, and natural mountain stream preservation at The Cove Lakkidi in Old Vythiri, Wayanad.",
    keywords: "About The Cove Lakkidi, eco resort Wayanad, A-frame architecture Kerala, Old Vythiri resort history, natural stream resort, sustainable luxury Wayanad",
    path: "/about",
    ogImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85"
  },
  rooms: {
    title: "Suites & Villa Tariff | The Cove Lakkidi — Premium Wooden Accommodations",
    description: "Explore our Premium A/C Wooden Balcony & Bunk Suite, Stream Side Wooden Rooms, and Exclusive 4-BHK Villa Buyout. Transparent tariffs with complimentary breakfast and stream access.",
    keywords: "The Cove Lakkidi rooms, Wayanad villa booking, wooden suite with bunk bed, stream side rooms Wayanad, 4BHK villa buyout Wayanad, Lakkidi room tariff",
    path: "/rooms",
    ogImage: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=85"
  },
  gallery: {
    title: "Photo & Visual Gallery | The Cove Lakkidi — Glimpse into Serenity",
    description: "High-definition visual gallery showcasing our A-frame villa at dusk, pine wood bedroom interiors, crystal clear natural stream, campfire evenings, and misty Wayanad landscapes.",
    keywords: "The Cove Lakkidi gallery, Wayanad resort photos, A-frame cabin pictures, natural stream bath photos, Kerala resort gallery",
    path: "/gallery",
    ogImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
  },
  nearby: {
    title: "26 Nearby Attractions & Views | The Cove Lakkidi Local Travel Guide",
    description: "Explore all 26 tourist destinations and viewpoints around Lakkidi, Wayanad. From Teenzania Park (200m) and Chain Tree to Chembra Peak, 900 Kandi Glass Bridge, and Muthanga Wildlife.",
    keywords: "Wayanad tourist places, Lakkidi viewpoints, places near Lakkidi, Chembra Peak distance, 900 Kandi glass bridge, Pookode lake, Wayanad sightseeing guide",
    path: "/nearby",
    ogImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
  },
  contact: {
    title: "Contact Concierge & Reservations | The Cove Lakkidi — Reach Us 24/7",
    description: "Connect directly with The Cove Lakkidi concierge desk. Call +91 884822464, message on WhatsApp, or send an inquiry for instant room reservations and customized Wayanad itineraries.",
    keywords: "The Cove Lakkidi contact number, Lakkidi resort phone, Wayanad resort booking phone, how to reach The Cove Lakkidi, Old Vythiri resort location",
    path: "/contact",
    ogImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85"
  },
  'room-detail': {
    title: "Room Details & Direct Booking | The Cove Lakkidi Sanctuary",
    description: "View comprehensive room specifications, high-definition photo gallery, interactive availability calendar, and live booking engine for our wooden suites in Wayanad.",
    keywords: "The Cove Lakkidi room booking, Wayanad suite details, wooden cabin booking, online resort reservation Wayanad",
    path: "/rooms",
    ogImage: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=85"
  }
};

export const SEO: React.FC<SEOProps> = ({ page, customTitle, customDescription }) => {
  const meta = PAGE_META_CONFIG[page] || PAGE_META_CONFIG.home;
  const finalTitle = customTitle || meta.title;
  const finalDescription = customDescription || meta.description;

  useEffect(() => {
    // 1. Update Document Title
    document.title = finalTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Set Standard Meta Tags
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'keywords', meta.keywords);
    setMetaTag('name', 'author', 'The Cove Lakkidi Resorts');
    setMetaTag('name', 'robots', 'index, follow');

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:site_name', 'The Cove Lakkidi');
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:image', meta.ogImage);
    setMetaTag('property', 'og:url', window.location.href);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', meta.ogImage);

    // 6. Structured JSON-LD Schema (Hotel / Resort)
    let schemaScript = document.getElementById('json-ld-resort');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-resort';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Resort",
      "name": "The Cove Lakkidi",
      "alternateName": "The Cove Lakkidi Resorts & Villa",
      "description": "Stream Side A-Frame 04 Bedroom Private Villa and Luxury Wooden Suites in Lakkidi, Wayanad with attached natural stream bathing, campfire and barbecue.",
      "image": [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85"
      ],
      "telephone": RESORT_INFO.phone,
      "email": RESORT_INFO.email,
      "priceRange": "₹3,600 - ₹17,500",
      "currenciesAccepted": "INR, USD",
      "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Old Vythiri, Lakkidi",
        "addressLocality": "Wayanad",
        "addressRegion": "Kerala",
        "postalCode": "673576",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.5284,
        "longitude": 76.0407
      },
      "checkinTime": "14:00",
      "checkoutTime": "11:00",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Attached Natural Stream", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "A-Frame Wooden Architecture", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Campfire & BBQ Setup", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Complimentary Breakfast", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free High-Speed Wi-Fi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true }
      ],
      "starRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      }
    };

    schemaScript.textContent = JSON.stringify(structuredData);
  }, [page, finalTitle, finalDescription, meta]);

  return null;
};
