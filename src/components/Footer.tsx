import React from 'react';
import { ArrowUp, Phone, MessageSquare, BookOpen, MapPin, Heart } from 'lucide-react';
import { RESORT_INFO, ROOMS_DATA } from '../data/resortData';
import { generateWhatsAppLink } from '../utils/helpers';
import { PageId, Room } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectRoom?: (room: Room) => void;
  onOpenBrochure: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectRoom,
  onOpenBrochure,
  onOpenBooking
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoomClick = (roomId: string) => {
    const room = ROOMS_DATA.find((r) => r.id === roomId);
    if (room && onSelectRoom) {
      onSelectRoom(room);
    } else {
      onNavigate('rooms');
    }
  };

  return (
    <footer className="bg-[#1b1c1b] text-[#f2f0ee] pt-16 pb-12 border-t border-[#30302f]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#30302f]">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-display text-2xl tracking-[0.2em] font-normal text-[#ffffff] uppercase">
              THE COVE LAKKIDI
            </div>
            <p className="font-sans-ui text-xs text-[#9fa0a4] max-w-sm leading-relaxed">
              Stream Side A-Framedd 04 Bedroom Private Villas and Luxury Wooden Suites in Lakkidi, Wayanad. An untamed mountain sanctuary with Natural Stream Bathing and campfire hospitality.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={generateWhatsAppLink(RESORT_INFO.phone, {
                  customMessage: "Hello The Cove Lakkidi, I'd like to make a reservation."
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#30302f] hover:bg-[#25D366] text-[#ffffff] transition-colors rounded-none"
                title="WhatsApp Concierge"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${RESORT_INFO.phone}`}
                className="p-2.5 bg-[#30302f] hover:bg-[#735c00] text-[#ffffff] transition-colors rounded-none"
                title="Call Reservations"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenBrochure}
                className="p-2.5 bg-[#30302f] hover:bg-[#ffe088] hover:text-[#000101] text-[#ffffff] transition-colors rounded-none cursor-pointer"
                title="Open PDF Brochure"
              >
                <BookOpen className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div className="font-sans-ui text-xs space-y-3">
            <h4 className="font-semibold uppercase tracking-widest text-[#ffe088] text-[11px] mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-[#c5c6ca]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#ffffff] transition-colors text-left cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#ffffff] transition-colors text-left cursor-pointer"
                >
                  About Sanctuary
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rooms')}
                  className="hover:text-[#ffffff] transition-colors text-left cursor-pointer"
                >
                  Suites &amp; A-Framedd Villas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#ffffff] transition-colors text-left cursor-pointer"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nearby')}
                  className="hover:text-[#ffffff] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span>26 Nearby Views</span>
                  <span className="bg-[#ffe088] text-[#1b1c1b] text-[9px] px-1 font-bold">26</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#ffffff] transition-colors text-left cursor-pointer"
                >
                  Contact &amp; Wayanad Map
                </button>
              </li>
            </ul>
          </div>

          {/* Suites & Villas Quick Links */}
          <div className="font-sans-ui text-xs space-y-3">
            <h4 className="font-semibold uppercase tracking-widest text-[#ffe088] text-[11px] mb-4">
              Accommodations
            </h4>
            <ul className="space-y-2.5 text-[#c5c6ca]">
              <li>
                <button
                  onClick={() => handleRoomClick('premium-ac-wooden-balcony-bunk')}
                  className="hover:text-[#ffffff] transition-colors text-left cursor-pointer"
                >
                  Premium A/C Balcony &amp; Bunk
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRoomClick('premium-ac-wooden-room')}
                  className="hover:text-[#ffffff] transition-colors text-left cursor-pointer"
                >
                  Premium A/C Wooden Room
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRoomClick('streamside-ac-wooden-balcony')}
                  className="hover:text-[#ffffff] transition-colors text-left cursor-pointer"
                >
                  Stream Side A/C Balcony Room
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRoomClick('streamside-non-ac-room')}
                  className="hover:text-[#ffffff] transition-colors text-left cursor-pointer"
                >
                  Stream Side Non-A/C Deluxe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRoomClick('entire-4bhk-private-Villas')}
                  className="hover:text-[#ffe088] transition-colors text-left font-medium cursor-pointer"
                >
                  Exclusive 4-BHK Villas Buyout
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="font-sans-ui text-xs space-y-3">
            <h4 className="font-semibold uppercase tracking-widest text-[#ffe088] text-[11px] mb-4">
              Sanctuary Desk
            </h4>
            <p className="text-[#c5c6ca] leading-relaxed">
               Lakkidi,<br />
              Wayanad, Kerala 673576
            </p>
            <p className="text-[#ffe088] font-semibold text-sm">
              {RESORT_INFO.displayPhone}
            </p>
            <p className="text-[#9fa0a4]">
              Check-in: 02:00 PM<br />
              Check-out: 11:00 AM
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans-ui text-xs text-[#75777a]">
          <div>
            &copy; {new Date().getFullYear()} THE COVE LAKKIDI RESORTS. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenBrochure}
              className="hover:text-[#ffffff] transition-colors cursor-pointer"
            >
              PDF Guide
            </button>
            <button
              onClick={onOpenBooking}
              className="hover:text-[#ffffff] transition-colors cursor-pointer"
            >
              Reservation Engine
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#30302f] hover:bg-[#ffe088] hover:text-[#000101] text-[#ffffff] transition-colors rounded-full flex items-center justify-center cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
