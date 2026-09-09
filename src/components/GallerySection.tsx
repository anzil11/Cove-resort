import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/resortData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'Villas' | 'rooms' | 'stream' | 'dining' | 'nature'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#f5f3f1] border-t border-[#e4e2e0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-3 block">
              Visual Narrative
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#1b1c1b] font-normal leading-tight">
              Atmospheric Gallery
            </h2>
            <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] mt-4 font-light leading-relaxed">
              Explore the interplay of natural pine wood architecture, tranquil stream currents, misty canopy mornings, and glowing evening campfires at The Cove Lakkidi.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'Villas', label: 'A-Framedd Architecture' },
              { id: 'rooms', label: 'Suites & Interiors' },
              { id: 'stream', label: 'Natural Stream' },
              { id: 'nature', label: 'Campfire & Grounds' },
              { id: 'dining', label: 'Culinary' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#000101] text-[#ffffff]'
                    : 'bg-[#ffffff] text-[#5f5e5b] border border-[#e4e2e0] hover:text-[#1b1c1b]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative aspect-[4/3] sm:aspect-square bg-[#1a1c1e] overflow-hidden cursor-pointer border border-[#e4e2e0] ambient-shadow ambient-shadow-hover"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000101]/80 via-[#000101]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#ffe088] font-semibold block mb-1">
                  {item.category}
                </span>
                <h4 className="font-display text-base text-[#ffffff] font-medium leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] font-sans-ui text-[#f2f0ee] mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 bg-[#000101]/70 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ffffff] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            className="fixed inset-0 z-[90] bg-[#000101]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 text-[#ffffff] hover:text-[#ffe088] transition-colors rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#ffffff] hover:text-[#ffe088] transition-colors rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#ffffff] hover:text-[#ffe088] transition-colors rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image Box */}
            <div
              className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].alt}
                className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-[#ffffff]/20"
              />
              <div className="mt-4 text-center text-[#ffffff] max-w-2xl px-4">
                <span className="text-xs font-sans-ui uppercase tracking-widest text-[#ffe088] font-semibold">
                  {lightboxIndex + 1} / {filteredItems.length} • {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm font-sans-ui text-[#dcd8d2] mt-1">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
