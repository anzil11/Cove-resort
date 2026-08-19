import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';
import { PageId } from '../types';

interface HeaderProps {
  onOpenDrawer: () => void;
  onOpenBooking: () => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDrawer,
  onOpenBooking,
  currentPage,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fbf9f7]/95 backdrop-blur-md shadow-sm border-b border-[#e4e2e0]/60 py-3'
          : 'bg-[#fbf9f7]/90 md:bg-transparent backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 flex justify-between items-center relative">
        {/* Left Side: Brand Logo (Before Home menu) & Desktop Nav Links */}
        <div className="flex items-center gap-6 lg:gap-10">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="text-left cursor-pointer group focus:outline-none flex flex-col justify-center"
          >
            <div className="font-display text-base sm:text-xl lg:text-2xl tracking-[0.18em] font-normal text-[#1b1c1b] uppercase leading-tight">
              THE COVE LAKKIDI
            </div>
            <div className="font-sans-ui text-[8.5px] sm:text-[9.5px] tracking-[0.25em] uppercase text-[#735c00] font-medium group-hover:text-[#1b1c1b] transition-colors">
              Stream Side Resort • Wayanad
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 font-sans-ui text-xs tracking-widest uppercase text-[#5f5e5b]">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors border-b pb-0.5 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#1b1c1b] border-[#1b1c1b] font-bold'
                  : 'hover:text-[#1b1c1b] border-transparent hover:border-[#1b1c1b]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`transition-colors border-b pb-0.5 cursor-pointer ${
                currentPage === 'about'
                  ? 'text-[#1b1c1b] border-[#1b1c1b] font-bold'
                  : 'hover:text-[#1b1c1b] border-transparent hover:border-[#1b1c1b]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate('rooms')}
              className={`transition-colors border-b pb-0.5 cursor-pointer ${
                currentPage === 'rooms'
                  ? 'text-[#1b1c1b] border-[#1b1c1b] font-bold'
                  : 'hover:text-[#1b1c1b] border-transparent hover:border-[#1b1c1b]'
              }`}
            >
              Rooms &amp; Suites
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className={`transition-colors border-b pb-0.5 cursor-pointer ${
                currentPage === 'gallery'
                  ? 'text-[#1b1c1b] border-[#1b1c1b] font-bold'
                  : 'hover:text-[#1b1c1b] border-transparent hover:border-[#1b1c1b]'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => onNavigate('nearby')}
              className={`transition-colors border-b pb-0.5 flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'nearby'
                  ? 'text-[#1b1c1b] border-[#1b1c1b] font-bold'
                  : 'hover:text-[#1b1c1b] border-transparent hover:border-[#1b1c1b]'
              }`}
            >
              <span>Nearby Views</span>
              <span className="bg-[#1b1c1b] text-[#ffffff] text-[9px] px-1.5 py-0.2 rounded-none font-bold">
                26
              </span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`transition-colors border-b pb-0.5 cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-[#1b1c1b] border-[#1b1c1b] font-bold'
                  : 'hover:text-[#1b1c1b] border-transparent hover:border-[#1b1c1b]'
              }`}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Right Side: Phone, Book Now & Menu Drawer Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${RESORT_INFO.phone}`}
            aria-label="Call concierge"
            className="p-2 text-[#1b1c1b] hover:text-[#735c00] transition-colors hidden sm:flex items-center"
            title="Call Concierge"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            id="header-book-now-btn"
            onClick={onOpenBooking}
            className="bg-[#000101] text-[#ffffff] font-sans-ui text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-[#30302f] transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span className="hidden xs:inline">Book Now</span>
            <span className="xs:hidden">Book</span>
            <span className="material-symbols-outlined text-[14px]">calendar_month</span>
          </button>

          <button
            id="header-menu-btn"
            onClick={onOpenDrawer}
            aria-label="Open Navigation Drawer"
            className="p-2 text-[#1b1c1b] hover:text-[#5f5e5b] transition-colors rounded-full flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
            <span className="hidden xl:inline-block font-sans-ui text-xs tracking-widest uppercase font-semibold text-[#1b1c1b]">
              Menu
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
