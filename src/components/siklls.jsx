import React, { useEffect, useRef, useState } from "react";
import '../assets/css/main.css'

function Siklls() {
    const skillsRef = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setVisible(true); // Sektsiya ekranga chiqsa animatsiya boshlansin
                }
            },
            { threshold: 0.5 } // 50% ekranga chiqsa ishga tushadi
        );
        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }
        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (visible) {
            document.querySelectorAll(".progress-bar").forEach((bar) => {
                bar.style.width = "0%"; // Dastlab 0% bo‘lsin
                setTimeout(() => {
                    const width = bar.getAttribute("aria-valuenow") + "%";
                    bar.style.width = width;
                }, 300); // 300ms keyin animatsiya boshlansin
            });
        }
    }, [visible]);
    return (
        <>
            <section ref={skillsRef} id="skills" className="skills section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Skills</h2>
                    <div><span>My</span> <span className="description-title">Skills</span></div>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row skills-content skills-animation">
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill"><span>React</span> <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Siklls;