export default function Accomodation() {
    return (
        <section className="accommodations" id="accommodations">
            <div className="acc-header">
                <div>
                    <span className="section-tag">Where You Stay</span>
                    <h2 className="section-title">Curated<br /><em>Retreats</em></h2>
                </div>
                <p className="section-body" style={{ maxWidth: '320px' }}>
                    Each accommodation has been carefully designed to frame the landscape
                    and provide an intimate connection with the Mongolian wilderness.
                </p>
            </div>
            <div className="acc-grid">
                {/* Featured card */}
                <div className="acc-card featured">
                    <div className="acc-img">
                        <div className="acc-img-bg acc-img-1" />
                        <svg style={{ position: 'relative', zIndex: 1 }} width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(201,169,110,0.15)" strokeWidth="1" />
                            <polygon points="50,20 65,45 80,55 65,65 50,80 35,65 20,55 35,45" fill="none" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="8" fill="rgba(201,169,110,0.1)" stroke="rgba(201,169,110,0.4)" strokeWidth="1" />
                        </svg>
                    </div>
                    <div className="acc-badge">Signature</div>
                    <div className="acc-info">
                        <span className="acc-type">Presidential Suite</span>
                        <div className="acc-name">The Khan Ger</div>
                        <p className="acc-desc">
                            Our finest accommodation — a double-ger suite with private terrace overlooking
                            Khövsgöl Lake. Features handcrafted furniture, heated floors, and a private butler.
                        </p>
                        <div className="acc-amenities">
                            <span className="amenity-tag">Lake View</span>
                            <span className="amenity-tag">Butler Service</span>
                            <span className="amenity-tag">Private Terrace</span>
                            <span className="amenity-tag">Heated Floors</span>
                            <span className="amenity-tag">Fireplace</span>
                        </div>
                        <div className="acc-price">
                            <span className="price-num">₮890,000</span>
                            <span className="price-label">/ night (≈ USD 250)</span>
                        </div>
                    </div>
                </div>

                <div className="acc-card">
                    <div className="acc-img"><div className="acc-img-bg acc-img-2" /></div>
                    <div className="acc-info">
                        <span className="acc-type">Deluxe Ger</span>
                        <div className="acc-name">Steppe Suite</div>
                        <p className="acc-desc">Panoramic meadow views, king bed, wood-burning stove, and en-suite bath with local stone details.</p>
                        <div className="acc-amenities">
                            <span className="amenity-tag">Panoramic View</span>
                            <span className="amenity-tag">King Bed</span>
                            <span className="amenity-tag">En-Suite</span>
                        </div>
                        <div className="acc-price">
                            <span className="price-num">₮490,000</span>
                            <span className="price-label">/ night (≈ USD 140)</span>
                        </div>
                    </div>
                </div>

                <div className="acc-card">
                    <div className="acc-img"><div className="acc-img-bg acc-img-3" /></div>
                    <div className="acc-info">
                        <span className="acc-type">Classic Ger</span>
                        <div className="acc-name">Forest Ger</div>
                        <p className="acc-desc">Nestled among birch trees with traditional decor, double beds, and shared heated bathing facilities.</p>
                        <div className="acc-amenities">
                            <span className="amenity-tag">Forest Setting</span>
                            <span className="amenity-tag">Twin Beds</span>
                            <span className="amenity-tag">Traditional</span>
                        </div>
                        <div className="acc-price">
                            <span className="price-num">₮280,000</span>
                            <span className="price-label">/ night (≈ USD 80)</span>
                        </div>
                    </div>
                </div>

                <div className="acc-card">
                    <div className="acc-img"><div className="acc-img-bg acc-img-4" /></div>
                    <div className="acc-info">
                        <span className="acc-type">Family Package</span>
                        <div className="acc-name">Nomad Compound</div>
                        <p className="acc-desc">Two interconnected gers for families — a master suite and children&apos;s ger with games and storytelling area.</p>
                        <div className="acc-amenities">
                            <span className="amenity-tag">Family</span>
                            <span className="amenity-tag">2 Gers</span>
                            <span className="amenity-tag">Children&apos;s Area</span>
                        </div>
                        <div className="acc-price">
                            <span className="price-num">₮750,000</span>
                            <span className="price-label">/ night (≈ USD 210)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}