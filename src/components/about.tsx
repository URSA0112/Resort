'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    title: 'Luxury Accommodations',
    desc: 'Spacious Ger rooms and suites with modern amenities and traditional Mongolian design.',
  },
  {
    title: 'Authentic Experiences',
    desc: 'Engage with local nomadic traditions, horse riding, and the untouched steppe.',
  },
  {
    title: 'Breathtaking Landscapes',
    desc: 'Panoramic views of Mongolia\'s iconic steppe, mountains, and open skies.',
  },
  {
    title: 'Personalized Service',
    desc: 'Our attentive staff ensures every stay is seamless, warm, and memorable.',
  },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="bg-forest-black py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Images — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[560px] hidden lg:block"
        >
          {/* Main image */}
          <div className="absolute bottom-0 right-0 w-[80%] h-[420px] overflow-hidden">
            <img
              src="/2.png"
              alt="Marush Resort aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-black/60 to-transparent" />
            <span className="absolute bottom-3 left-4 text-[0.52rem] tracking-[0.22em] uppercase text-gold/55">
              Resort Grounds
            </span>
          </div>

          {/* Accent image */}
          <div className="absolute top-0 left-0 w-[54%] h-[235px] overflow-hidden border border-gold/12">
            <img
              src="/1.png"
              alt="Resort site plan"
              className="w-full h-full object-cover opacity-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest-black/55" />
            <span className="absolute bottom-3 left-3 text-[0.52rem] tracking-[0.22em] uppercase text-gold/55">
              Site Overview
            </span>
          </div>

          {/* Connecting gold line */}
          <div className="absolute top-[238px] left-[54%] w-px h-20 bg-gradient-to-b from-gold/60 to-transparent" />

          {/* Floating gold accent */}
          <div className="absolute bottom-6 left-0 text-[0.55rem] tracking-[0.35em] uppercase text-gold/40">
            Töv Province · Mongolia
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[0.62rem] tracking-[0.45em] uppercase text-gold block mb-5">
            Why Choose Us
          </span>

          <h2 className="font-serif text-[clamp(2.6rem,4.5vw,4.5rem)] font-light leading-[1.08] text-ivory mb-5">
            Why Choose<br />
            <em className="italic text-gold">Marush</em>
          </h2>

          <div className="w-12 h-px bg-gold/55 mb-8" />

          <p className="text-[0.87rem] font-light text-stone leading-[1.95] mb-12 max-w-md">
            Marush Premier Lodge Hotel &amp; Resort is more than a destination —
            it&apos;s a gateway to Mongolia&apos;s soul, where adventure, culture, and
            luxury meet in perfect harmony.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="pl-4 border-l border-gold/22"
              >
                <h4 className="text-[0.82rem] font-medium text-ivory mb-1.5 tracking-wide">
                  {f.title}
                </h4>
                <p className="text-[0.76rem] text-stone leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
