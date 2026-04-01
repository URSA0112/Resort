export default function Footer() {
    return (
        <footer className="footer">
            <style>{`
                .footer {
                    position: relative;
                    background-image: url('/2.png');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    color: #f5f0e8;
                }

                /* Dark overlay */
                .footer::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0,0,0,0.9) 20%,
                        rgba(0,0,0,0.7) 50%,
                        rgba(0,0,0,0.4) 100%
                    );
                }

                .footer-inner {
                    position: relative;
                    z-index: 2;
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 6rem 1.5rem 3rem;
                    display: grid;
                    grid-template-columns: 1.8fr 1fr 1fr;
                    gap: 4rem;
                }

                @media (max-width: 768px) {
                    .footer-inner {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }

                .footer-logo {
                    font-size: 1rem;
                    letter-spacing: 0.35em;
                    color: #C9A96E;
                    margin-bottom: 1.5rem;
                    display: block;
                }

                .footer-tagline {
                    font-size: 0.95rem;
                    line-height: 1.8;
                    color: rgba(245,240,232,0.8);
                    max-width: 360px;
                }

                .footer-col h5 {
                    font-size: 0.7rem;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                    color: #C9A96E;
                    margin-bottom: 1.5rem;
                }

                .footer-col li {
                    font-size: 0.9rem;
                    margin-bottom: 0.7rem;
                    opacity: 0.85;
                }

                .footer-contact {
                    margin-top: 2rem;
                    font-size: 0.9rem;
                    line-height: 1.8;
                    opacity: 0.85;
                }

                .footer-bottom {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    padding: 1.5rem;
                    font-size: 0.75rem;
                    color: rgba(245,240,232,0.6);
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
            `}</style>

            <div className="footer-inner">

                {/* Brand */}
                <div>
                    <span className="footer-logo">MARUSH HOTEL & RESORT</span>
                    <p className="footer-tagline">
                        A refined escape set within the landscapes of Töv Province —
                        where nature, stillness, and comfort meet.
                    </p>

                    <div className="footer-contact">
                        <span>+976 9100 6969</span>
                        <span>sondorekh@gmail.com</span>
                        <span>Üdeligiin Dugan · Mongolia</span>
                    </div>
                </div>

                {/* Stay */}
                <div className="footer-col">
                    <h5>Stay</h5>
                    <ul>
                        <li>Rooms & Suites</li>
                        <li>Private Villas</li>
                        <li>Group Retreats</li>
                    </ul>
                </div>

                {/* Experience */}
                <div className="footer-col">
                    <h5>Experience</h5>
                    <ul>
                        <li>Nature & Landscape</li>
                        <li>Horse Riding</li>
                        <li>Wellness & Spa</li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Marush Hotel & Resort · Mongolia
            </div>
        </footer>
    );
}