export default function Header() {
    return (
        <>
            <nav>
                <a className="nav-logo" href="#">
                    MARUSH <span>resort</span>
                </a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#accommodations">Stays</a></li>
                    <li><a href="#services">Services</a></li>
                    {/* <li><a href="#experiences">Experiences</a></li> */}
                    <li><a href="#location">Location</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#contact" className="nav-cta">Reserve Now</a>
            </nav>
        </>
    )
}