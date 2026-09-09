import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, ArrowUpDown, Bed, Info, Check, X } from 'lucide-react';
import { Room } from '../types';
import { ROOMS_DATA } from '../data/resortData';
import { RoomCard } from './RoomCard';
import { formatCurrency } from '../utils/helpers';

interface RoomsSectionProps {
  currency: 'INR' | 'USD';
  onSelectRoom: (room: Room) => void;
  onBookNow: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  currency,
  onSelectRoom,
  onBookNow
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'premium-ac' | 'streamside-ac' | 'streamside-non-ac' | 'entire-Villas'>('all');
  const [showComparison, setShowComparison] = useState<boolean>(false);

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (selectedFilter === 'all') return true;
    return room.category === selectedFilter;
  });

  return (
    <section id="rooms" className="py-20 md:py-28 bg-[#fbf9f7] border-t border-[#e4e2e0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-3 block">
              Sanctuary Accommodations
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#1b1c1b] font-normal leading-tight">
              Suites &amp; A-Framedd Villas
            </h2>
            <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] mt-4 font-light leading-relaxed">
              Every wooden room and suite at The Cove Lakkidi is positioned in harmony with the natural flowing stream, equipped with natural pine architecture, mountain breezes, and quiet luxury.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="px-4 py-2.5 bg-[#ffffff] border border-[#e4e2e0] text-xs font-sans-ui uppercase tracking-wider font-semibold text-[#1b1c1b] hover:bg-[#f5f3f1] transition-colors flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#735c00]" />
              <span>{showComparison ? 'Hide Comparison' : 'Compare All 4 Rooms'}</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-5 py-2.5 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#000101] text-[#ffffff]'
                : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0] hover:text-[#1b1c1b]'
            }`}
          >
            All Accommodations ({ROOMS_DATA.length})
          </button>
          <button
            onClick={() => setSelectedFilter('premium-ac')}
            className={`px-5 py-2.5 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedFilter === 'premium-ac'
                ? 'bg-[#000101] text-[#ffffff]'
                : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0] hover:text-[#1b1c1b]'
            }`}
          >
            Premium A/C Wooden Suites
          </button>
          <button
            onClick={() => setSelectedFilter('streamside-ac')}
            className={`px-5 py-2.5 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedFilter === 'streamside-ac'
                ? 'bg-[#000101] text-[#ffffff]'
                : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0] hover:text-[#1b1c1b]'
            }`}
          >
            Stream Side A/C Rooms
          </button>
          <button
            onClick={() => setSelectedFilter('streamside-non-ac')}
            className={`px-5 py-2.5 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedFilter === 'streamside-non-ac'
                ? 'bg-[#000101] text-[#ffffff]'
                : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0] hover:text-[#1b1c1b]'
            }`}
          >
            Stream Side Non-A/C
          </button>
          <button
            onClick={() => setSelectedFilter('entire-Villas')}
            className={`px-5 py-2.5 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedFilter === 'entire-Villas'
                ? 'bg-[#000101] text-[#ffffff]'
                : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0] hover:text-[#1b1c1b]'
            }`}
          >
            Exclusive 04 BHK Villas
          </button>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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

        {/* Interactive Comparison Table (Collapsible) */}
        {showComparison && (
          <div className="mt-16 bg-[#ffffff] border border-[#e4e2e0] p-6 sm:p-8 ambient-shadow animate-fadeIn">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#e4e2e0]">
              <div>
                <h3 className="font-display text-2xl text-[#1b1c1b]">
                  Compare Room Categories &amp; Features
                </h3>
                <p className="text-xs font-sans-ui text-[#5f5e5b] mt-1">
                  Side-by-side comparison of all 4 accommodation categories at The Cove Lakkidi
                </p>
              </div>
              <button
                onClick={() => setShowComparison(false)}
                className="p-2 text-[#5f5e5b] hover:text-[#1b1c1b]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans-ui text-xs">
                <thead>
                  <tr className="border-b border-[#e4e2e0] bg-[#f5f3f1]">
                    <th className="p-4 font-semibold uppercase tracking-wider text-[#5f5e5b]">Feature</th>
                    {ROOMS_DATA.map((r) => (
                      <th key={r.id} className="p-4 font-semibold text-[#1b1c1b] min-w-[200px]">
                        {r.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4e2e0]">
                  <tr>
                    <td className="p-4 font-medium text-[#5f5e5b]">Starting Tariff</td>
                    {ROOMS_DATA.map((r) => (
                      <td key={r.id} className="p-4 font-bold text-[#735c00] text-sm">
                        {formatCurrency(r.priceINR, currency)} / night
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#5f5e5b]">Cooling / A/C</td>
                    {ROOMS_DATA.map((r) => (
                      <td key={r.id} className="p-4 text-[#1b1c1b] font-medium">{r.acType}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#5f5e5b]">Attached Balcony</td>
                    {ROOMS_DATA.map((r) => (
                      <td key={r.id} className="p-4">
                        {r.hasBalcony ? (
                          <span className="inline-flex items-center gap-1 text-[#227b3b] font-semibold">
                            <Check className="w-4 h-4" /> Yes
                          </span>
                        ) : (
                          <span className="text-[#9fa0a4]">Garden View</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#5f5e5b]">Bunk Bed Included</td>
                    {ROOMS_DATA.map((r) => (
                      <td key={r.id} className="p-4">
                        {r.hasBunkBed ? (
                          <span className="inline-flex items-center gap-1 text-[#227b3b] font-semibold">
                            <Check className="w-4 h-4" /> Handcrafted 2-Tier
                          </span>
                        ) : (
                          <span className="text-[#9fa0a4]">No</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#5f5e5b]">Bed Type</td>
                    {ROOMS_DATA.map((r) => (
                      <td key={r.id} className="p-4 text-[#1b1c1b]">{r.bed}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#5f5e5b]">Space</td>
                    {ROOMS_DATA.map((r) => (
                      <td key={r.id} className="p-4 text-[#1b1c1b]">{r.space}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#5f5e5b]">Stream Access</td>
                    {ROOMS_DATA.map((r) => (
                      <td key={r.id} className="p-4 text-[#227b3b] font-semibold">
                        <Check className="w-4 h-4 inline mr-1" /> Direct Steps
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#5f5e5b]">Action</td>
                    {ROOMS_DATA.map((r) => (
                      <td key={r.id} className="p-4">
                        <button
                          onClick={() => onSelectRoom(r)}
                          className="bg-[#000101] text-[#ffffff] px-3 py-1.5 font-sans-ui text-[11px] font-semibold uppercase tracking-wider hover:bg-[#30302f]"
                        >
                          Details &amp; Book
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
