export default function Contact() {
    const contactItems = [
        {
            icon: '📞',
            label: 'Phone',
            value: '+976 9100 6969',
            href: 'tel:+97691006969',
        },
        {
            icon: '✉️',
            label: 'Email',
            value: 'sondorekh@gmail.com',
            href: 'mailto:sondorekh@gmail.com',
        },
        {
            icon: '📸',
            label: 'Instagram',
            value: '@marushresort',
            href: 'https://instagram.com/marushresort',
        },
        {
            icon: '👥',
            label: 'Facebook',
            value: 'Marush Resort',
            href: '#', // update later
        },
        {
            icon: '💬',
            label: 'WhatsApp',
            value: '+976 9100 6969',
            href: 'https://wa.me/97691006969',
        },
        {
            icon: '📲',
            label: 'Viber',
            value: '+976 9100 6969',
            href: '#', // update later
        },
    ];

    return (
        <section className="contact" id="contact">
            <style>{`
                .contact {
                    padding: 6rem 1.5rem;
                    background: radial-gradient(circle at top, #111 0%, #0b0b0a 100%);
                    color: #f5f0e8;
                    text-align: center;
                    font-family: 'Georgia', serif;
                }

                .contact-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .section-tag {
                    font-size: 11px;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                    color: #C9A96E;
                    display: block;
                    margin-bottom: 1rem;
                }

                .section-title {
                    font-size: 2.8rem;
                    font-weight: 400;
                    margin-bottom: 1rem;
                }

                .section-title em {
                    color: #C9A96E;
                    font-style: italic;
                }

                .divider {
                    width: 40px;
                    height: 1px;
                    background: #C9A96E;
                    margin: 1.5rem auto;
                    opacity: 0.6;
                }

                .section-body {
                    max-width: 500px;
                    margin: 0 auto 3rem;
                    font-size: 0.95rem;
                    color: #b0a898;
                    line-height: 1.8;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1px;
                    background: rgba(201,169,110,0.08);
                }

                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 500px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .contact-item {
                    background: linear-gradient(145deg, #111, #0c0c0b);
                    padding: 2.5rem 1.5rem;
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.35s ease;
                    position: relative;
                }

                .contact-item:hover {
                    background: #0f0f0e;
                    transform: translateY(-6px);
                    box-shadow: 0 10px 30px rgba(201,169,110,0.15);
                }

                .contact-item::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border: 1px solid rgba(201,169,110,0.2);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .contact-item:hover::after {
                    opacity: 1;
                }

                .contact-icon {
                    font-size: 22px;
                    margin-bottom: 1rem;
                }

                .contact-label {
                    font-size: 11px;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #C9A96E;
                    margin-bottom: 0.5rem;
                }

                .contact-value {
                    font-size: 1rem;
                    color: #e7e0d4;
                }
            `}</style>

            <div className="contact-inner">
                <span className="section-tag">Get in Touch</span>

                <h2 className="section-title">
                    Reserve Your <em>Retreat</em>
                </h2>

                <div className="divider" />

                <p className="section-body">
                    Our reservations team is available seven days a week to assist with bookings,
                    custom itineraries, and private inquiries.
                </p>

                <div className="contact-grid">
                    {contactItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <span className="contact-icon">{item.icon}</span>
                            <span className="contact-label">{item.label}</span>
                            <span className="contact-value">{item.value}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}