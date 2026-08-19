import React from 'react';
import { 
  X, 
  Home, 
  Bed, 
  Compass, 
  Image as ImageIcon, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Info
} from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';
import { generateWhatsAppLink } from '../utils/helpers';
import { PageId } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const handleItemClick = (page: PageId) => {
    onNavigate(page);
    onClose();
  };

  const directWhatsAppUrl = generateWhatsAppLink(RESORT_INFO.phone, {
    customMessage: "Hello, I am looking to book a peaceful getaway at The Cove Lakkidi. Please share current rates and availability."
  });

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-[#000101]/40 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div
        id="nav-drawer"
        className={`fixed inset-y-0 left-0 z-[70] bg-[#fbf9f7] w-full max-w-[380px] shadow-2xl flex flex-col justify-between p-8 sm:p-10 transform transition-transform duration-500 ease-out border-r border-[#e4e2e0] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top: Header & Close */}
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-[#e4e2e0]">
            <div>
              <div className="font-display text-xl tracking-[0.2em] font-normal text-[#1b1c1b]">
                THE COVE
              </div>
              <div className="font-sans-ui text-[10px] tracking-[0.3em] uppercase text-[#735c00] font-medium">
                LAKKIDI RESORTS
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-[#1b1c1b] hover:opacity-70 transition-opacity rounded-full hover:bg-[#e4e2e0]/40 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="mt-8 flex flex-col gap-4">
            <button
              onClick={() => handleItemClick('home')}
              className={`flex items-center gap-4 py-2 px-3 rounded-none transition-all duration-300 font-display text-lg text-left cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-[#1b1c1b] text-[#ffffff]'
                  : 'text-[#5f5e5b] hover:text-[#1b1c1b] hover:pl-5'
              }`}
            >
              <Home className={`w-5 h-5 ${currentPage === 'home' ? 'text-[#ffe088]' : 'text-[#735c00]'}`} />
              <span>Home</span>
            </button>

            <button
              onClick={() => handleItemClick('about')}
              className={`flex items-center gap-4 py-2 px-3 rounded-none transition-all duration-300 font-display text-lg text-left cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-[#1b1c1b] text-[#ffffff]'
                  : 'text-[#5f5e5b] hover:text-[#1b1c1b] hover:pl-5'
              }`}
            >
              <Info className={`w-5 h-5 ${currentPage === 'about' ? 'text-[#ffe088]' : 'text-[#735c00]'}`} />
              <span>About Sanctuary</span>
            </button>

            <button
              onClick={() => handleItemClick('rooms')}
              className={`flex items-center gap-4 py-2 px-3 rounded-none transition-all duration-300 font-display text-lg text-left cursor-pointer ${
                currentPage === 'rooms'
                  ? 'bg-[#1b1c1b] text-[#ffffff]'
                  : 'text-[#5f5e5b] hover:text-[#1b1c1b] hover:pl-5'
              }`}
            >
              <Bed className={`w-5 h-5 ${currentPage === 'rooms' ? 'text-[#ffe088]' : 'text-[#735c00]'}`} />
              <span>Rooms &amp; Suites</span>
            </button>

            <button
              onClick={() => handleItemClick('gallery')}
              className={`flex items-center gap-4 py-2 px-3 rounded-none transition-all duration-300 font-display text-lg text-left cursor-pointer ${
                currentPage === 'gallery'
                  ? 'bg-[#1b1c1b] text-[#ffffff]'
                  : 'text-[#5f5e5b] hover:text-[#1b1c1b] hover:pl-5'
              }`}
            >
              <ImageIcon className={`w-5 h-5 ${currentPage === 'gallery' ? 'text-[#ffe088]' : 'text-[#735c00]'}`} />
              <span>Photo Gallery</span>
            </button>

            <button
              onClick={() => handleItemClick('nearby')}
              className={`flex items-center justify-between py-2 px-3 rounded-none transition-all duration-300 font-display text-lg text-left cursor-pointer ${
                currentPage === 'nearby'
                  ? 'bg-[#1b1c1b] text-[#ffffff]'
                  : 'text-[#5f5e5b] hover:text-[#1b1c1b] hover:pl-5'
              }`}
            >
              <div className="flex items-center gap-4">
                <Compass className={`w-5 h-5 ${currentPage === 'nearby' ? 'text-[#ffe088]' : 'text-[#735c00]'}`} />
                <span>26 Nearby Views</span>
              </div>
              <span className="bg-[#ffe088] text-[#1b1c1b] text-[10px] px-2 py-0.5 font-bold font-sans-ui">
                26
              </span>
            </button>

            <button
              onClick={() => handleItemClick('contact')}
              className={`flex items-center gap-4 py-2 px-3 rounded-none transition-all duration-300 font-display text-lg text-left cursor-pointer ${
                currentPage === 'contact'
                  ? 'bg-[#1b1c1b] text-[#ffffff]'
                  : 'text-[#5f5e5b] hover:text-[#1b1c1b] hover:pl-5'
              }`}
            >
              <MapPin className={`w-5 h-5 ${currentPage === 'contact' ? 'text-[#ffe088]' : 'text-[#735c00]'}`} />
              <span>Contact &amp; Map</span>
            </button>
          </nav>
        </div>

        {/* Bottom: Direct Actions */}
        <div className="pt-6 border-t border-[#e4e2e0] flex flex-col gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full bg-[#000101] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-[0.15em] py-3.5 hover:bg-[#30302f] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            Reserve Your Stay
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-[#ffffff] font-sans-ui text-[11px] font-semibold uppercase tracking-wider py-2.5 px-3 flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${RESORT_INFO.phone}`}
              className="bg-[#e5e2dd] text-[#1b1c1b] font-sans-ui text-[11px] font-semibold uppercase tracking-wider py-2.5 px-3 flex items-center justify-center gap-1.5 hover:bg-[#dcd8d2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="text-center mt-2">
            <p className="text-[11px] text-[#5f5e5b]">
              Direct Concierge: <span className="font-semibold text-[#1b1c1b]">{RESORT_INFO.displayPhone}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
