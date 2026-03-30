export default function Location() {
    return (
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

    )
}