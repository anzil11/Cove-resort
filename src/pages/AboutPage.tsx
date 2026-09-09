import React from 'react';
import { motion } from 'motion/react';
import { 
  TreePine, 
  Droplets, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Feather, 
  Waves, 
  Compass, 
  BookOpen, 
  Coffee,
  Flame,
  Wifi,
  Car,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { RESORT_INFO, RESORT_AMENITIES } from '../data/resortData';
import { PageId } from '../types';
import { generateWhatsAppLink } from '../utils/helpers';
import coveAframeTwilight from '../assets/images/cove_aframe_twilight_1786990321192.jpg';
import coveAerialNight from '../assets/images/cove_aerial_night_1786990367663.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBrochure: () => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBrochure,
  onOpenBooking
}) => {
  return (
    <div className="w-full pt-20">
      <SEO page="about" />

      {/* Hero Header Banner */}
      <section className="relative py-20 md:py-28 bg-[#1b1c1b] text-[#ffffff] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={coveAerialNight}
            alt="The Cove Lakkidi Architecture"
            className="w-full h-full object-cover filter brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1b] via-[#1b1c1b]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff]/10 border border-[#ffe088]/30 text-[#ffe088] text-xs font-sans-ui tracking-[0.25em] uppercase font-semibold mb-4">
            <span>Our Heritage &amp; Philosophy</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-[#ffffff] max-w-4xl mx-auto">
            A Quiet Dialogue Between Architecture and Wilderness
          </h1>

          <p className="font-sans-ui text-sm sm:text-base md:text-lg text-[#d0d0d4] max-w-2xl mx-auto mt-6 font-light leading-relaxed">
            Perched at 700 meters above sea level in Lakkidi The Cove Lakkidi was conceived as an organic continuation of Wayanad’s misty rainforest canopy.
          </p>

          <div className="flex items-center justify-center gap-2 font-sans-ui text-xs text-[#ffe088] mt-6 tracking-widest uppercase">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span>About Sanctuary</span>
          </div>
        </div>
      </section>

      {/* Section 1: Architectural Philosophy & The Natural Stream */}
      <section className="py-20 md:py-28 bg-[#fbf9f7] border-b border-[#e4e2e0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story text (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block">
                The Origins of The Cove
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#1b1c1b] leading-tight font-normal">
                Crafted with Mountain Stone &amp; Treated Pine Timber
              </h2>
              <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] leading-relaxed font-light">
                Built to withstand the torrential monsoon downpours of Lakkidi—one of the wettest high-altitude corridors in India—our iconic A-Framedd architecture features steeply pitched rooflines that gracefully shed the rain while creating soaring, light-filled interior attic spaces.
              </p>
              <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] leading-relaxed font-light">
                Rather than altering the land’s topography, the estate was sculpted around the natural flowing mountain stream that wraps the property. Crystal-clear water, filtered through ancient rainforest bedrock, supplies our natural bathing pools and creates a soothing acoustic tapestry day and night.
              </p>

              {/* Stat Highlights */}
              <div className="pt-4 grid grid-cols-3 gap-4 font-sans-ui text-xs border-t border-[#e4e2e0]">
                <div className="border-l-2 border-[#735c00] pl-3">
                  <div className="font-display text-2xl font-bold text-[#1b1c1b]">700m</div>
                  <div className="text-[#5f5e5b] text-[11px] mt-0.5">Above Sea Level</div>
                </div>
                <div className="border-l-2 border-[#735c00] pl-3">
                  <div className="font-display text-2xl font-bold text-[#1b1c1b]">18°-24°</div>
                  <div className="text-[#5f5e5b] text-[11px] mt-0.5">Year-Round Cool</div>
                </div>
                <div className="border-l-2 border-[#735c00] pl-3">
                  <div className="font-display text-2xl font-bold text-[#1b1c1b]">100%</div>
                  <div className="text-[#5f5e5b] text-[11px] mt-0.5">Natural Stream</div>
                </div>
              </div>
            </div>

            {/* Visual composition (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#e4e2e0] ambient-shadow">
                <img
                  src={coveAframeTwilight}
                  alt="A-Framedd Villas Frontage"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#ffffff] border border-[#e4e2e0] p-6 max-w-xs hidden sm:block ambient-shadow">
                <p className="font-accent text-lg italic text-[#1b1c1b] leading-snug">
                  &ldquo;A retreat designed for those who understand that nature is the ultimate luxury.&rdquo;
                </p>
                <span className="block font-sans-ui text-[10px] uppercase tracking-widest text-[#735c00] mt-2 font-bold">
                  The Cove Lakkidi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Sanctuary Pillars Bento */}
      <section className="py-20 md:py-28 bg-[#f5f3f1]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-2 block">
              Core Principles
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-[#1b1c1b]">
              The Four Pillars of Our Sanctuary
            </h2>
            <p className="font-sans-ui text-sm text-[#5f5e5b] mt-3 font-light">
              Every detail of your stay has been curated to promote deep rejuvenation and authentic connection with the natural world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-[#ffffff] border border-[#e4e2e0] p-8 ambient-shadow space-y-4">
              <div className="w-12 h-12 bg-[#f5f3f1] text-[#735c00] flex items-center justify-center">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-[#1b1c1b]">Attached Natural Stream</h3>
              <p className="font-sans-ui text-xs text-[#5f5e5b] leading-relaxed">
                Step right from the Villas terrace into cool, shallow natural stream pools. Refresh your senses with chemical-free mountain spring water.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#ffffff] border border-[#e4e2e0] p-8 ambient-shadow space-y-4">
              <div className="w-12 h-12 bg-[#f5f3f1] text-[#735c00] flex items-center justify-center">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-[#1b1c1b]">Aromatic Pine Timber</h3>
              <p className="font-sans-ui text-xs text-[#5f5e5b] leading-relaxed">
                All suites are lined with polished pine and teak timber, creating natural thermal insulation, clean organic fragrances, and cozy warmth.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#ffffff] border border-[#e4e2e0] p-8 ambient-shadow space-y-4">
              <div className="w-12 h-12 bg-[#f5f3f1] text-[#735c00] flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-[#1b1c1b]">Campfire &amp; BBQ Nights</h3>
              <p className="font-sans-ui text-xs text-[#5f5e5b] leading-relaxed">
                Evenings come alive on our stone patio with crackling wood fires, live barbecue grilling, stargazing, and ambient music under misty skies.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#ffffff] border border-[#e4e2e0] p-8 ambient-shadow space-y-4">
              <div className="w-12 h-12 bg-[#f5f3f1] text-[#735c00] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-[#1b1c1b]">Malabar Hospitality</h3>
              <p className="font-sans-ui text-xs text-[#5f5e5b] leading-relaxed">
                From steaming morning appams to customized travel itineraries across Wayanad, our dedicated concierge ensures thoughtful care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Bespoke Amenities Grid */}
      <section className="py-20 md:py-28 bg-[#fbf9f7] border-t border-[#e4e2e0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-2 block">
                Sanctuary Inclusions
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#1b1c1b]">
                Thoughtfully Crafted Comforts
              </h2>
            </div>

            <button
              onClick={onOpenBrochure}
              className="px-6 py-3 bg-[#ffffff] border border-[#e4e2e0] text-[#1b1c1b] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#f5f3f1] transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <BookOpen className="w-4 h-4 text-[#735c00]" />
              <span>Official PDF Brochure</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESORT_AMENITIES.map((amenity, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#ffffff] border border-[#e4e2e0] ambient-shadow hover:border-[#000101] transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-[24px] text-[#735c00] group-hover:scale-110 transition-transform">
                    {amenity.icon}
                  </span>
                  <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#735c00] font-bold">
                    {amenity.highlight}
                  </span>
                </div>
                <h3 className="font-display text-lg text-[#1b1c1b] mb-2">{amenity.title}</h3>
                <p className="font-sans-ui text-xs text-[#5f5e5b] leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Wayanad & Vythiri Cultural Lore */}
      <section className="py-20 md:py-28 bg-[#1b1c1b] text-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#ffe088] font-semibold block">
                Local History &amp; Geography
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#ffffff] font-normal leading-tight">
                Vythiri &amp; The Gateway to Wayanad
              </h2>
              <p className="font-sans-ui text-sm sm:text-base text-[#c5c6ca] leading-relaxed font-light">
                Lakkidi sits at the crest of the Thamarassery Ghat, serving as the dramatic high-altitude entryway to Wayanad. Just 500 meters from our Villas stands the legendary <strong>Chain Tree</strong>—a giant ficus bound by heavy iron chains that commemorates Karinthandan, the tribal youth whose ancestral knowledge first revealed the secret pass across the Western Ghats.
              </p>
              <p className="font-sans-ui text-sm sm:text-base text-[#c5c6ca] leading-relaxed font-light">
                Today, Vythiri retains its quiet, secluded plantation heritage, protected from urban clutter and blessed with year-round cool temperatures, wild bird species, and lush cardamom groves.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('nearby')}
                  className="px-6 py-3.5 bg-[#ffffff] text-[#000101] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#ffe088] transition-all flex items-center gap-2 group"
                >
                  <span>Explore 26 Nearby Attractions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#30302f]/60 border border-[#50504f] p-8 space-y-4 backdrop-blur-sm">
                <h3 className="font-display text-2xl text-[#ffe088]">Sanctuary Quick Facts</h3>
                <div className="space-y-3 font-sans-ui text-xs text-[#c5c6ca]">
                  <div className="flex justify-between py-2 border-b border-[#50504f]">
                    <span>Location</span>
                    <span className="font-semibold text-[#ffffff]">Lakkidi</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#50504f]">
                    <span>District</span>
                    <span className="font-semibold text-[#ffffff]">Wayanad, Kerala</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#50504f]">
                    <span>Elevation</span>
                    <span className="font-semibold text-[#ffffff]">700 Meters</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#50504f]">
                    <span>Nearest Lake</span>
                    <span className="font-semibold text-[#ffffff]">Pookode Lake (1.5 Km)</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Direct Hotline</span>
                    <span className="font-semibold text-[#ffe088]">{RESORT_INFO.displayPhone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#fbf9f7] border-t border-[#e4e2e0] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h3 className="font-display text-3xl text-[#1b1c1b]">Experience The Cove Firsthand</h3>
          <p className="font-sans-ui text-xs sm:text-sm text-[#5f5e5b]">
            Reserve your wooden suite or the entire 8-bedroom Villas for your upcoming holiday.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 bg-[#000101] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#30302f] transition-all shadow-md"
            >
              Check Availability
            </button>
            <button
              onClick={() => onNavigate('rooms')}
              className="px-8 py-3.5 bg-[#ffffff] border border-[#e4e2e0] text-[#1b1c1b] text-xs font-sans-ui font-semibold uppercase tracking-widest hover:bg-[#f5f3f1] transition-all"
            >
              Browse All Rooms
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
