import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bed, 
  Users, 
  Wind, 
  Eye, 
  Check, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Phone,
  Maximize2,
  Calendar,
  Layers,
  Waves,
  ShieldCheck,
  Coffee,
  Flame,
  Wifi
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ROOMS_DATA, RESORT_INFO } from '../data/resortData';
import { Room, PageId } from '../types';
import { formatCurrency, generateWhatsAppLink } from '../utils/helpers';
import { RoomCard } from '../components/RoomCard';

interface RoomsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectRoom: (room: Room) => void;
  onBookNow: (room?: Room) => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onNavigate,
  onSelectRoom,
  onBookNow,
  currency,
  onToggleCurrency
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Accommodations (5)' },
    { id: 'premium-ac', label: 'Premium A/C' },
    { id: 'streamside-ac', label: 'Stream Side A/C' },
    { id: 'streamside-non-ac', label: 'Stream Side Non-A/C' },
    { id: 'entire-Villas', label: '4-BHK Villas Buyout' }
  ];

  const filteredRooms = activeCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeCategory);

  return (
    <div className="w-full pt-20">
      <SEO page="rooms" />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#1b1c1b] text-[#ffffff] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=2000&q=85"
            alt="The Cove Wooden Suites"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1b] via-[#1b1c1b]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff]/10 border border-[#ffe088]/30 text-[#ffe088] text-xs font-sans-ui tracking-[0.25em] uppercase font-semibold mb-4">
            <span>Accommodations &amp; Tariffs</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-[#ffffff] max-w-4xl mx-auto">
            Suites &amp; Private A-Framedd Villas
          </h1>

          <p className="font-sans-ui text-sm sm:text-base md:text-lg text-[#d0d0d4] max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Choose between handcrafted pine timber suites with private forest balconies, stream-side rooms, or an exclusive 8-bedroom Villas buyout.
          </p>

          {/* Breadcrumb & Currency Switch */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-sans-ui text-xs">
            <div className="flex items-center gap-2 text-[#ffe088] tracking-widest uppercase">
              <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
              <span>/</span>
              <span>Rooms &amp; Suites</span>
            </div>

            <button
              onClick={onToggleCurrency}
              className="px-3 py-1.5 bg-[#ffffff]/15 border border-[#ffffff]/30 text-[#ffffff] hover:bg-[#ffffff]/25 transition-colors uppercase tracking-wider font-semibold"
            >
              Currency: {currency === 'INR' ? '₹ INR (Indian Rupee)' : '$ USD (US Dollar)'} (Click to switch)
            </button>
          </div>
        </div>
      </section>

      {/* Main Filter & Rooms Grid */}
      <section className="py-16 md:py-24 bg-[#fbf9f7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#000101] text-[#ffffff] shadow-md'
                      : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0] hover:border-[#000101] hover:text-[#1b1c1b]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                currency={currency}
                onSelect={onSelectRoom}
                onBookNow={onBookNow}
              />
            ))}
          </div>

          {/* Complimentary Stay Inclusions Banner */}
          <div className="mt-16 p-8 bg-[#ffffff] border border-[#e4e2e0] ambient-shadow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans-ui text-xs">
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-[#735c00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1b1c1b]">Complimentary Breakfast(on-request)</h4>
                  <p className="text-[#5f5e5b] mt-1">Freshly prepared hot Kerala delicacies and fresh fruit platter included every morning.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Waves className="w-5 h-5 text-[#735c00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1b1c1b]">Attached Natural Stream</h4>
                  <p className="text-[#5f5e5b] mt-1">Direct private stone steps into the natural mountain stream for clean bathing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wifi className="w-5 h-5 text-[#735c00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1b1c1b]">High-Speed Optical Wi-Fi</h4>
                  <p className="text-[#5f5e5b] mt-1">Fast, reliable connection in all rooms, balconies, and the outdoor lounge.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Flame className="w-5 h-5 text-[#735c00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1b1c1b]">Campfire &amp; BBQ Station</h4>
                  <p className="text-[#5f5e5b] mt-1">Stone fire pit with firewood logs and barbecue equipment available on request.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Comparison Table */}
      <section className="py-20 md:py-24 bg-[#f5f3f1] border-t border-[#e4e2e0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block mb-2">
              Transparent Comparison
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1b1c1b]">
              Accommodation Specifications Matrix
            </h2>
          </div>

          <div className="bg-[#ffffff] border border-[#e4e2e0] overflow-x-auto ambient-shadow">
            <table className="w-full text-left font-sans-ui text-xs min-w-[700px]">
              <thead>
                <tr className="bg-[#1b1c1b] text-[#ffffff] border-b border-[#30302f]">
                  <th className="p-4 font-semibold uppercase tracking-wider">Accommodation</th>
                  <th className="p-4 font-semibold uppercase tracking-wider">Space</th>
                  <th className="p-4 font-semibold uppercase tracking-wider">Capacity</th>
                  <th className="p-4 font-semibold uppercase tracking-wider">Climate</th>
                  <th className="p-4 font-semibold uppercase tracking-wider">Balcony</th>
                  <th className="p-4 font-semibold uppercase tracking-wider">Bunk Bed</th>
                  <th className="p-4 font-semibold uppercase tracking-wider">Starting Tariff</th>
                  <th className="p-4 font-semibold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e4e2e0]">
                {ROOMS_DATA.map((r) => (
                  <tr key={r.id} className="hover:bg-[#fbf9f7] transition-colors cursor-pointer" onClick={() => onSelectRoom(r)}>
                    <td className="p-4 font-display text-sm font-semibold text-[#1b1c1b] hover:text-[#735c00]">
                      {r.name}
                    </td>
                    <td className="p-4 text-[#5f5e5b]">{r.space}</td>
                    <td className="p-4 text-[#5f5e5b]">{r.capacity}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 text-[10px] font-bold ${
                        r.acType === 'A/C' ? 'bg-[#e5f6e8] text-[#1b7a34]' : 'bg-[#f5f3f1] text-[#5f5e5b]'
                      }`}>
                        {r.acType}
                      </span>
                    </td>
                    <td className="p-4">
                      {r.hasBalcony ? (
                        <Check className="w-4 h-4 text-[#1b7a34]" />
                      ) : (
                        <span className="text-[#9fa0a4]">—</span>
                      )}
                    </td>
                    <td className="p-4">
                      {r.hasBunkBed ? (
                        <Check className="w-4 h-4 text-[#1b7a34]" />
                      ) : (
                        <span className="text-[#9fa0a4]">—</span>
                      )}
                    </td>
                    <td className="p-4 font-display font-bold text-sm text-[#735c00]">
                      {formatCurrency(r.priceINR, currency)} / night
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => onSelectRoom(r)}
                          className="px-3 py-1.5 border border-[#e4e2e0] bg-[#ffffff] hover:bg-[#1b1c1b] hover:text-[#ffffff] text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer"
                        >
                          View
                        </button>
                        <button
                          onClick={() => onBookNow(r)}
                          className="px-3.5 py-1.5 bg-[#000101] text-[#ffffff] text-[10px] font-semibold uppercase tracking-wider hover:bg-[#30302f] transition-all cursor-pointer"
                        >
                          Book
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Policies & FAQ */}
      <section className="py-20 md:py-24 bg-[#fbf9f7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block mb-2">
                Good to Know
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#1b1c1b]">
                Booking &amp; Stay Policies
              </h3>
            </div>

            <div className="bg-[#ffffff] border border-[#e4e2e0] p-6 space-y-4 font-sans-ui text-xs text-[#5f5e5b]">
              <div className="flex justify-between pb-3 border-b border-[#e4e2e0]">
                <span className="font-semibold text-[#1b1c1b]">Check-In / Check-Out</span>
                <span>Check-in: 02:00 PM • Check-out: 11:00 AM (Early check-in subject to availability)</span>
              </div>
              {/* <div className="flex justify-between pb-3 border-b border-[#e4e2e0]">
                <span className="font-semibold text-[#1b1c1b]">Complimentary Breakfast(on-request)</span>
                <span>Served hot between 08:00 AM – 10:30 AM in the stream-side patio or room</span>
              </div> */}
              <div className="flex justify-between pb-3 border-b border-[#e4e2e0]">
                <span className="font-semibold text-[#1b1c1b]">Pet Policy</span>
                <span>100% Pet friendly property. Please inform concierge at time of booking.</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-[#e4e2e0]">
                <span className="font-semibold text-[#1b1c1b]">Campfire &amp; BBQ</span>
                <span>Campfire setup with firewood: ₹600. BBQ grill kit &amp; charcoal: ₹800.</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#1b1c1b]">Direct Support</span>
                <span className="text-[#735c00] font-bold">WhatsApp Concierge: {RESORT_INFO.displayPhone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
