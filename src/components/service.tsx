export default function Services() {
    const GOLD = "text-amber-400";
    const BORDER = "border-amber-400/20";

    const services = [
        {
            title: "Spa & Wellness",
            desc: "Indulge in rejuvenating treatments and holistic therapies.",
        },
        {
            title: "Fitness Center",
            desc: "Stay active in our modern gym with top-tier equipment.",
        },
        {
            title: "Kids Zone",
            desc: "Fun and safe entertainment for younger guests.",
        },
        {
            title: "Restaurant & Coffee Bar",
            desc: "Enjoy gourmet meals and specialty beverages crafted from local ingredients.",
        },
        {
            title: "24-Hour Reception",
            desc: "Personalized service around the clock for your convenience.",
        },
    ];

    const experiences = [
        {
            title: "Trekking & Horse Riding",
            desc: "Explore the vast Mongolian steppe and breathtaking landscapes.",
        },
        {
            title: "Nomadic Lifestyle",
            desc: "Immerse yourself in traditional Mongolian culture and daily life.",
        },
        {
            title: "Brain Refresh Retreats",
            desc: "Meditate, relax, and rejuvenate amidst serene surroundings.",
        },
        {
            title: "More Experiences",
            desc: "Every visit offers new adventures from culture to nature.",
        },
    ];

    return (
        <section id="services" className="w-full py-28 px-6 md:px-16 text-white">

            {/* Header */}
            <div className="mb-16 max-w-3xl">
                <span className={`text-xs tracking-[0.35em] uppercase ${GOLD}`}>
                    What We Offer
                </span>

                <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] mt-4">
                    Resort <em className={`${GOLD} not-italic`}>Services</em>
                </h2>
            </div>

            {/* SERVICES */}
            <div className="mb-20">
                <h3 className="text-sm tracking-widest uppercase text-white/60 mb-8">
                    Hotel Services
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item) => (
                        <div
                            key={item.title}
                            className={`p-7 rounded-2xl border ${BORDER} hover:bg-white/5 transition`}
                        >
                            <div className="mb-4 w-10 h-10 flex items-center justify-center border border-amber-400/30 rounded-full text-amber-400">
                                ✓
                            </div>

                            <h4 className="font-serif text-lg mb-2">{item.title}</h4>

                            <p className="text-sm text-white/60 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* EXPERIENCES */}
            <div>
                <h3 className="text-sm tracking-widest uppercase text-white/60 mb-8">
                    Unique Experiences
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experiences.map((item) => (
                        <div
                            key={item.title}
                            className={`p-6 rounded-xl border ${BORDER} hover:bg-white/5 transition`}
                        >
                            <h4 className="font-serif text-base mb-2">{item.title}</h4>

                            <p className="text-sm text-white/60 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}