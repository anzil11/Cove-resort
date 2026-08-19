export const formatCurrency = (amountINR: number, currency: 'INR' | 'USD' = 'INR'): string => {
  if (currency === 'USD') {
    const amountUSD = Math.round(amountINR / 83);
    return `$${amountUSD.toLocaleString()}`;
  }
  return `₹${amountINR.toLocaleString('en-IN')}`;
};

export const generateWhatsAppLink = (
  phone: string,
  details: {
    roomName?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number | string;
    includeBarbeque?: boolean;
    includeCampfire?: boolean;
    name?: string;
    customMessage?: string;
  }
): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  let message = `Hello *The Cove Lakkidi Resort*,\n\n`;
  message += `I would like to enquire about a reservation at your stream side sanctuary:\n\n`;

  if (details.roomName) {
    message += `🏡 *Room / Villa:* ${details.roomName}\n`;
  }
  if (details.checkIn && details.checkOut) {
    message += `📅 *Dates:* ${details.checkIn} to ${details.checkOut}\n`;
  }
  if (details.guests) {
    message += `👥 *Guests:* ${details.guests}\n`;
  }
  if (details.includeBarbeque || details.includeCampfire) {
    const addons = [];
    if (details.includeBarbeque) addons.push("BBQ Setup");
    if (details.includeCampfire) addons.push("Campfire / Bonfire");
    message += `🔥 *Add-ons:* ${addons.join(" + ")}\n`;
  }
  if (details.name) {
    message += `👤 *Guest Name:* ${details.name}\n`;
  }
  if (details.customMessage) {
    message += `\n💬 *Note:* ${details.customMessage}\n`;
  }

  message += `\nPlease share current availability, best tariffs, and confirmation procedure. Thank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};
