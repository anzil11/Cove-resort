import React, { useState, useMemo } from 'react';
import { Search, MapPin, Compass, Navigation, Filter, ExternalLink, Sparkles, Clock } from 'lucide-react';
import { ATTRACTIONS_DATA, RESORT_INFO } from '../data/resortData';
import { Attraction } from '../types';

export const AttractionsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'distance' | 'name'>('distance');

  const categories = [
    'All',
    'Viewpoint',
    'Nature & Lake',
    'Adventure',
    'Waterfall',
    'Heritage & Culture',
    'Wildlife & Flora'
  ];

  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS_DATA.filter((attraction) => {
      const matchesSearch =
        attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attraction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attraction.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || attraction.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'distance') {
        return a.distanceKm - b.distanceKm;
      }
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const openGoogleMaps = (attractionName: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${attractionName}, Wayanad, Kerala`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="attractions" className="py-20 md:py-28 bg-[#fbf9f7] border-t border-[#e4e2e0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-3 block flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#735c00]" />
              <span>Official PDF Guide • Wayanad Destinations</span>
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#1b1c1b] font-normal leading-tight">
              Nearby Attractions
            </h2>
            <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] mt-4 font-light leading-relaxed">
              Explore 26 hand-picked destinations around Lakkidi, from walking-distance viewpoints and ancient heritage trees to high-adrenaline ziplines, waterfalls, and wildlife safaris.
            </p>
          </div>

          {/* Quick Distance Highlights Badge */}
          <div className="bg-[#ffffff] border border-[#e4e2e0] p-4 text-xs font-sans-ui flex-shrink-0 flex items-center gap-4 ambient-shadow">
            <div className="text-center px-2">
              <div className="font-display text-2xl font-bold text-[#1b1c1b]">26</div>
              <div className="text-[10px] text-[#5f5e5b] uppercase">Destinations</div>
            </div>
            <div className="h-8 w-px bg-[#e4e2e0]" />
            <div className="text-center px-2">
              <div className="font-display text-2xl font-bold text-[#735c00]">200m</div>
              <div className="text-[10px] text-[#5f5e5b] uppercase">Closest Spot</div>
            </div>
            <div className="h-8 w-px bg-[#e4e2e0]" />
            <div className="text-center px-2">
              <div className="font-display text-2xl font-bold text-[#1b1c1b]">700m</div>
              <div className="text-[10px] text-[#5f5e5b] uppercase">Resort Altitude</div>
            </div>
          </div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="bg-[#ffffff] border border-[#e4e2e0] p-4 sm:p-6 mb-10 ambient-shadow space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-[#75777a] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search attractions (e.g. Pookode, Zipline, Waterfall, Chain Tree)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#fbf9f7] border border-[#e4e2e0] pl-10 pr-4 py-2.5 text-xs font-sans-ui text-[#1b1c1b] placeholder:text-[#9fa0a4] focus:outline-none focus:border-[#000101]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#75777a] hover:text-[#1b1c1b]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Toggle */}
            <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-sans-ui">
              <span className="text-[#5f5e5b]">Sort:</span>
              <button
                onClick={() => setSortBy('distance')}
                className={`px-3 py-1.5 border transition-all ${
                  sortBy === 'distance'
                    ? 'bg-[#000101] text-[#ffffff] border-[#000101]'
                    : 'bg-[#ffffff] text-[#5f5e5b] border-[#e4e2e0]'
                }`}
              >
                Distance (Closest)
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`px-3 py-1.5 border transition-all ${
                  sortBy === 'name'
                    ? 'bg-[#000101] text-[#ffffff] border-[#000101]'
                    : 'bg-[#ffffff] text-[#5f5e5b] border-[#e4e2e0]'
                }`}
              >
                A to Z
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-[11px] font-sans-ui uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#735c00] text-[#ffffff]'
                    : 'bg-[#f5f3f1] text-[#5f5e5b] hover:bg-[#e4e2e0] hover:text-[#1b1c1b]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Attractions Grid (26 Spots) */}
        {filteredAttractions.length === 0 ? (
          <div className="text-center py-16 bg-[#ffffff] border border-[#e4e2e0]">
            <p className="font-display text-xl text-[#1b1c1b]">No destinations found</p>
            <p className="font-sans-ui text-xs text-[#5f5e5b] mt-1">Try another search keyword or category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-[#000101] text-[#ffffff] text-xs font-sans-ui uppercase font-semibold tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAttractions.map((item, index) => (
              <div
                key={item.id}
                className="bg-[#ffffff] border border-[#e4e2e0] flex flex-col justify-between overflow-hidden group ambient-shadow ambient-shadow-hover"
              >
                {/* Image & Distance Tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1b1c1b]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000101]/70 via-transparent to-transparent opacity-70" />

                  {/* Distance badge from PDF */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="bg-[#000101]/90 backdrop-blur-md text-[#ffe088] text-[11px] font-sans-ui font-bold px-2.5 py-1 tracking-wide">
                      {item.distance}
                    </span>
                    {item.isPrivate && (
                      <span className="bg-[#735c00] text-[#ffffff] text-[9px] font-sans-ui uppercase font-bold px-2 py-1">
                        Private Park*
                      </span>
                    )}
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-[#000101]/80 backdrop-blur-md text-[#ffffff] text-[10px] font-sans-ui px-2 py-0.5">
                    <Clock className="w-3 h-3 text-[#ffe088]" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#735c00] font-semibold">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#75777a]">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="font-display text-lg text-[#1b1c1b] group-hover:text-[#735c00] transition-colors leading-snug mb-2 font-medium">
                      {item.name}
                    </h3>

                    <p className="font-sans-ui text-xs text-[#5f5e5b] line-clamp-3 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tag pills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-[#f5f3f1] text-[#5f5e5b] text-[10px] font-sans-ui px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Directions Link */}
                  <div className="pt-3 border-t border-[#e4e2e0] flex items-center justify-between">
                    <span className="text-[11px] font-sans-ui text-[#5f5e5b]">
                      From The Cove Lakkidi
                    </span>
                    <button
                      onClick={() => openGoogleMaps(item.name)}
                      className="text-xs font-sans-ui font-semibold text-[#000101] hover:text-[#735c00] flex items-center gap-1 transition-colors"
                    >
                      <span>Route</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Concierge Travel Assistance Note */}
        <div className="mt-12 p-6 bg-[#f5f3f1] border border-[#e4e2e0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#ffffff] border border-[#e4e2e0] flex items-center justify-center text-[#735c00] flex-shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#1b1c1b]">
                Need Custom Sightseeing Itinerary or 4x4 Jeep Trek?
              </h4>
              <p className="text-xs font-sans-ui text-[#5f5e5b] mt-0.5">
                Our front desk can arrange local 4x4 jeep safari for 900 Kandi glass bridge, Chembra peak trekking permits, or cab drop-offs.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hello The Cove Lakkidi, I would like guidance on visiting nearby tourist attractions in Wayanad."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#000101] text-[#ffffff] text-xs font-sans-ui uppercase tracking-wider font-semibold hover:bg-[#30302f] transition-all flex-shrink-0"
          >
            Ask Concierge
          </a>
        </div>
      </div>
    </section>
  );
};
