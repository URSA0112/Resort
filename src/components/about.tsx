export default function About() {
    return (
        <section className="about" id="about" style={{ padding: '7rem 1.5rem' }}>
            <div className="about-inner">

                {/* ── Visual column ── */}
                <div className="about-visual">

                    {/* Main photo — aerial resort view */}
                    <div className="about-img-main">
                        <img
                            src="/2.png"
                            alt="Marush Resort aerial view"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                        <span className="about-img-label">Resort Grounds</span>
                    </div>

                    {/* Accent — site plan */}
                    <div className="about-img-accent">
                        <img
                            src="/1.png"
                            alt="Resort site plan"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.85 }}
                        />
                        <span className="about-img-label">Site Overview</span>
                    </div>

                </div>

                {/* ── Text column ── */}
                <div className="about-text">
                    <span className="section-tag">Why Choose Us</span>

                    <h2 className="section-title">
                        Why Choose<br /><em>Marush</em>
                    </h2>

                    <div className="divider" />

                    <p className="section-body">
                        Marush Premier Lodge Hotel & Resort is more than a destination —
                        it's a gateway to Mongolia's soul, where adventure, culture, and
                        luxury meet in perfect harmony.
                    </p>

                    <div className="about-features">
                        <div className="feature-item">
                            <h4>Luxury Accommodations</h4>
                            <p>Spacious Ger rooms and suites with modern amenities and traditional Mongolian design.</p>
                        </div>
                        <div className="feature-item">
                            <h4>Authentic Experiences</h4>
                            <p>Engage with local nomadic traditions, horse riding, and the untouched steppe.</p>
                        </div>
                        <div className="feature-item">
                            <h4>Breathtaking Landscapes</h4>
                            <p>Panoramic views of Mongolia's iconic steppe, mountains, and open skies.</p>
                        </div>
                        <div className="feature-item">
                            <h4>Personalized Service</h4>
                            <p>Our attentive staff ensures every stay is seamless, warm, and memorable.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
