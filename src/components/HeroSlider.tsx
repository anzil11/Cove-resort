import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  MapPin, 
  Waves, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  Calendar,
  Users
} from 'lucide-react';
import { HERO_SLIDES, RESORT_INFO, ROOMS_DATA } from '../data/resortData';
import { formatCurrency, generateWhatsAppLink } from '../utils/helpers';
import { PageId } from '../types';

interface HeroSliderProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  currency: 'INR' | 'USD';
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigate,
  onOpenBooking,
  currency
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [selectedRoom, setSelectedRoom] = useState<string>(ROOMS_DATA[0].id);
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(2);

  const slideTextRef = useRef<HTMLDivElement>(null);
  const slideDuration = 6000; // 6 seconds per slide

  const currentSlide = HERO_SLIDES[currentSlideIndex];
  const currentRoom = ROOMS_DATA.find((r) => r.id === selectedRoom) || ROOMS_DATA[0];

  // GSAP Text Animation on slide change
  useEffect(() => {
    if (slideTextRef.current) {
      const elements = slideTextRef.current.querySelectorAll('.gsap-reveal');
      gsap.fromTo(
        elements,
        {
          y: 28,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
        }
      );
    }
  }, [currentSlideIndex]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [isPlaying, currentSlideIndex]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppLink(RESORT_INFO.phone, {
      roomName: currentRoom.name,
      checkIn: checkInDate || 'Requested Weekend',
      checkOut: checkOutDate || 'Next Day',
      guests: guestCount,
      customMessage: `I am inquiring about ${currentRoom.name} at The Cove Lakkidi. Please share tariff and availability.`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] md:min-h-screen w-full flex flex-col justify-between pt-24 pb-8 md:pb-12 overflow-hidden bg-[#000101]"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* 4 Sliding Background Images with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center filter brightness-90 md:brightness-85"
            />
            {/* Cinematic Gradient Overlays for High Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000101]/95 via-[#000101]/45 to-[#000101]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000101]/60 via-transparent to-[#000101]/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Floating Badges */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 w-full pt-4 flex justify-between items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fbf9f7]/15 backdrop-blur-md border border-[#ffffff]/20 text-[#ffffff] text-xs font-sans-ui tracking-widest uppercase">
          <MapPin className="w-3.5 h-3.5 text-[#ffe088]" />
          <span>Old Vythiri, Lakkidi • 700m Altitude</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fbf9f7]/15 backdrop-blur-md border border-[#ffffff]/20 text-[#ffffff] text-xs font-sans-ui tracking-widest uppercase">
          <Waves className="w-3.5 h-3.5 text-[#ffe088]" />
          <span>Attached Natural Stream Bathing</span>
        </div>
      </div>

      {/* Center Editorial Slide Hero Content */}
      <div 
        ref={slideTextRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center my-auto py-8"
      >
        <div className="gsap-reveal inline-flex items-center gap-2 px-3 py-1 bg-[#000101]/60 border border-[#ffe088]/40 text-[#ffe088] text-[11px] font-sans-ui tracking-[0.25em] uppercase font-semibold mb-4 rounded-none">
          <Sparkles className="w-3 h-3" />
          <span>{currentSlide.tagline}</span>
        </div>

        <h1 className="gsap-reveal font-display text-4xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.08] text-[#ffffff] mb-5 font-normal drop-shadow-md">
          {currentSlide.title}
        </h1>

        <p className="gsap-reveal font-sans-ui text-base sm:text-lg md:text-xl text-[#e5e2dd] max-w-2xl mx-auto font-light leading-relaxed mb-8 drop-shadow">
          {currentSlide.description}
        </p>

        {/* Action Buttons */}
        <div className="gsap-reveal flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('rooms')}
            className="bg-[#ffffff] text-[#000101] font-sans-ui text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#ffe088] transition-all duration-300 shadow-xl cursor-pointer active:scale-95 flex items-center gap-2 group"
          >
            <span>{currentSlide.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={generateWhatsAppLink(RESORT_INFO.phone, {
              customMessage: `Hello! I saw ${currentSlide.title} on your website and would like to inquire about staying at The Cove Lakkidi.`
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-[0.15em] px-6 py-4 hover:bg-[#20bd5a] transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Concierge</span>
          </a>
        </div>
      </div>

      {/* Slider Controls: Arrows, 4 Slide Indicators & Play/Pause */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 w-full mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Slide Counter & Play/Pause */}
        <div className="flex items-center gap-3 text-xs font-sans-ui text-[#ffffff]/80">
          <span className="font-display text-lg text-[#ffe088]">
            0{currentSlideIndex + 1}
          </span>
          <span className="text-[#ffffff]/40">/</span>
          <span>0{HERO_SLIDES.length}</span>
          <span className="text-xs uppercase tracking-widest text-[#ffffff]/60 hidden sm:inline">
            — {currentSlide.badge}
          </span>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            className="p-1.5 rounded-full hover:bg-[#ffffff]/20 text-[#ffffff] transition-colors ml-2"
            title={isPlaying ? "Pause auto-slide" : "Resume auto-slide"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* 4 Interactive Slide Tabs */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-lg">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`relative text-left p-2 transition-all cursor-pointer border-t-2 ${
                  isActive
                    ? 'border-[#ffe088] bg-[#ffffff]/15 backdrop-blur-sm'
                    : 'border-[#ffffff]/20 bg-[#000101]/40 hover:bg-[#ffffff]/10'
                }`}
              >
                <div className="text-[10px] font-sans-ui uppercase tracking-wider text-[#ffe088] truncate font-semibold">
                  0{idx + 1}
                </div>
                <div className="text-[11px] font-display text-[#ffffff] truncate hidden sm:block">
                  {slide.badge}
                </div>
                {/* Active progress bar */}
                {isActive && isPlaying && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: slideDuration / 1000, ease: 'linear' }}
                    className="absolute top-0 left-0 h-[2px] bg-[#ffe088]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="p-2.5 bg-[#ffffff]/10 hover:bg-[#ffffff]/25 border border-[#ffffff]/20 text-[#ffffff] transition-colors cursor-pointer rounded-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="p-2.5 bg-[#ffffff]/10 hover:bg-[#ffffff]/25 border border-[#ffffff]/20 text-[#ffffff] transition-colors cursor-pointer rounded-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Floating Quick Reservation Strip */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 w-full">
        <div className="bg-[#fbf9f7]/95 backdrop-blur-md border border-[#ffffff]/30 p-4 sm:p-6 shadow-2xl ambient-shadow">
          <form onSubmit={handleQuickInquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            {/* Room Category */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5f5e5b] font-semibold">
                Accommodation
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full bg-transparent border-b border-[#c5c6ca] text-xs font-sans-ui font-medium text-[#1b1c1b] py-2 focus:outline-none focus:border-[#000101] cursor-pointer"
              >
                {ROOMS_DATA.map((room) => (
                  <option key={room.id} value={room.id} className="text-[#1b1c1b] py-1 bg-[#ffffff]">
                    {room.name.length > 34 ? room.name.substring(0, 34) + '...' : room.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-In */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5f5e5b] font-semibold">
                Check-In Date
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full bg-transparent border-b border-[#c5c6ca] text-xs font-sans-ui font-medium text-[#1b1c1b] py-2 focus:outline-none focus:border-[#000101]"
              />
            </div>

            {/* Check-Out */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5f5e5b] font-semibold">
                Check-Out Date
              </label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full bg-transparent border-b border-[#c5c6ca] text-xs font-sans-ui font-medium text-[#1b1c1b] py-2 focus:outline-none focus:border-[#000101]"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-sans-ui uppercase tracking-widest text-[#5f5e5b] font-semibold">
                Guests &amp; Tariff
              </label>
              <div className="flex items-center justify-between border-b border-[#c5c6ca] py-1.5">
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="bg-transparent text-xs font-sans-ui font-medium text-[#1b1c1b] focus:outline-none cursor-pointer"
                >
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={6}>6 Guests</option>
                  <option value={8}>8 Guests</option>
                  <option value={12}>12+ (Entire Villa)</option>
                </select>
                <span className="text-xs font-serif text-[#735c00] font-bold">
                  {formatCurrency(currentRoom.priceINR, currency)}
                </span>
              </div>
            </div>

            {/* Instant WhatsApp Tariff Quote */}
            <button
              type="submit"
              className="w-full bg-[#000101] text-[#ffffff] font-sans-ui text-xs uppercase tracking-widest font-semibold py-3.5 hover:bg-[#30302f] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md"
            >
              <span>Instant Quote</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>

          {/* Quick Perks Ticker */}
          <div className="mt-4 pt-3 border-t border-[#e4e2e0] flex flex-wrap items-center justify-between gap-y-2 text-[11px] font-sans-ui text-[#5f5e5b]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#735c00]" />
              <span>Complimentary Breakfast &amp; Welcome Refreshment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#735c00]" />
              <span>Direct Natural Stream Access &amp; Pet Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#735c00]" />
              <span>Private Campfire &amp; BBQ Station Option</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
