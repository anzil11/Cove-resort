import React from 'react';
import { TreePine, Droplets, ShieldCheck, Heart, Sparkles, Feather } from 'lucide-react';
import { TESTIMONIALS } from '../data/resortData';

export const ResortHeritageSection: React.FC = () => {
  return (
    <section id="heritage" className="py-20 md:py-28 bg-[#fbf9f7] border-t border-[#e4e2e0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Narrative Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block">
              Architectural Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#1b1c1b] leading-tight font-normal">
              A Quiet Dialogue Between Architecture and Wilderness
            </h2>
            <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] leading-relaxed font-light">
              Built at 700 meters above sea level  The Cove Lakkidi was conceived not as an intrusion into nature, but as an organic extension of the misty rainforest canopy.
            </p>
            <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] leading-relaxed font-light">
              Using locally sourced treated pine timber, natural stone paving, and steeply pitched A-Framedd rooflines designed to handle Wayanad’s torrential monsoon downpours, the estate preserves the delicate microclimate and natural stream corridor.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 font-sans-ui text-xs">
              <div className="border-l-2 border-[#735c00] pl-4">
                <div className="font-display text-2xl font-bold text-[#1b1c1b]">700m</div>
                <div className="text-[#5f5e5b] mt-0.5">High Altitude Cool Climate</div>
              </div>
              <div className="border-l-2 border-[#735c00] pl-4">
                <div className="font-display text-2xl font-bold text-[#1b1c1b]">100%</div>
                <div className="text-[#5f5e5b] mt-0.5">Natural Stream Sourced Water</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#e4e2e0] ambient-shadow">
              <img
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85"
                alt="Architecture & Nature at The Cove Lakkidi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#ffffff] border border-[#e4e2e0] p-6 max-w-xs hidden sm:block ambient-shadow">
              <p className="font-accent text-lg italic text-[#1b1c1b] leading-snug">
                &ldquo;Where the song of running water is your perpetual morning alarm.&rdquo;
              </p>
              <span className="block font-sans-ui text-[10px] uppercase tracking-widest text-[#735c00] mt-2 font-bold">
                The Cove Lakkidi
              </span>
            </div>
          </div>
        </div>

        {/* Guest Testimonials Carousel / Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block mb-2">
              Guest Impressions
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-[#1b1c1b]">
              Memories from the Stream
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#ffffff] border border-[#e4e2e0] p-8 flex flex-col justify-between ambient-shadow ambient-shadow-hover"
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
                  <span className="text-[10px] bg-[#f5f3f1] px-2 py-1 text-[#735c00] font-medium truncate max-w-[120px]">
                    {t.stayedIn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
