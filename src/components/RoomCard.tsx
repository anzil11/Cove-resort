import React from 'react';
import { Sparkles, Waves, Bed, Maximize2, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { Room } from '../types';
import { formatCurrency, generateWhatsAppLink } from '../utils/helpers';
import { RESORT_INFO } from '../data/resortData';

interface RoomCardProps {
  room: Room;
  currency: 'INR' | 'USD';
  onSelect: (room: Room) => void;
  onBookNow: (room: Room) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  room,
  currency,
  onSelect,
  onBookNow
}) => {
  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = generateWhatsAppLink(RESORT_INFO.phone, {
      roomName: room.name,
      customMessage: `I am inquiring about availability and tariff for the ${room.name}.`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onSelect(room)}
      className="group bg-[#ffffff] border border-[#e4e2e0] overflow-hidden flex flex-col justify-between cursor-pointer ambient-shadow ambient-shadow-hover"
    >
      {/* Top Image & Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1b1c1b]">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000101]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="bg-[#000101]/80 backdrop-blur-md text-[#ffffff] text-[10px] font-sans-ui uppercase tracking-wider px-2.5 py-1 font-semibold">
            {room.acType}
          </span>
          {room.hasBalcony && (
            <span className="bg-[#ffffff]/90 backdrop-blur-md text-[#1b1c1b] text-[10px] font-sans-ui uppercase tracking-wider px-2.5 py-1 font-semibold border border-[#e4e2e0]">
              Attached Balcony
            </span>
          )}
          {room.hasBunkBed && (
            <span className="bg-[#735c00] text-[#ffffff] text-[10px] font-sans-ui uppercase tracking-wider px-2.5 py-1 font-semibold">
              Bunk Bed
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#735c00] font-semibold">
              {room.isEntireVilla ? 'Exclusive Buyout' : 'Private Suite'}
            </span>
            <span className="text-xs text-[#5f5e5b] font-sans-ui">
              {room.capacity}
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl text-[#1b1c1b] group-hover:text-[#735c00] transition-colors leading-snug mb-2.5">
            {room.name}
          </h3>

          <p className="font-sans-ui text-xs sm:text-sm text-[#5f5e5b] line-clamp-2 leading-relaxed mb-4">
            {room.description}
          </p>

          {/* Key Feature Checkmarks */}
          <div className="space-y-1.5 mb-6 text-xs font-sans-ui text-[#44474a]">
            {room.keyHighlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#735c00] flex-shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Footer Actions */}
        <div className="pt-5 border-t border-[#e4e2e0] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5f5e5b] block">
              From
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1b]">
                {formatCurrency(room.priceINR, currency)}
              </span>
              <span className="text-[10px] font-sans-ui text-[#5f5e5b]">/ night</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickWhatsApp}
              title="Quick WhatsApp Enquiry"
              className="p-2.5 bg-[#f5f3f1] hover:bg-[#25D366] hover:text-[#ffffff] text-[#1b1c1b] border border-[#e4e2e0] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(room);
              }}
              className="bg-[#000101] text-[#ffffff] font-sans-ui text-xs uppercase tracking-wider font-semibold px-4 py-2.5 hover:bg-[#30302f] transition-all flex items-center gap-1.5"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
