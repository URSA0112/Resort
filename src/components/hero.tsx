'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.15]">
        <img
          src="/2-2.png"
          alt="Marush Resort"
          className="w-full h-full object-cover object-center"
          priority="true"
        />
      </motion.div>

      {/* Layered dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-black/55 via-forest-black/15 to-forest-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-black/35 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-black to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.62rem] tracking-[0.55em] uppercase text-gold mb-7 font-light"
        >
          Established 2026 · Batsumber, Mongolia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light text-[clamp(3.2rem,6.5vw,7.5rem)] leading-[1.02] text-ivory mb-7"
        >
          An Escape Like<br />
          <em className="italic text-champagne">No Other</em>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-gold mx-auto mb-7 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.85rem] font-light text-ivory/50 leading-[1.9] max-w-lg mx-auto mb-11 tracking-wide"
        >
          Discover the ultimate blend of luxury and tradition at Marush Premier Lodge,
          set within the untamed landscapes of Mongolia&apos;s Töv Province.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#accommodations"
            className="px-11 py-4 bg-gold text-forest-black text-[0.68rem] tracking-[0.32em] uppercase font-medium hover:bg-champagne hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(198,164,108,0.4)] transition-all duration-300"
          >
            Explore Stays
          </a>
          <a
            href="#services"
            className="px-11 py-4 border border-ivory/25 text-ivory/70 text-[0.68rem] tracking-[0.32em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Our Experiences
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <span className="text-[0.52rem] tracking-[0.45em] uppercase text-stone/70">Discover</span>
        <div className="w-px h-11 bg-gradient-to-b from-gold to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
}
