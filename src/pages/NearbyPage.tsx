import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Clock, 
  Search, 
  Filter, 
  ArrowUpDown, 
  Navigation, 
  Sparkles, 
  ExternalLink,
  MessageSquare,
  Calendar,
  Grid,
  List,
  Sun,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ATTRACTIONS_DATA, RESORT_INFO } from '../data/resortData';
import { Attraction, PageId } from '../types';
import { generateWhatsAppLink } from '../utils/helpers';

interface NearbyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const NearbyPage: React.FC<NearbyPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'distance-asc' | 'distance-desc' | 'name'>('distance-asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeItineraryTab, setActiveItineraryTab] = useState<'1-day' | '2-day' | '3-day'>('1-day');

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
    let result = [...ATTRACTIONS_DATA];

    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.distance.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'distance-asc') {
      result.sort((a, b) => a.distanceKm - b.distanceKm);
    } else if (sortBy === 'distance-desc') {
      result.sort((a, b) => b.distanceKm - a.distanceKm);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="w-full pt-20">
      <SEO page="nearby" />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#1b1c1b] text-[#ffffff] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
            alt="Wayanad Mist Landscapes"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1b] via-[#1b1c1b]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff]/10 border border-[#ffe088]/30 text-[#ffe088] text-xs font-sans-ui tracking-[0.25em] uppercase font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Local Travel Guide</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-[#ffffff] max-w-4xl mx-auto">
            26 Nearby Attractions &amp; Views
          </h1>

          <p className="font-sans-ui text-sm sm:text-base md:text-lg text-[#d0d0d4] max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Positioned at the prime gateway of Wayanad, The Cove puts you within minutes of lush tea plantations, glass bridges, ancient caves, and cascading waterfalls.
          </p>

          <div className="flex items-center justify-center gap-2 font-sans-ui text-xs text-[#ffe088] mt-6 tracking-widest uppercase">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span>26 Nearby Views</span>
          </div>
        </div>
      </section>

      {/* Search, Filter & Controls Bar */}
      <section className="py-8 bg-[#ffffff] border-b border-[#e4e2e0] sticky top-16 z-30 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#75777b] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 26 spots (e.g. Glass Bridge, Lake, Chembra)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#fbf9f7] border border-[#e4e2e0] text-xs font-sans-ui text-[#1b1c1b] placeholder-[#75777b] focus:outline-none focus:border-[#000101]"
              />
            </div>

            {/* Controls: Sort & View Toggle */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-sans-ui">
              <div className="flex items-center gap-2 bg-[#fbf9f7] border border-[#e4e2e0] px-3 py-1.5">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#735c00]" />
                <span className="text-[#5f5e5b]">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-medium text-[#1b1c1b] focus:outline-none cursor-pointer"
                >
                  <option value="distance-asc">Closest First</option>
                  <option value="distance-desc">Furthest First</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-[#e4e2e0] bg-[#fbf9f7]">
                <button
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid View"
                  className={`p-2 transition-colors ${
                    viewMode === 'grid' ? 'bg-[#000101] text-[#ffffff]' : 'text-[#5f5e5b] hover:text-[#1b1c1b]'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  aria-label="List View"
                  className={`p-2 transition-colors ${
                    viewMode === 'list' ? 'bg-[#000101] text-[#ffffff]' : 'text-[#5f5e5b] hover:text-[#1b1c1b]'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <span className="text-[#5f5e5b] text-xs hidden sm:inline">
                Showing <strong>{filteredAttractions.length}</strong> destinations
              </span>
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-sans-ui uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#000101] text-[#ffffff]'
                      : 'bg-[#f5f3f1] text-[#5f5e5b] hover:bg-[#e4e2e0] hover:text-[#1b1c1b]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Attractions Display */}
      <section className="py-12 md:py-16 bg-[#fbf9f7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          {filteredAttractions.length === 0 ? (
            <div className="text-center py-16 bg-[#ffffff] border border-[#e4e2e0] p-8 max-w-md mx-auto">
              <Compass className="w-8 h-8 text-[#735c00] mx-auto mb-3" />
              <h3 className="font-display text-lg text-[#1b1c1b]">No destinations found</h3>
              <p className="font-sans-ui text-xs text-[#5f5e5b] mt-1">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 bg-[#000101] text-[#ffffff] text-xs font-sans-ui uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAttractions.map((spot) => (
                <div
                  key={spot.id}
                  className="bg-[#ffffff] border border-[#e4e2e0] overflow-hidden group ambient-shadow hover:border-[#000101] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={spot.image}
                        alt={spot.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#000101]/85 backdrop-blur-sm text-[#ffe088] text-[11px] font-sans-ui font-bold uppercase tracking-wider px-2.5 py-1">
                        {spot.distance} from The Cove
                      </div>
                      <div className="absolute top-3 right-3 bg-[#ffffff]/95 text-[#1b1c1b] text-[10px] font-sans-ui font-semibold px-2 py-0.5 shadow">
                        {spot.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-xl text-[#1b1c1b] group-hover:text-[#735c00] transition-colors leading-snug">
                        {spot.name}
                      </h3>

                      <div className="flex items-center gap-4 font-sans-ui text-[11px] text-[#5f5e5b] mt-2 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#735c00]" />
                          {spot.duration}
                        </span>
                        {spot.bestTimeToVisit && (
                          <span className="flex items-center gap-1">
                            <Sun className="w-3.5 h-3.5 text-[#735c00]" />
                            {spot.bestTimeToVisit}
                          </span>
                        )}
                      </div>

                      <p className="font-sans-ui text-xs text-[#5f5e5b] leading-relaxed">
                        {spot.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {spot.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-sans-ui bg-[#f5f3f1] text-[#44474a] px-2 py-0.5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-4 bg-[#fbf9f7] border-t border-[#e4e2e0] flex items-center justify-between font-sans-ui text-xs">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' Wayanad Kerala')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1b1c1b] font-semibold hover:text-[#735c00] flex items-center gap-1"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#735c00]" />
                      <span>Directions</span>
                    </a>

                    <a
                      href={generateWhatsAppLink(RESORT_INFO.phone, {
                        customMessage: `Hello The Cove concierge! I would like to arrange transport/visit to ${spot.name} (${spot.distance} from resort).`
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-semibold hover:underline flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Ask Concierge</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {filteredAttractions.map((spot) => (
                <div
                  key={spot.id}
                  className="bg-[#ffffff] border border-[#e4e2e0] p-4 sm:p-6 ambient-shadow hover:border-[#000101] transition-all flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
                >
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-cover border border-[#e4e2e0] flex-shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-sans-ui bg-[#f5f3f1] text-[#735c00] font-bold px-2 py-0.5 uppercase tracking-wider">
                          {spot.category}
                        </span>
                        <span className="text-xs font-sans-ui font-semibold text-[#1b1c1b]">
                          {spot.distance} away
                        </span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl text-[#1b1c1b]">{spot.name}</h3>
                      <p className="font-sans-ui text-xs text-[#5f5e5b] max-w-2xl line-clamp-2">
                        {spot.description}
                      </p>
                      <div className="text-[11px] font-sans-ui text-[#5f5e5b] flex items-center gap-4 pt-1">
                        <span>Drive: {spot.duration}</span>
                        {spot.bestTimeToVisit && <span>Best Time: {spot.bestTimeToVisit}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col gap-2 w-full sm:w-auto self-end sm:self-center">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' Wayanad Kerala')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-4 py-2 bg-[#f5f3f1] hover:bg-[#e4e2e0] text-[#1b1c1b] text-xs font-sans-ui font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#735c00]" />
                      <span>Map</span>
                    </a>
                    <a
                      href={generateWhatsAppLink(RESORT_INFO.phone, {
                        customMessage: `I need a taxi/guide to visit ${spot.name} from The Cove Lakkidi.`
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Cab</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Curated Wayanad Itineraries Section */}
      <section className="py-20 md:py-28 bg-[#f5f3f1] border-t border-[#e4e2e0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-2 block">
              Concierge Curated
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#1b1c1b]">
              Suggested Wayanad Itineraries
            </h2>
            <p className="font-sans-ui text-xs sm:text-sm text-[#5f5e5b] mt-2 font-light">
              Crafted by our resident concierge to help you optimize travel time across Wayanad’s scenic mountain routes.
            </p>
          </div>

          {/* Itinerary Tabs */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveItineraryTab('1-day')}
              className={`px-6 py-2.5 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all ${
                activeItineraryTab === '1-day'
                  ? 'bg-[#000101] text-[#ffffff] shadow-md'
                  : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0]'
              }`}
            >
              1-Day Classic Lakkidi Circuit
            </button>
            <button
              onClick={() => setActiveItineraryTab('2-day')}
              className={`px-6 py-2.5 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all ${
                activeItineraryTab === '2-day'
                  ? 'bg-[#000101] text-[#ffffff] shadow-md'
                  : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0]'
              }`}
            >
              2-Day Waterfalls &amp; Adventure
            </button>
            <button
              onClick={() => setActiveItineraryTab('3-day')}
              className={`px-6 py-2.5 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all ${
                activeItineraryTab === '3-day'
                  ? 'bg-[#000101] text-[#ffffff] shadow-md'
                  : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0]'
              }`}
            >
              3-Day Heritage &amp; Wildlife
            </button>
          </div>

          {/* Active Itinerary Details */}
          <div className="bg-[#ffffff] border border-[#e4e2e0] p-8 ambient-shadow max-w-4xl mx-auto">
            {activeItineraryTab === '1-day' && (
              <div className="space-y-6 font-sans-ui">
                <div className="border-b border-[#e4e2e0] pb-4">
                  <h3 className="font-display text-2xl text-[#1b1c1b]">The 1-Day Gateway &amp; Lakes Circuit</h3>
                  <p className="text-xs text-[#5f5e5b] mt-1">Perfect for short weekenders staying at The Cove Lakkidi.</p>
                </div>
                <div className="space-y-4 text-xs">
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">08:30 AM</span>
                    <div>
                      <strong className="text-[#1b1c1b]">Traditional Breakfast &amp; Stream Dip:</strong> Enjoy appams and hot Malabar coffee at The Cove followed by a quick refreshing dip in our attached natural stream.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">10:00 AM</span>
                    <div>
                      <strong className="text-[#1b1c1b]">Tanzania Park &amp; Chain Tree (200m - 500m):</strong> Walk to the historic Chain Tree to discover the legend of Karinthandan and explore Tanzania Park.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">11:30 AM</span>
                    <div>
                      <strong className="text-[#1b1c1b]">Pookode Freshwater Lake (1.5 Km):</strong> Pedal boat amidst lotus blossoms, walk the shaded forested lakeside pathway, and visit the freshwater aquarium.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">02:30 PM</span>
                    <div>
                      <strong className="text-[#1b1c1b]">En Ooru Tribal Heritage Villasge (3.5 Km):</strong> Experience authentic indigenous tribal architecture, traditional handicrafts, and local cuisines.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">05:30 PM</span>
                    <div>
                      <strong className="text-[#1b1c1b]">Lakkidi Viewpoint Sunset &amp; Campfire:</strong> Catch panoramic sunset views over the Thamarassery Ghat hairpin curves, then return to The Cove for evening campfire and barbecue.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeItineraryTab === '2-day' && (
              <div className="space-y-6 font-sans-ui">
                <div className="border-b border-[#e4e2e0] pb-4">
                  <h3 className="font-display text-2xl text-[#1b1c1b]">The 2-Day Adventure &amp; Waterfalls Circuit</h3>
                  <p className="text-xs text-[#5f5e5b] mt-1">For trekking enthusiasts, thrill seekers, and waterfall lovers.</p>
                </div>
                <div className="space-y-4 text-xs">
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">Day 1</span>
                    <div>
                      <strong className="text-[#1b1c1b]">900 Kandi Glass Bridge &amp; Soochipara Falls (19 Km):</strong> Walk the cantilevered glass skywalk above dense forest canopy and swim at the base of Soochipara’s 3-tier cascade.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">Day 2</span>
                    <div>
                      <strong className="text-[#1b1c1b]">Chembra Peak &amp; Heart Lake Trek (16 Km):</strong> Guided morning hike to Wayanad’s highest summit (2,100m) and the iconic mist-clad heart-shaped mountain lake.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeItineraryTab === '3-day' && (
              <div className="space-y-6 font-sans-ui">
                <div className="border-b border-[#e4e2e0] pb-4">
                  <h3 className="font-display text-2xl text-[#1b1c1b]">The 3-Day Heritage, Island &amp; Safari Circuit</h3>
                  <p className="text-xs text-[#5f5e5b] mt-1">A comprehensive exploration of Wayanad’s rich prehistoric art and wild sanctuaries.</p>
                </div>
                <div className="space-y-4 text-xs">
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">Day 1</span>
                    <div>
                      <strong className="text-[#1b1c1b]">Edakkal Caves &amp; Karapuzha Dam (32 Km):</strong> Discover 6,000-year-old Neolithic petroglyphs and scenic boating at Karapuzha.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">Day 2</span>
                    <div>
                      <strong className="text-[#1b1c1b]">Banasura Sagar Dam &amp; Karlad Lake (23 Km):</strong> India’s largest earth dam with speed-boating and zipline adventures across the blue reservoir.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-[#735c00] w-20 flex-shrink-0">Day 3</span>
                    <div>
                      <strong className="text-[#1b1c1b]">Kuruva Dweep &amp; Muthanga Wildlife Safari (44 Km):</strong> Bamboo rafting through protected river islets and an afternoon open-jeep safari spotting wild elephants and deer.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Booking CTA */}
      <section className="py-16 bg-[#000101] text-[#ffffff] text-center border-t border-[#30302f]">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <h3 className="font-display text-3xl text-[#ffffff]">Base Your Wayanad Journey at The Cove</h3>
          <p className="font-sans-ui text-xs sm:text-sm text-[#c5c6ca] font-light">
            Stay close to all 26 attractions with the comfort of a stream-side wooden sanctuary.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 bg-[#ffffff] text-[#000101] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#ffe088] transition-all shadow-md"
            >
              Book Your Stay
            </button>
            <a
              href={generateWhatsAppLink(RESORT_INFO.phone, {
                customMessage: "Hello! Please help me plan my Wayanad sightseeing itinerary and room booking at The Cove Lakkidi."
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-wider hover:bg-[#20bd5a] transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
