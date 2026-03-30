export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg" />
            <div className="hero-landscape" />
            <div className="hero-lake" />
            <div className="hero-content">
                <div className="hero-eyebrow">Established 2025 · Batsumber, Mongolia</div>
                <h1 className="hero-title">
                    Welcome to<br />Marush Premier Lodge<br /><em> Hotel & Resort</em>
                </h1>
                <p className="hero-subtitle">
                    Discover the ultimate blend of luxury and tradition at Marush Premier Lodge Hotel & Resort, located in the heart of Mongolia’s majestic landscapes. Our resort offers an exclusive escape where modern comfort meets the authentic nomadic lifestyle.
                </p>
                <div className="hero-actions">
                    <a href="#accommodations" className="btn-primary">Explore Stays</a>
                    <a href="#experiences" className="btn-ghost">Our Experiences</a>
                </div>
            </div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">

                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-(--muted)">
                    Discover
                </span>

                <div className="w-px h-12.5 bg-linear-to-b from-(--gold) to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />

            </div>
        </section>

    )
}

// Welcome to Marush Premier Lodge Hotel & Resort, Mongolia

// Discover the ultimate blend of luxury and tradition at Marush Premier Lodge Hotel & Resort, located in the heart of Mongolia’s majestic landscapes. Our resort offers an exclusive escape where modern comfort meets the authentic nomadic lifestyle.