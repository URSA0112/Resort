'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { num: '18',   label: 'Luxury Rooms' },
  { num: '50',   label: 'Guest Capacity' },
  { num: '1.2',  label: 'Hectares of Land' },
  { num: '24/7', label: 'Concierge Service' },
];

export default function StatsBar() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-forest-deep border-y border-gold/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.11, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className={`py-11 px-8 text-center border-gold/10 ${
              i < stats.length - 1 ? 'border-r' : ''
            } [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r`}
          >
            <span className="font-serif text-[2.8rem] font-light text-gold block leading-none mb-2">
              {s.num}
            </span>
            <span className="text-[0.6rem] tracking-[0.28em] uppercase text-stone block">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
