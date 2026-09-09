import React, { useState } from 'react';
import { X, Download, Printer, Check, Phone, MessageSquare, MapPin, Compass, Waves, TreePine } from 'lucide-react';
import { RESORT_INFO, ROOMS_DATA, ATTRACTIONS_DATA, RESORT_AMENITIES } from '../data/resortData';
import { generateWhatsAppLink } from '../utils/helpers';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[85] bg-[#000101]/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-[#fbf9f7] w-full max-w-4xl min-h-[90vh] my-auto border border-[#e4e2e0] shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Top Control Bar */}
        <div className="bg-[#1b1c1b] text-[#ffffff] px-6 py-4 flex justify-between items-center border-b border-[#30302f]">
          <div className="flex items-center gap-3">
            <div className="font-display text-lg tracking-[0.15em] uppercase">
              THE COVE LAKKIDI
            </div>
            <span className="bg-[#735c00] text-[#ffffff] text-[10px] uppercase font-bold font-sans-ui px-2 py-0.5">
              Official Brochure Details
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-[#ffffff] hover:text-[#ffe088] transition-colors rounded hover:bg-[#ffffff]/10 flex items-center gap-1.5 text-xs font-sans-ui"
              title="Print Brochure"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-[#ffffff] hover:text-[#ffe088] transition-colors rounded-full hover:bg-[#ffffff]/10"
              aria-label="Close Brochure Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Switcher Tabs */}
        <div className="bg-[#f5f3f1] border-b border-[#e4e2e0] px-6 flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar font-sans-ui text-xs">
          <button
            onClick={() => setActiveTab(1)}
            className={`py-3 px-3 font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 1
                ? 'border-[#735c00] text-[#1b1c1b] bg-[#ffffff]'
                : 'border-transparent text-[#5f5e5b] hover:text-[#1b1c1b]'
            }`}
          >
            Page 1: Villas &amp; Sanctuary
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`py-3 px-3 font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 2
                ? 'border-[#735c00] text-[#1b1c1b] bg-[#ffffff]'
                : 'border-transparent text-[#5f5e5b] hover:text-[#1b1c1b]'
            }`}
          >
            Page 2: Wander at Cove
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`py-3 px-3 font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 3
                ? 'border-[#735c00] text-[#1b1c1b] bg-[#ffffff]'
                : 'border-transparent text-[#5f5e5b] hover:text-[#1b1c1b]'
            }`}
          >
            Page 3: Stay &amp; Wooden Rooms
          </button>
          <button
            onClick={() => setActiveTab(4)}
            className={`py-3 px-3 font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 4
                ? 'border-[#735c00] text-[#1b1c1b] bg-[#ffffff]'
                : 'border-transparent text-[#5f5e5b] hover:text-[#1b1c1b]'
            }`}
          >
            Page 4: 26 Near By Attractions
          </button>
        </div>

        {/* Brochure Page Contents */}
        <div className="p-6 sm:p-10 flex-grow overflow-y-auto max-h-[70vh]">
          
          {/* PAGE 1: Overview & Villas specs */}
          {activeTab === 1 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="relative aspect-[21/9] sm:aspect-[2/1] overflow-hidden bg-[#1a1c1e] border border-[#e4e2e0]">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
                  alt="The Cove Lakkidi Villas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000101]/90 via-[#000101]/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <span className="text-xs font-sans-ui uppercase tracking-[0.3em] text-[#ffe088] font-semibold">
                    Resort Brochure • Page 1
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl text-[#ffffff] font-normal mt-1">
                    THE COVE LAKKIDI
                  </h2>
                  <p className="text-xs sm:text-sm font-sans-ui text-[#f2f0ee] mt-1">
                    Stream Side A-Framedd 04 Bedroom Private Villas
                  </p>
                </div>
              </div>

              {/* PDF Highlight List from Page 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans-ui text-xs">
                {[
                  "Attached Natural Stream",
                  "Wooden A/C Rooms (2 Rooms)",
                  "Private Balcony",
                  "Stream Side Non A/C Deluxe Rooms (2 Rooms)",
                  "Handcrafted Bunk Bed Suite",
                  // "Complimentary Breakfast(on-request)",
                  "Free High-Speed Wi-Fi",
                  "100% Pet Friendly",
                  "TV & Music System Included",
                  "Barbeque & Campfire Setup",
                  "Welcome Drink on Arrival",
                  `Direct Booking Hotline: ${RESORT_INFO.displayPhone}`
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-[#ffffff] border border-[#e4e2e0]">
                    <div className="w-5 h-5 bg-[#735c00] text-[#ffffff] flex items-center justify-center rounded-full text-[10px] font-bold">
                      ✓
                    </div>
                    <span className="font-medium text-[#1b1c1b]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAGE 2: Wander at Cove */}
          {activeTab === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-[#e4e2e0] pb-4">
                <span className="text-xs font-sans-ui uppercase tracking-[0.25em] text-[#735c00] font-semibold">
                  Resort Brochure • Page 2
                </span>
                <h2 className="font-display text-3xl text-[#1b1c1b] mt-1">
                  Wander at Cove Lakkidi
                </h2>
                <p className="text-xs font-sans-ui text-[#5f5e5b] mt-1">
                  Three exterior perspectives of our iconic A-Framedd architecture nestled within ancient rainforest ferns.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="aspect-[4/5] overflow-hidden border border-[#e4e2e0]">
                    <img
                      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                      alt="Front A-Framedd Villas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] font-sans-ui text-[#5f5e5b] font-medium text-center">
                    Iconic A-Framedd Structure
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="aspect-[4/5] overflow-hidden border border-[#e4e2e0]">
                    <img
                      src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
                      alt="Cobblestone Path"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] font-sans-ui text-[#5f5e5b] font-medium text-center">
                    Cobblestone Nature Pathway
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="aspect-[4/5] overflow-hidden border border-[#e4e2e0]">
                    <img
                      src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
                      alt="Evening Illumination"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] font-sans-ui text-[#5f5e5b] font-medium text-center">
                    Twilight Warm Glow
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* PAGE 3: Stay at Cove Lakkidi */}
          {activeTab === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-[#e4e2e0] pb-4">
                <span className="text-xs font-sans-ui uppercase tracking-[0.25em] text-[#735c00] font-semibold">
                  Resort Brochure • Page 3
                </span>
                <h2 className="font-display text-3xl text-[#1b1c1b] mt-1">
                  Stay at Cove Lakkidi
                </h2>
                <p className="text-xs font-sans-ui text-[#5f5e5b] mt-1">
                  Interior craft, pine wood attic rooms, overwater balconies, and deluxe stream side suites.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#ffffff] border border-[#e4e2e0] space-y-3">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80"
                      alt="Attic Bunk Bed Suite"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-display text-base text-[#1b1c1b]">
                    Premium A/C Wooden Attic &amp; Bunk Bed
                  </h4>
                  <p className="text-xs font-sans-ui text-[#5f5e5b]">
                    Pitched pine wood ceiling, King bed, custom 2-tier bunk bed, TV &amp; music system.
                  </p>
                </div>

                <div className="p-4 bg-[#ffffff] border border-[#e4e2e0] space-y-3">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                      alt="Balcony Stream Deck"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-display text-base text-[#1b1c1b]">
                    Private Attached Stream Balcony
                  </h4>
                  <p className="text-xs font-sans-ui text-[#5f5e5b]">
                    Outdoor wooden sit-out positioned directly over the rushing crystal mountain stream.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* PAGE 4: 26 Near By Attractions */}
          {activeTab === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-[#e4e2e0] pb-4">
                <span className="text-xs font-sans-ui uppercase tracking-[0.25em] text-[#735c00] font-semibold">
                  Resort Brochure • Page 4
                </span>
                <h2 className="font-display text-3xl text-[#1b1c1b] mt-1">
                  Near By Attractions (26 Spots)
                </h2>
                <p className="text-xs font-sans-ui text-[#5f5e5b] mt-1">
                  Exact tourist destinations with distances from The Cove Lakkidi as listed in the official brochure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans-ui text-xs">
                {ATTRACTIONS_DATA.map((attraction, i) => (
                  <div
                    key={attraction.id}
                    className="flex items-center justify-between p-3 bg-[#ffffff] border border-[#e4e2e0]"
                  >
                    <div className="flex items-center gap-2.5 truncate mr-2">
                      <span className="w-5 h-5 bg-[#f5f3f1] text-[#75777a] flex items-center justify-center font-bold text-[10px]">
                        {i + 1}
                      </span>
                      <span className="font-medium text-[#1b1c1b] truncate">
                        {attraction.name}
                        {attraction.isPrivate ? '*' : ''}
                      </span>
                    </div>
                    <span className="font-bold text-[#735c00] bg-[#f5f3f1] px-2 py-0.5 whitespace-nowrap">
                      {attraction.distance}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[#75777a] font-sans-ui">
                *Indicates private eco parks and adventure museums.
              </p>
            </div>
          )}

        </div>

        {/* Bottom Booking & Contact Bar */}
        <div className="bg-[#ffffff] border-t border-[#e4e2e0] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] block">
              Reservations &amp; Enquiries
            </span>
            <span className="font-display text-xl font-bold text-[#1b1c1b]">
              {RESORT_INFO.displayPhone}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={generateWhatsAppLink(RESORT_INFO.phone, {
                customMessage: "Hello! I am reviewing The Cove Lakkidi official brochure and would like to book a stay."
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-3 bg-[#25D366] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>

            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-3 bg-[#000101] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-wider hover:bg-[#30302f] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
