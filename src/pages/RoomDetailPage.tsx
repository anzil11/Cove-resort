import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bed, 
  Users, 
  Wind, 
  Eye, 
  Check, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  MessageSquare, 
  Phone,
  Maximize2,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Waves,
  Wifi,
  Flame,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Clock,
  MapPin,
  Utensils,
  Share2
} from 'lucide-react';
import { Room, PageId } from '../types';
import { ROOMS_DATA, RESORT_INFO } from '../data/resortData';
import { formatCurrency, generateWhatsAppLink } from '../utils/helpers';
import { SEO } from '../components/SEO';

interface RoomDetailPageProps {
  room: Room;
  onNavigate: (page: PageId) => void;
  onSelectOtherRoom: (room: Room) => void;
  onOpenBrochure: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export const RoomDetailPage: React.FC<RoomDetailPageProps> = ({
  room,
  onNavigate,
  onSelectOtherRoom,
  onOpenBrochure,
  currency,
  onToggleCurrency
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'specifications' | 'policies'>('overview');

  // Calendar & Booking State
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 2);
  const tomorrowStr = tomorrowDate.toISOString().split('T')[0];

  const [checkInDate, setCheckInDate] = useState<string>(todayStr);
  const [checkOutDate, setCheckOutDate] = useState<string>(tomorrowStr);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [includeCampfire, setIncludeCampfire] = useState<boolean>(false);
  const [includeBarbeque, setIncludeBarbeque] = useState<boolean>(false);
  const [includeCandleDinner, setIncludeCandleDinner] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  // Interactive Month Calendar Selector
  const [calendarMonthOffset, setCalendarMonthOffset] = useState<number>(0); // 0 = current month, 1 = next month
  const [isSelectingCheckOut, setIsSelectingCheckOut] = useState<boolean>(false);

  // Calculate nights
  const nights = useMemo(() => {
    if (!checkInDate || !checkOutDate) return 1;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkInDate, checkOutDate]);

  // Pricing calculations
  const baseRateINR = room.priceINR;
  const extraAdults = Math.max(0, adults - 2);
  const extraAdultCostPerNight = extraAdults * 800;
  const roomTotalINR = (baseRateINR + extraAdultCostPerNight) * nights;
  
  const campfireCostINR = includeCampfire ? 600 : 0;
  const barbequeCostINR = includeBarbeque ? 800 : 0;
  const candleDinnerCostINR = includeCandleDinner ? 1200 : 0;
  const addOnsTotalINR = campfireCostINR + barbequeCostINR + candleDinnerCostINR;

  const totalAmountINR = roomTotalINR + addOnsTotalINR;

  // Calendar dates matrix generation
  const currentCalendarDate = useMemo(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + calendarMonthOffset);
    return d;
  }, [calendarMonthOffset]);

  const monthName = currentCalendarDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const calendarDays = useMemo(() => {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days: Array<{ day: number; dateStr: string; isPast: boolean; isCheckIn: boolean; isCheckOut: boolean; isInRange: boolean }> = [];
    
    const nowStr = new Date().toISOString().split('T')[0];

    for (let i = 1; i <= daysInMonth; i++) {
      const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const isPast = dayStr < nowStr;
      const isCheckIn = dayStr === checkInDate;
      const isCheckOut = dayStr === checkOutDate;
      const isInRange = dayStr > checkInDate && dayStr < checkOutDate;

      days.push({
        day: i,
        dateStr: dayStr,
        isPast,
        isCheckIn,
        isCheckOut,
        isInRange
      });
    }

    return { firstDayIndex, days };
  }, [currentCalendarDate, checkInDate, checkOutDate]);

  const handleDateClick = (dateStr: string, isPast: boolean) => {
    if (isPast) return;
    if (!isSelectingCheckOut) {
      setCheckInDate(dateStr);
      // Auto set check-out to next day
      const nextDay = new Date(dateStr);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOutDate(nextDay.toISOString().split('T')[0]);
      setIsSelectingCheckOut(true);
    } else {
      if (dateStr <= checkInDate) {
        setCheckInDate(dateStr);
        const nextDay = new Date(dateStr);
        nextDay.setDate(nextDay.getDate() + 1);
        setCheckOutDate(nextDay.toISOString().split('T')[0]);
      } else {
        setCheckOutDate(dateStr);
        setIsSelectingCheckOut(false);
      }
    }
  };

  const handleWhatsAppReservation = () => {
    const formattedCheckIn = new Date(checkInDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const formattedCheckOut = new Date(checkOutDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    let addOnsText = '';
    if (includeCampfire) addOnsText += ' • Starlit Campfire';
    if (includeBarbeque) addOnsText += ' • BBQ Grill Kit';
    if (includeCandleDinner) addOnsText += ' • Candlelight Stream Dinner';
    if (!addOnsText) addOnsText = ' None';

    const message = `*NEW RESERVATION INQUIRY - THE COVE LAKKIDI*
━━━━━━━━━━━━━━━━━━━━
🏨 *Room Category:* ${room.name}
📅 *Check-In:* ${formattedCheckIn}
📅 *Check-Out:* ${formattedCheckOut}
🌙 *Total Nights:* ${nights} Night(s)
👥 *Guests:* ${adults} Adults${children > 0 ? `, ${children} Children` : ''}
✨ *Add-ons:* ${addOnsText}
💰 *Estimated Tariff:* ${formatCurrency(totalAmountINR, currency)}
━━━━━━━━━━━━━━━━━━━━
👤 *Guest Name:* ${fullName || 'Guest'}
📞 *Contact:* ${phone || 'Available on chat'}
${specialRequests ? `📝 *Special Requests:* ${specialRequests}\n` : ''}
Please confirm availability and booking instructions.`;

    const url = `https://wa.me/${RESORT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'COVE-WYD-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomRef);
    setBookingConfirmed(true);
  };

  // Other rooms recommendation
  const otherRooms = ROOMS_DATA.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <div className="w-full pt-20 bg-[#fbf9f7] text-[#1b1c1b]">
      <SEO page="rooms" />

      {/* Breadcrumbs & Navigation Bar */}
      <div className="bg-[#ffffff] border-b border-[#e4e2e0] py-3.5 sticky top-[68px] z-30 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 flex flex-wrap items-center justify-between gap-4 font-sans-ui text-xs">
          <div className="flex items-center gap-2 text-[#5f5e5b]">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#1b1c1b] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('rooms')}
              className="hover:text-[#1b1c1b] transition-colors cursor-pointer"
            >
              Rooms &amp; Suites
            </button>
            <span>/</span>
            <span className="text-[#1b1c1b] font-semibold truncate max-w-[200px] sm:max-w-none">
              {room.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('rooms')}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#e4e2e0] bg-[#fbf9f7] hover:bg-[#1b1c1b] hover:text-[#ffffff] transition-all cursor-pointer font-semibold uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Rooms</span>
            </button>

            <button
              onClick={onToggleCurrency}
              className="px-3 py-1.5 border border-[#e4e2e0] bg-[#ffffff] text-[#735c00] hover:text-[#1b1c1b] transition-colors font-semibold"
            >
              {currency === 'INR' ? '₹ INR' : '$ USD'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Hero & Gallery Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          {/* Header Title & Badges */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 bg-[#000101] text-[#ffffff] text-[10px] font-sans-ui uppercase tracking-wider font-semibold">
                {room.acType}
              </span>
              {room.hasBalcony && (
                <span className="px-2.5 py-0.5 bg-[#735c00] text-[#ffffff] text-[10px] font-sans-ui uppercase tracking-wider font-semibold">
                  Private Forest Balcony
                </span>
              )}
              {room.hasBunkBed && (
                <span className="px-2.5 py-0.5 bg-[#1b7a34] text-[#ffffff] text-[10px] font-sans-ui uppercase tracking-wider font-semibold">
                  Solid Pine Bunk Bed
                </span>
              )}
              {room.hasStreamView && (
                <span className="px-2.5 py-0.5 bg-[#0284c7] text-[#ffffff] text-[10px] font-sans-ui uppercase tracking-wider font-semibold">
                  Stream View Access
                </span>
              )}
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div>
                <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-normal text-[#1b1c1b] leading-tight">
                  {room.name}
                </h1>
                <p className="font-sans-ui text-sm sm:text-base text-[#735c00] font-medium mt-1">
                  {room.tagline}
                </p>
              </div>

              <div className="flex items-baseline gap-2 bg-[#ffffff] p-4 border border-[#e4e2e0] shadow-xs">
                <span className="text-xs font-sans-ui uppercase tracking-widest text-[#5f5e5b]">From</span>
                <span className="font-display text-3xl font-bold text-[#1b1c1b]">
                  {formatCurrency(room.priceINR, currency)}
                </span>
                <span className="text-xs font-sans-ui text-[#5f5e5b]">/ night</span>
              </div>
            </div>
          </div>

          {/* High-Resolution Interactive Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-12">
            {/* Main Featured Display (8 cols) */}
            <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden bg-[#1b1c1b] border border-[#e4e2e0]">
              <img
                src={room.images[selectedImageIndex] || room.images[0]}
                alt={`${room.name} - View ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-[#000101]/80 backdrop-blur-md text-[#ffffff] text-xs px-3 py-1 font-sans-ui">
                Photo {selectedImageIndex + 1} of {room.images.length}
              </div>
            </div>

            {/* Thumbnails Strip (4 cols) */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative aspect-[16/10] overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImageIndex === idx
                      ? 'border-[#000101] ring-2 ring-[#735c00]'
                      : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${room.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}

              {/* Quick Brochure Download Card */}
              <div
                onClick={onOpenBrochure}
                className="col-span-2 p-4 bg-[#f5f3f1] border border-[#e4e2e0] flex items-center justify-between hover:bg-[#e4e2e0]/60 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#735c00]" />
                  <div>
                    <div className="font-sans-ui text-xs font-semibold uppercase text-[#1b1c1b]">
                      PDF Brochure
                    </div>
                    <div className="text-[11px] text-[#5f5e5b]">
                      View official room floorplan &amp; tariff
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#1b1c1b]" />
              </div>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#ffffff] border border-[#e4e2e0] mb-12 shadow-xs">
            <div className="flex items-center gap-3 border-r border-[#e4e2e0] last:border-0 pr-4">
              <Maximize2 className="w-6 h-6 text-[#735c00] flex-shrink-0" />
              <div>
                <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] block">Total Space</span>
                <span className="font-semibold text-sm text-[#1b1c1b]">{room.space}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r border-[#e4e2e0] last:border-0 pr-4">
              <Users className="w-6 h-6 text-[#735c00] flex-shrink-0" />
              <div>
                <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] block">Occupancy</span>
                <span className="font-semibold text-sm text-[#1b1c1b]">{room.capacity}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r border-[#e4e2e0] last:border-0 pr-4">
              <Bed className="w-6 h-6 text-[#735c00] flex-shrink-0" />
              <div>
                <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] block">Bedding Setup</span>
                <span className="font-semibold text-xs sm:text-sm text-[#1b1c1b] line-clamp-1">{room.bed}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#735c00] flex-shrink-0" />
              <div>
                <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] block">Surroundings</span>
                <span className="font-semibold text-sm text-[#1b1c1b]">{room.view}</span>
              </div>
            </div>
          </div>

          {/* Two Columns Layout: Left Content (Story & Amenities) + Right Sticky Booking & Calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Col: Tabs, Details, Amenities (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Tab Selector */}
              <div className="flex border-b border-[#e4e2e0] font-sans-ui text-xs font-semibold uppercase tracking-wider overflow-x-auto">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-3 px-4 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'overview'
                      ? 'border-[#000101] text-[#000101] font-bold'
                      : 'border-transparent text-[#5f5e5b] hover:text-[#1b1c1b]'
                  }`}
                >
                  Overview &amp; Story
                </button>
                <button
                  onClick={() => setActiveTab('amenities')}
                  className={`pb-3 px-4 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'amenities'
                      ? 'border-[#000101] text-[#000101] font-bold'
                      : 'border-transparent text-[#5f5e5b] hover:text-[#1b1c1b]'
                  }`}
                >
                  Amenities ({room.amenities.length})
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`pb-3 px-4 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'specifications'
                      ? 'border-[#000101] text-[#000101] font-bold'
                      : 'border-transparent text-[#5f5e5b] hover:text-[#1b1c1b]'
                  }`}
                >
                  Specs Matrix
                </button>
                <button
                  onClick={() => setActiveTab('policies')}
                  className={`pb-3 px-4 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'policies'
                      ? 'border-[#000101] text-[#000101] font-bold'
                      : 'border-transparent text-[#5f5e5b] hover:text-[#1b1c1b]'
                  }`}
                >
                  Stay Policies
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-2xl text-[#1b1c1b] mb-4">
                      Sanctuary Architecture &amp; Living Experience
                    </h3>
                    <p className="font-sans-ui text-sm sm:text-base text-[#44474a] leading-relaxed mb-4">
                      {room.fullDescription}
                    </p>
                    <p className="font-sans-ui text-sm sm:text-base text-[#44474a] leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Highlights Box */}
                  <div className="p-6 bg-[#ffffff] border border-[#e4e2e0]">
                    <h4 className="font-sans-ui text-xs uppercase tracking-[0.2em] text-[#735c00] font-semibold mb-4">
                      Room Signature Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {room.keyHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div className="p-1 bg-[#f5f3f1] text-[#735c00] mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-sans-ui text-xs sm:text-sm text-[#1b1c1b]">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Attached Stream Feature Banner */}
                  <div className="p-6 bg-[#1b1c1b] text-[#ffffff] border border-[#30302f]">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#ffffff]/10 text-[#ffe088]">
                        <Waves className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg sm:text-xl text-[#ffffff] mb-1">
                          Direct Access to Attached Natural Stream
                        </h4>
                        <p className="font-sans-ui text-xs sm:text-sm text-[#c5c6ca] leading-relaxed">
                          Guests staying in the {room.name} have unrestricted private access down stone pathways to our natural riverbed pools for morning dips and afternoon relaxation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'amenities' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {room.amenities.map((am, idx) => (
                    <div key={idx} className="p-5 bg-[#ffffff] border border-[#e4e2e0] flex items-start gap-3.5">
                      <div className="p-2 bg-[#f5f3f1] text-[#735c00]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans-ui text-xs sm:text-sm font-bold text-[#1b1c1b]">
                          {am.title}
                        </h4>
                        <p className="font-sans-ui text-xs text-[#5f5e5b] mt-1 leading-relaxed">
                          {am.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Resort Universal Inclusions */}
                  {/* <div className="p-5 bg-[#ffffff] border border-[#e4e2e0] flex items-start gap-3.5">
                    <div className="p-2 bg-[#f5f3f1] text-[#735c00]">
                      <Coffee className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans-ui text-xs sm:text-sm font-bold text-[#1b1c1b]">
                        Complimentary Breakfast(on-request)
                      </h4>
                      <p className="font-sans-ui text-xs text-[#5f5e5b] mt-1">
                        Fresh Kerala breakfast served daily with local tea and fruits.
                      </p>
                    </div>
                  </div> */}

                  <div className="p-5 bg-[#ffffff] border border-[#e4e2e0] flex items-start gap-3.5">
                    <div className="p-2 bg-[#f5f3f1] text-[#735c00]">
                      <Wifi className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans-ui text-xs sm:text-sm font-bold text-[#1b1c1b]">
                        High-Speed Optical Wi-Fi
                      </h4>
                      <p className="font-sans-ui text-xs text-[#5f5e5b] mt-1">
                        Uninterrupted connectivity inside the suite and balcony.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="bg-[#ffffff] border border-[#e4e2e0] overflow-hidden">
                  <table className="w-full text-left font-sans-ui text-xs">
                    <tbody className="divide-y divide-[#e4e2e0]">
                      {room.specifications.map((sp, idx) => (
                        <tr key={idx} className="hover:bg-[#fbf9f7] transition-colors">
                          <td className="p-4 font-semibold text-[#5f5e5b] w-1/3 bg-[#f5f3f1]/60">
                            {sp.label}
                          </td>
                          <td className="p-4 text-[#1b1c1b] font-medium">
                            {sp.value}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="p-4 font-semibold text-[#5f5e5b] bg-[#f5f3f1]/60">
                          Resort Elevation
                        </td>
                        <td className="p-4 text-[#1b1c1b] font-medium">
                          700m Altitude • Gateway to Wayanad
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-[#5f5e5b] bg-[#f5f3f1]/60">
                          Natural Water Feature
                        </td>
                        <td className="p-4 text-[#1b1c1b] font-medium">
                          Attached Natural Stream directly bordering property
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'policies' && (
                <div className="bg-[#ffffff] border border-[#e4e2e0] p-6 space-y-4 font-sans-ui text-xs text-[#5f5e5b]">
                  <div className="flex justify-between pb-3 border-b border-[#e4e2e0]">
                    <span className="font-semibold text-[#1b1c1b]">Check-In Time</span>
                    <span>02:00 PM (Early check-in subject to availability)</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-[#e4e2e0]">
                    <span className="font-semibold text-[#1b1c1b]">Check-Out Time</span>
                    <span>11:00 AM</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-[#e4e2e0]">
                    <span className="font-semibold text-[#1b1c1b]">Cancellation &amp; Reschedule</span>
                    <span>Free cancellation up to 48 hours prior to arrival date</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-[#e4e2e0]">
                    <span className="font-semibold text-[#1b1c1b]">Pet Policy</span>
                    <span>Pet friendly property (Must be supervised in common areas)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#1b1c1b]">Direct Concierge</span>
                    <span className="text-[#735c00] font-bold">{RESORT_INFO.displayPhone}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Interactive Calendar & Booking Engine (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#ffffff] border-2 border-[#1b1c1b] p-6 sm:p-7 sticky top-[130px] shadow-xl">
                {/* Header inside Box */}
                <div className="flex items-center justify-between pb-5 border-b border-[#e4e2e0] mb-6">
                  <div>
                    <span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#735c00] font-semibold block">
                      Direct Reservation
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-[#1b1c1b]">
                      Book This Suite
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="font-display text-2xl font-bold text-[#1b1c1b] block">
                      {formatCurrency(totalAmountINR, currency)}
                    </span>
                    <span className="text-[11px] font-sans-ui text-[#5f5e5b]">
                      for {nights} Night{nights > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {bookingConfirmed ? (
                  /* Confirmed State */
                  <div className="p-6 bg-[#f5fdf7] border border-[#bbf7d0] text-center space-y-4">
                    <div className="w-12 h-12 bg-[#22c55e] text-[#ffffff] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-display text-xl text-[#166534]">
                      Reservation Confirmed!
                    </h4>
                    <p className="font-sans-ui text-xs text-[#15803d]">
                      Booking Reference: <strong className="font-mono text-sm">{bookingRef}</strong>
                    </p>
                    <p className="font-sans-ui text-xs text-[#4b5563] leading-relaxed">
                      Thank you, {fullName || 'Guest'}. Your dates for the <strong>{room.name}</strong> from {checkInDate} to {checkOutDate} are logged. Our concierge will contact you via WhatsApp/Phone to confirm your arrival time.
                    </p>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        onClick={handleWhatsAppReservation}
                        className="w-full py-3 bg-[#25D366] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Booking to WhatsApp</span>
                      </button>

                      <button
                        onClick={() => setBookingConfirmed(false)}
                        className="text-xs text-[#5f5e5b] hover:text-[#1b1c1b] underline mt-2"
                      >
                        Modify Booking Dates
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Interactive Form & Calendar */
                  <form onSubmit={handleConfirmReservation} className="space-y-6">
                    {/* Check-In / Check-Out Date Picker Inputs */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                          Check-In Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            min={todayStr}
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            required
                            className="w-full bg-[#fbf9f7] border border-[#e4e2e0] px-3 py-2 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                          Check-Out Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            min={checkInDate || todayStr}
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            required
                            className="w-full bg-[#fbf9f7] border border-[#e4e2e0] px-3 py-2 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Interactive Visual Month Calendar Widget */}
                    <div className="p-3 bg-[#fbf9f7] border border-[#e4e2e0]">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#e4e2e0]">
                        <button
                          type="button"
                          onClick={() => setCalendarMonthOffset((prev) => Math.max(0, prev - 1))}
                          disabled={calendarMonthOffset === 0}
                          className="p-1 text-[#5f5e5b] hover:text-[#1b1c1b] disabled:opacity-30 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        <span className="font-sans-ui text-xs font-semibold text-[#1b1c1b]">
                          {monthName}
                        </span>

                        <button
                          type="button"
                          onClick={() => setCalendarMonthOffset((prev) => prev + 1)}
                          className="p-1 text-[#5f5e5b] hover:text-[#1b1c1b] cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Day of Week Headers */}
                      <div className="grid grid-cols-7 text-center font-sans-ui text-[10px] text-[#735c00] font-semibold mb-1">
                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                      </div>

                      {/* Days Grid */}
                      <div className="grid grid-cols-7 gap-1 text-center font-sans-ui text-xs">
                        {Array.from({ length: calendarDays.firstDayIndex }).map((_, idx) => (
                          <span key={`empty-${idx}`} />
                        ))}

                        {calendarDays.days.map((d) => {
                          const isSelected = d.isCheckIn || d.isCheckOut;
                          return (
                            <button
                              key={d.dateStr}
                              type="button"
                              onClick={() => handleDateClick(d.dateStr, d.isPast)}
                              disabled={d.isPast}
                              className={`py-1.5 text-xs font-semibold transition-colors rounded-none cursor-pointer ${
                                d.isPast
                                  ? 'text-[#d0d0d4] cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-[#000101] text-[#ffffff] font-bold shadow-xs'
                                  : d.isInRange
                                  ? 'bg-[#ffe088]/40 text-[#1b1c1b]'
                                  : 'hover:bg-[#e4e2e0] text-[#1b1c1b]'
                              }`}
                            >
                              {d.day}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-2 pt-2 border-t border-[#e4e2e0] flex items-center justify-between text-[10px] text-[#5f5e5b]">
                        <span>Selected: <strong className="text-[#1b1c1b]">{nights} Night(s)</strong></span>
                        <span>Click dates to adjust stay</span>
                      </div>
                    </div>

                    {/* Guests Selectors */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                          Adults (12+ yrs)
                        </label>
                        <select
                          value={adults}
                          onChange={(e) => setAdults(Number(e.target.value))}
                          className="w-full bg-[#fbf9f7] border border-[#e4e2e0] px-3 py-2 text-xs font-sans-ui text-[#1b1c1b]"
                        >
                          <option value={1}>1 Adult</option>
                          <option value={2}>2 Adults</option>
                          <option value={3}>3 Adults (+₹800/nt)</option>
                          <option value={4}>4 Adults (+₹1600/nt)</option>
                          <option value={5}>5 Adults (+₹2400/nt)</option>
                          <option value={6}>6 Adults (+₹3200/nt)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                          Children (0-11 yrs)
                        </label>
                        <select
                          value={children}
                          onChange={(e) => setChildren(Number(e.target.value))}
                          className="w-full bg-[#fbf9f7] border border-[#e4e2e0] px-3 py-2 text-xs font-sans-ui text-[#1b1c1b]"
                        >
                          <option value={0}>0 Children</option>
                          <option value={1}>1 Child (Free)</option>
                          <option value={2}>2 Children (Free)</option>
                          <option value={3}>3 Children</option>
                        </select>
                      </div>
                    </div>

                    {/* Experience Add-ons Checkboxes */}
                    <div>
                      <span className="block text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-2">
                        Enhance Your Sanctuary Experience
                      </span>
                      <div className="space-y-2 bg-[#fbf9f7] p-3 border border-[#e4e2e0]">
                        <label className="flex items-center justify-between text-xs font-sans-ui text-[#1b1c1b] cursor-pointer">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={includeCampfire}
                              onChange={(e) => setIncludeCampfire(e.target.checked)}
                              className="accent-[#735c00] w-3.5 h-3.5"
                            />
                            <span>🔥 Starlit Campfire &amp; Logs</span>
                          </div>
                          <span className="text-[#735c00] font-semibold">+₹600</span>
                        </label>

                        <label className="flex items-center justify-between text-xs font-sans-ui text-[#1b1c1b] cursor-pointer">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={includeBarbeque}
                              onChange={(e) => setIncludeBarbeque(e.target.checked)}
                              className="accent-[#735c00] w-3.5 h-3.5"
                            />
                            <span>🍖 Live BBQ Grill &amp; Charcoal</span>
                          </div>
                          <span className="text-[#735c00] font-semibold">+₹800</span>
                        </label>

                        <label className="flex items-center justify-between text-xs font-sans-ui text-[#1b1c1b] cursor-pointer">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={includeCandleDinner}
                              onChange={(e) => setIncludeCandleDinner(e.target.checked)}
                              className="accent-[#735c00] w-3.5 h-3.5"
                            />
                            <span>🕯️ Candlelight Stream Dinner</span>
                          </div>
                          <span className="text-[#735c00] font-semibold">+₹1,200</span>
                        </label>
                      </div>
                    </div>

                    {/* Guest Contact Information */}
                    <div className="space-y-2.5 pt-2 border-t border-[#e4e2e0]">
                      <div>
                        <label className="block text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anzil Ak"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-[#fbf9f7] border border-[#e4e2e0] px-3 py-2 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-[#fbf9f7] border border-[#e4e2e0] px-3 py-2 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                            Email (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="you@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#fbf9f7] border border-[#e4e2e0] px-3 py-2 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                          Special Requests
                        </label>
                        <input
                          type="text"
                          placeholder="Early check-in, anniversary setup..."
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="w-full bg-[#fbf9f7] border border-[#e4e2e0] px-3 py-2 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                        />
                      </div>
                    </div>

                    {/* Price Breakdown Summary */}
                    <div className="p-3 bg-[#f5f3f1] font-sans-ui text-xs space-y-1.5 border border-[#e4e2e0]">
                      <div className="flex justify-between text-[#5f5e5b]">
                        <span>Room Rate ({nights} night{nights > 1 ? 's' : ''})</span>
                        <span>{formatCurrency(roomTotalINR, currency)}</span>
                      </div>
                      {addOnsTotalINR > 0 && (
                        <div className="flex justify-between text-[#5f5e5b]">
                          <span>Selected Experiences</span>
                          <span>+{formatCurrency(addOnsTotalINR, currency)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-[#1b7a34] font-semibold">
                        <span>Complimentary Breakfast(on-request)</span>
                        <span>Included (₹0)</span>
                      </div>
                      <div className="pt-2 border-t border-[#e4e2e0] flex justify-between font-bold text-sm text-[#1b1c1b]">
                        <span>Total Payable</span>
                        <span>{formatCurrency(totalAmountINR, currency)}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2.5 pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#000101] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-[0.15em] py-3.5 hover:bg-[#30302f] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-md"
                      >
                        <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                        <span>Reserve &amp; Lock Dates</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppReservation}
                        className="w-full bg-[#25D366] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-wider py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Instant WhatsApp Booking</span>
                      </button>
                    </div>

                    <div className="text-center pt-1">
                      <a
                        href={`tel:${RESORT_INFO.phone}`}
                        className="text-[11px] font-sans-ui text-[#5f5e5b] hover:text-[#735c00] transition-colors"
                      >
                        Need instant assistance? Call Concierge at <strong>{RESORT_INFO.displayPhone}</strong>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Suites Section */}
      <section className="py-16 md:py-20 bg-[#f5f3f1] border-t border-[#e4e2e0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block mb-1">
                More Accommodations
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#1b1c1b]">
                Explore Other Suites &amp; Villas Options
              </h2>
            </div>

            <button
              onClick={() => onNavigate('rooms')}
              className="font-sans-ui text-xs font-semibold uppercase tracking-wider text-[#1b1c1b] border-b border-[#1b1c1b] pb-0.5 hover:text-[#735c00] transition-colors self-start sm:self-auto cursor-pointer"
            >
              View All 5 Accommodations &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRooms.map((other) => (
              <div
                key={other.id}
                onClick={() => {
                  onSelectOtherRoom(other);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#ffffff] border border-[#e4e2e0] overflow-hidden group cursor-pointer hover:border-[#1b1c1b] transition-all shadow-xs hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1b1c1b]">
                  <img
                    src={other.images[0]}
                    alt={other.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#000101]/80 text-[#ffffff] text-[9px] px-2 py-0.5 font-semibold uppercase">
                    {other.acType}
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-sans-ui uppercase tracking-wider text-[#735c00] font-semibold">
                    {other.capacity}
                  </span>
                  <h3 className="font-display text-base sm:text-lg text-[#1b1c1b] group-hover:text-[#735c00] transition-colors mt-0.5 mb-2 line-clamp-1">
                    {other.name}
                  </h3>
                  <div className="flex items-baseline justify-between pt-3 border-t border-[#e4e2e0]">
                    <span className="font-display text-lg font-bold text-[#1b1c1b]">
                      {formatCurrency(other.priceINR, currency)}
                      <span className="text-[10px] font-sans-ui font-normal text-[#5f5e5b]"> / nt</span>
                    </span>
                    <span className="text-xs font-semibold text-[#000101] group-hover:underline">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
