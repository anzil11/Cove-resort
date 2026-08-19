import React, { useState } from 'react';
import { ArrowDown, MessageSquare, ShieldCheck, Waves, TreePine, Sparkles, MapPin } from 'lucide-react';
import { RESORT_INFO, ROOMS_DATA } from '../data/resortData';
import { generateWhatsAppLink, formatCurrency } from '../utils/helpers';

interface HeroSectionProps {
  onOpenBookingWithDetails?: (roomName: string, guests: number) => void;
  onExploreRooms: () => void;
  onExploreAttractions: () => void;
  currency: 'INR' | 'USD';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingWithDetails,
  onExploreRooms,
  onExploreAttractions,
  currency
}) => {
  const [selectedRoom, setSelectedRoom] = useState<string>(ROOMS_DATA[0].id);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');

  const currentRoom = ROOMS_DATA.find((r) => r.id === selectedRoom) || ROOMS_DATA[0];

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppLink(RESORT_INFO.phone, {
      roomName: currentRoom.name,
      checkIn: checkInDate || 'Upcoming Weekend',
      checkOut: checkOutDate || 'Next Day',
      guests: guestCount,
      customMessage: `I am interested in booking the ${currentRoom.name}. Please confirm availability and share tariff quote.`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative min-h-[92vh] md:min-h-screen w-full flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#fbf9f7]">
      {/* Background Image Layer with Ambient Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="The Cove Lakkidi stream side luxury A-frame villa in Wayanad"
          className="w-full h-full object-cover object-center filter brightness-90 md:brightness-85 scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Editorial Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000101]/85 via-[#000101]/40 to-[#000101]/25" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#000101]/20 to-[#000101]/60" />
      </div>

      {/* Floating Badge */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 w-full pt-4 md:pt-8 flex justify-between items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fbf9f7]/15 backdrop-blur-md border border-[#ffffff]/20 text-[#ffffff] text-xs font-sans-ui tracking-widest uppercase">
          <MapPin className="w-3.5 h-3.5 text-[#ffe088]" />
          <span>Lakkidi, Wayanad • Elevation 700m</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fbf9f7]/15 backdrop-blur-md border border-[#ffffff]/20 text-[#ffffff] text-xs font-sans-ui tracking-widest uppercase">
          <Waves className="w-3.5 h-3.5 text-[#ffe088]" />
          <span>Attached Natural Stream</span>
        </div>
      </div>

      {/* Center Hero Statement */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center my-auto py-8">
        <p className="font-sans-ui text-xs sm:text-sm tracking-[0.3em] uppercase text-[#ffe088] font-semibold mb-4 drop-shadow-md">
          Wayanad Rainforest Sanctuary
        </p>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.08] text-[#ffffff] mb-6 drop-shadow-lg font-normal">
          Discover Serenity.
        </h1>

        <p className="font-sans-ui text-base sm:text-lg md:text-xl text-[#f2f0ee] max-w-2xl mx-auto font-light leading-relaxed mb-8 drop-shadow-md">
          An exclusive sanctuary where luxury meets untamed nature. Stream Side 4-Bedroom A-Frame Villa, natural running water, wooden A/C suites, and misty mountain calm.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreRooms}
            className="bg-[#ffffff] text-[#000101] font-sans-ui text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#ffe088] transition-all duration-300 shadow-lg cursor-pointer"
          >
            Explore Suites &amp; Villa
          </button>

          <a
            href={generateWhatsAppLink(RESORT_INFO.phone, {
              customMessage: "Hello! I am planning a trip to Wayanad and would like to check availability at The Cove Lakkidi."
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-[0.15em] px-6 py-4 hover:bg-[#20bd5a] transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Bottom: Quick Reservation / Availability Strip */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 w-full">
        <div className="bg-[#fbf9f7]/95 backdrop-blur-md border border-[#ffffff]/30 p-4 sm:p-6 shadow-2xl ambient-shadow">
          <form onSubmit={handleQuickInquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            {/* Room Category */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5f5e5b] font-semibold">
                Accommodation
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full bg-transparent border-b border-[#c5c6ca] text-xs font-sans-ui font-medium text-[#1b1c1b] py-2 focus:outline-none focus:border-[#000101] cursor-pointer"
              >
                {ROOMS_DATA.map((room) => (
                  <option key={room.id} value={room.id} className="text-[#1b1c1b] py-1 bg-[#ffffff]">
                    {room.name.length > 36 ? room.name.substring(0, 36) + '...' : room.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-In */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5f5e5b] font-semibold">
                Check-In Date
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full bg-transparent border-b border-[#c5c6ca] text-xs font-sans-ui font-medium text-[#1b1c1b] py-2 focus:outline-none focus:border-[#000101]"
              />
            </div>

            {/* Check-Out */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5f5e5b] font-semibold">
                Check-Out Date
              </label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full bg-transparent border-b border-[#c5c6ca] text-xs font-sans-ui font-medium text-[#1b1c1b] py-2 focus:outline-none focus:border-[#000101]"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5f5e5b] font-semibold">
                Guests &amp; Tariff
              </label>
              <div className="flex items-center justify-between border-b border-[#c5c6ca] py-1.5">
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="bg-transparent text-xs font-sans-ui font-medium text-[#1b1c1b] focus:outline-none cursor-pointer"
                >
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={6}>6 Guests</option>
                  <option value={8}>8 Guests</option>
                  <option value={12}>12+ (Full Villa)</option>
                </select>
                <span className="text-xs font-serif text-[#735c00] font-bold">
                  {formatCurrency(currentRoom.priceINR, currency)}
                </span>
              </div>
            </div>

            {/* Submit / WhatsApp Quote */}
            <button
              type="submit"
              className="w-full bg-[#000101] text-[#ffffff] font-sans-ui text-xs uppercase tracking-widest font-semibold py-3.5 hover:bg-[#30302f] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Instant Quote</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>

          {/* Quick PDF Highlights ticker below search */}
          <div className="mt-4 pt-3 border-t border-[#e4e2e0] flex flex-wrap items-center justify-between gap-y-2 text-[11px] font-sans-ui text-[#5f5e5b]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#735c00]" />
              <span>Complimentary Breakfast &amp; Welcome Drink</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#735c00]" />
              <span>Free High-Speed Wi-Fi &amp; Pet Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#735c00]" />
              <span>Campfire &amp; BBQ Station (Direct Stream Access)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
