import React, { useEffect } from "react";
import "../assets/css/main.css";
import { Link, useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();

    useEffect(() => {
        const preloader = document.querySelector("#preloader");
        if (preloader) {
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500); // 0.5 soniya ichida yo‘qoladi
        }
    }, []);

    return (
        <>
            {/* Preloader */}
            <div id="preloader">
                <div className="spinner"></div>
            </div>

            <footer id="footer" className="footer dark-background">
                <div className="container">
                    <h3 className="sitename">Personal</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>

                    {/* Social links */}
                    <div className="social-links d-flex justify-content-center">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://skype.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-skype"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="container">
                        <div className="copyright">
                            <span>Copyright</span> <strong className="px-1 sitename">Personal</strong> <span>All Rights Reserved</span>
                        </div>
                        <div className="credits">
                            <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    );
}

export default Footer;