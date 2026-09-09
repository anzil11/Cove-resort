/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { NearbyPage } from './pages/NearbyPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { RoomDetailModal } from './components/RoomDetailModal';
import { BrochureModal } from './components/BrochureModal';
import { BookingCalculatorModal } from './components/BookingCalculatorModal';
import { Room, PageId } from './types';
import { RESORT_INFO, ROOMS_DATA } from './data/resortData';
import { MessageSquare, BookOpen } from 'lucide-react';
import { generateWhatsAppLink } from './utils/helpers';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Room>(ROOMS_DATA[0]);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState<boolean>(false);
  const [bookingInitialRoom, setBookingInitialRoom] = useState<Room | null>(null);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Sync hash in URL with currentPage for direct bookmarking & browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#/', '').replace('#', '');
      const parts = rawHash.split('/');
      const mainPath = parts[0]?.toLowerCase();
      const subParam = parts[1];

      if (mainPath === 'room' || mainPath === 'room-detail' || (mainPath === 'rooms' && subParam)) {
        const foundRoom = ROOMS_DATA.find((r) => r.id === subParam) || ROOMS_DATA[0];
        setSelectedRoomForDetail(foundRoom);
        setCurrentPage('room-detail');
      } else if (['home', 'about', 'rooms', 'gallery', 'nearby', 'contact'].includes(mainPath)) {
        setCurrentPage(mainPath as PageId);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoomForDetail = (room: Room) => {
    setSelectedRoomForDetail(room);
    setCurrentPage('room-detail');
    window.location.hash = `#/room/${room.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (room?: Room) => {
    if (room) {
      setBookingInitialRoom(room);
    } else {
      setBookingInitialRoom(selectedRoomForDetail || ROOMS_DATA[0]);
    }
    setIsDetailModalOpen(false);
    setIsBookingModalOpen(true);
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  const directWhatsAppUrl = generateWhatsAppLink(RESORT_INFO.phone, {
    customMessage: "Hello The Cove Lakkidi, I would like to inquire about room availability and tariffs."
  });

  return (
    <div className="min-h-screen bg-[#fbf9f7] text-[#1b1c1b] flex flex-col font-sans-ui selection:bg-[#1a1c1e] selection:text-[#ffffff]">
      {/* Top Fixed Header with 6 Discrete Page Links */}
      <Header
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenBrochure={() => setIsBrochureModalOpen(true)}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Slide-out Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenBrochure={() => setIsBrochureModalOpen(true)}
      />

      {/* Main Multi-Page Content with Animated Route Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage === 'room-detail' ? `room-${selectedRoomForDetail.id}` : currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onSelectRoom={handleSelectRoomForDetail}
                onBookNow={handleOpenBooking}
                onOpenBrochure={() => setIsBrochureModalOpen(true)}
                currency={currency}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenBrochure={() => setIsBrochureModalOpen(true)}
                onOpenBooking={() => handleOpenBooking()}
              />
            )}

            {currentPage === 'rooms' && (
              <RoomsPage
                onNavigate={handleNavigate}
                onSelectRoom={handleSelectRoomForDetail}
                onBookNow={handleOpenBooking}
                currency={currency}
                onToggleCurrency={handleToggleCurrency}
              />
            )}

            {currentPage === 'room-detail' && (
              <RoomDetailPage
                room={selectedRoomForDetail}
                onNavigate={handleNavigate}
                onSelectOtherRoom={handleSelectRoomForDetail}
                onOpenBrochure={() => setIsBrochureModalOpen(true)}
                currency={currency}
                onToggleCurrency={handleToggleCurrency}
              />
            )}

            {currentPage === 'gallery' && (
              <GalleryPage
                onNavigate={handleNavigate}
                onOpenBooking={() => handleOpenBooking()}
                onOpenBrochure={() => setIsBrochureModalOpen(true)}
              />
            )}

            {currentPage === 'nearby' && (
              <NearbyPage
                onNavigate={handleNavigate}
                onOpenBooking={() => handleOpenBooking()}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Unified Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectRoom={handleSelectRoomForDetail}
        onOpenBrochure={() => setIsBrochureModalOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Editorial Room Detail Modal (fallback/instant quick view) */}
      <RoomDetailModal
        room={selectedRoomForDetail}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        currency={currency}
        onBookNow={(room) => handleOpenBooking(room)}
      />

      {/* Reservation Engine Modal */}
      <BookingCalculatorModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currency={currency}
        initialRoom={bookingInitialRoom || selectedRoomForDetail}
      />

      {/* Official PDF Details Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />

      {/* Floating WhatsApp & Brochure Action Triggers */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsBrochureModalOpen(true)}
          className="hidden sm:flex items-center gap-2 bg-[#ffffff] border border-[#e4e2e0] px-3.5 py-2 text-xs font-sans-ui font-semibold uppercase tracking-wider text-[#1b1c1b] hover:bg-[#f5f3f1] shadow-lg ambient-shadow transition-all cursor-pointer"
          title="Open Official PDF Brochure"
        >
          <BookOpen className="w-4 h-4 text-[#735c00]" />
          <span>PDF Brochure</span>
        </button>

        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-[#ffffff] p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 hover:scale-105 hover:bg-[#20bd5a] transition-all cursor-pointer font-sans-ui text-xs font-semibold uppercase tracking-wider"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Concierge</span>
        </a>
      </div>
    </div>
  );
}
