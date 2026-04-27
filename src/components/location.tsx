'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reachData = [
  {
    icon: '🚗',
    title: 'From Ulaanbaatar',
    text: 'Approx. 1–2 hour drive from Ulaanbaatar city. Smooth road access available year-round.',
  },
  {
    icon: '🛣',
    title: 'By Road',
    text: 'Direct access via main paved roads. Private transfers and taxis available on request.',
  },
  {
    icon: '📍',
    title: 'Our Location',
    text: '8WR5+5P2, Üdeligiin Dugan, Töv Province, Mongolia',
  },
];

export default function Location() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location" ref={ref} className="bg-forest-deep py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl overflow-hidden border border-gold/12 shadow-[0_0_60px_rgba(0,0,0,0.4)] h-[420px] lg:h-[500px]"
        >
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950000!2d106.895!3d48.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f9!3m3!1m2!1s0x5d9645007b6bf2f1%3A0x8df59fabb04e3e39!2sMarush%20hotel%20and%20resort!5e0!3m2!1sen!2sus!4v1775025809511!5m2!1sen!2sus"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Marush Hotel & Resort Location"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[0.62rem] tracking-[0.45em] uppercase text-gold block mb-5">
            Getting Here
          </span>

          <h2 className="font-serif text-[clamp(2.4rem,4vw,4rem)] font-light text-ivory leading-[1.1] mb-5">
            Töv Province<br />
            <em className="italic text-gold">Mongolia</em>
          </h2>

          <div className="w-12 h-px bg-gold/50 mb-8" />

          <p className="text-[0.85rem] font-light text-stone leading-[1.9] mb-10 max-w-md">
            Marush Hotel &amp; Resort is nestled in the peaceful landscapes of Töv Province,
            offering a serene escape just outside Ulaanbaatar. Surrounded by open steppe and
            natural beauty, the resort is easily accessible year-round.
          </p>

          <ul className="space-y-0 mb-10">
            {reachData.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.65 }}
                className="flex gap-4 py-5 border-b border-gold/8 last:border-b-0"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-[0.82rem] font-medium text-ivory mb-1">{item.title}</p>
                  <p className="text-[0.76rem] text-stone leading-relaxed">{item.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <a
            href="https://maps.app.goo.gl/wYLbJJjbLurxQxaQ7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[0.65rem] tracking-[0.3em] uppercase px-8 py-3.5 border border-gold/55 text-gold hover:bg-gold hover:text-forest-black hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(198,164,108,0.3)] transition-all duration-300"
          >
            Open in Google Maps
          </a>
        </motion.div>

      </div>
    </section>
  );
}
