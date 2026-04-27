'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  { title: 'Spa & Wellness',         desc: 'Indulge in rejuvenating treatments and holistic therapies crafted for restoration.' },
  { title: 'Fitness Center',          desc: 'Stay active in our modern gymnasium with premium equipment and personal training.' },
  { title: 'Kids Zone',               desc: 'Safe, engaging entertainment for younger guests with supervised activities.' },
  { title: 'Restaurant & Coffee Bar', desc: 'Gourmet meals and specialty beverages crafted from fresh local Mongolian ingredients.' },
  { title: '24-Hour Reception',       desc: 'Personalized concierge service around the clock for your every need.' },
];

const experiences = [
  { title: 'Trekking & Horse Riding', desc: 'Explore the vast Mongolian steppe and breathtaking mountain landscapes on horseback.' },
  { title: 'Nomadic Lifestyle',        desc: 'Immerse yourself in traditional Mongolian culture — cook, sleep, and live as nomads do.' },
  { title: 'Brain Refresh Retreats',   desc: 'Meditate, breathe, and reconnect with yourself amidst serene, unspoiled surroundings.' },
  { title: 'More Experiences',         desc: 'Every visit reveals new adventures — from eagle hunting to photography under the stars.' },
];

function ServiceCard({ title, desc, delay, inView }: { title: string; desc: string; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group p-7 rounded-2xl border border-gold/12 bg-white/[0.025] hover:bg-white/[0.05] hover:border-gold/25 transition-all duration-400"
    >
      <div className="w-9 h-9 mb-5 flex items-center justify-center border border-gold/25 rounded-full text-gold text-sm group-hover:border-gold/50 transition-colors">
        ✦
      </div>
      <h4 className="font-serif text-[1.15rem] font-light text-ivory mb-2.5">{title}</h4>
      <p className="text-[0.78rem] text-stone leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="bg-forest-black py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="text-[0.62rem] tracking-[0.45em] uppercase text-gold block mb-5">
            What We Offer
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] font-light text-ivory leading-[1.08]">
            Resort <em className="italic text-gold">Services</em>
          </h2>
          <div className="w-12 h-px bg-gold/50 mt-6" />
        </motion.div>

        {/* Hotel Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[0.62rem] tracking-[0.4em] uppercase text-stone/60 mb-9 border-b border-gold/8 pb-4"
          >
            Hotel Services
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={0.25 + i * 0.08} inView={inView} />
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[0.62rem] tracking-[0.4em] uppercase text-stone/60 mb-9 border-b border-gold/8 pb-4"
          >
            Unique Experiences
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {experiences.map((e, i) => (
              <ServiceCard key={e.title} {...e} delay={0.55 + i * 0.08} inView={inView} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
