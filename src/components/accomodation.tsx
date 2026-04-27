'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BookingButton from './bookingBtn';

const G  = 'text-gold';
const GB = 'border-gold/20';

const rooms = [
  {
    type: 'Standard Ger',
    name: 'Classic Room',
    size: 20,
    guests: '1–2 persons',
    maxGuests: 2,
    count: 8,
    price: '₮700,000',
    priceNum: 700000,
    usd: '≈ USD 195',
    featured: false,
    badge: null,
    amenities: [
      { icon: '📶', label: 'Free WiFi' },
      { icon: '🍳', label: 'Breakfast' },
      { icon: '🚭', label: 'No Smoking' },
      { icon: '🚿', label: 'Private Bathroom' },
      { icon: '🔥', label: 'Heating' },
      { icon: '📺', label: 'TV' },
    ],
  },
  {
    type: 'Deluxe Ger',
    name: 'Family Room',
    size: 45,
    guests: '3–4 persons',
    maxGuests: 4,
    count: 6,
    price: '₮900,000',
    priceNum: 900000,
    usd: '≈ USD 250',
    featured: false,
    badge: null,
    amenities: [
      { icon: '📶', label: 'Free WiFi' },
      { icon: '🍳', label: 'Breakfast' },
      { icon: '🚭', label: 'No Smoking' },
      { icon: '🚿', label: 'Private Bathroom' },
      { icon: '🔥', label: 'Heating' },
      { icon: '📺', label: 'TV' },
      { icon: '🛋️', label: 'Seating Area' },
    ],
  },
  {
    type: 'Superior Ger',
    name: 'Group Room',
    size: 57,
    guests: '4–6 persons',
    maxGuests: 6,
    count: 3,
    price: '₮1,200,000',
    priceNum: 1200000,
    usd: '≈ USD 335',
    featured: false,
    badge: null,
    amenities: [
      { icon: '📶', label: 'Free WiFi' },
      { icon: '🍳', label: 'Breakfast' },
      { icon: '🚭', label: 'No Smoking' },
      { icon: '🚿', label: 'Private Bathroom' },
      { icon: '🔥', label: 'Heating' },
      { icon: '📺', label: 'TV' },
      { icon: '🛋️', label: 'Seating Area' },
      { icon: '🏔️', label: 'Mountain View' },
    ],
  },
  {
    type: 'Presidential',
    name: 'The Khan Suite',
    size: 57,
    guests: 'Up to 2 persons',
    maxGuests: 2,
    count: 1,
    price: '₮1,500,000',
    priceNum: 1500000,
    usd: '≈ USD 420',
    featured: true,
    badge: 'Suite',
    amenities: [
      { icon: '📶', label: 'Free WiFi' },
      { icon: '🍳', label: 'Breakfast' },
      { icon: '🚭', label: 'No Smoking' },
      { icon: '🛁', label: 'Luxury Bathroom' },
      { icon: '🔥', label: 'Heating' },
      { icon: '📺', label: 'TV' },
      { icon: '🛋️', label: 'Lounge Area' },
      { icon: '🏔️', label: 'Panoramic View' },
      { icon: '🧖', label: 'Spa Access' },
    ],
  },
];

export default function Accommodation() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="accommodations" ref={ref} className="bg-forest-mid py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-5"
        >
          <div>
            <span className={`block text-[0.62rem] tracking-[0.4em] uppercase mb-4 ${G}`}>
              Where You Stay
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight text-ivory">
              Curated<br />
              <em className={`not-italic ${G}`}>Rooms</em>
            </h2>
          </div>
          <p className="max-w-sm text-[0.84rem] leading-relaxed text-stone">
            Each room has been thoughtfully designed to offer comfort and warmth
            in the heart of the Mongolian wilderness.
          </p>
        </motion.div>

        {/* Breakfast note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`flex items-center gap-2.5 text-[0.78rem] mb-14 ${G}`}
        >
          <span className={`flex items-center justify-center w-5 h-5 border rounded-full text-[9px] ${GB}`}>✓</span>
          All rooms include breakfast
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col h-full p-7 rounded-2xl border transition-all duration-400 ${GB} ${
                room.featured
                  ? 'bg-forest-deep/6 shadow-[0_0_40px_rgba(198,164,108,0.08)]'
                  : 'bg-white/[0.025] hover:bg-white/[0.04]'
              }`}
            >
              {/* Badge */}
              {room.badge && (
                <span className={`absolute top-5 right-5 text-[0.58rem] tracking-[0.22em] uppercase px-2.5 py-1 border ${GB} ${G}`}>
                  {room.badge}
                </span>
              )}

              {/* Type + Name */}
              <div className="space-y-1.5 mb-1">
                <span className={`block text-[0.58rem] tracking-[0.32em] uppercase opacity-55 ${G}`}>
                  {room.type}
                </span>
                <span className={`block text-[0.85rem] tracking-[0.12em] uppercase font-light ${G}`}>
                  {room.name}
                </span>
              </div>

              {/* Size */}
              <div className="font-serif text-[3rem] font-light leading-none mt-3 text-ivory">
                {room.size}
                <span className="text-base text-stone/55 ml-1">m²</span>
              </div>

              {/* Divider */}
              <div className={`h-px my-5 ${GB}`} />

              {/* Amenities */}
              <div className="flex flex-wrap gap-x-3 gap-y-2 mb-5">
                {room.amenities.map(a => (
                  <span key={a.label} className="flex items-center gap-1 text-[0.62rem] text-stone/60">
                    <span>{a.icon}</span>
                    <span>{a.label}</span>
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="space-y-3 text-[0.82rem]">
                <div className="flex justify-between">
                  <span className="text-stone">Guests</span>
                  <span className="text-ivory">{room.guests}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone">Available</span>
                  <span className={`px-3 py-0.5 text-[0.62rem] border ${GB} bg-gold/6 ${G}`}>
                    {room.count} {room.count === 1 ? 'room' : 'rooms'}
                  </span>
                </div>
              </div>

              {/* Price + CTA */}
              <div className={`mt-auto pt-6 border-t ${GB} space-y-2`}>
                <div className="font-serif text-[1.6rem] font-light text-ivory">{room.price}</div>
                <div className="text-[0.7rem] text-stone/55">per night · {room.usd}</div>
                <div className={`flex items-center gap-2 text-[0.68rem] ${G} pb-1`}>
                  <span className={`flex items-center justify-center w-4 h-4 border rounded-full text-[8px] ${GB}`}>✓</span>
                  Breakfast included
                </div>
                <BookingButton
                  roomName={room.name}
                  roomType={room.type}
                  size={room.size}
                  price={room.price}
                  priceNum={room.priceNum}
                  usd={room.usd}
                  amenities={room.amenities}
                  maxGuests={room.maxGuests}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
