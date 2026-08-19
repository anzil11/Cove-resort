import { Room, Attraction, GalleryItem, HeroSlide } from '../types';
import coveAframeTwilight from '../assets/images/cove_aframe_twilight_1786990321192.jpg';
import bunkBedSuite from '../assets/images/bunk_bed_suite_1786990336851.jpg';
import pineBedroomBalcony from '../assets/images/pine_bedroom_balcony_1786990350976.jpg';
import coveAerialNight from '../assets/images/cove_aerial_night_1786990367663.jpg';
import starlitCampfireDeck from '../assets/images/starlit_campfire_deck_1786990379705.jpg';
import wayanadSunsetHills from '../assets/images/wayanad_sunset_hills_1786990394925.jpg';
import acwooden from '../assets/images/premium Ac wooden room with attached balcony and bunk bed room/WhatsApp Image 2026-08-18 at 12.48.31 (1).jpeg';
import acwooden2 from '../assets/images/premium Ac wooden room with attached balcony and bunk bed room/WhatsApp Image 2026-08-18 at 12.48.31.jpeg';
import acwooden3 from '../assets/images/premium Ac wooden room with attached balcony and bunk bed room/WhatsApp Image 2026-08-18 at 12.48.48.jpeg';

import acwoodenpr from '../assets/images/premium Ac wooden room/WhatsApp Image 2026-08-18 at 12.49.42.jpeg';
import acwoodenpr2 from '../assets/images/premium Ac wooden room/WhatsApp Image 2026-08-18 at 12.49.43 (1).jpeg';
import acwoodenpr3 from '../assets/images/premium Ac wooden room/WhatsApp Image 2026-08-18 at 12.49.43 (2).jpeg';
import acwoodenpr4 from '../assets/images/premium Ac wooden room/WhatsApp Image 2026-08-18 at 12.49.43.jpeg';

import streamac from '../assets/images/stream side Ac wooden room with attached balcony room/WhatsApp Image 2026-08-18 at 12.50.39 (1).jpeg';
import streamac1 from '../assets/images/stream side Ac wooden room with attached balcony room/WhatsApp Image 2026-08-18 at 12.50.39.jpeg';
import streamac2 from '../assets/images/stream side Ac wooden room with attached balcony room/WhatsApp Image 2026-08-18 at 12.50.40.jpeg';
// import streamac3 from '../assets/images/stream side Ac wooden room with attached balcony room';

import streamnonac from '../assets/images/stream side non Ac room/WhatsApp Image 2026-08-18 at 12.51.23.jpeg';
import streamnonac1 from '../assets/images/stream side non Ac room/WhatsApp Image 2026-08-18 at 12.51.24.jpeg';
import streamnonac2 from '../assets/images/stream side non Ac room/WhatsApp Image 2026-08-18 at 17.36.54.jpeg';

import otherPoolNight from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.27.57.jpeg';
import otherPoolAerial from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.27.58.jpeg';
import otherPoolClose from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.29.52.jpeg';
import otherInfinityPool from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.29.53.jpeg';
import otherPoolDeck from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.29.58.jpeg';
import otherMountainVista from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.30.04 (1).jpeg';
import otherCampfire from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.30.04.jpeg';
import otherVillaExterior from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.30.05.jpeg';
import otherVillaAerial from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.30.06 (1).jpeg';
import otherGardenPath from '../assets/images/other/WhatsApp Image 2026-07-14 at 19.30.06.jpeg';
import otherVillaDetail from '../assets/images/other/WhatsApp Image 2026-08-18 at 17.36.52.jpeg';

import honey from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.36 PM (1).jpeg';
import tea from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.37 PM (1).jpeg';
import chainTree from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.41 PM.jpeg';
import pookode from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.35 PM.jpeg';
import vythiripark from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.42 PM.jpeg';
import mudddyboots from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.36 PM (2).jpeg';
import karlad from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.37 PM (2).jpeg';
import chembraPeak from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.37 PM.jpeg';
import rippontea from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.38 PM.jpeg';
import kanthampara from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.40 PM (1).jpeg';
import banasura from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.38 PM (1).jpeg';
import menmutty from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.40 PM (2).jpeg';
import phantomRock from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.39 PM (1).jpeg';
import muesium from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.39 PM.jpeg';
import hltr from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.39 PM (2).jpeg';
import ancietJainTemple from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.42 PM (1).jpeg';
import mithangaWildlife from '../assets/images/nearby/WhatsApp Image 2026-08-19 at 10.30.41 PM (1).jpeg';

export const RESORT_INFO = {
  name: "THE COVE LAKKIDI",
  tagline: "Resorts & Nature Sanctuary",
  phone: "+91 884822464",
  displayPhone: "+91 884822464",
  whatsappNumber: "91884822464",
  email: "stay@thecovelakkidi.com",
  location: "Old Vythiri, Lakkidi, Wayanad, Kerala 673576, India",
  description: "A stream-side A-frame 4-bedroom private villa and luxury wooden suites nestled in the mist-clad rainforests of Lakkidi, Wayanad. Featuring attached natural stream bathing, warm pine wooden bedrooms, campfire, and bespoke eco-luxury.",
  elevation: "700m above sea level (Gateway to Wayanad)",
  weather: "18°C - 24°C Year-round Pleasant Misty Climate"
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: coveAframeTwilight,
    tagline: "700m Altitude • Gateway to Wayanad",
    title: "Discover Serenity.",
    highlight: "Iconic A-Frame Architecture",
    description: "Stream Side 4-Bedroom Private Villa and handcrafted wooden suites nestled in the mist-clad rainforest canopy of Old Vythiri.",
    ctaText: "Explore Suites & Villa",
    badge: "Sanctuary Overview"
  },
  {
    id: "slide-2",
    image: coveAerialNight,
    tagline: "Rainforest Night Sanctuary",
    title: "Enveloped by Forest Canopy.",
    highlight: "Deep Nature Immersion",
    description: "Illuminated A-frame cottages nestled peacefully amidst the untamed green slopes and misty drafts of Lakkidi.",
    ctaText: "View Aerial Haven",
    badge: "Aerial Rainforest View"
  },
  {
    id: "slide-3",
    image: bunkBedSuite,
    tagline: "Handcrafted Pine Timber Suites",
    title: "Warm Amber Comforts.",
    highlight: "Attic Balconies & Bunk Beds",
    description: "High-pitched cedar ceilings, private forest sit-outs, split air conditioning, and solid pine bunk beds for sublime relaxation.",
    ctaText: "View Accommodations",
    badge: "Luxury Wooden Suites"
  },
  {
    id: "slide-4",
    image: starlitCampfireDeck,
    tagline: "Starlit Rainforest Evenings",
    title: "Bonfires & Malabar Nights.",
    highlight: "Campfire & BBQ Station",
    description: "Gather around the crackling fire pit under starry skies with sizzling barbecue grills, local Wayanad delicacies, and music.",
    ctaText: "Plan Your Escape",
    badge: "Campfire & Experiences"
  }
];

export const ROOMS_DATA: Room[] = [
  {
    id: "premium-ac-wooden-balcony-bunk",
    name: "Premium A/C Wooden Room with Attached Balcony & Bunk Bed",
    tagline: "Spacious Pine Attic Suite with Private Forest Deck",
    category: "premium-ac",
    priceINR: 6900,
    priceUSD: 83,
    originalPriceINR: 7900,
    capacity: "Up to 4 Adults or Family (2 Adults + 2 Kids)",
    bed: "1 Plush King Bed + 1 Solid Wood Bunk Bed (2 Tiers)",
    view: "Panoramic Rainforest Canopy & Valley",
    acType: "A/C",
    hasBalcony: true,
    hasBunkBed: true,
    hasStreamView: true,
    description: "Crafted entirely with natural aromatic pine timber, this high-ceiling A-frame suite features an elevated bunk bed for kids or travel companions and an attached open-air teak balcony overlooking misty greenery.",
    fullDescription: "Perched within the upper level of the iconic A-frame architecture, this suite is our crown jewel for families and small groups. Breathe in the subtle cedar aroma as natural morning light filters through pitched triangular glass panes. Step out onto your private wooden balcony with fresh estate-brewed tea, or relax in the climate-controlled comfort after a day wandering the Lakkidi streams.",
    images: [
      acwooden3,
      acwooden2,
      acwooden,
      
    ],
    keyHighlights: [
      "Attached Private Timber Balcony with Valley View",
      "Handcrafted 2-Tier Bunk Bed + King Size Master Bed",
      "Split Air Conditioning & High-Speed Wi-Fi",
      "Welcome Drink & Complimentary Kerala Breakfast",
      "Direct steps to Attached Natural Stream"
    ],
    amenities: [
      {
        icon: "balcony",
        title: "Attached Teak Balcony",
        description: "Private wooden deck overlooking virgin rainforest trees and mountain mist."
      },
      {
        icon: "bed",
        title: "Artisanal Bunk Bed + King",
        description: "Sturdy custom wooden bunk bed ideal for group stays, plus a plush master bed."
      },
      {
        icon: "ac_unit",
        title: "Silent Split A/C",
        description: "Modern climate control system ensuring customized comfort throughout all seasons."
      },
      {
        icon: "tv",
        title: "Smart TV & Sound System",
        description: "Entertainment unit for cozy movie nights and ambient music."
      },
      {
        icon: "wifi",
        title: "High-Speed Wi-Fi",
        description: "Seamless connectivity throughout the villa and private room."
      },
      {
        icon: "free_breakfast",
        title: "Complimentary Breakfast",
        description: "Authentic hot Kerala breakfast prepared fresh with local organic produce."
      }
    ],
    specifications: [
      { label: "Layout", value: "A-Frame Attic Suite with Balcony" },
      { label: "Max Occupancy", value: "4 Guests" },
      { label: "Bed Configuration", value: "1 King Bed + 1 Bunk Bed" },
      { label: "Balcony", value: "Private Attached Balcony" },
      { label: "Climate", value: "Split A/C & Ceiling Fan" },
      { label: "Bathroom", value: "Ensuite with Rain Shower & Hot Water" }
    ]
  },
  {
    id: "premium-ac-wooden-room",
    name: "Premium A/C Wooden Room",
    tagline: "Romantic Timber Haven with Nature Views",
    category: "premium-ac",
    priceINR: 5199,
    priceUSD: 63,
    originalPriceINR: 5999,
    capacity: "2 Adults (Extra mattress on request)",
    bed: "Plush King Size Bed with Luxury Cotton Linens",
    view: "Tropical Forest & Landscaped Garden",
    acType: "A/C",
    hasBalcony: false,
    hasBunkBed: false,
    hasStreamView: true,
    description: "An intimate, all-wood sanctuary with warm amber lighting and floor-to-ceiling forest vistas. Designed for couples seeking peace, privacy, and quiet luxury in Wayanad.",
    fullDescription: "Immerse yourself in rich polished wood panelling, gentle forest sounds, and refined comforts. The room features a handcrafted King bed, soft ambient lighting, modern split air-conditioning, and an ensuite modern bathroom with 24/7 hot water sourced from mountain springs.",
    images: [
      acwoodenpr,
      acwoodenpr2,
      acwoodenpr3,
      acwoodenpr4
    ],
    keyHighlights: [
      "All-natural polished wood interiors",
      "King size bed with orthopedic mattress",
      "Whisper-quiet air conditioning",
      "Forest and stream soundscape",
      "Complimentary breakfast & welcome drink"
    ],
    amenities: [
      {
        icon: "king_bed",
        title: "Master King Bed",
        description: "Ultra-comfortable mattress dressed in crisp 400-thread count cotton."
      },
      {
        icon: "ac_unit",
        title: "Split A/C & Heating",
        description: "Maintains the perfect ambient temperature day and night."
      },
      {
        icon: "water_drop",
        title: "24/7 Hot Water Shower",
        description: "Ensuite modern bathroom with luxury rain shower and toiletries."
      },
      {
        icon: "wifi",
        title: "Fast Wi-Fi",
        description: "Reliable internet for remote work or peaceful streaming."
      },
      {
        icon: "pets",
        title: "Pet Friendly",
        description: "Your furry companions are warmly welcomed to explore the grounds."
      },
      {
        icon: "room_service",
        title: "In-Room Dining",
        description: "Fresh homemade Kerala delicacies delivered right to your door."
      }
    ],
    specifications: [
      { label: "Layout", value: "Timber Pine Master Bedroom" },
      { label: "Max Occupancy", value: "2 Adults + 1 Child" },
      { label: "Bed Configuration", value: "1 King Size Bed" },
      { label: "View", value: "Garden & Forest Edge" },
      { label: "Climate", value: "Split A/C & Natural Ventilation" },
      { label: "Bathroom", value: "Private Ensuite with Modern Fittings" }
    ]
  },
  {
    id: "streamside-ac-wooden-balcony",
    name: "Stream Side A/C Wooden Room with Attached Balcony",
    tagline: "Waterfront Serenity with Private Rushing Stream Deck",
    category: "streamside-ac",
    priceINR: 5900,
    priceUSD: 71,
    originalPriceINR: 6900,
    capacity: "2-3 Adults",
    bed: "King Bed + Private Balcony Lounge",
    view: "Direct Attached Natural Stream & Waterfall Cascade",
    acType: "A/C",
    hasBalcony: true,
    hasBunkBed: false,
    hasStreamView: true,
    description: "Positioned directly above the crystal-clear mountain stream, this room allows you to fall asleep to the hypnotic melody of running water and wake up to emerald forest canopy views.",
    fullDescription: "Step through wide glass doors straight onto your private overwater balcony. Watch the cool mountain stream meander beneath pebble banks while sipping your morning filter coffee. Complete with split air conditioning, warm wooden architecture, comfortable seating, and immediate access to the natural stream bathing pools.",
    images: [
      streamac2,
      streamac1,
      streamac
    ],
    keyHighlights: [
      "Directly overlooks the property's natural flowing stream",
      "Private attached wooden balcony with lounge chairs",
      "Easy private pathway leading into the natural stream",
      "Air-conditioned interior with rustic wood aesthetics",
      "Bonfire and BBQ arrangement available on request"
    ],
    amenities: [
      {
        icon: "waves",
        title: "Attached Natural Stream",
        description: "Direct stream view and safe natural bathing spot within steps."
      },
      {
        icon: "deck",
        title: "Private Stream Balcony",
        description: "Sit-out deck directly over the water with plush outdoor seating."
      },
      {
        icon: "ac_unit",
        title: "Climate Control",
        description: "Modern silent split air-conditioning system."
      },
      {
        icon: "local_fire_department",
        title: "Campfire & BBQ Option",
        description: "Evening private bonfire pit and barbecue setups available."
      },
      {
        icon: "free_breakfast",
        title: "Breakfast Included",
        description: "Complimentary traditional South Indian and Continental spread."
      },
      {
        icon: "music_note",
        title: "Music System Access",
        description: "Outdoor and indoor music speakers for evening leisure."
      }
    ],
    specifications: [
      { label: "Layout", value: "Waterfront Wooden Suite" },
      { label: "Max Occupancy", value: "3 Adults" },
      { label: "Bed Configuration", value: "1 King Size Bed" },
      { label: "Balcony", value: "Attached Stream-Facing Balcony" },
      { label: "Location", value: "Ground / Water Level" },
      { label: "Bathroom", value: "Spacious Ensuite with Shower" }
    ]
  },
  {
    id: "streamside-non-ac-deluxe",
    name: "Stream Side Non-A/C Deluxe Room",
    tagline: "Eco-Conscious Comfort Cooled by Mountain Mist & Water Breeze",
    category: "streamside-non-ac",
    priceINR: 3900,
    priceUSD: 47,
    originalPriceINR: 4600,
    capacity: "2 Adults",
    bed: "Queen Size Comfort Bed with Artisan Headboard",
    view: "Stream Path & Tropical Coffee Plantation",
    acType: "Non-A/C",
    hasBalcony: false,
    hasBunkBed: false,
    hasStreamView: true,
    description: "Experience genuine hill station living. Lakkidi's 700m elevation keeps temperatures cool and crisp naturally, while the nearby stream provides refreshing pure air.",
    fullDescription: "Thoughtfully designed for travelers who appreciate natural mountain breezes and sustainable eco-hospitality. Features modern tasteful interiors with leaf-motif headboards, high-speed ceiling fans, wide screened windows for natural airflow, attached bathroom with continuous hot water, and instant stream access.",
    images: [
      streamnonac,
      streamnonac1,
      streamnonac2
    ],
    keyHighlights: [
      "Naturally cool year-round climate (18°C - 23°C)",
      "Minimalist deluxe room with comfortable bed & work desk",
      "Direct walking path to the natural stream",
      "Free high-speed Wi-Fi & complimentary breakfast",
      "Budget-friendly without compromising tranquility"
    ],
    amenities: [
      {
        icon: "nature",
        title: "Eco Natural Airflow",
        description: "Wide screened cross-ventilation windows catching mountain drafts."
      },
      {
        icon: "waves",
        title: "Stream Proximity",
        description: "Just 20 steps to the natural stream and seating rocks."
      },
      {
        icon: "shower",
        title: "Hot Water Facility",
        description: "Instant hot water geyser for refreshing warm showers in cold misty mornings."
      },
      {
        icon: "wifi",
        title: "High-Speed Wi-Fi",
        description: "Stay connected smoothly even in deep nature."
      },
      {
        icon: "local_cafe",
        title: "Welcome Refreshments",
        description: "Special herbal welcome drinks and local Wayanad coffee."
      },
      {
        icon: "free_breakfast",
        title: "Kerala Breakfast",
        description: "Included in your stay each morning."
      }
    ],
    specifications: [
      { label: "Layout", value: "Stream Bank Deluxe Room" },
      { label: "Max Occupancy", value: "2 Adults" },
      { label: "Bed Configuration", value: "1 Queen Size Bed" },
      { label: "Cooling", value: "High-Speed Fan & Mountain Breeze" },
      { label: "View", value: "Stream Bank & Plantation" },
      { label: "Bathroom", value: "Private Attached Bathroom" }
    ]
  },
  // {
  //   id: "streamside-aframe-4bhk-villa",
  //   name: "Stream Side A-Frame 04 Bedroom Private Villa",
  //   tagline: "Exclusive Full Villa Buyout — The Ultimate Private Sanctuary",
  //   category: "entire-villa",
  //   priceINR: 21899,
  //   priceUSD: 260,
  //   originalPriceINR: 25500,
  //   capacity: "Up to 12-16 Guests (Ideal for Family Gatherings & Corporate Retreats)",
  //   bed: "4 Private Bedrooms (2 Wooden A/C + 2 Stream Non-A/C + Bunk Beds)",
  //   view: "360° Private Stream, Forest Canopy & Mountain Slopes",
  //   acType: "Climate Controlled",
  //   hasBalcony: true,
  //   hasBunkBed: true,
  //   hasStreamView: true,
  //   isEntireVilla: true,
  //   description: "Reserve the entire iconic A-frame property exclusively for your group. 4 full bedrooms, attached natural stream, private campfire courtyard, barbecue station, and dedicated concierge.",
  //   fullDescription: "The ultimate private vacation in Wayanad. The Cove Lakkidi's full 4-bedroom A-frame estate transforms into your private luxury home. Enjoy complete privacy, unhindered stream bathing, starlit evening bonfires, live barbecue grilling on the stone patio, and personalized meals crafted for your group.",
  //   images: [
  //     coveAframeTwilight,
  //     coveAerialNight,
  //     bunkBedSuite,
  //     pineBedroomBalcony,
  //     starlitCampfireDeck
  //   ],
  //   keyHighlights: [
  //     "100% Exclusive access to all 4 bedrooms & private grounds",
  //     "Private attached natural stream bank with safety steps",
  //     "Private Stone Patio with Bonfire Pit & BBQ Setup",
  //     "Accommodates 12 to 16 guests with extra bedding",
  //     "Dedicated caretaker and customized meal packages",
  //     "Pet friendly with ample lawn and running space"
  //   ],
  //   amenities: [
  //     {
  //       icon: "villa",
  //       title: "Entire Private Property",
  //       description: "No other guests. Total exclusivity and seclusion in the rainforest."
  //     },
  //     {
  //       icon: "local_fire_department",
  //       title: "Campfire & BBQ Station",
  //       description: "Private night fire pit with seating logs and barbecue grill equipment."
  //     },
  //     {
  //       icon: "waves",
  //       title: "Private Stream Bank",
  //       description: "Exclusive access to the crystal clear flowing stream right on property."
  //     },
  //     {
  //       icon: "music_note",
  //       title: "Party Sound System",
  //       description: "High-grade Bluetooth music system and ambient lighting."
  //     },
  //     {
  //       icon: "free_breakfast",
  //       title: "Full Group Breakfast",
  //       description: "Grand complimentary breakfast for all staying guests."
  //     },
  //     {
  //       icon: "pets",
  //       title: "Pet Friendly Estate",
  //       description: "Gated estate where pets can safely roam and play."
  //     }
  //   ],
  //   specifications: [
  //     { label: "Layout", value: "04 Bedroom Private Villa" },
  //     { label: "Bedrooms", value: "4 Distinct Themed Bedrooms" },
  //     { label: "Bathrooms", value: "4 Ensuite Bathrooms with Geysers" },
  //     { label: "Capacity", value: "12 - 16 Guests" },
  //     { label: "Outdoor Area", value: "Private Stream Bank, Patio & Campfire Area" },
  //     { label: "Parking", value: "Private parking for 4-5 vehicles on-site" }
  //   ]
  // }
];

// All 26 Nearby Attractions from the PDF
export const ATTRACTIONS_DATA: Attraction[] = [
  {
    id: "teenzania-park",
    name: "Teenzania Park",
    distance: "200 m",
    distanceKm: 0.2,
    category: "Nature & Lake",
    duration: "2 min walk",
    description: "Quaint local nature park located directly within walking distance from the villa, ideal for peaceful morning strolls.",
    image: "https://static.where-e.com/India/Wayanad/Vayittiri/Teenzania-Adventure-Park_70b5ea6da57e636e19908f4bdd698e06.jpg",
    tags: ["Walking Distance", "Morning Stroll", "Family Friendly"]
  },
  {
    id: "chain-tree",
    name: "Chain Tree",
    distance: "0.5 Km",
    distanceKm: 0.5,
    category: "Heritage & Culture",
    duration: "5 min walk / 1 min drive",
    description: "Famous historical ficus tree bounded by a heavy chain with a legendary folklore about the tribal youth Karinthandan who guided the British through the Thamarassery ghat.",
    image: chainTree,
    tags: ["Historical Legend", "Cultural Landmark", "Must Visit"]
  },
  {
    id: "lakkidi-view-point",
    name: "Lakkidi View Point",
    distance: "1 Km",
    distanceKm: 1.0,
    category: "Viewpoint",
    duration: "3 min drive",
    description: "Known as the 'Gateway of Wayanad', perched atop Thamarassery Ghat with breathtaking bird's eye views of 9 hairpin curves and deep mist-swirled valleys.",
    image: "https://imgs.search.brave.com/-_L7hnyYFyQdORBbwwSTXpOuMvLyv3-eWbb6SrPSoR8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2RuLnRyYXZlamFy/LmNvbS9zdG9yYWdl/L2luZGlhX2F0dHJh/Y3Rpb25fdG91cl9p/bWFnZS8xNzU5MTMy/MTc0XzY4ZGEzYTBl/YTMxZTQud2VicA",
    tags: ["Sunset Spot", "Misty Valley", "Photography"]
  },
  {
    id: "enn-ooru",
    name: "Enn Ooru (Tribal Heritage Village)",
    distance: "1 Km",
    distanceKm: 1.0,
    category: "Heritage & Culture",
    duration: "4 min drive",
    description: "A vibrant tribal heritage village showcasing traditional tribal huts, authentic ethnic culinary experiences, handicrafts, and cultural art.",
    image: "https://www.dtpcwayanad.com/uploads/picture_gallery/gallery_images/en-ooru-1920-20250801093811138371.webp",
    tags: ["Ethnic Culture", "Artisan Crafts", "Traditional Food"]
  },
  {
    id: "wayanad-ultra-park",
    name: "Wayanad Ultra Park",
    distance: "1 Km",
    distanceKm: 1.0,
    category: "Adventure",
    isPrivate: true,
    duration: "4 min drive",
    description: "Exciting adventure and recreational zone featuring outdoor games, trampoline activities, rope bridges, and panoramic viewpoints.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/03/39/d3/caption.jpg?w=1400&h=-1&s=1",
    tags: ["Adventure", "Games", "Private Park"]
  },
  {
    id: "pookode-lake",
    name: "Pookode Lake",
    distance: "1.5 Km",
    distanceKm: 1.5,
    category: "Nature & Lake",
    duration: "5 min drive",
    description: "Scenic natural freshwater lake nestled amidst evergreen forests and western ghat hills, offering pedal boating, an aquarium, and spice shopping.",
    image: pookode,
    tags: ["Boating", "Freshwater Lake", "Lotus Flowers"]
  },
  {
    id: "bee-craft-honey-museum",
    name: "Bee Craft Honey Museum",
    distance: "2.8 Km",
    distanceKm: 2.8,
    category: "Heritage & Culture",
    isPrivate: true,
    duration: "7 min drive",
    description: "Interactive educational honey museum exhibiting live bee colonies, pure forest honey extraction demonstrations, and natural beeswax products.",
    image: honey,
    tags: ["Honey Tasting", "Educational", "Private Museum"]
  },
  {
    id: "vythiri-adventure-park",
    name: "Vythiri Adventure Park",
    distance: "5 Km",
    distanceKm: 5.0,
    category: "Adventure",
    isPrivate: true,
    duration: "10 min drive",
    description: "Thrilling nature adventure hub with canopy ziplining, giant swings, paintball, archery, and off-road ATV trails.",
    image: vythiripark,
    tags: ["Zipline", "ATV Rides", "Giant Swing"]
  },
  {
    id: "muddy-boots-zipline",
    name: "Muddy Boots Zip Lane",
    distance: "11 Km",
    distanceKm: 11.0,
    category: "Adventure",
    duration: "20 min drive",
    description: "South India's longest and most exhilarating tea plantation zipline gliding high above sprawling emerald slopes.",
    image: mudddyboots,
    tags: ["Longest Zipline", "Tea Garden Glide", "High Adrenaline"]
  },
  {
    id: "tea-museum",
    name: "Tea Museum Wayanad",
    distance: "12 Km",
    distanceKm: 12.0,
    category: "Heritage & Culture",
    duration: "25 min drive",
    description: "Historic 1911 wooden tea factory turned museum showcasing the century-old evolution of Wayanad tea production and tea tasting sessions.",
    image: tea,
    tags: ["Tea Tasting", "Colonial History", "Factory Tour"]
  },
  {
    id: "karlad-lake",
    name: "Karlad Lake Adventure Centre",
    distance: "24 Km",
    distanceKm: 24.0,
    category: "Nature & Lake",
    duration: "45 min drive",
    description: "Second largest freshwater lake in Wayanad equipped with thrilling cross-lake zipline, kayaking, bamboo rafting, and rock climbing.",
    image: karlad,
    tags: ["Kayaking", "Cross-Lake Zipline", "Water Sports"]
  },
  {
    id: "chembra-peak",
    name: "Chembra Peak & Heart Lake",
    distance: "27 Km",
    distanceKm: 27.0,
    category: "Viewpoint",
    duration: "50 min drive",
    description: "The highest peak in Wayanad (2,100m) famous for its misty trekking trails and the legendary heart-shaped perennial lake nestled midway.",
    image: chembraPeak,
    tags: ["Heart Lake", "Trekking", "Highest Peak"]
  },
  {
    id: "rippon-tea-factory",
    name: "Rippon Tea Factory",
    distance: "27 Km",
    distanceKm: 27.0,
    category: "Heritage & Culture",
    duration: "50 min drive",
    description: "Expansive 450-hectare British colonial tea estate perched at 2,000 ft, producing some of South India's finest Orthodox and CTC teas.",
    image: rippontea,
    tags: ["Tea Plantation", "Scenic Hills", "Shopping"]
  },
  {
    id: "kanthanpara-waterfall",
    name: "Kanthanpara Waterfall",
    distance: "28 Km",
    distanceKm: 28.0,
    category: "Waterfall",
    duration: "55 min drive",
    description: "Picturesque, less-crowded forest cascade surrounded by tea gardens and bamboo groves, offering tranquil natural swimming spots.",
    image: kanthampara,
    tags: ["Secluded Waterfall", "Natural Pool", "Tea Garden Setting"]
  },
  {
    id: "banasura-dam",
    name: "Banasura Sagar Dam",
    distance: "29 Km",
    distanceKm: 29.0,
    category: "Nature & Lake",
    duration: "55 min drive",
    description: "The largest earth dam in India and second largest in Asia, featuring picturesque tiny islands set against the colossal Banasura mountain backdrop and speed boating.",
    image: banasura,
    tags: ["Speed Boating", "Earth Dam", "Floating Islands"]
  },
  // {
  //   id: "karapuzha-dam",
  //   name: "Karapuzha Dam & Adventure Park",
  //   distance: "30 Km",
  //   distanceKm: 30.0,
  //   category: "Adventure",
  //   duration: "1 hr drive",
  //   description: "Modern reservoir attraction boasting manicured rose gardens, longest hanging rope bridge, giant swings, and children's amusement park.",
  //   image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
  //   tags: ["Hanging Bridge", "Rose Gardens", "Family Park"]
  // },
  // {
  //   id: "900-kandi-eco-park",
  //   name: "900 Kandi Eco Park & Glass Bridge",
  //   distance: "30 Km",
  //   distanceKm: 30.0,
  //   category: "Adventure",
  //   isPrivate: true,
  //   duration: "1 hr drive",
  //   description: "Deep jungle paradise reached by 4x4 off-road jeep, famous for India's sky glass bridge suspended 100 feet above dense rainforest canopy.",
  //   image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
  //   tags: ["Glass Bridge", "Off-Road Jeep Trek", "Sky Walk"]
  // },
  {
    id: "meenmutty-waterfall",
    name: "Meenmutty Waterfall",
    distance: "31 Km",
    distanceKm: 31.0,
    category: "Waterfall",
    duration: "1 hr 5 min drive",
    description: "Wayanad's most spectacular 3-tiered waterfall cascading down 300 meters amidst untamed wilderness and rocky gorges.",
    image: menmutty,
    tags: ["3-Tiered Falls", "Jungle Trek", "Thunderous Cascade"]
  },
  // {
  //   id: "soochipara-waterfall",
  //   name: "Soochipara (Sentinel Rock) Waterfall",
  //   distance: "32 Km",
  //   distanceKm: 32.0,
  //   category: "Waterfall",
  //   duration: "1 hr 10 min drive",
  //   description: "Magnificent waterfall dropping onto massive granite rocks where water sprays into refreshing misty natural pool chambers.",
  //   image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
  //   tags: ["Rock Climbing", "Natural Pool Bath", "Forest Trek"]
  // },
  {
    id: "phantom-rock",
    name: "Phantom Rock (Cheengeri)",
    distance: "34 Km",
    distanceKm: 34.0,
    category: "Viewpoint",
    duration: "1 hr 15 min drive",
    description: "Naturally formed skull-shaped metamorphic rock formation sitting atop mountain crest with 360-degree viewpoints.",
    image: phantomRock,
    tags: ["Geological Wonder", "Sunset Vista", "Trekking Trail"]
  },
  {
    id: "wayanad-heritage-museum",
    name: "Wayanad Heritage Museum (Ambalavayal)",
    distance: "36 Km",
    distanceKm: 36.0,
    category: "Heritage & Culture",
    duration: "1 hr 15 min drive",
    description: "One of Kerala's most significant archaeological museums holding tribal relics, megalithic pottery, hero stones (Veerakkallu), and 2nd-century artifacts.",
    image: muesium,
    tags: ["Archaeological Relics", "Megalithic Art", "Ancient History"]
  },
  {
    id: "banasura-hill",
    name: "Banasura Hill Trek",
    distance: "38 Km",
    distanceKm: 38.0,
    category: "Viewpoint",
    duration: "1 hr 20 min drive",
    description: "Towering peak offering one of the most adventurous trekking trails through shola forests and rolling grasslands.",
    image: hltr,
    tags: ["Challenging Trek", "Shola Forest", "Grasslands"]
  },
  {
    id: "ancient-jain-temple",
    name: "Ancient Jain Temple (Sultan Bathery)",
    distance: "38 Km",
    distanceKm: 38.0,
    category: "Heritage & Culture",
    duration: "1 hr 20 min drive",
    description: "13th-century granite temple showcasing exquisite Hoysala and Vijayanagara architectural carvings, later used as an ammunition battery by Tipu Sultan.",
    image: ancietJainTemple,
    tags: ["13th Century Architecture", "Granite Carvings", "Historic Temple"]
  },
  // {
  //   id: "edakkal-caves",
  //   name: "Edakkal Caves (Ambikuthi Mala)",
  //   distance: "39 Km",
  //   distanceKm: 39.0,
  //   category: "Heritage & Culture",
  //   duration: "1 hr 25 min drive",
  //   description: "World-renowned pre-historic rock cleft shelter housing petroglyphs and Neolithic engravings dating back to 6,000 BCE.",
  //   image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  //   tags: ["Neolithic Rock Art", "Stone Age Petroglyphs", "Global Heritage"]
  // },
  // {
  //   id: "kuruva-island",
  //   name: "Kuruva Island (Kuruvadweep)",
  //   distance: "48 Km",
  //   distanceKm: 48.0,
  //   category: "Nature & Lake",
  //   duration: "1 hr 45 min drive",
  //   description: "A 950-acre protected river delta comprising uninhabited islets on the Kabini River with bamboo rafting, rare orchids, and indigenous bird species.",
  //   image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  //   tags: ["Bamboo Rafting", "Kabini River Delta", "Botanical Sanctuary"]
  // },
  {
    id: "muthanga-wildlife",
    name: "Muthanga Wildlife Sanctuary",
    distance: "53 Km",
    distanceKm: 53.0,
    category: "Wildlife & Flora",
    duration: "1 hr 50 min drive",
    description: "Part of Nilgiri Biosphere Reserve offering thrilling morning jeep safaris to spot wild Asian elephants, spotted deer, bison, peacocks, and occasional leopards.",
    image: mithangaWildlife,
    tags: ["Wild Elephant Safari", "Nilgiri Biosphere", "Forest Department Jeep"]
  }
];

export const RESORT_AMENITIES = [
  {
    icon: "waves",
    title: "Attached Natural Stream",
    highlight: "Zero-footprint mountain waters",
    description: "Direct safe stone steps from the villa leading down into a cool, crystal-clear flowing stream surrounded by wild ferns."
  },
  {
    icon: "cottage",
    title: "A-Frame Wooden Architecture",
    highlight: "Handcrafted pine timber",
    description: "Distinctive steep-pitched A-frame design with dramatic triangular windows and natural thermal insulation."
  },
  {
    icon: "local_fire_department",
    title: "Campfire & Barbeque",
    highlight: "Starry rainforest nights",
    description: "Stone outdoor fire pit with complimentary firewood logs and marinated barbecue grilling available upon request."
  },
  {
    icon: "free_breakfast",
    title: "Complimentary Breakfast",
    highlight: "Farm-to-table cuisine",
    description: "Enjoy steaming traditional appams, puttu with kadala curry, idlis, and continental fruit platters."
  },
  {
    icon: "wifi",
    title: "High-Speed Wi-Fi",
    highlight: "Workation ready",
    description: "Seamless optical fiber internet throughout the bedrooms, balcony decks, and riverside patio."
  },
  {
    icon: "pets",
    title: "100% Pet Friendly",
    highlight: "Bring your furry friends",
    description: "Spacious private grounds, safe garden spaces, and a welcoming environment for all pet companions."
  },
  {
    icon: "volume_up",
    title: "TV & Music System",
    highlight: "Private entertainment",
    description: "High-fidelity audio systems and smart TV displays for movies, relaxing jazz, or intimate gatherings."
  },
  {
    icon: "local_bar",
    title: "Welcome Drink",
    highlight: "Warm Kerala hospitality",
    description: "Refreshing herbal spices and seasonal mountain fruit cooler served upon your arrival."
  }
];


export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Luxury Pool at Night",
    category: "pool",
    image: otherPoolNight,
    caption: "The beautifully illuminated pool creating a serene atmosphere beneath the evening sky.",
    alt: "Luxury swimming pool illuminated at night"
  },
  {
    id: "g2",
    title: "Aerial Pool & Villa View",
    category: "pool",
    image: otherPoolAerial,
    caption: "Aerial view showcasing the resort pool, surrounding greenery, and villa spaces.",
    alt: "Aerial view of resort swimming pool surrounded by greenery"
  },
  {
    id: "g3",
    title: "Poolside Escape",
    category: "pool",
    image: otherPoolClose,
    caption: "A close-up view of the inviting pool designed for a relaxing getaway.",
    alt: "Close view of luxury resort swimming pool"
  },
  {
    id: "g4",
    title: "Infinity Pool",
    category: "pool",
    image: otherInfinityPool,
    caption: "A stunning infinity pool overlooking the lush natural surroundings.",
    alt: "Infinity swimming pool overlooking green landscape"
  },
  {
    id: "g5",
    title: "Relaxing Pool Deck",
    category: "pool",
    image: otherPoolDeck,
    caption: "A spacious pool deck offering the perfect setting to unwind and enjoy the surroundings.",
    alt: "Resort pool deck with swimming pool and seating area"
  },
  {
    id: "g6",
    title: "Misty Mountain Vista",
    category: "nature",
    image: otherMountainVista,
    caption: "Beautiful mountain views surrounded by the lush greenery and mist of Wayanad.",
    alt: "Misty green mountain landscape in Wayanad"
  },
  {
    id: "g7",
    title: "Outdoor Campfire",
    category: "nature",
    image: otherCampfire,
    caption: "A cozy outdoor campfire setting for peaceful evenings surrounded by nature.",
    alt: "Outdoor campfire seating area surrounded by greenery"
  },
  {
    id: "g8",
    title: "Villa Exterior",
    category: "villa",
    image: otherVillaExterior,
    caption: "The elegant villa exterior blending contemporary comfort with the surrounding natural landscape.",
    alt: "Luxury villa exterior surrounded by greenery"
  },
  {
    id: "g9",
    title: "Villa from Above",
    category: "villa",
    image: otherVillaAerial,
    caption: "Aerial perspective of the villa nestled within the lush landscape.",
    alt: "Aerial view of luxury villa surrounded by nature"
  },
  {
    id: "g10",
    title: "Garden Pathway",
    category: "nature",
    image: otherGardenPath,
    caption: "A peaceful garden pathway winding through the property's lush green surroundings.",
    alt: "Garden pathway surrounded by lush tropical greenery"
  },
  {
    id: "g11",
    title: "Villa Detail",
    category: "villa",
    image: otherVillaDetail,
    caption: "A detailed view highlighting the villa's architecture and refined design.",
    alt: "Detailed view of luxury villa architecture"
  }
];


// export const GALLERY_ITEMS: GalleryItem[] = [
//   {
//     id: "g1",
//     title: "The Iconic A-Frame Villa at Twilight",
//     category: "villa",
//     image: coveAframeTwilight,
//     caption: "The illuminated A-frame architectural facade glowing warmly with star sconces and courtyard dining amidst Wayanad's emerald jungle.",
//     alt: "A-Frame wooden villa illuminated at dusk nestled in rainforest"
//   },
//   {
//     id: "g2",
//     title: "Canopy Aerial Sanctuary at Night",
//     category: "villa",
//     image: coveAerialNight,
//     caption: "Bird's-eye drone view of illuminated wooden A-frame cottages nestled deep within the misty tropical canopy of Lakkidi.",
//     alt: "Drone aerial night view of A-frame cottages in Wayanad rainforest"
//   },
//   {
//     id: "g3",
//     title: "Premium A/C Wooden Attic & Bunk Bed Suite",
//     category: "rooms",
//     image: bunkBedSuite,
//     caption: "High pitched pine roof, modern chandelier, plush King master bed and solid pine loft bunk bed with steel ladder.",
//     alt: "Pine wooden bedroom interior with loft bunk bed and chandelier"
//   },
//   {
//     id: "g4",
//     title: "Handcrafted Wooden Balcony Suite",
//     category: "rooms",
//     image: pineBedroomBalcony,
//     caption: "Natural pine wall paneling, skylights, king bed, and glass sliding door leading to private forest sit-out balcony.",
//     alt: "Pine wooden room with balcony view and skylights"
//   },
//   {
//     id: "g5",
//     title: "Starlit Campfire & BBQ Patio Deck",
//     category: "nature",
//     image: starlitCampfireDeck,
//     caption: "Cozy timber chairs surrounding the roaring fire pit with sunset refreshments and ambient garden lanterns.",
//     alt: "Outdoor campfire patio with wooden chairs under starry sky"
//   },
//   {
//     id: "g6",
//     title: "Golden Hour Misty Mountain Vista",
//     category: "nature",
//     image: wayanadSunsetHills,
//     caption: "Spectacular sunset sunbeams breaking over rolling green ridges and misty tea valleys of Lakkidi, Wayanad.",
//     alt: "Golden hour sunset over misty Wayanad hills and valleys"
//   },
//   {
//     id: "g7",
//     title: "Crystal Clear Natural Stream",
//     category: "stream",
//     image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
//     caption: "The attached mountain stream cascading gently over smoothed river boulders right along the property perimeter.",
//     alt: "Fresh crystal water stream running through forest"
//   },
//   {
//     id: "g8",
//     title: "Farm-Fresh Kerala Breakfast",
//     category: "dining",
//     image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85",
//     caption: "Freshly prepared breakfast spread including local spices, fruits, and hot Wayanad estate coffee.",
//     alt: "Traditional organic breakfast table spread"
//   }
// ];

export const TESTIMONIALS = [
  {
    id: "t1",
    author: "Arjun & Sneha Nair",
    location: "Bangalore",
    stayedIn: "Stream Side A-Frame 4BHK Villa",
    rating: 5,
    text: "We booked the entire A-frame villa for a family reunion. The sound of the stream running right behind the rooms is pure magic. The kids loved the bunk bed in the wooden attic, and the campfire with BBQ under the misty Lakkidi sky was unforgettable."
  },
  {
    id: "t2",
    author: "Mathew & Rachel D'souza",
    location: "Kochi",
    stayedIn: "Stream Side A/C Room with Balcony",
    rating: 5,
    text: "The tranquility here is unmatched. Sitting on the private balcony with freshly brewed Wayanad coffee while the stream gently flows below was the reset we needed. Super close to Pookode Lake and Lakkidi Viewpoint!"
  },
  {
    id: "t3",
    author: "Vikram Singhania",
    location: "Mumbai",
    stayedIn: "Premium A/C Wooden Room",
    rating: 5,
    text: "True quiet luxury in the heart of nature. Spotless wooden interiors, prompt concierge on WhatsApp, and genuine Kerala breakfast. You can literally walk down into the stream for a cool dip. 10/10 recommendation."
  }
];
