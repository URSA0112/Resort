import Header from "@/components/header";
import Footer from "@/components/footer";
import ApplicationForm from "@/components/ApplicationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers — Marush Resort",
    description: "Join the Marush Resort team. We're looking for passionate hospitality professionals to help create unforgettable experiences.",
};

const jobs = [
    {
        id: 1,
        title: "Front Desk & Reservations Manager",
        department: "Operations",
        location: "Töv Province, Mongolia",
        type: "Full-time",
        description: "Lead our guest services team and manage reservations with warmth and professionalism. You'll be the first and last impression of Marush.",
    },
    {
        id: 2,
        title: "Executive Head Chef",
        department: "Food & Beverage",
        location: "Töv Province, Mongolia",
        type: "Full-time",
        description: "Craft exceptional dining experiences using local ingredients and traditional Mongolian culinary heritage, elevated to modern luxury standards.",
    },
    {
        id: 3,
        title: "Housekeeping Supervisor",
        department: "Housekeeping",
        location: "Töv Province, Mongolia",
        type: "Full-time",
        description: "Maintain our luxury standards across all Ger accommodations with meticulous attention to detail and a passion for cleanliness.",
    },
    {
        id: 4,
        title: "Tour & Experience Guide",
        department: "Guest Experiences",
        location: "Töv Province, Mongolia",
        type: "Full-time",
        description: "Lead guests through horse riding, trekking, eagle hunting, and nomadic cultural experiences in the heart of the Mongolian steppe.",
    },
    {
        id: 5,
        title: "Spa & Wellness Therapist",
        department: "Wellness",
        location: "Töv Province, Mongolia",
        type: "Full-time",
        description: "Deliver premium massage and wellness treatments in our tranquil spa center, helping guests reconnect with themselves and nature.",
    },
    {
        id: 6,
        title: "Digital Marketing Coordinator",
        department: "Marketing",
        location: "Ulaanbaatar (Hybrid)",
        type: "Part-time",
        description: "Manage our social media presence, create compelling content, and coordinate marketing campaigns to share Marush with the world.",
    },
];

const benefits = [
    { icon: "🏠", title: "Accommodation", desc: "On-site housing provided for all resort-based staff." },
    { icon: "🍽️", title: "Meals Included", desc: "Three daily meals prepared by our in-house culinary team." },
    { icon: "💊", title: "Health Coverage", desc: "Comprehensive health insurance for you and your family." },
    { icon: "📚", title: "Growth & Training", desc: "Continuous professional development and international certifications." },
    { icon: "🐎", title: "Resort Access", desc: "Complimentary access to all resort activities and experiences." },
    { icon: "🤝", title: "Team Culture", desc: "Inclusive, supportive work environment with regular team events." },
];

const culture = [
    { icon: "🌿", title: "Rooted in Heritage", desc: "We draw inspiration from Mongolia's nomadic traditions to create authentic, meaningful hospitality." },
    { icon: "⭐", title: "Pursuit of Excellence", desc: "Every detail matters. We hold ourselves to the highest standard in everything we do." },
    { icon: "💛", title: "People First", desc: "Our team is our greatest asset. We invest in growth, wellbeing, and belonging." },
    { icon: "🌍", title: "Sustainable Values", desc: "We care for our land, our guests, and our community for generations to come." },
];

const positionTitles = jobs.map(j => j.title);

export default function CareersPage() {
    return (
        <>
            <Header />

            {/* HERO */}
            <section className="careers-hero relative flex items-center justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
                {/* Real photo background */}
                <div className="absolute inset-0 z-0" style={{ opacity: 0.35 }}>
                    <img src="/2-2.png" alt="Marush Resort" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
                </div>
                <div className="careers-hero-bg" style={{ zIndex: 1 }} />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ zIndex: 2 }}>
                    <span className="block text-xs tracking-[0.5em] uppercase text-amber-400 mb-6 opacity-0 [animation:fadeUp_0.8s_0.3s_forwards]">
                        Join Our Team
                    </span>
                    <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] font-light leading-[1.05] text-white opacity-0 [animation:fadeUp_0.8s_0.5s_forwards]">
                        Build Something<br />
                        <em className="italic text-amber-400">Beautiful</em>
                    </h1>
                    <p className="mt-6 text-sm font-light tracking-wide leading-relaxed text-white/50 max-w-lg mx-auto opacity-0 [animation:fadeUp_0.8s_0.7s_forwards]">
                        Marush Resort is more than a workplace — it's a community rooted in Mongolian heritage,
                        natural beauty, and the art of genuine hospitality. Come grow with us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 opacity-0 [animation:fadeUp_0.8s_0.9s_forwards]">
                        <a href="#openings" className="btn-primary">View Open Roles</a>
                        <a href="#apply" className="btn-ghost">Apply Now</a>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" style={{ zIndex: 2 }}>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-amber-400">Scroll</span>
                    <div className="scroll-line" />
                </div>
            </section>

            {/* COMPANY CULTURE */}
            <section className="bg-[var(--dark-2)] py-28 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="section-tag">Our Culture</span>
                            <h2 className="section-title mt-3">
                                Where Purpose<br />
                                <em>Meets Passion</em>
                            </h2>
                            <div className="divider" />
                            <p className="section-body">
                                Working at Marush means waking up to the Mongolian steppe, connecting with travelers
                                from around the world, and being part of a team that genuinely cares — about each other,
                                our guests, and the land we call home.
                            </p>
                            <p className="section-body mt-4">
                                We're building something meaningful here, and we want people who share our belief
                                that hospitality is an art form — one that starts with how we treat each other.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {culture.map(item => (
                                <div key={item.title} className="p-6 border border-amber-400/10 bg-[var(--dark-3)] rounded-xl hover:border-amber-400/25 transition-all duration-300">
                                    <span className="text-2xl mb-3 block">{item.icon}</span>
                                    <h4 className="text-sm font-medium tracking-wide text-white mb-2">{item.title}</h4>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* JOB LISTINGS */}
            <section id="openings" className="bg-[var(--dark)] py-28 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-14">
                        <span className="section-tag">Open Positions</span>
                        <h2 className="section-title mt-3">
                            Find Your<br />
                            <em>Role</em>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {jobs.map(job => (
                            <div
                                key={job.id}
                                className="group flex flex-col p-7 border border-amber-400/15 bg-[var(--dark-2)] rounded-2xl hover:border-amber-400/35 hover:bg-[var(--dark-3)] transition-all duration-300"
                            >
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div>
                                        <span className="text-[10px] tracking-[0.3em] uppercase text-amber-400/70 block mb-1">{job.department}</span>
                                        <h3 className="font-serif text-lg text-white leading-tight">{job.title}</h3>
                                    </div>
                                    <span className="flex-shrink-0 text-[10px] tracking-wide uppercase px-2.5 py-1 border border-amber-400/20 text-amber-400/70 rounded-full whitespace-nowrap">
                                        {job.type}
                                    </span>
                                </div>

                                <p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-5">{job.description}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-[var(--muted)] flex items-center gap-1.5">
                                        <span className="text-amber-400">📍</span>{job.location}
                                    </span>
                                    <a
                                        href="#apply"
                                        className="text-[10px] tracking-[0.2em] uppercase text-amber-400 border border-amber-400/30 px-4 py-2 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300"
                                    >
                                        Apply
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="bg-[var(--dark-3)] py-28 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-tag">Why Marush</span>
                        <h2 className="section-title mt-3">
                            What We<br />
                            <em>Offer</em>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {benefits.map(b => (
                            <div key={b.title} className="flex gap-5 p-6 border border-amber-400/10 bg-[var(--dark-2)] rounded-xl hover:border-amber-400/25 transition-all duration-300">
                                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                                <div>
                                    <h4 className="text-sm font-medium tracking-wide text-white mb-1.5">{b.title}</h4>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPLICATION FORM */}
            <section id="apply" className="bg-[var(--dark-2)] py-28 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="section-tag">Apply Now</span>
                        <h2 className="section-title mt-3">
                            Start Your<br />
                            <em>Journey</em>
                        </h2>
                        <div className="divider mx-auto mt-4" />
                        <p className="section-body mx-auto text-center mt-4">
                            Fill in the form below and we'll be in touch within 5–7 business days.
                        </p>
                    </div>
                    <ApplicationForm positions={positionTitles} />
                </div>
            </section>

            <Footer />
        </>
    );
}
