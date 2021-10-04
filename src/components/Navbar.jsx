import { React, useState } from 'react'
import { ReactComponent as LogoIcon } from "../assets/ho_logo_nav.svg";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="nav">
            <div className="nav__container">
                <Link to="/"><LogoIcon className="nav__logo" /></Link>
                <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span />
                    <span />
                    <span className="zero-margin" />
                </div>
                <div className="navmenu">
                    <Link to="/how" className="navmenu__link">How It Works</Link>
                    <Link to="/about" className="navmenu__link" style={{ marginRight: 32 }}>About</Link>
                    <Link to="/" className="navmenu__button">Get Started</Link>
                </div>
            </div>
            <div className={`navmenu-mobile ${isMenuOpen ? "open" : ""}`}>
                <Link to="/how" className="navmenu__link-mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>How It Works</Link>
                <Link to="/about" className="navmenu__link-mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>About</Link>
            </div>
        </div>
    )
}

export default Navbar
