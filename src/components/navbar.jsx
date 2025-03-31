import React from "react";
import '../assets/css/main.css'
import { Link, useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <Link to="/" className="logo d-flex align-items-center">

                        <img src="/img/logo.png" alt="" />
                        <h1 className="sitename">Sukhrob</h1>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                            <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
                            <li><Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>Resume</Link></li>
                            <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
                            <li><Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>Portfolio</Link></li>
                            <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" ></i>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Navbar;