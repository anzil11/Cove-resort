import React, { useState } from 'react';
import { X, Calendar, Users, MessageSquare, Phone, Check, ShieldCheck, Sparkles, Flame, Waves } from 'lucide-react';
import { Room } from '../types';
import { ROOMS_DATA, RESORT_INFO } from '../data/resortData';
import { formatCurrency, generateWhatsAppLink } from '../utils/helpers';

interface BookingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
  initialRoom?: Room | null;
}

export const BookingCalculatorModal: React.FC<BookingCalculatorModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialRoom
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoom?.id || ROOMS_DATA[0].id
  );
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [includeBbq, setIncludeBbq] = useState<boolean>(false);
  const [includeCampfire, setIncludeCampfire] = useState<boolean>(true);
  const [includeJeepSafari, setIncludeJeepSafari] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  let nights = 1;
  if (checkIn && checkOut) {
    const start = new Date(checkIn).getTime();
    const end = new Date(checkOut).getTime();
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (diff > 0) nights = diff;
  }

  const roomSubtotal = currentRoom.priceINR * nights;
  const bbqSubtotal = includeBbq ? 800 : 0;
  const campfireSubtotal = includeCampfire ? 600 : 0;
  const jeepSubtotal = includeJeepSafari ? 2200 : 0;
  const totalAmount = roomSubtotal + bbqSubtotal + campfireSubtotal + jeepSubtotal;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppLink(RESORT_INFO.phone, {
      roomName: currentRoom.name,
      checkIn: checkIn || 'Requested Date',
      checkOut: checkOut || 'Next Day',
      guests: `${adults} Adults, ${children} Children`,
      includeBarbeque: includeBbq,
      includeCampfire: includeCampfire,
      name: guestName || undefined,
      customMessage: `Estimated Total: ${formatCurrency(totalAmount, currency)} for ${nights} night(s). ${
        specialRequests ? `Special notes: ${specialRequests}` : ''
      }`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[85] bg-[#000101]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-[#fbf9f7] w-full max-w-3xl my-auto border border-[#e4e2e0] shadow-2xl overflow-hidden flex flex-col justify-between">
        {/* Header */}
        <div className="bg-[#1b1c1b] text-[#ffffff] px-6 sm:px-8 py-5 flex justify-between items-center border-b border-[#30302f]">
          <div>
            <span className="font-sans-ui text-[10px] uppercase tracking-[0.25em] text-[#ffe088] font-semibold">
              The Cove Lakkidi • Reservations
            </span>
            <h2 className="font-display text-xl sm:text-2xl mt-0.5">
              Book Your Sanctuary Stay
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#ffffff] hover:text-[#ffe088] transition-colors rounded-full hover:bg-[#ffffff]/10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh]">
          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl text-[#1b1c1b]">Reservation Enquiry Initiated!</h3>
              <p className="font-sans-ui text-sm text-[#5f5e5b] max-w-md mx-auto">
                We have opened WhatsApp to connect you directly with our resort reservations desk. We will confirm your dates, tariff, and send booking voucher details immediately.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-[#000101] text-[#ffffff] text-xs font-sans-ui uppercase tracking-wider font-semibold hover:bg-[#30302f]"
                >
                  Adjust Booking
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#ffffff] border border-[#e4e2e0] text-xs font-sans-ui uppercase tracking-wider font-semibold text-[#1b1c1b]"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-6">
              {/* Room Selection */}
              <div>
                <label className="block text-xs font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-2">
                  Select Room / Villas Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ROOMS_DATA.map((r) => {
                    const isSelected = r.id === selectedRoomId;
                    return (
                      <div
                        key={r.id}
                        onClick={() => setSelectedRoomId(r.id)}
                        className={`p-3.5 border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#000101] bg-[#ffffff] ring-1 ring-[#000101] shadow-sm'
                            : 'border-[#e4e2e0] bg-[#ffffff]/60 hover:bg-[#ffffff]'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-display text-sm font-semibold text-[#1b1c1b] leading-tight">
                            {r.name}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-[#735c00] flex-shrink-0 ml-1" />}
                        </div>
                        <div className="flex justify-between items-center text-xs font-sans-ui mt-2 pt-2 border-t border-[#e4e2e0]/60">
                          <span className="text-[#5f5e5b]">{r.acType}</span>
                          <span className="font-semibold text-[#735c00]">
                            {formatCurrency(r.priceINR, currency)} / night
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dates & Occupancy Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div>
                  <label className="block text-[11px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                    Check-In
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#e4e2e0] p-2.5 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                    Check-Out
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#e4e2e0] p-2.5 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                    Adults
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-[#ffffff] border border-[#e4e2e0] p-2.5 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map((num) => (
                      <option key={num} value={num}>
                        {num} Adult{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                    Children
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full bg-[#ffffff] border border-[#e4e2e0] p-2.5 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                  >
                    {[0, 1, 2, 3, 4, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Add-ons Checklist */}
              <div className="pt-2">
                <label className="block text-xs font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-2">
                  Optional Resort Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans-ui text-xs">
                  <label className="flex items-center justify-between p-3 bg-[#ffffff] border border-[#e4e2e0] cursor-pointer hover:bg-[#f5f3f1]">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeCampfire}
                        onChange={(e) => setIncludeCampfire(e.target.checked)}
                        className="rounded-none border-[#75777a]"
                      />
                      <span>Campfire Logs</span>
                    </div>
                    <span className="font-bold text-[#735c00]">+₹600</span>
                  </label>

                  <label className="flex items-center justify-between p-3 bg-[#ffffff] border border-[#e4e2e0] cursor-pointer hover:bg-[#f5f3f1]">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeBbq}
                        onChange={(e) => setIncludeBbq(e.target.checked)}
                        className="rounded-none border-[#75777a]"
                      />
                      <span>BBQ Setup</span>
                    </div>
                    <span className="font-bold text-[#735c00]">+₹800</span>
                  </label>

                  <label className="flex items-center justify-between p-3 bg-[#ffffff] border border-[#e4e2e0] cursor-pointer hover:bg-[#f5f3f1]">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeJeepSafari}
                        onChange={(e) => setIncludeJeepSafari(e.target.checked)}
                        className="rounded-none border-[#75777a]"
                      />
                      <span>4x4 Jeep Safari</span>
                    </div>
                    <span className="font-bold text-[#735c00]">+₹2,200</span>
                  </label>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[11px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Menon"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#e4e2e0] p-2.5 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans-ui uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 9876543210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#e4e2e0] p-2.5 text-xs font-sans-ui text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                  />
                </div>
              </div>

              {/* Price Calculation Summary Box */}
              <div className="p-4 bg-[#f5f3f1] border border-[#e4e2e0] font-sans-ui text-xs space-y-2">
                <div className="flex justify-between text-[#5f5e5b]">
                  <span>{currentRoom.name} &times; {nights} Night(s)</span>
                  <span className="font-semibold text-[#1b1c1b]">
                    {formatCurrency(roomSubtotal, currency)}
                  </span>
                </div>
                {includeCampfire && (
                  <div className="flex justify-between text-[#5f5e5b]">
                    <span>Campfire &amp; Firewood</span>
                    <span className="font-semibold text-[#1b1c1b]">
                      {formatCurrency(campfireSubtotal, currency)}
                    </span>
                  </div>
                )}
                {includeBbq && (
                  <div className="flex justify-between text-[#5f5e5b]">
                    <span>Barbeque Grill Setup</span>
                    <span className="font-semibold text-[#1b1c1b]">
                      {formatCurrency(bbqSubtotal, currency)}
                    </span>
                  </div>
                )}
                {includeJeepSafari && (
                  <div className="flex justify-between text-[#5f5e5b]">
                    <span>4x4 Off-Road Jeep Safari</span>
                    <span className="font-semibold text-[#1b1c1b]">
                      {formatCurrency(jeepSubtotal, currency)}
                    </span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#e4e2e0] flex justify-between items-baseline">
                  <span className="font-bold text-sm text-[#1b1c1b]">Estimated Total</span>
                  <span className="font-display text-2xl font-bold text-[#735c00]">
                    {formatCurrency(totalAmount, currency)}
                  </span>
                </div>
                {/* <div className="text-[10px] text-[#75777a]">
                  *Includes Complimentary Breakfast(on-request), welcome drinks, Wi-Fi, and attached stream access.
                </div> */}
              </div>

              {/* Action */}
              <button
                type="submit"
                className="w-full bg-[#000101] text-[#ffffff] font-sans-ui text-xs font-semibold uppercase tracking-[0.15em] py-4 hover:bg-[#30302f] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Confirm &amp; Enquire via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
