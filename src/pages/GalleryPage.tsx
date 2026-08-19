import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  Share2, 
  Sparkles,
  Camera,
  ArrowRight,
  Bed,
  Phone
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { GALLERY_ITEMS, RESORT_INFO } from '../data/resortData';
import { GalleryItem, PageId } from '../types';
import { generateWhatsAppLink } from '../utils/helpers';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: `All Photos (${GALLERY_ITEMS.length})` },
    { id: 'villa', label: 'A-Frame Villa' },
    { id: 'rooms', label: 'Suites & Interiors' },
    { id: 'stream', label: 'Attached Stream' },
    { id: 'dining', label: 'Experiences & Campfire' },
    { id: 'nature', label: 'Wayanad Nature' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => 
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => 
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems]);

  const currentLightboxItem: GalleryItem | null = 
    activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <div className="w-full pt-20">
      <SEO page="gallery" />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#1b1c1b] text-[#ffffff] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
            alt="The Cove Gallery Banner"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1b] via-[#1b1c1b]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff]/10 border border-[#ffe088]/30 text-[#ffe088] text-xs font-sans-ui tracking-[0.25em] uppercase font-semibold mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Tour</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-[#ffffff] max-w-4xl mx-auto">
            Glimpses of Serenity
          </h1>

          <p className="font-sans-ui text-sm sm:text-base md:text-lg text-[#d0d0d4] max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Explore authentic photographs of our A-frame villa, pine wooden bedroom interiors, attached mountain stream, and starlit campfire evenings.
          </p>

          <div className="flex items-center justify-center gap-2 font-sans-ui text-xs text-[#ffe088] mt-6 tracking-widest uppercase">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      {/* Main Filter & Gallery Grid */}
      <section className="py-16 md:py-24 bg-[#fbf9f7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all cursor-pointer ${
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

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveImageIndex(idx)}
                  className="group relative bg-[#ffffff] border border-[#e4e2e0] overflow-hidden cursor-pointer ambient-shadow hover:border-[#000101] transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000101]/80 via-[#000101]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-[#ffffff]" />

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 bg-[#000101]/80 backdrop-blur-sm text-[#ffe088] text-[10px] font-sans-ui font-semibold uppercase tracking-wider px-2.5 py-1">
                      {item.category.toUpperCase()}
                    </div>

                    {/* Maximize Icon */}
                    <div className="absolute top-3 right-3 p-2 bg-[#ffffff]/20 backdrop-blur-sm text-[#ffffff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Caption on Hover */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#ffffff]">
                      {/* <h3 className="font-display text-base font-semibold leading-tight">{item.title}</h3> */}
                      <p className="font-sans-ui text-[11px] text-[#e5e2dd] mt-1 line-clamp-1">{item.caption}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#ffffff]">
                    {/* <h3 className="font-display text-base text-[#1b1c1b] group-hover:text-[#735c00] transition-colors">
                      {item.title}
                    </h3> */}
                    <p className="font-sans-ui text-xs text-[#5f5e5b] mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentLightboxItem && activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#000101]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[#ffffff] font-sans-ui text-xs">
              <div className="flex items-center gap-3">
                <span className="font-display text-lg text-[#ffe088]">
                  {activeImageIndex + 1 < 10 ? `0${activeImageIndex + 1}` : activeImageIndex + 1}
                </span>
                <span className="text-[#ffffff]/40">/</span>
                <span>{filteredItems.length < 10 ? `0${filteredItems.length}` : filteredItems.length}</span>
                <span className="hidden sm:inline text-xs uppercase tracking-widest text-[#ffffff]/60">
                  — {currentLightboxItem.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={generateWhatsAppLink(RESORT_INFO.phone, {
                    customMessage: `I am interested in this setting from your gallery: ${currentLightboxItem.title} (${currentLightboxItem.image})`
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#25D366] text-[#ffffff] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-[#20bd5a] transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Inquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => setActiveImageIndex(null)}
                  className="p-2 bg-[#ffffff]/10 hover:bg-[#ffffff]/25 text-[#ffffff] transition-colors rounded-full"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Center Image with Prev / Next */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => 
                    prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
                  );
                }}
                className="absolute left-2 sm:left-6 z-10 p-3 bg-[#000101]/60 hover:bg-[#000101] text-[#ffffff] border border-[#ffffff]/20 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={currentLightboxItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] max-w-[90vw] object-contain border border-[#30302f]"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => 
                    prev !== null ? (prev + 1) % filteredItems.length : null
                  );
                }}
                className="absolute right-2 sm:right-6 z-10 p-3 bg-[#000101]/60 hover:bg-[#000101] text-[#ffffff] border border-[#ffffff]/20 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="max-w-2xl mx-auto text-center text-[#ffffff]">
              {/* <h3 className="font-display text-xl text-[#ffe088]">{currentLightboxItem.title}</h3> */}
              <p className="font-sans-ui text-xs sm:text-sm text-[#c5c6ca] mt-1 font-light">
                {currentLightboxItem.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Reservation Callout */}
      <section className="py-16 bg-[#000101] text-[#ffffff] border-t border-[#30302f]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[11px] font-sans-ui uppercase tracking-[0.25em] text-[#ffe088] font-semibold block">
              Private Mountain Sanctuary
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-[#ffffff] mt-1">
              Ready to Experience The Cove Lakkidi?
            </h3>
            <p className="font-sans-ui text-xs sm:text-sm text-[#c5c6ca] mt-2 max-w-xl font-light">
              Reserve your wooden suite or the entire 4-bedroom villa with private attached stream bathing, campfire gatherings, and complimentary breakfast.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('rooms')}
              className="px-6 py-3.5 bg-[#ffffff] text-[#000101] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#ffe088] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Bed className="w-4 h-4 text-[#735c00]" />
              <span>Explore All Rooms</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#25D366] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-wider hover:bg-[#20bd5a] transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Your Suite</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
