export default function About() {
    return (
        <section className="about xl:p-15 md:p-15" id="about">

            {/* 🔵 TEXT */}
            <div className="about-text">
                <span className="section-tag">Why Choose Us</span>

                <h2 className="section-title">
                    Why Choose<br /><em>Marush</em>
                </h2>

                <div className="divider" />

                <p className="section-body">
                    Marush Premier Lodge Hotel & Resort is more than a destination—
                    it’s a gateway to Mongolia’s soul, where adventure, culture, and
                    luxury meet in perfect harmony.
                </p>

                <div className="about-features">

                    <div className="feature-item">
                        <h4>Luxury Accommodations</h4>
                        <p>Spacious rooms and suites with modern amenities.</p>
                    </div>

                    <div className="feature-item">
                        <h4>Authentic Experiences</h4>
                        <p>Engage with local nomadic traditions and lifestyle.</p>
                    </div>

                    <div className="feature-item">
                        <h4>Breathtaking Landscapes</h4>
                        <p>Panoramic views of Mongolia’s iconic steppe.</p>
                    </div>

                    <div className="feature-item">
                        <h4>Personalized Service</h4>
                        <p>Our attentive staff ensures your stay is seamless and memorable.</p>
                    </div>

                </div>
            </div>

        </section >
    );
}