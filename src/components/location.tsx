export default function Location() {
    return (
        <section className="location p-12" id="location">
            <div className="location-inner">

                {/* REAL GOOGLE MAP */}
                <div className="map-container">
                    <iframe className="map-frame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.546120841262!2d106.90670357630076!3d48.34038027126657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9645007b6bf2f1%3A0x8df59fabb04e3e39!2sMarush%20hotel%20and%20resort!5e1!3m2!1sen!2sus!4v1775025809511!5m2!1sen!2sus"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Marush Hotel & Resort Location"
                    />
                </div>

                {/* INFO */}
                <div className="location-info">
                    <span className="section-tag">Getting Here</span>

                    <h2 className="section-title">
                        Töv Province<br /><em>Mongolia</em>
                    </h2>

                    <div className="divider" />

                    <p className="section-body">
                        Marush Hotel & Resort is located in the peaceful landscapes of Töv Province,
                        offering a serene escape just outside Ulaanbaatar. Surrounded by open steppe
                        and natural beauty, the resort is easily accessible year-round.
                    </p>

                    <ul className="reach-list">
                        {[
                            {
                                icon: "🚗",
                                title: "From Ulaanbaatar",
                                text: "Approx. 1–2 hour drive from Ulaanbaatar city. Smooth road access available year-round.",
                            },
                            {
                                icon: "🛣",
                                title: "By Road",
                                text: "Direct access via main paved roads. Private transfers and taxis available.",
                            },
                            {
                                icon: "📍",
                                title: "Location",
                                text: "8WR5+5P2, Üdeligiin Dugan, Töv Province, Mongolia",
                            },
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

                    {/* OPTIONAL BUTTON */}
                    <a
                        href="https://maps.app.goo.gl/wYLbJJjbLurxQxaQ7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 px-6 py-3 text-xs tracking-widest uppercase
              border border-amber-400 text-amber-400 rounded-md
              hover:bg-amber-400 hover:text-black transition"
                    >
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </section>
    );
}