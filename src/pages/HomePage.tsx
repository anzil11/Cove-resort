import React from 'react';
import { motion } from 'motion/react';
import { 
  Waves, 
  TreePine, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Phone, 
  MessageSquare,
  BookOpen,
  Bed,
  MapPin,
  Calendar
} from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { ExperienceBento } from '../components/ExperienceBento';
import { RoomCard } from '../components/RoomCard';
import { SEO } from '../components/SEO';
import { ROOMS_DATA, ATTRACTIONS_DATA, GALLERY_ITEMS, TESTIMONIALS, RESORT_INFO } from '../data/resortData';
import { Room, PageId } from '../types';
import { generateWhatsAppLink, formatCurrency } from '../utils/helpers';
import coveAframeTwilight from '../assets/images/cove_aframe_twilight_1786990321192.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectRoom: (room: Room) => void;
  onBookNow: (room?: Room) => void;
  onOpenBrochure: () => void;
  currency: 'INR' | 'USD';
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectRoom,
  onBookNow,
  onOpenBrochure,
  currency
}) => {
  const featuredRooms = ROOMS_DATA.slice(0, 3);
  const featuredAttractions = ATTRACTIONS_DATA.slice(0, 6);
  const previewGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="w-full">
      <SEO page="home" />

      {/* 4 Sliding Images Hero Section */}
      <HeroSlider
        onNavigate={onNavigate}
        onOpenBooking={() => onBookNow()}
        currency={currency}
      />

      {/* Section 1: Editorial Sanctuary Introduction */}
      <section className="py-20 md:py-28 bg-[#fbf9f7] border-b border-[#e4e2e0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block">
                The Sanctuary Experience
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#1b1c1b] leading-tight font-normal">
                Where Living Waters Meet Handcrafted Pine Timber
              </h2>
              <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] leading-relaxed font-light">
                Perched 700 meters above sea level in Lakkidi The Cove Lakkidi is a quiet luxury hideaway enveloped by evergreen rainforest mist. Our iconic A-Framedd architecture harmonizes natural mountain stone, treated aromatic pine timber, and the perpetual, soothing song of our attached mountain stream.
              </p>
              <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] leading-relaxed font-light">
                Whether you choose an intimate wooden attic suite with a private teak balcony and bunk bed or reserve the entire 8-bedroom Villas exclusively, your stay is surrounded by pure air, starlit campfire evenings, and true Malabar warmth.
              </p>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#e4e2e0] text-xs font-sans-ui">
                <div className="p-3 bg-[#ffffff] border border-[#e4e2e0]">
                  <div className="font-display text-2xl font-bold text-[#1b1c1b]">700m</div>
                  <div className="text-[#735c00] text-[11px] font-semibold mt-0.5">Elevation</div>
                  <div className="text-[#5f5e5b] text-[10px]">Cool Misty Weather</div>
                </div>

                <div className="p-3 bg-[#ffffff] border border-[#e4e2e0]">
                  <div className="font-display text-2xl font-bold text-[#1b1c1b]">4-BHK</div>
                  <div className="text-[#735c00] text-[11px] font-semibold mt-0.5">Private Villas</div>
                  <div className="text-[#5f5e5b] text-[10px]">Full Estate Buyout</div>
                </div>

                <div className="p-3 bg-[#ffffff] border border-[#e4e2e0] col-span-2 sm:col-span-1">
                  <div className="font-display text-2xl font-bold text-[#1b1c1b]">100%</div>
                  <div className="text-[#735c00] text-[11px] font-semibold mt-0.5">Natural Stream</div>
                  <div className="text-[#5f5e5b] text-[10px]">Direct Bathing Access</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#000101] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#30302f] transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Read Full Heritage &amp; Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenBrochure}
                  className="px-6 py-3 bg-[#ffffff] border border-[#e4e2e0] text-[#1b1c1b] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#f5f3f1] transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#735c00]" />
                  <span>View Official PDF</span>
                </button>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#e4e2e0] ambient-shadow">
                <img
                  src={coveAframeTwilight}
                  alt="A-Framedd Architecture in Nature at The Cove Lakkidi"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#ffffff] border border-[#e4e2e0] p-5 sm:p-6 max-w-xs shadow-xl ambient-shadow">
                <p className="font-accent text-lg italic text-[#1b1c1b] leading-snug">
                  &ldquo;A tranquil haven where the gentle rhythm of running water guides every morning.&rdquo;
                </p>
                <div className="font-sans-ui text-[10px] uppercase tracking-widest text-[#735c00] font-bold mt-2">
                  Vythiri • The Cove
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Suites & Villas Showcase */}
      <section className="py-20 md:py-28 bg-[#f5f3f1]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-2 block">
                Accommodations
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#1b1c1b]">
                Signature Suites &amp; Villas
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('rooms')}
                className="px-6 py-3 bg-[#000101] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#30302f] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>View All 5 Categories</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                currency={currency}
                onSelect={onSelectRoom}
                onBookNow={onBookNow}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-sans-ui text-xs text-[#5f5e5b]">
              *All stays include complimentary traditional Kerala breakfast, welcome refreshments, high-speed Wi-Fi, and attached stream access.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Attached Stream & Experiences Bento */}
      <ExperienceBento />

      {/* Section 4: 26 Nearby Attractions Snapshot */}
      <section className="py-20 md:py-28 bg-[#fbf9f7] border-t border-[#e4e2e0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-2 block">
                Local Exploration Guide
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#1b1c1b]">
                Explore Wayanad’s Top 26 Attractions
              </h2>
              <p className="font-sans-ui text-xs sm:text-sm text-[#5f5e5b] mt-2 max-w-xl font-light">
                Positioned at the prime gateway of Wayanad, The Cove gives you rapid access to iconic viewpoints, prehistoric caves, waterfalls, and tea estates.
              </p>
            </div>

            <button
              onClick={() => onNavigate('nearby')}
              className="px-6 py-3 bg-[#000101] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#30302f] transition-all flex items-center gap-2 group cursor-pointer self-start md:self-auto"
            >
              <span>Explore All 26 Spots</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Grid of 6 Featured Spots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAttractions.map((attraction) => (
              <div
                key={attraction.id}
                onClick={() => onNavigate('nearby')}
                className="bg-[#ffffff] border border-[#e4e2e0] overflow-hidden group cursor-pointer ambient-shadow hover:border-[#000101] transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#000101]/80 backdrop-blur-sm text-[#ffe088] text-[10px] font-sans-ui font-semibold uppercase tracking-wider px-2.5 py-1">
                    {attraction.distance} from Resort
                  </div>
                  <div className="absolute top-3 right-3 bg-[#ffffff]/90 text-[#1b1c1b] text-[10px] font-sans-ui font-medium px-2 py-0.5">
                    {attraction.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg text-[#1b1c1b] group-hover:text-[#735c00] transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="font-sans-ui text-xs text-[#5f5e5b] mt-2 line-clamp-2 leading-relaxed">
                    {attraction.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#e4e2e0] flex items-center justify-between text-[11px] font-sans-ui text-[#735c00] font-medium">
                    <span>{attraction.duration}</span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Gallery Preview Banner */}
      <section className="py-20 md:py-24 bg-[#1b1c1b] text-[#ffffff] border-t border-[#30302f]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#ffe088] font-semibold mb-2 block">
                Visual Storytelling
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#ffffff]">
                Moments Captured in the Mist
              </h2>
            </div>

            <button
              onClick={() => onNavigate('gallery')}
              className="px-6 py-3 bg-[#ffffff] text-[#000101] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#ffe088] transition-all flex items-center gap-2 group cursor-pointer self-start md:self-auto"
            >
              <span>Open Full Photo Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {previewGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('gallery')}
                className="aspect-square overflow-hidden relative group cursor-pointer border border-[#30302f]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#000101]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[10px] font-sans-ui text-[#ffffff] font-medium truncate">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-20 md:py-28 bg-[#fbf9f7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block mb-2">
              Guest Testimonials
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-[#1b1c1b]">
              Memories from the Stream
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#ffffff] border border-[#e4e2e0] p-8 flex flex-col justify-between ambient-shadow"
              >
                <div>
                  <div className="flex text-[#735c00] text-sm mb-4">
                    {'★'.repeat(t.rating)}
                  </div>
                  <p className="font-sans-ui text-xs sm:text-sm text-[#44474a] leading-relaxed italic mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e4e2e0] flex items-center justify-between font-sans-ui text-xs">
                  <div>
                    <div className="font-semibold text-[#1b1c1b]">{t.author}</div>
                    <div className="text-[#5f5e5b] text-[11px]">{t.location}</div>
                  </div>
                  <span className="text-[10px] bg-[#f5f3f1] px-2 py-1 text-[#735c00] font-medium truncate max-w-[130px]">
                    {t.stayedIn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Bottom Direct Booking Callout */}
      <section className="py-16 bg-[#000101] text-[#ffffff] border-t border-[#30302f]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[11px] font-sans-ui uppercase tracking-[0.25em] text-[#ffe088] font-semibold block">
              Begin Your Escape
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-[#ffffff] mt-1">
              Ready to Experience The Cove Lakkidi?
            </h3>
            <p className="font-sans-ui text-xs sm:text-sm text-[#c5c6ca] mt-2 max-w-xl font-light">
              Connect directly with our 24/7 reservations desk for instant date confirmation, customized barbecue menus, and seamless Wayanad travel arrangements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onBookNow()}
              className="px-8 py-4 bg-[#ffffff] text-[#000101] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#ffe088] transition-all duration-300 shadow-xl cursor-pointer"
            >
              Reserve Your Stay
            </button>

            <a
              href={generateWhatsAppLink(RESORT_INFO.phone, {
                customMessage: "Hello The Cove Lakkidi, I would like to check room availability for an upcoming trip."
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#25D366] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-wider hover:bg-[#20bd5a] transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
