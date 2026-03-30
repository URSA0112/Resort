export default function Experiences() {
    return (
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

    )
}