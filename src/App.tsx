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
import { BookingCalculatorModal } from './components/BookingCalculatorModal';
import { Room, PageId } from './types';
import { RESORT_INFO, ROOMS_DATA } from './data/resortData';
import { MessageSquare } from 'lucide-react';
import { generateWhatsAppLink } from './utils/helpers';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Room>(ROOMS_DATA[0]);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingInitialRoom, setBookingInitialRoom] = useState<Room | null>(null);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Route resolver helper: parses pathname and hash into clean page + room state
  useEffect(() => {
    const resolveCurrentRoute = () => {
      // Check pathname first (e.g. /about, /rooms, /room/villa-aframe)
      let path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();

      // If pathname is empty or index.html, check hash (e.g. #/about, #about)
      if (!path || path === 'index.html') {
        const rawHash = window.location.hash.replace(/^#\/?/, '').replace(/\/+$/, '').toLowerCase();
        if (rawHash) {
          path = rawHash;
        }
      }

      if (!path || path === 'home') {
        setCurrentPage('home');
        return;
      }

      const parts = path.split('/');
      const mainSection = parts[0];
      const subParam = parts[1];

      if (mainSection === 'room' || mainSection === 'room-detail' || (mainSection === 'rooms' && subParam)) {
        const foundRoom = ROOMS_DATA.find((r) => r.id === (subParam || parts[1])) || ROOMS_DATA[0];
        setSelectedRoomForDetail(foundRoom);
        setCurrentPage('room-detail');
      } else if (['about', 'rooms', 'gallery', 'nearby', 'contact'].includes(mainSection)) {
        setCurrentPage(mainSection as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check on load
    resolveCurrentRoute();

    // Listen to browser Back / Forward buttons (popstate) & hashchange
    window.addEventListener('popstate', resolveCurrentRoute);
    window.addEventListener('hashchange', resolveCurrentRoute);

    return () => {
      window.removeEventListener('popstate', resolveCurrentRoute);
      window.removeEventListener('hashchange', resolveCurrentRoute);
    };
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}`;
    
    // Cleanly update URL in browser bar without reload using pushState
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState({ page }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoomForDetail = (room: Room) => {
    setSelectedRoomForDetail(room);
    setCurrentPage('room-detail');
    const targetPath = `/room/${room.id}`;
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState({ page: 'room-detail', roomId: room.id }, '', targetPath);
    }
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
                currency={currency}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
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
                currency={currency}
                onToggleCurrency={handleToggleCurrency}
              />
            )}

            {currentPage === 'gallery' && (
              <GalleryPage
                onNavigate={handleNavigate}
                onOpenBooking={() => handleOpenBooking()}
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

      {/* Floating WhatsApp Action Trigger */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
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
