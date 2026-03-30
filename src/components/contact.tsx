export default function Contact() {
    return (
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
                        <span className="contact-value">+976 9100 6969</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">✉️</span>
                        <span className="contact-label">Email</span>
                        <span className="contact-value">sondorekh@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">📸</span>
                        <span className="contact-label">Instagram</span>
                        <span className="contact-value">@marushresort</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">👥</span>
                        <span className="contact-label">Facebook</span>
                        <span className="contact-value">Marush Resort</span>
                    </div>
                </div>

            </div>
        </section>
    )
}