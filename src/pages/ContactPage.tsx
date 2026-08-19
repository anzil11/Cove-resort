import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  Plane, 
  Train, 
  Car, 
  Sparkles,
  CheckCircle2,
  Calendar,
  Users,
  Compass,
  AlertCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { RESORT_INFO, ROOMS_DATA } from '../data/resortData';
import { PageId } from '../types';
import { generateWhatsAppLink } from '../utils/helpers';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomCategory: ROOMS_DATA[0].name,
    includeCampfire: false,
    includeBarbeque: false,
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*New Reservation / Inquiry at The Cove Lakkidi*
• *Name:* ${formData.fullName || 'Guest'}
• *Phone:* ${formData.phone || 'Not provided'}
• *Email:* ${formData.email || 'Not provided'}
• *Room:* ${formData.roomCategory}
• *Dates:* ${formData.checkIn || 'TBD'} to ${formData.checkOut || 'TBD'}
• *Guests:* ${formData.guests}
• *Campfire:* ${formData.includeCampfire ? 'Yes' : 'No'}
• *BBQ:* ${formData.includeBarbeque ? 'Yes' : 'No'}
• *Notes:* ${formData.message || 'None'}`;

    const url = `https://wa.me/${RESORT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full pt-20">
      <SEO page="contact" />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#1b1c1b] text-[#ffffff] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
            alt="The Cove Lakkidi Surroundings"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1b] via-[#1b1c1b]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff]/10 border border-[#ffe088]/30 text-[#ffe088] text-xs font-sans-ui tracking-[0.25em] uppercase font-semibold mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>24/7 Concierge Desk</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-[#ffffff] max-w-4xl mx-auto">
            Contact &amp; Reservations
          </h1>

          <p className="font-sans-ui text-sm sm:text-base md:text-lg text-[#d0d0d4] max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Our reservation team is standing by to help you choose the ideal suite, arrange custom campfire evenings, or coordinate airport pickups.
          </p>

          <div className="flex items-center justify-center gap-2 font-sans-ui text-xs text-[#ffe088] mt-6 tracking-widest uppercase">
            <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-16 bg-[#fbf9f7] border-b border-[#e4e2e0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="bg-[#ffffff] border border-[#e4e2e0] p-6 ambient-shadow space-y-3">
              <div className="w-10 h-10 bg-[#f5f3f1] text-[#735c00] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-[#1b1c1b]">Direct Phone</h3>
              <p className="font-sans-ui text-xs text-[#5f5e5b]">Instant reservation inquiries &amp; front desk assistance.</p>
              <a
                href={`tel:${RESORT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-block font-sans-ui text-sm font-bold text-[#1b1c1b] hover:text-[#735c00]"
              >
                {RESORT_INFO.displayPhone}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#ffffff] border border-[#e4e2e0] p-6 ambient-shadow space-y-3">
              <div className="w-10 h-10 bg-[#e6f8ec] text-[#25D366] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-[#1b1c1b]">WhatsApp Concierge</h3>
              <p className="font-sans-ui text-xs text-[#5f5e5b]">Quick replies, photo sharing, and custom food requests.</p>
              <a
                href={generateWhatsAppLink(RESORT_INFO.phone, {
                  customMessage: "Hello The Cove Lakkidi! I have an inquiry regarding room tariffs and booking."
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans-ui text-sm font-bold text-[#25D366] hover:underline"
              >
                Message on WhatsApp &rarr;
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#ffffff] border border-[#e4e2e0] p-6 ambient-shadow space-y-3">
              <div className="w-10 h-10 bg-[#f5f3f1] text-[#735c00] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-[#1b1c1b]">Email Inquiries</h3>
              <p className="font-sans-ui text-xs text-[#5f5e5b]">For corporate retreats, full villa buyouts, and photo shoots.</p>
              <a
                href={`mailto:${RESORT_INFO.email}`}
                className="inline-block font-sans-ui text-xs font-bold text-[#1b1c1b] hover:text-[#735c00] truncate max-w-full"
              >
                {RESORT_INFO.email}
              </a>
            </div>

            {/* Location */}
            <div className="bg-[#ffffff] border border-[#e4e2e0] p-6 ambient-shadow space-y-3">
              <div className="w-10 h-10 bg-[#f5f3f1] text-[#735c00] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-[#1b1c1b]">Sanctuary Address</h3>
              <p className="font-sans-ui text-xs text-[#5f5e5b] leading-relaxed">
                Old Vythiri, Lakkidi, Wayanad, Kerala 673576, India
              </p>
              <span className="inline-block font-sans-ui text-[11px] text-[#735c00] font-semibold">
                700m Altitude • 200m from Teenzania Park
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Transit Map Section */}
      <section className="py-20 md:py-28 bg-[#f5f3f1]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#ffffff] border border-[#e4e2e0] p-8 sm:p-10 ambient-shadow">
              <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block mb-2">
                Send Direct Message
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#1b1c1b] mb-6">
                Reservation &amp; Special Request Form
              </h2>

              {isSubmitted ? (
                <div className="p-8 bg-[#fbf9f7] border border-[#e4e2e0] text-center space-y-4">
                  <div className="w-12 h-12 bg-[#e6f8ec] text-[#25D366] flex items-center justify-center mx-auto rounded-full">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl text-[#1b1c1b]">Inquiry Received!</h3>
                  <p className="font-sans-ui text-xs sm:text-sm text-[#5f5e5b] max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our reservations concierge at The Cove Lakkidi has received your request and will contact you via WhatsApp/Phone shortly.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleSendWhatsApp}
                      className="px-6 py-2.5 bg-[#25D366] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-wider hover:bg-[#20bd5a] flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-[#ffffff] border border-[#e4e2e0] text-[#1b1c1b] text-xs font-sans-ui font-semibold uppercase tracking-wider hover:bg-[#f5f3f1]"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans-ui text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-[#5f5e5b] font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Menon"
                        className="w-full px-3.5 py-2.5 bg-[#fbf9f7] border border-[#e4e2e0] text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-[#5f5e5b] font-semibold mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-[#fbf9f7] border border-[#e4e2e0] text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-[#5f5e5b] font-semibold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-3.5 py-2.5 bg-[#fbf9f7] border border-[#e4e2e0] text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-[#5f5e5b] font-semibold mb-1">
                        Preferred Accommodation
                      </label>
                      <select
                        value={formData.roomCategory}
                        onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#fbf9f7] border border-[#e4e2e0] text-[#1b1c1b] focus:outline-none focus:border-[#000101] cursor-pointer"
                      >
                        {ROOMS_DATA.map((room) => (
                          <option key={room.id} value={room.name}>
                            {room.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-[#5f5e5b] font-semibold mb-1">
                        Check-In Date
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#fbf9f7] border border-[#e4e2e0] text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-[#5f5e5b] font-semibold mb-1">
                        Check-Out Date
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#fbf9f7] border border-[#e4e2e0] text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-[#5f5e5b] font-semibold mb-1">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#fbf9f7] border border-[#e4e2e0] text-[#1b1c1b] focus:outline-none focus:border-[#000101] cursor-pointer"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="6 Guests">6 Guests</option>
                        <option value="8 Guests">8 Guests</option>
                        <option value="12+ (Entire Villa)">12+ (Entire Villa)</option>
                      </select>
                    </div>
                  </div>

                  {/* Add-ons Checkboxes */}
                  <div className="pt-2 border-t border-[#e4e2e0]">
                    <span className="block uppercase tracking-wider text-[10px] text-[#5f5e5b] font-semibold mb-2">
                      Optional Add-On Inclusions
                    </span>
                    <div className="flex flex-wrap gap-6">
                      <label className="flex items-center gap-2 cursor-pointer text-[#1b1c1b]">
                        <input
                          type="checkbox"
                          checked={formData.includeCampfire}
                          onChange={(e) => setFormData({ ...formData, includeCampfire: e.target.checked })}
                          className="accent-[#000101]"
                        />
                        <span>Private Campfire (+₹600)</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer text-[#1b1c1b]">
                        <input
                          type="checkbox"
                          checked={formData.includeBarbeque}
                          onChange={(e) => setFormData({ ...formData, includeBarbeque: e.target.checked })}
                          className="accent-[#000101]"
                        />
                        <span>BBQ Grill Setup (+₹800)</span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-[#5f5e5b] font-semibold mb-1">
                      Special Requests / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know if you need airport pickup, birthday decor, specific meal preferences, etc."
                      className="w-full px-3.5 py-2.5 bg-[#fbf9f7] border border-[#e4e2e0] text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-[#000101] text-[#ffffff] font-semibold uppercase tracking-widest py-3.5 hover:bg-[#30302f] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="px-6 py-3.5 bg-[#25D366] text-[#ffffff] font-semibold uppercase tracking-wider hover:bg-[#20bd5a] transition-all flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Transit & Landmarks Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* How to reach */}
              <div className="bg-[#ffffff] border border-[#e4e2e0] p-6 sm:p-8 ambient-shadow space-y-4">
                <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block">
                  Transit Guide
                </span>
                <h3 className="font-display text-2xl text-[#1b1c1b]">How to Reach The Cove</h3>

                <div className="space-y-4 font-sans-ui text-xs text-[#5f5e5b]">
                  <div className="flex gap-3">
                    <Plane className="w-4 h-4 text-[#735c00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1b1c1b]">By Air: Calicut Airport (CCJ) — 75 Km</strong>
                      <p className="mt-0.5">Approx 2.5 hours scenic drive up the 9 hairpin curves of Thamarassery Ghat.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Train className="w-4 h-4 text-[#735c00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1b1c1b]">By Rail: Kozhikode Station (CLT) — 62 Km</strong>
                      <p className="mt-0.5">Frequent taxi and KSRTC bus connections directly to Lakkidi.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Car className="w-4 h-4 text-[#735c00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1b1c1b]">By Road: Bangalore &amp; Kochi</strong>
                      <p className="mt-0.5">Bangalore: 275 Km (~6 hrs via Mysore). Kochi: 210 Km (~5.5 hrs).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Micro Landmark Distance Index */}
              <div className="bg-[#ffffff] border border-[#e4e2e0] p-6 sm:p-8 ambient-shadow space-y-4">
                <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold block">
                  Immediate Proximity
                </span>
                <h3 className="font-display text-xl text-[#1b1c1b]">Landmarks from Villa</h3>

                <div className="space-y-2.5 font-sans-ui text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[#e4e2e0]">
                    <span className="text-[#1b1c1b] font-medium">Tanzania Park</span>
                    <span className="text-[#735c00] font-bold">200 Meters (2 min walk)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#e4e2e0]">
                    <span className="text-[#1b1c1b] font-medium">Historical Chain Tree</span>
                    <span className="text-[#735c00] font-bold">500 Meters</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#e4e2e0]">
                    <span className="text-[#1b1c1b] font-medium">Pookode Freshwater Lake</span>
                    <span className="text-[#735c00] font-bold">1.5 Km</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#e4e2e0]">
                    <span className="text-[#1b1c1b] font-medium">Lakkidi Ghat Viewpoint</span>
                    <span className="text-[#735c00] font-bold">2.5 Km</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#1b1c1b] font-medium">En Ooru Tribal Village</span>
                    <span className="text-[#735c00] font-bold">3.5 Km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
