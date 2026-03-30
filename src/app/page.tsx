
export default function Home() {
  return (
    <>
      <nav>
        <a className="nav-logo" href="#">
          MARUSH <span>resort</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#accommodations">Stays</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Reserve Now</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-landscape" />
        <div className="hero-lake" />
        <div className="hero-content">
          <div className="hero-eyebrow">Established 2025 · Khövsgöl, Mongolia</div>
          <h1 className="hero-title">
            Where the<br />Steppe Meets<br /><em>Silence</em>
          </h1>
          <p className="hero-subtitle">
            Mongolia&apos;s premier lakeside wilderness resort — luxury ger camps,<br />
            curated nomadic experiences, and the vast open sky above Khövsgöl.
          </p>
          <div className="hero-actions">
            <a href="#accommodations" className="btn-primary">Explore Stays</a>
            <a href="#experiences" className="btn-ghost">Our Experiences</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Discover</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-num">24</span>
          <span className="stat-label">Luxury Ger Suites</span>
        </div>
        <div className="stat">
          <span className="stat-num">12</span>
          <span className="stat-label">Curated Experiences</span>
        </div>
        <div className="stat">
          <span className="stat-num">3,200</span>
          <span className="stat-label">Hectares of Wilderness</span>
        </div>
        <div className="stat">
          <span className="stat-num">4★</span>
          <span className="stat-label">Boutique Classification</span>
        </div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-img-main">
              <svg
                className="ger-svg"
                width="180"
                height="140"
                viewBox="0 0 180 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="90" cy="120" rx="80" ry="12" fill="rgba(201,169,110,0.08)" />
                <rect x="20" y="85" width="140" height="35" rx="2" fill="rgba(201,169,110,0.12)" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
                <line x1="40" y1="85" x2="40" y2="120" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <line x1="60" y1="85" x2="60" y2="120" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <line x1="80" y1="85" x2="80" y2="120" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <line x1="100" y1="85" x2="100" y2="120" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <line x1="120" y1="85" x2="120" y2="120" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <line x1="140" y1="85" x2="140" y2="120" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <path d="M20 87 Q90 20 170 87" stroke="rgba(201,169,110,0.5)" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
                <line x1="90" y1="22" x2="50" y2="85" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <line x1="90" y1="22" x2="70" y2="85" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <line x1="90" y1="22" x2="90" y2="85" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5" />
                <line x1="90" y1="22" x2="110" y2="85" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <line x1="90" y1="22" x2="130" y2="85" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                <circle cx="90" cy="22" r="10" fill="none" stroke="rgba(201,169,110,0.6)" strokeWidth="1.5" />
                <circle cx="90" cy="22" r="5" fill="rgba(201,169,110,0.3)" />
                <rect x="76" y="95" width="28" height="25" rx="1" fill="rgba(201,169,110,0.08)" stroke="rgba(201,169,110,0.4)" strokeWidth="1" />
                <path d="M76 101 Q90 94 104 101" stroke="rgba(201,169,110,0.4)" strokeWidth="1" fill="none" />
              </svg>
              <div className="about-img-label">Luxury Ger Suite</div>
            </div>
            <div className="about-img-accent">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,65 30,25 50,65" fill="rgba(201,169,110,0.08)" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
                <polygon points="30,65 55,20 80,65" fill="rgba(201,169,110,0.12)" stroke="rgba(201,169,110,0.4)" strokeWidth="1" />
                <polygon points="55,20 48,36 62,36" fill="rgba(201,169,110,0.2)" />
                <ellipse cx="40" cy="70" rx="35" ry="4" fill="rgba(100,160,220,0.15)" />
              </svg>
              <div className="about-img-label">Khövsgöl Landscape</div>
            </div>
          </div>

          <div className="about-text">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">
              Mongolia&apos;s Most<br /><em>Anticipated</em> Resort
            </h2>
            <div className="divider" />
            <p className="section-body">
              Altan Nuur — meaning &quot;Golden Lake&quot; — is a new landmark in Mongolian luxury
              hospitality. Nestled on the shores of Khövsgöl Nuur in northern Mongolia, we blend
              the timeless elegance of nomadic heritage with contemporary comfort and world-class
              service standards.
              <br /><br />
              Our resort is purpose-built for the discerning traveler seeking authentic wilderness
              experiences without compromise. From our sustainably constructed ger suites to our
              farm-to-table dining, every detail honors the land and its people.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <h4>Eco-Certified</h4>
                <p>Built with 80% local materials, minimal footprint design</p>
              </div>
              <div className="feature-item">
                <h4>Heritage Design</h4>
                <p>Traditional craftsmanship meets modern luxury standards</p>
              </div>
              <div className="feature-item">
                <h4>Year-Round Access</h4>
                <p>Summer camping, winter ice festival programming</p>
              </div>
              <div className="feature-item">
                <h4>Local Partners</h4>
                <p>Nomadic family guides, local artisan marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATIONS */}
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

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-inner">
          <div className="services-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Resort <em>Services</em></h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 36 Q24 8 40 36" />
                <circle cx="24" cy="24" r="4" />
                <line x1="24" y1="4" x2="24" y2="8" />
                <line x1="24" y1="40" x2="24" y2="44" />
                <line x1="4" y1="24" x2="8" y2="24" />
                <line x1="40" y1="24" x2="44" y2="24" />
              </svg>
              <div className="service-name">Fine Dining</div>
              <p className="service-desc">Our on-site restaurant serves contemporary Mongolian cuisine using locally foraged ingredients, wild fish from Khövsgöl, and produce from partner farms. Open for breakfast, lunch, and candlelit dinners.</p>
            </div>
            <div className="service-card">
              <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="24" cy="20" r="8" />
                <path d="M12 40 Q12 30 24 30 Q36 30 36 40" />
                <path d="M38 16 Q44 20 38 28" />
                <path d="M10 16 Q4 20 10 28" />
              </svg>
              <div className="service-name">Wellness &amp; Spa</div>
              <p className="service-desc">A full-service spa offering traditional Mongolian herbal treatments, hot stone therapies, and yoga pavilions overlooking the lake. Seasonal outdoor banya (Russian bathhouse) on-site.</p>
            </div>
            <div className="service-card">
              <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M8 38 L20 18 L28 28 L34 20 L42 38 Z" />
                <circle cx="36" cy="14" r="4" />
              </svg>
              <div className="service-name">Private Events</div>
              <p className="service-desc">Exclusive use bookings for corporate retreats, destination weddings, and cultural celebrations. Our events team handles full logistics including traditional ceremony arrangements.</p>
            </div>
            <div className="service-card">
              <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                <ellipse cx="24" cy="32" rx="14" ry="6" />
                <path d="M10 32 L10 20 Q10 12 24 12 Q38 12 38 20 L38 32" />
                <line x1="24" y1="12" x2="24" y2="8" />
                <circle cx="24" cy="6" r="2" />
              </svg>
              <div className="service-name">Transport &amp; Transfers</div>
              <p className="service-desc">Airport pickup from Mörön Airport, private 4×4 transfers along mountain routes, and helicopter charters available for scenic arrivals or remote drop-offs.</p>
            </div>
            <div className="service-card">
              <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 30 Q12 20 18 24 Q24 28 30 16 Q36 4 42 18" />
                <line x1="6" y1="36" x2="42" y2="36" />
              </svg>
              <div className="service-name">Cultural Programs</div>
              <p className="service-desc">Daily scheduled programs: throat singing performances, ger construction demonstrations, traditional archery, and storytelling sessions with elder nomadic families from the region.</p>
            </div>
            <div className="service-card">
              <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="8" y="16" width="32" height="22" rx="2" />
                <path d="M16 16 L16 12 Q16 8 24 8 Q32 8 32 12 L32 16" />
                <circle cx="24" cy="27" r="4" />
                <line x1="24" y1="31" x2="24" y2="34" />
              </svg>
              <div className="service-name">Concierge &amp; Tours</div>
              <p className="service-desc">24-hour concierge desk with English, Chinese, Russian, and Mongolian-speaking staff. Full itinerary planning, national park permits, and multi-day overland tour coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="experiences" id="experiences">
        <div className="exp-inner">
          <div className="exp-header">
            <div>
              <span className="section-tag">What Awaits</span>
              <h2 className="section-title">Signature<br /><em>Experiences</em></h2>
              <div className="divider" />
            </div>
            <p className="section-body">
              Beyond the resort, Mongolia&apos;s raw wilderness becomes your playground.
              Each experience is guided by local experts and designed to be both
              adventurous and deeply respectful of the land.
            </p>
          </div>
          <div className="exp-grid">
            {[
              { n: '01', name: 'Horseback Riding', desc: 'Multi-day horse treks across the steppe with nomadic guides, from half-day trail rides to 5-day wilderness expeditions.' },
              { n: '02', name: 'Lake Kayaking', desc: 'Explore the crystal-clear waters of Khövsgöl Nuur by kayak or traditional dugout canoe, with guided island tours.' },
              { n: '03', name: 'Eagle Hunting', desc: 'Exclusive sessions with Kazakh eagle hunters — witness and participate in one of Mongolia\'s most ancient traditions.' },
              { n: '04', name: 'Night Sky Tours', desc: 'Guided astronomy sessions under Mongolia\'s unpolluted sky — one of the world\'s best dark sky destinations.' },
              { n: '05', name: 'Nomad Homestay', desc: 'Spend a night with a partnered nomadic family — cook together, help with livestock, sleep in their ger.' },
              { n: '06', name: 'Winter Ice Festival', desc: 'February\'s frozen lake transforms into an ice festival with dog sledding, ice fishing, and traditional winter games.' },
              { n: '07', name: 'Archery & Naadam', desc: 'Traditional Mongolian archery lessons with professional archers, and private Naadam mini-festival bookings.' },
              { n: '08', name: 'Photography Tours', desc: 'Dedicated photography expeditions to capture golden hour on the steppe, wildlife, and nomadic life with a pro guide.' },
            ].map((exp) => (
              <div className="exp-item" key={exp.n}>
                <span className="exp-number">{exp.n}</span>
                <div className="exp-name">{exp.name}</div>
                <p className="exp-desc">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <div className="gallery-header">
          <span className="section-tag">Visual Journey</span>
          <h2 className="section-title" style={{ maxWidth: '500px' }}>
            A Glimpse of <em>Altan Nuur</em>
          </h2>
        </div>
        <div className="gallery-strip">
          {[
            { cls: 'g1', label: 'Lakeside at Dusk' },
            { cls: 'g2', label: 'Ger Interior' },
            { cls: 'g3', label: 'Steppe Horizon' },
            { cls: 'g4', label: 'Dining Experience' },
            { cls: 'g5', label: 'Night Sky' },
          ].map((item) => (
            <div className={`gallery-item ${item.cls}`} key={item.cls}>
              <div className="gallery-caption">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="location" id="location">
        <div className="location-inner">
          <div className="map-placeholder">
            <div className="map-pin" />
            <div className="map-label">Altan Nuur Resort · Khövsgöl, Mongolia</div>
            <svg style={{ position: 'absolute', opacity: 0.06 }} width="300" height="300" viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="60" fill="none" stroke="#C9A96E" strokeWidth="1" />
              <circle cx="150" cy="150" r="100" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
              <circle cx="150" cy="150" r="140" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
              <line x1="0" y1="150" x2="300" y2="150" stroke="#C9A96E" strokeWidth="0.5" />
              <line x1="150" y1="0" x2="150" y2="300" stroke="#C9A96E" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="location-info">
            <span className="section-tag">Getting Here</span>
            <h2 className="section-title">Northern<br /><em>Mongolia</em></h2>
            <div className="divider" />
            <p className="section-body">
              Altan Nuur Resort is located on the southern shores of Khövsgöl Nuur —
              Mongolia&apos;s largest freshwater lake — in Khövsgöl Province, northern Mongolia.
              The resort is reachable year-round by road and air.
            </p>
            <ul className="reach-list">
              {[
                { icon: '✈', title: 'By Air', text: 'Fly Ulaanbaatar (ULN) → Mörön Airport (MXV) — 1.5 hr domestic flight. Daily services by Hunnu Air & MIAT.' },
                { icon: '🚙', title: 'By Road', text: '3-hour scenic 4×4 transfer from Mörön Airport. Resort vehicles available. Road open May–October.' },
                { icon: '🚁', title: 'By Helicopter', text: 'Charter helicopter from Ulaanbaatar — 2.5 hours. Scenic overflight packages available on request.' },
                { icon: '📍', title: 'Coordinates', text: '51.0°N 100.5°E · Khövsgöl Nuur National Park, Mongolia' },
              ].map((item) => (
                <li key={item.title}>
                  <span className="reach-icon">{item.icon}</span>
                  <div>
                    <strong className="reach-title">{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Reserve Your <em>Retreat</em></h2>
          <div className="divider" style={{ margin: '1.5rem auto' }} />
          <p className="section-body" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '500px' }}>
            Our reservations team is available seven days a week to assist with bookings,
            custom itineraries, and group inquiries.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-label">Phone</span>
              <span className="contact-value">+976 9900 1234</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">stay@altannuur.mn</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <span className="contact-label">Hours</span>
              <span className="contact-value">Daily 8am – 9pm (ULT)</span>
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" className="full-width" />
            <input type="text" placeholder="Check-in Date" />
            <input type="text" placeholder="Check-out Date" />
            <select className="full-width" defaultValue="">
              <option value="" disabled>Select Accommodation Type</option>
              <option>The Khan Ger — Presidential Suite</option>
              <option>Steppe Suite — Deluxe Ger</option>
              <option>Forest Ger — Classic</option>
              <option>Nomad Compound — Family Package</option>
              <option>Undecided / Advise Me</option>
            </select>
            <textarea
              className="full-width"
              placeholder="Tell us about your travel plans, special requests, or group size..."
            />
            <button className="form-submit" type="button">
              Send Reservation Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">ALTAN NUUR RESORT</span>
            <p className="footer-tagline">
              Mongolia&apos;s premier wilderness luxury retreat on the shores of
              Khövsgöl Nuur. Where ancient nomadic culture meets world-class hospitality.
            </p>
          </div>
          <div className="footer-col">
            <h5>Stays</h5>
            <ul>
              <li><a href="#">The Khan Ger</a></li>
              <li><a href="#">Steppe Suite</a></li>
              <li><a href="#">Forest Ger</a></li>
              <li><a href="#">Family Compound</a></li>
              <li><a href="#">Group Bookings</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Experiences</h5>
            <ul>
              <li><a href="#">Horseback Riding</a></li>
              <li><a href="#">Eagle Hunting</a></li>
              <li><a href="#">Lake Kayaking</a></li>
              <li><a href="#">Night Sky Tours</a></li>
              <li><a href="#">Winter Festival</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Resort</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Dining</a></li>
              <li><a href="#">Spa &amp; Wellness</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Press &amp; Media</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Altan Nuur Resort LLC. All rights reserved. Khövsgöl Province, Mongolia.</p>
          <p>Privacy Policy · Terms of Use · Booking Conditions</p>
        </div>
      </footer>
    </>
  );
}
