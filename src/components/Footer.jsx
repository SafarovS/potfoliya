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
                    <p>Bizning ijtimoiy tarmoqlar</p>

                    {/* Social links */}
                    <div className="social-links d-flex justify-content-center">
                        <a href="https://github.com/SafarovS" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100081559261261" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/suhr0b_safarov/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://t.me/Safarov_suhrob_pravetroom" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-telegram"></i>
                        </a>
                        <a href="https://wa.me/998972907899" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        <a href="https://x.com/sukhrob_sa64833" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sukhrob2024@gmail.com&su=Taklif" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-envelope-at-fill"></i>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="container">
                        <div className="copyright">
                            <span>Copyright &copy;{new Date().getFullYear()}</span> <strong className="px-1 sitename">Personal</strong> <span>All Rights Reserved</span>
                        </div>
                        <div className="credits">
                            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">ReactMade</a>
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