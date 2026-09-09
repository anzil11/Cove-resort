// import React from 'react';
// import { Waves, Flame, Sparkles, Coffee, HeartHandshake, ShieldCheck, TreePine, Sun, Music } from 'lucide-react';
// import { RESORT_AMENITIES } from '../data/resortData';

// export const ExperienceBento: React.FC = () => {
//   return (
//     <section id="experience" className="py-20 md:py-28 bg-[#f5f3f1] border-t border-[#e4e2e0]">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-3 block">
//             Nature Immersion
//           </span>
//           <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#1b1c1b] font-normal leading-tight">
//             The Cove Experience
//           </h2>
//           <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] mt-4 font-light leading-relaxed">
//             Nestled directly alongside an attached fresh water stream in the high altitudes of Lakkidi, where misty rain, pine wood aromas, and mountain stillness create unhurried moments.
//           </p>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {/* Bento Item 1: Attached Natural Stream (Spans 2 cols) */}
//           <div className="md:col-span-2 bg-[#ffffff] border border-[#e4e2e0] overflow-hidden p-8 sm:p-10 flex flex-col justify-between group ambient-shadow ambient-shadow-hover relative min-h-[380px]">
//             <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-end">
//               <span className="material-symbols-outlined text-[200px] text-[#735c00]">waves</span>
//             </div>

//             <div>
//               <div className="w-12 h-12 bg-[#f5f3f1] border border-[#e4e2e0] flex items-center justify-center text-[#735c00] mb-6">
//                 <span className="material-symbols-outlined text-[28px]">waves</span>
//               </div>
//               <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#735c00] font-bold">
//                 Signature Feature
//               </span>
//               <h3 className="font-display text-2xl sm:text-3xl text-[#1b1c1b] mt-2 mb-4">
//                 Attached Natural Mountain Stream
//               </h3>
//               <p className="font-sans-ui text-sm text-[#5f5e5b] leading-relaxed max-w-md">
//                 Walk directly from your wooden suite down stone steps into a safe, crystal-clear flowing stream. Bathe in pure mountain runoff, dip your feet while reading, or fall asleep to the tranquil rhythm of rushing water.
//               </p>
//             </div>

//             <div className="pt-6 border-t border-[#e4e2e0] flex items-center gap-4 text-xs font-sans-ui text-[#1b1c1b] font-medium">
//               <span className="flex items-center gap-1.5">
//                 <span className="w-2 h-2 rounded-full bg-[#227b3b]" />
//                 Zero pollution
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <span className="w-2 h-2 rounded-full bg-[#227b3b]" />
//                 Direct property border
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <span className="w-2 h-2 rounded-full bg-[#227b3b]" />
//                 Natural pebble bed
//               </span>
//             </div>
//           </div>

//           {/* Bento Item 2: Campfire & Barbeque (Spans 1 col) */}
//           <div className="bg-[#ffffff] border border-[#e4e2e0] p-8 flex flex-col justify-between group ambient-shadow ambient-shadow-hover">
//             <div>
//               <div className="w-12 h-12 bg-[#f5f3f1] border border-[#e4e2e0] flex items-center justify-center text-[#735c00] mb-6">
//                 <span className="material-symbols-outlined text-[28px]">local_fire_department</span>
//               </div>
//               <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#735c00] font-bold">
//                 Evening Magic
//               </span>
//               <h3 className="font-display text-xl sm:text-2xl text-[#1b1c1b] mt-2 mb-3">
//                 Campfire &amp; BBQ
//               </h3>
//               <p className="font-sans-ui text-xs sm:text-sm text-[#5f5e5b] leading-relaxed">
//                 As the cool Wayanad evening sets in, gather around the crackling campfire pit on the stone patio with sizzling marinated skewers and music.
//               </p>
//             </div>

//             <div className="pt-4 border-t border-[#e4e2e0] text-xs font-sans-ui text-[#735c00] font-semibold">
//               Firewood &amp; Grill available daily &rarr;
//             </div>
//           </div>

//           {/* Bento Item 3: A-Framedd Architecture */}
//           <div className="bg-[#ffffff] border border-[#e4e2e0] p-8 flex flex-col justify-between group ambient-shadow ambient-shadow-hover">
//             <div>
//               <div className="w-12 h-12 bg-[#f5f3f1] border border-[#e4e2e0] flex items-center justify-center text-[#735c00] mb-6">
//                 <span className="material-symbols-outlined text-[28px]">cottage</span>
//               </div>
//               <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#735c00] font-bold">
//                 Design
//               </span>
//               <h3 className="font-display text-xl sm:text-2xl text-[#1b1c1b] mt-2 mb-3">
//                 Iconic A-Framedd Villas
//               </h3>
//               <p className="font-sans-ui text-xs sm:text-sm text-[#5f5e5b] leading-relaxed">
//                 Handcrafted pine wood walls, dramatic pitched roofs, triangular view windows, and private wooden balconies blending seamlessly into the forest.
//               </p>
//             </div>

//             <div className="pt-4 border-t border-[#e4e2e0] text-xs font-sans-ui text-[#735c00] font-semibold">
//               Sustainable Pine Wood Construction
//             </div>
//           </div>

//           {/* Bento Item 4: Pet Friendly Sanctuary */}
//           <div className="bg-[#ffffff] border border-[#e4e2e0] p-8 flex flex-col justify-between group ambient-shadow ambient-shadow-hover">
//             <div>
//               <div className="w-12 h-12 bg-[#f5f3f1] border border-[#e4e2e0] flex items-center justify-center text-[#735c00] mb-6">
//                 <span className="material-symbols-outlined text-[28px]">pets</span>
//               </div>
//               <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#735c00] font-bold">
//                 Welcoming
//               </span>
//               <h3 className="font-display text-xl sm:text-2xl text-[#1b1c1b] mt-2 mb-3">
//                 100% Pet Friendly
//               </h3>
//               <p className="font-sans-ui text-xs sm:text-sm text-[#5f5e5b] leading-relaxed">
//                 We believe your beloved four-legged companions belong in nature too. Open garden lawns and stream side trails await.
//               </p>
//             </div>

//             <div className="pt-4 border-t border-[#e4e2e0] text-xs font-sans-ui text-[#735c00] font-semibold">
//               Gated, Safe Grounds
//             </div>
//           </div>

//           {/* Bento Item 5: Complimentary Kerala Breakfast */}
//           <div className="bg-[#ffffff] border border-[#e4e2e0] p-8 flex flex-col justify-between group ambient-shadow ambient-shadow-hover">
//             <div>
//               <div className="w-12 h-12 bg-[#f5f3f1] border border-[#e4e2e0] flex items-center justify-center text-[#735c00] mb-6">
//                 <span className="material-symbols-outlined text-[28px]">restaurant</span>
//               </div>
//               <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#735c00] font-bold">
//                 Culinary
//               </span>
//               <h3 className="font-display text-xl sm:text-2xl text-[#1b1c1b] mt-2 mb-3">
//                 Complimentary Breakfast(on-request)
//               </h3>
//               <p className="font-sans-ui text-xs sm:text-sm text-[#5f5e5b] leading-relaxed">
//                 Start every morning with farm-fresh organic ingredients, homemade Kerala delicacies (Appams, Kadala, Puttu), and hot Wayanad coffee.
//               </p>
//             </div>

//             <div className="pt-4 border-t border-[#e4e2e0] text-xs font-sans-ui text-[#735c00] font-semibold">
//               Included with every reservation
//             </div>
//           </div>

//           {/* Bento Item 6: High Speed Wi-Fi & Workation (Spans 2 cols on lg) */}
//           <div className="md:col-span-2 lg:col-span-2 bg-[#ffffff] border border-[#e4e2e0] p-8 sm:p-10 flex flex-col justify-between group ambient-shadow ambient-shadow-hover">
//             <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
//               <div>
//                 <div className="w-12 h-12 bg-[#f5f3f1] border border-[#e4e2e0] flex items-center justify-center text-[#735c00] mb-6">
//                   <span className="material-symbols-outlined text-[28px]">wifi</span>
//                 </div>
//                 <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#735c00] font-bold">
//                   Connectivity
//                 </span>
//                 <h3 className="font-display text-2xl text-[#1b1c1b] mt-2 mb-3">
//                   Seamless High-Speed Wi-Fi &amp; Sound Systems
//                 </h3>
//                 <p className="font-sans-ui text-sm text-[#5f5e5b] leading-relaxed max-w-md">
//                   Whether taking calls from the overwater balcony or enjoying movie nights on the smart TV, enjoy high-speed optical fiber throughout the entire estate.
//                 </p>
//               </div>

//               <div className="bg-[#f5f3f1] p-4 border border-[#e4e2e0] font-sans-ui text-xs space-y-2 flex-shrink-0">
//                 <div className="font-semibold text-[#1b1c1b]">Estate Features:</div>
//                 <div className="text-[#5f5e5b] flex items-center gap-1.5">
//                   <Music className="w-3.5 h-3.5 text-[#735c00]" /> High Fidelity Bluetooth Audio
//                 </div>
//                 <div className="text-[#5f5e5b] flex items-center gap-1.5">
//                   <Coffee className="w-3.5 h-3.5 text-[#735c00]" /> Welcome Drink on Arrival
//                 </div>
//                 <div className="text-[#5f5e5b] flex items-center gap-1.5">
//                   <Sun className="w-3.5 h-3.5 text-[#735c00]" /> 700m Altitude Misty Breeze
//                 </div>
//               </div>
//             </div>

//             <div className="pt-6 border-t border-[#e4e2e0] text-xs font-sans-ui text-[#5f5e5b]">
//               Direct location: Lakkidi, Wayanad (Near Pookode Lake &amp; Chain Tree)
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import {
  Waves,
  Flame,
  Home,
  PawPrint,
  Tv,
  Wifi,
  Music,
  Coffee,
  Mountain,
} from 'lucide-react';

const features = {
  stream: {
    icon: Waves,
    eyebrow: 'Signature Experience',
    title: 'A Mountain Stream at Your Doorstep',
    description:
      'Step down from your Villas into a crystal-clear natural stream, surrounded by mist, forest and the quiet rhythm of flowing mountain water.',
  },
  pool: {
    icon: Mountain,
    eyebrow: 'Slow Mornings',
    title: 'Infinity Pool',
    description:
      'Float above the valley and take in the misty mountain landscape from our infinity pool.',
  },
};

export const ExperienceBento: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#f5f3f1] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block font-sans-ui text-[10px] font-semibold uppercase tracking-[0.3em] text-[#735c00]">
            The Cove Experience
          </span>

          <h2 className="font-display text-4xl font-normal leading-[1.05] text-[#1b1c1b] sm:text-5xl md:text-6xl">
            More Than a Stay.
            <br />
            <span className="text-[#735c00]">A Feeling.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-sans-ui text-sm font-light leading-7 text-[#66635e] sm:text-base">
            Wake up to mountain mist, listen to the stream, take a dip in the
            infinity pool and slow down in the quiet of Lakkidi.
          </p>
        </div>

        {/* Main Experience Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

          {/* STREAM — HERO */}
          <div className="group relative min-h-[500px] overflow-hidden bg-[#24352d] lg:col-span-7">

            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('/images/mountain-stream.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <div className="relative flex h-full flex-col justify-between p-7 sm:p-10">

              <div className="flex h-12 w-12 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-sm">
                <Waves size={22} strokeWidth={1.5} />
              </div>

              <div className="max-w-xl">
                <span className="mb-3 block font-sans-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e5c85c]">
                  Signature Experience
                </span>

                <h3 className="font-display text-3xl leading-tight text-white sm:text-4xl">
                  A Mountain Stream
                  <br />
                  at Your Doorstep
                </h3>

                <p className="mt-4 max-w-lg font-sans-ui text-sm font-light leading-6 text-white/75">
                  Step down from your Villas into a crystal-clear natural
                  stream, surrounded by mist, forest and the quiet rhythm of
                  flowing mountain water.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {['Natural Stream', 'Forest Setting', 'Direct Access'].map(
                    (item) => (
                      <span
                        key={item}
                        className="border border-white/20 bg-white/10 px-3 py-2 font-sans-ui text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* INFINITY POOL */}
          <div className="group relative min-h-[500px] overflow-hidden bg-[#56736d] lg:col-span-5">

            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('/images/infinity-pool.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

            <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">

              <div className="flex h-12 w-12 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-sm">
                <Waves size={22} strokeWidth={1.5} />
              </div>

              <div>
                <span className="mb-3 block font-sans-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e5c85c]">
                  Slow Mornings
                </span>

                <h3 className="font-display text-3xl leading-tight text-white sm:text-4xl">
                  Infinity
                  <br />
                  Pool
                </h3>

                <p className="mt-4 max-w-md font-sans-ui text-sm font-light leading-6 text-white/75">
                  Float above the valley and take in the misty mountain
                  landscape from our infinity pool.
                </p>
              </div>
            </div>
          </div>

          {/* A-Framed */}
          <div className="group border border-[#e4e2e0] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:col-span-4">
            <Home
              size={25}
              strokeWidth={1.5}
              className="mb-8 text-[#735c00]"
            />

            <span className="font-sans-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-[#735c00]">
              Architecture
            </span>

            <h3 className="mt-2 font-display text-2xl text-[#1b1c1b]">
              Iconic A-Framed Villas
            </h3>

            <p className="mt-4 font-sans-ui text-sm leading-6 text-[#696762]">
              Warm pine interiors, dramatic pitched roofs and triangular
              windows designed to bring the surrounding forest indoors.
            </p>
          </div>

          {/* CAMPFIRE */}
          <div className="group border border-[#e4e2e0] bg-[#29251f] p-7 transition duration-300 hover:-translate-y-1 sm:p-8 lg:col-span-4">
            <Flame
              size={25}
              strokeWidth={1.5}
              className="mb-8 text-[#e5c85c]"
            />

            <span className="font-sans-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-[#cbb75e]">
              After Sunset
            </span>

            <h3 className="mt-2 font-display text-2xl text-white">
              Campfire & BBQ
            </h3>

            <p className="mt-4 font-sans-ui text-sm leading-6 text-white/60">
              Gather around the fire as the temperature drops, with BBQ,
              music and the sound of the forest after dark.
            </p>
          </div>

          {/* SMART TV */}
          <div className="group border border-[#e4e2e0] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:col-span-4">
            <Tv
              size={25}
              strokeWidth={1.5}
              className="mb-8 text-[#735c00]"
            />

            <span className="font-sans-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-[#735c00]">
              Entertainment
            </span>

            <h3 className="mt-2 font-display text-2xl text-[#1b1c1b]">
              Smart TV & Movie Nights
            </h3>

            <p className="mt-4 font-sans-ui text-sm leading-6 text-[#696762]">
              End the day with a relaxed movie night in your private Villas
              with a smart TV and high-fidelity audio.
            </p>
          </div>

          {/* PET FRIENDLY */}
          <div className="border border-[#e4e2e0] bg-white p-7 sm:p-8 lg:col-span-5">
            <PawPrint
              size={25}
              strokeWidth={1.5}
              className="mb-8 text-[#735c00]"
            />

            <span className="font-sans-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-[#735c00]">
              Bring Everyone
            </span>

            <h3 className="mt-2 font-display text-2xl text-[#1b1c1b]">
              Pet Friendly
            </h3>

            <p className="mt-4 max-w-md font-sans-ui text-sm leading-6 text-[#696762]">
              Your four-legged companions are welcome to explore the gardens,
              trails and peaceful natural surroundings with you.
            </p>
          </div>

          {/* WIFI */}
          <div className="border border-[#e4e2e0] bg-[#e8e3d8] p-7 sm:p-8 lg:col-span-7">
            <div className="flex flex-col justify-between gap-8 sm:flex-row">

              <div>
                <Wifi
                  size={25}
                  strokeWidth={1.5}
                  className="mb-8 text-[#735c00]"
                />

                <span className="font-sans-ui text-[10px] font-semibold uppercase tracking-[0.25em] text-[#735c00]">
                  Connected When You Need It
                </span>

                <h3 className="mt-2 font-display text-2xl text-[#1b1c1b]">
                  High-Speed Wi-Fi
                </h3>

                <p className="mt-4 max-w-md font-sans-ui text-sm leading-6 text-[#696762]">
                  Stay connected with reliable high-speed internet throughout
                  the estate, while still feeling completely away from the
                  city.
                </p>
              </div>

              <div className="flex gap-3 self-start">
                <div className="flex h-11 w-11 items-center justify-center border border-[#d5d0c6] bg-white">
                  <Music size={17} className="text-[#735c00]" />
                </div>

                <div className="flex h-11 w-11 items-center justify-center border border-[#d5d0c6] bg-white">
                  <Coffee size={17} className="text-[#735c00]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



