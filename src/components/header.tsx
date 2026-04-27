'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About',    href: '/#about' },
  { label: 'Stays',    href: '/#accommodations' },
  { label: 'Services', href: '/#services' },
  { label: 'Location', href: '/#location' },
  { label: 'Contact',  href: '/#contact' },
  { label: 'Careers',  href: '/careers' },
];

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 md:px-14 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-forest-black/96 backdrop-blur-xl border-b border-gold/10 shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group flex-shrink-0">
          <img
            src="/logoLight.png"
            alt="Marush"
            className="h-8 w-auto opacity-[0.85] group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="font-serif text-[0.75rem] tracking-[0.35em] uppercase text-gold hidden sm:block">
            Marush <em className="not-italic text-ivory/65">resort</em>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative text-[0.68rem] tracking-[0.22em] uppercase text-ivory/60 hover:text-gold transition-colors duration-300 pb-0.5 group"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className="hidden lg:block text-[0.62rem] tracking-[0.28em] uppercase px-7 py-2.5 border border-gold/55 text-gold hover:bg-gold hover:text-forest-black transition-all duration-300 flex-shrink-0"
        >
          Reserve Now
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-px bg-ivory origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-px bg-ivory"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-px bg-ivory origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile overlay + slide panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[340px] bg-forest-deep border-l border-gold/12 flex flex-col px-8 pt-8 pb-10"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-serif text-gold tracking-[0.3em] uppercase text-sm">Marush</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-stone hover:text-gold transition-colors text-base leading-none"
                >
                  ✕
                </button>
              </div>

              <div className="w-8 h-px bg-gold/35 mb-8" />

              <nav className="flex flex-col flex-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.055, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setOpen(false)}
                    className="font-serif text-[1.75rem] font-light text-ivory/90 py-3.5 border-b border-gold/8 hover:text-gold transition-colors duration-200"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-8 text-center text-[0.62rem] tracking-[0.3em] uppercase py-3.5 border border-gold/55 text-gold hover:bg-gold hover:text-forest-black transition-all duration-300"
              >
                Reserve Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
