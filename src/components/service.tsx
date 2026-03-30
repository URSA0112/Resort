export default function Services() {
    return (
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
    )
}