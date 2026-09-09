import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Navigation, Car, Plane, Train, Check, Send } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';
import { generateWhatsAppLink } from '../utils/helpers';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    dates: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppLink(RESORT_INFO.phone, {
      name: formData.name,
      customMessage: `Message: ${formData.message}. Preferred Dates: ${formData.dates || 'Flexible'}. Email: ${formData.email}`
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f5f3f1] border-t border-[#e4e2e0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans-ui text-xs uppercase tracking-[0.25em] text-[#735c00] font-semibold mb-3 block">
            Plan Your Journey
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#1b1c1b] font-normal leading-tight">
            Connect with The Cove
          </h2>
          <p className="font-sans-ui text-sm sm:text-base text-[#5f5e5b] mt-4 font-light leading-relaxed">
            Our concierge team is at your service 24/7 to assist with room bookings, exclusive Villas buyouts, airport transfers, and customized Wayanad excursions.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contacts & Transit (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans-ui">
              <a
                href={`tel:${RESORT_INFO.phone}`}
                className="p-6 bg-[#ffffff] border border-[#e4e2e0] hover:border-[#000101] transition-colors ambient-shadow group"
              >
                <div className="w-10 h-10 bg-[#f5f3f1] text-[#735c00] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#5f5e5b] font-semibold block">
                  Direct Reservations
                </span>
                <span className="font-display text-lg font-bold text-[#1b1c1b] block mt-1">
                  {RESORT_INFO.displayPhone}
                </span>
                <span className="text-xs text-[#735c00] mt-2 block font-medium">
                  Tap to call &rarr;
                </span>
              </a>

              <a
                href={generateWhatsAppLink(RESORT_INFO.phone, {
                  customMessage: "Hello The Cove Lakkidi, I am inquiring about room availability."
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-[#ffffff] border border-[#e4e2e0] hover:border-[#25D366] transition-colors ambient-shadow group"
              >
                <div className="w-10 h-10 bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#5f5e5b] font-semibold block">
                  Instant WhatsApp
                </span>
                <span className="font-display text-lg font-bold text-[#1b1c1b] block mt-1">
                  Chat with Concierge
                </span>
                <span className="text-xs text-[#25D366] mt-2 block font-medium">
                  Open chat &rarr;
                </span>
              </a>
            </div>

            {/* Resort Address Card */}
            <div className="p-6 bg-[#ffffff] border border-[#e4e2e0] ambient-shadow font-sans-ui text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#735c00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1b1c1b] mb-1">
                    Sanctuary Location
                  </h4>
                  <p className="text-[#5f5e5b] leading-relaxed">
                    The Cove Lakkidi Resort, Lakkidi, Wayanad District, Kerala 673576, India
                  </p>
                  <p className="text-[#735c00] font-medium mt-2">
                    Landmarks: 200m from Tanzania Park • 500m from Historical Chain Tree • 1.5 Km from Pookode Lake
                  </p>
                </div>
              </div>
            </div>

            {/* How to Reach / Transit Distance Card */}
            <div className="p-6 bg-[#ffffff] border border-[#e4e2e0] ambient-shadow font-sans-ui text-xs">
              <h4 className="font-display text-base text-[#1b1c1b] mb-4">
                Reaching Lakkidi, Wayanad
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#e4e2e0]">
                  <div className="flex items-center gap-2 text-[#5f5e5b]">
                    <Plane className="w-4 h-4 text-[#735c00]" />
                    <span>Calicut International Airport (CCJ)</span>
                  </div>
                  <span className="font-semibold text-[#1b1c1b]">75 Km (~2 hrs)</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#e4e2e0]">
                  <div className="flex items-center gap-2 text-[#5f5e5b]">
                    <Train className="w-4 h-4 text-[#735c00]" />
                    <span>Kozhikode Railway Station (CLT)</span>
                  </div>
                  <span className="font-semibold text-[#1b1c1b]">65 Km (~1.5 hrs)</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#e4e2e0]">
                  <div className="flex items-center gap-2 text-[#5f5e5b]">
                    <Car className="w-4 h-4 text-[#735c00]" />
                    <span>Bangalore (via Gundlupet)</span>
                  </div>
                  <span className="font-semibold text-[#1b1c1b]">280 Km (~6 hrs)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#5f5e5b]">
                    <Car className="w-4 h-4 text-[#735c00]" />
                    <span>Mysore</span>
                  </div>
                  <span className="font-semibold text-[#1b1c1b]">135 Km (~3.5 hrs)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#ffffff] border border-[#e4e2e0] p-8 sm:p-10 ambient-shadow">
            <h3 className="font-display text-2xl text-[#1b1c1b] mb-2">
              Send an Inquiry
            </h3>
            <p className="font-sans-ui text-xs text-[#5f5e5b] mb-6">
              Fill in your contact details and desired travel dates. We will reply via WhatsApp or phone within minutes.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#f5f3f1] text-center space-y-3">
                <div className="w-12 h-12 bg-[#227b3b]/15 text-[#227b3b] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl text-[#1b1c1b]">Inquiry Transmitted</h4>
                <p className="font-sans-ui text-xs text-[#5f5e5b]">
                  Thank you! Our concierge has received your request and will get in touch immediately.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-[#000101] text-[#ffffff] text-xs font-sans-ui font-semibold uppercase tracking-wider"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans-ui text-xs">
                <div>
                  <label className="block uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#fbf9f7] border border-[#e4e2e0] p-3 text-xs text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#fbf9f7] border border-[#e4e2e0] p-3 text-xs text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#fbf9f7] border border-[#e4e2e0] p-3 text-xs text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                    Preferred Travel Dates &amp; Room Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next weekend / Premium Wooden A/C Suite"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    className="w-full bg-[#fbf9f7] border border-[#e4e2e0] p-3 text-xs text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#5f5e5b] font-semibold mb-1">
                    Special Inquiries / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your trip, group size, campfire or BBQ preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#fbf9f7] border border-[#e4e2e0] p-3 text-xs text-[#1b1c1b] focus:outline-none focus:border-[#000101]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#000101] text-[#ffffff] font-semibold uppercase tracking-[0.15em] py-4 hover:bg-[#30302f] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Concierge</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
