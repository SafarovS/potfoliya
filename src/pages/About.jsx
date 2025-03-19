import { useEffect } from "react";
import { Link } from "react-router-dom";
import Stats from "../components/aboutstats.jsx";
import Siklls from "../components/siklls.jsx";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Sahifani tepaga scroll qilish (ixtiyoriy)
  }, []);
  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>About</h1>
                <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">About</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <div className="hexagon-border">
                <div className="hexagon">
                  <img src="/img/profile-img.png" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 content">
              <h2>Full Stack Web Deweloper</h2>
              <p className="fst-italic py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>30 May 1999</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+998 97 290 78 99</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Karshi Uzbekistan</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sukhrob2024@gmail.com&su=Taklif" target="_blank"> <span>sukhrob2024@gmail.com</span></a></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <Siklls />
    </>
  )
}

export default About;