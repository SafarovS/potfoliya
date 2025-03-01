import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

function Home() {
    const typedElement = useRef(null);

    useEffect(() => {
        // AOS animatsiya kutubxonasini ishga tushirish
        if (window.AOS) {
            window.AOS.init({ duration: 1000 });
        } else {
            console.error("AOS yuklanmadi!");
        }

        // Typed.js ni ishga tushirish
        const typedStrings = ["Web Developer", "Backent Developer", "Freelancer", "Dev ops injener"];

        const typed = new Typed(typedElement.current, {
            strings: typedStrings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        });

        // Komponent unmount bo‘lganda typed obyektini tozalash
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <main className="main">
            <section id="hero" className="hero section dark-background">
                <img src="/img/hero-bg.jpg" alt="" data-aos="fade-in" />
                <div className="container" data-aos="zoom-out" data-aos-delay="100">
                    <h2>Suhrob Safarov</h2>
                    <p>
                        I'm <span ref={typedElement}></span>
                    </p>
                    <br />
                    <a href="/resume.pdf" download className="btn btn-success p-3">
                        <i className="bi bi-download"></i> Download Resume
                    </a>
                    <div className="social-links">
                        <Link to="#"><i className="bi bi-twitter-x"></i></Link>
                        <Link to="#"><i className="bi bi-facebook"></i></Link>
                        <Link to="#"><i className="bi bi-instagram"></i></Link>
                        <Link to="#"><i className="bi bi-linkedin"></i></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
