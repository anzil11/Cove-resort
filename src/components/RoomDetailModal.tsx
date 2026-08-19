import React, { useState } from 'react';
import { X, Check, MessageSquare, Phone, Waves, Wind, Bed, Maximize2, Shield, Calendar, Users, Coffee, Sparkles } from 'lucide-react';
import { Room } from '../types';
import { RESORT_INFO } from '../data/resortData';
import { formatCurrency, generateWhatsAppLink } from '../utils/helpers';

interface RoomDetailModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
  onBookNow: (room: Room) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  currency,
  onBookNow
}) => {
  const [selectedMonth, setSelectedMonth] = useState<'current' | 'next'>('current');
  const [selectedDays, setSelectedDays] = useState<number[]>([12, 13, 14]);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [includeBbq, setIncludeBbq] = useState<boolean>(false);
  const [includeCampfire, setIncludeCampfire] = useState<boolean>(true);

  if (!isOpen || !room) return null;

  const nights = Math.max(1, selectedDays.length - 1);
  const baseTotal = room.priceINR * nights;
  const bbqCost = includeBbq ? 800 : 0;
  const campfireCost = includeCampfire ? 600 : 0;
  const calculatedTotal = baseTotal + bbqCost + campfireCost;

  const handleWhatsAppEnquiry = () => {
    const datesStr = `Day ${selectedDays[0]} to Day ${selectedDays[selectedDays.length - 1]}`;
    const url = generateWhatsAppLink(RESORT_INFO.phone, {
      roomName: room.name,
      checkIn: `Dates: ${datesStr}`,
      checkOut: `(${nights} Night${nights > 1 ? 's' : ''})`,
      guests: `${guestCount} Guests`,
      includeBarbeque: includeBbq,
      includeCampfire: includeCampfire,
      customMessage: `I am looking to book the ${room.name} at The Cove Lakkidi. Estimated tariff: ${formatCurrency(calculatedTotal, currency)}. Please confirm availability.`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-[#000101]/80 backdrop-blur-md flex justify-center p-0 md:p-6 lg:p-10 animate-fadeIn">
      <div className="relative bg-[#fbf9f7] w-full max-w-[1300px] min-h-screen md:min-h-[auto] md:rounded-none shadow-2xl flex flex-col overflow-hidden my-auto border border-[#e4e2e0]">
        {/* Sticky Modal Bar */}
        <div className="sticky top-0 z-30 bg-[#fbf9f7]/95 backdrop-blur-md border-b border-[#e4e2e0] px-6 py-4 flex justify-between items-center">
          <div>
            <span className="font-sans-ui text-[10px] tracking-[0.25em] uppercase text-[#735c00] font-semibold">
              The Cove Lakkidi • Suite Details
            </span>
            <h2 className="font-display text-lg sm:text-xl text-[#1b1c1b] truncate max-w-[280px] sm:max-w-md">
              {room.name}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onBookNow(room)}
              className="bg-[#000101] text-[#ffffff] font-sans-ui text-xs uppercase tracking-wider font-semibold px-4 py-2 hover:bg-[#30302f] transition-colors"
            >
              Reserve
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#1b1c1b] hover:bg-[#e4e2e0] transition-colors rounded-full"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Hero Banner for the Room */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] bg-[#1a1c1e] overflow-hidden">
          <img
            src={room.images[activeImageIndex] || room.images[0]}
            alt={room.name}
            className="w-full h-full object-cover object-center transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000101]/80 via-[#000101]/20 to-transparent" />

          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-[80%]">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-12 sm:w-20 sm:h-14 overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                    activeImageIndex === idx ? 'border-[#ffffff] scale-105 shadow-md' : 'border-[#ffffff]/40 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <span className="hidden sm:inline-block bg-[#000101]/70 backdrop-blur-md text-[#ffffff] text-xs font-sans-ui px-3 py-1.5 border border-[#ffffff]/20">
              {room.acType} • {room.space}
            </span>
          </div>
        </div>

        {/* Main Content: Two Columns matching the Azure Suite reference */}
        <div className="px-6 sm:px-10 md:px-14 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Details & Amenities (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              {/* Title & Tagline */}
              <div>
                <p className="font-sans-ui text-xs text-[#735c00] font-semibold uppercase tracking-[0.25em] mb-3">
                  {room.isEntireVilla ? 'Full Villa Sanctuary' : 'Signature Wooden Suite'}
                </p>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1b1c1b] mb-4 leading-tight">
                  {room.name}
                </h1>
                <p className="font-sans-ui text-base sm:text-lg text-[#44474a] leading-relaxed font-light">
                  {room.fullDescription}
                </p>
              </div>

              <hr className="border-t border-[#e4e2e0]" />

              {/* Architectural Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-sans-ui">
                <div className="bg-[#f5f3f1] p-4 border border-[#e4e2e0]">
                  <span className="block text-[#5f5e5b] text-xs uppercase tracking-wider mb-1">Climate</span>
                  <span className="font-display text-base font-semibold text-[#1b1c1b]">{room.acType}</span>
                </div>
                <div className="bg-[#f5f3f1] p-4 border border-[#e4e2e0]">
                  <span className="block text-[#5f5e5b] text-xs uppercase tracking-wider mb-1">Capacity</span>
                  <span className="font-display text-base font-semibold text-[#1b1c1b]">{room.capacity}</span>
                </div>
                <div className="bg-[#f5f3f1] p-4 border border-[#e4e2e0]">
                  <span className="block text-[#5f5e5b] text-xs uppercase tracking-wider mb-1">View</span>
                  <span className="font-display text-base font-semibold text-[#1b1c1b]">{room.view}</span>
                </div>
                <div className="bg-[#f5f3f1] p-4 border border-[#e4e2e0]">
                  <span className="block text-[#5f5e5b] text-xs uppercase tracking-wider mb-1">Bed</span>
                  <span className="font-display text-base font-semibold text-[#1b1c1b]">{room.bed}</span>
                </div>
              </div>

              {/* Refined Comforts Bento */}
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#1b1c1b] mb-6">
                  Refined Comforts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-[#ffffff] border border-[#e4e2e0]">
                      <div className="w-10 h-10 bg-[#f5f3f1] border border-[#e4e2e0] flex items-center justify-center flex-shrink-0 text-[#735c00]">
                        <span className="material-symbols-outlined text-[22px]">{amenity.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-sans-ui font-semibold text-sm text-[#1b1c1b]">
                          {amenity.title}
                        </h4>
                        <p className="font-sans-ui text-xs text-[#5f5e5b] mt-1 leading-relaxed">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div>
                <h3 className="font-display text-xl text-[#1b1c1b] mb-4">
                  Room Specifications
                </h3>
                <div className="border border-[#e4e2e0] divide-y divide-[#e4e2e0] font-sans-ui text-xs sm:text-sm">
                  {room.specifications.map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-3 px-4 bg-[#ffffff]">
                      <span className="text-[#5f5e5b] font-medium">{spec.label}</span>
                      <span className="text-[#1b1c1b] font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curated Scrapbook Gallery */}
              <div>
                <h3 className="font-display text-xl text-[#1b1c1b] mb-4">
                  Atmospheric Impressions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="h-64 overflow-hidden border border-[#e4e2e0]">
                    <img
                      src={room.images[1] || room.images[0]}
                      alt="Room ambience"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="h-64 overflow-hidden border border-[#e4e2e0] sm:mt-6">
                    <img
                      src={room.images[2] || room.images[0]}
                      alt="Balcony / Stream view"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Booking / Rate Calculator (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-28 bg-[#ffffff] border border-[#e4e2e0] p-6 sm:p-8 ambient-shadow">
                <div className="flex items-baseline justify-between pb-6 border-b border-[#e4e2e0]">
                  <div>
                    <h2 className="font-display text-2xl text-[#1b1c1b]">Reserve Your Stay</h2>
                    <p className="font-sans-ui text-xs text-[#5f5e5b] mt-0.5">Instant WhatsApp confirmation</p>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-2xl font-bold text-[#1b1c1b]">
                      {formatCurrency(room.priceINR, currency)}
                    </span>
                    <span className="block text-[10px] uppercase font-sans-ui text-[#5f5e5b]">per night</span>
                  </div>
                </div>

                {/* Minimalist Interactive Calendar Component */}
                <div className="my-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-sans-ui text-xs uppercase tracking-widest font-semibold text-[#1b1c1b]">
                      {selectedMonth === 'current' ? 'October 2024' : 'November 2024'}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setSelectedMonth(selectedMonth === 'current' ? 'next' : 'current')}
                        className="p-1 text-[#5f5e5b] hover:text-[#1b1c1b] border border-[#e4e2e0]"
                      >
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                      </button>
                      <button
                        onClick={() => setSelectedMonth(selectedMonth === 'current' ? 'next' : 'current')}
                        className="p-1 text-[#5f5e5b] hover:text-[#1b1c1b] border border-[#e4e2e0]"
                      >
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center font-sans-ui text-[10px] text-[#75777a] mb-1 font-semibold">
                    <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center font-sans-ui text-xs">
                    {/* Dummy padding */}
                    <div className="py-2 text-[#c5c6ca]">29</div>
                    <div className="py-2 text-[#c5c6ca]">30</div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((day) => {
                      const isSelected = selectedDays.includes(day);
                      return (
                        <button
                          key={day}
                          onClick={() => {
                            if (selectedDays.includes(day)) {
                              if (selectedDays.length > 2) {
                                setSelectedDays(selectedDays.filter((d) => d !== day));
                              }
                            } else {
                              setSelectedDays([...selectedDays, day].sort((a, b) => a - b));
                            }
                          }}
                          className={`py-2 transition-all font-medium ${
                            isSelected
                              ? 'bg-[#000101] text-[#ffffff] font-bold'
                              : 'hover:bg-[#f5f3f1] text-[#1b1c1b]'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[11px] text-[#735c00] font-sans-ui mt-2 font-medium">
                    Selected: {nights} Night{nights > 1 ? 's' : ''} Stay
                  </p>
                </div>

                {/* Add-ons selection */}
                <div className="space-y-3 pt-4 border-t border-[#e4e2e0] font-sans-ui text-xs">
                  <span className="block font-semibold uppercase tracking-wider text-[#1b1c1b] text-[11px]">
                    Curated Resort Add-ons:
                  </span>

                  <label className="flex items-center justify-between p-3 bg-[#fbf9f7] border border-[#e4e2e0] cursor-pointer hover:bg-[#f5f3f1]">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeCampfire}
                        onChange={(e) => setIncludeCampfire(e.target.checked)}
                        className="rounded-none border-[#75777a] text-[#000101] focus:ring-0"
                      />
                      <span>Night Campfire &amp; Firewood Logs</span>
                    </div>
                    <span className="font-semibold text-[#735c00]">+₹600</span>
                  </label>

                  <label className="flex items-center justify-between p-3 bg-[#fbf9f7] border border-[#e4e2e0] cursor-pointer hover:bg-[#f5f3f1]">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeBbq}
                        onChange={(e) => setIncludeBbq(e.target.checked)}
                        className="rounded-none border-[#75777a] text-[#000101] focus:ring-0"
                      />
                      <span>Barbeque Grilling Setup &amp; Charcoal</span>
                    </div>
                    <span className="font-semibold text-[#735c00]">+₹800</span>
                  </label>
                </div>

                {/* Total Price summary */}
                <div className="mt-6 pt-4 border-t border-[#e4e2e0] flex justify-between items-baseline font-sans-ui">
                  <span className="text-xs uppercase tracking-wider text-[#5f5e5b]">Estimated Total</span>
                  <div className="text-right">
                    <span className="font-display text-2xl font-bold text-[#1b1c1b]">
                      {formatCurrency(calculatedTotal, currency)}
                    </span>
                    <span className="block text-[10px] text-[#5f5e5b]">Includes breakfast &amp; welcome drink</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleWhatsAppEnquiry}
                    className="w-full bg-[#000101] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-[0.15em] py-4 flex items-center justify-center gap-2 hover:bg-[#30302f] transition-all cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>Enquire via WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${RESORT_INFO.phone}`}
                    className="w-full bg-[#f5f3f1] text-[#1b1c1b] border border-[#e4e2e0] font-sans-ui text-xs font-semibold uppercase tracking-wider py-3 flex items-center justify-center gap-2 hover:bg-[#e4e2e0] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call: {RESORT_INFO.displayPhone}</span>
                  </a>
                </div>

                <p className="text-center text-[11px] text-[#5f5e5b] font-sans-ui mt-4">
                  Our concierge team in Lakkidi will respond within 15 minutes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
