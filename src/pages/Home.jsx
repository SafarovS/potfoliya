import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Home() {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({ duration: 1000 });
        } else {
            console.error("AOS yuklanmadi!");
        }
    }, []);
    return (
       
            <main className="main">
                <section id="hero" className="hero section dark-background">

                    <img src="/img/hero-bg.jpg" alt="" data-aos="fade-in"/>

                        <div className="container" data-aos="zoom-out" data-aos-delay="100">
                            <h2>Emily Jones</h2>
                            <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Photographer</span><span className="typed-cursor typed-cursor--blink"></span></p>
                            <div className="social-links">
                                <Link to="#"><i className="bi bi-twitter-x"></i></Link>
                                <Link to="#"><i className="bi bi-facebook"></i></Link>
                                <Link to="#"><i className="bi bi-instagram"></i></Link>
                                <Link to="#"><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>

                </section>
            </main>

        
    )
}

export default Home;
