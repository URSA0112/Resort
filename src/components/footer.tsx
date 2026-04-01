export default function Footer() {
    return (
        <footer className="footer">
            <style>{`
                .footer {
                    background: radial-gradient(circle at top, #111 0%, #0a0a09 100%);
                    color: #d6d0c4;
                    padding: 6rem 1.5rem 2.5rem;
                    font-family: 'Georgia', serif;
                }

                .footer-inner {
                    max-width: 1100px;
                    margin: 0 auto;
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

                .footer-brand {
                    max-width: 360px;
                }

                .footer-logo {
                    font-size: 0.95rem;
                    letter-spacing: 0.35em;
                    color: #C9A96E;
                    margin-bottom: 1.5rem;
                    display: block;
                }

                .footer-tagline {
                    font-size: 0.95rem;
                    line-height: 1.8;
                    color: #a8a090;
                }

                .footer-col h5 {
                    font-size: 0.7rem;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                    color: #C9A96E;
                    margin-bottom: 1.5rem;
                }

                .footer-col ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-col li {
                    font-size: 0.9rem;
                    color: #b8b1a4;
                    margin-bottom: 0.8rem;
                    opacity: 0.8;
                }

                .footer-contact {
                    margin-top: 2rem;
                    font-size: 0.9rem;
                    color: #b8b1a4;
                    line-height: 1.8;
                }

                .footer-contact span {
                    display: block;
                }

                .footer-bottom {
                    margin-top: 4rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(201,169,110,0.12);
                    text-align: center;
                    font-size: 0.75rem;
                    color: #7e786b;
                    letter-spacing: 0.05em;
                }
            `}</style>

            <div className="footer-inner">

                {/* Brand */}
                <div className="footer-brand">
                    <span className="footer-logo">MARUSH HOTEL & RESORT</span>

                    <p className="footer-tagline">
                        A quiet retreat set within the open landscapes of Töv Province —
                        where simplicity, space, and comfort come together in refined balance.
                    </p>

                    {/* Minimal Contact (NOT clickable heavy) */}
                    <div className="footer-contact">
                        <span>+976 9100 6969</span>
                        <span>sondorekh@gmail.com</span>
                        <span>Üdeligiin Dugan · Töv Province · Mongolia</span>
                    </div>
                </div>

                {/* Experience */}
                <div className="footer-col">
                    <h5>Experience</h5>
                    <ul>
                        <li>Nature & Landscape</li>
                        <li>Horse Riding</li>
                        <li>Wellness & Spa</li>
                        <li>Seasonal Retreats</li>
                    </ul>
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

            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                © 2026 Marush Hotel & Resort · Mongolia
            </div>
        </footer>
    );
}