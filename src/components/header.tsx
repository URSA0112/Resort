'use client';
import { useState, useEffect } from 'react';

const links = [
    { label: 'About', href: '/#about' },
    { label: 'Stays', href: '/#accommodations' },
    { label: 'Services', href: '/#services' },
    { label: 'Location', href: '/#location' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Careers', href: '/careers' },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            <nav className={scrolled ? 'nav-scrolled' : ''}>
                <a className="nav-logo" href="/">
                    MARUSH <span>resort</span>
                </a>

                {/* Desktop links */}
                <ul className="nav-links">
                    {links.map(l => (
                        <li key={l.label}><a href={l.href}>{l.label}</a></li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a href="/#contact" className="nav-cta nav-cta-desktop">Reserve Now</a>

                {/* Hamburger — mobile only */}
                <button
                    className={`hamburger${open ? ' hamburger-open' : ''}`}
                    onClick={() => setOpen(v => !v)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {/* Mobile overlay menu */}
            {open && (
                <div className="mobile-nav-overlay" onClick={() => setOpen(false)}>
                    <div className="mobile-nav-panel" onClick={e => e.stopPropagation()}>
                        {/* Logo row */}
                        <div className="mobile-nav-logo">
                            <span className="nav-logo" style={{ fontSize: '1.1rem' }}>MARUSH <em style={{ fontStyle: 'italic', color: 'var(--cream)' }}>resort</em></span>
                            <button className="mobile-nav-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
                        </div>

                        <div className="mobile-nav-divider" />

                        {/* Links */}
                        <nav className="mobile-nav-links">
                            {links.map((l, i) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    className="mobile-nav-link"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                    onClick={() => setOpen(false)}
                                >
                                    {l.label}
                                </a>
                            ))}
                        </nav>

                        <div className="mobile-nav-divider" />

                        <a
                            href="/#contact"
                            className="nav-cta mobile-nav-cta"
                            onClick={() => setOpen(false)}
                        >
                            Reserve Now
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
