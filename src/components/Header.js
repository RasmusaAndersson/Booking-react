import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const logo = 'Lexicon.jpg';
    const links = [
        { text: 'Home', href: '/' },
        { text: 'Booking List', href: '/booking-list' },
        { text: 'Cancel Booking', href: '/cancel-booking' },
        { text: 'About', href: '/about' }
    ];

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width={75} alt="Logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <Link className="nav-link" to={link.href}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;