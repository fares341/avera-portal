export const BRAND = {
  name: "AVERA",
  slogan: "Before Forever",
  promise: "Avera isn't just a name... It's a promise",
  phonePrimary: "+20 100 120 0697",
  phoneSecondary: "+20 100 643 2217",
  whatsappPrimary: "https://wa.me/201001200697",
  whatsappSecondary: "https://wa.me/201006432217",
  instagramWeddings: "https://instagram.com/avera.wedding",
  instagramEvents: "https://instagram.com/millionseventt",
  email: "info@avera-events.com",
} as const;

export function whatsappLink(message: string, secondary = false) {
  const base = secondary ? BRAND.whatsappSecondary : BRAND.whatsappPrimary;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const PHILOSOPHY = [
  {
    letter: "A",
    title: "Art",
    line: "Inspiration: Beauty in every detail.",
    body: "Moodboard sketches, floral couture and artisanal styling — each event begins as a composition before it becomes a place.",
  },
  {
    letter: "V",
    title: "Vision",
    line: "We don't just imagine, we visualize the extraordinary.",
    body: "A clear vision today, an unforgettable reality tomorrow — rendered, walked through and agreed before a single flower arrives.",
  },
  {
    letter: "E",
    title: "Emotion",
    line: "It's not just what you see, it's what you feel.",
    body: "The most beautiful emotions are the ones we share. We design for the moment a room falls silent.",
  },
  {
    letter: "R",
    title: "Reality",
    line: "Where ideas come to life: from concept to reality, we make it happen.",
    body: "Behind the scenes: planning, design, details, coordination, execution, perfection.",
  },
  {
    letter: "A",
    title: "Attention to Details",
    line: "The beauty is in the details, the magic is in how they come together.",
    body: "Hem lengths, candle heights, cue timings — the quiet decisions guests never notice, and always feel.",
  },
] as const;

export const TIMELINE = [
  { time: "09:00 AM", title: "Setup & Styling", line: "Every piece in its perfect place." },
  { time: "11:00 AM", title: "Details Check", line: "Nothing overlooked, everything aligned." },
  { time: "02:00 PM", title: "Final Touches", line: "The little things that make it unforgettable." },
  { time: "05:00 PM", title: "Guests Arrival", line: "A seamless experience from the very first moment." },
  { time: "07:00 PM", title: "The Moment", line: "All the details, one beautiful story." },
  { time: "11:30 PM", title: "A Perfect Ending", line: "Because every detail made it a memory." },
] as const;

export const CORPORATE_SERVICES = [
  {
    title: "3D Max Spatial Design & Concepts",
    body: "Photoreal spatial studies and walkthroughs so every sightline is approved long before build week.",
  },
  {
    title: "Custom Exhibition Booths & Fabrication",
    body: "In-house carpentry, metalwork and finishing for booths that read as architecture, not signage.",
  },
  {
    title: "High-Resolution LED Screens & Production",
    body: "Fine-pitch LED, media servers and show-calling for keynotes, galas and product reveals.",
  },
  {
    title: "Sound & Dynamic Lighting Architecture",
    body: "Line-array audio design and programmed lighting states tuned room by room.",
  },
  {
    title: "Hotel Bookings & VIP Guest Logistics",
    body: "Room blocks, arrivals, chauffeur schedules and discreet on-ground hosting for delegations.",
  },
  {
    title: "Professional Photo & Videography",
    body: "Editorial stills and multi-camera film coverage, delivered as a same-night highlight cut.",
  },
  {
    title: "Red Carpet, Stages & Special Effects",
    body: "Carpet arrivals, custom staging, pyrotechnics and fireworks under full safety permitting.",
  },
] as const;

export const VENUES = [
  {
    name: "JW Marriott Hotel Cairo",
    location: "Mirage City",
    note: "Grand ballroom capacity with garden ceremony options.",
  },
  {
    name: "The Westin Cairo Golf Resort & Spa",
    location: "Katameya Dunes",
    note: "Fairway sunsets and a resort footprint for multi-day celebrations.",
  },
  {
    name: "Dusit Thani LakeView Cairo",
    location: "New Cairo",
    note: "Contemporary lines and lakeview terraces for modern receptions.",
  },
  {
    name: "Kempinski",
    location: "Royal Maxim / Nile Hotel",
    note: "Palatial interiors and Nile-front intimacy for couture weddings.",
  },
  {
    name: "The St. Regis Almasa",
    location: "New Capital",
    note: "Monumental scale for state-level galas and conferences.",
  },
] as const;
