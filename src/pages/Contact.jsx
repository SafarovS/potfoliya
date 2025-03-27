import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Contact</h1>
                <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Contact</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-md-6">
              <a href="https://maps.app.goo.gl/TUHjmo284nBi9dC48" target="_blank">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                  <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Uzbekistan Karshi </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <a href="tel:+998972907899">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <i className="icon bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Me</h3>
                    <p>+998 97 290 78 99</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sukhrob2024@gmail.com&su=Taklif" target="_blank" rel="noopener noreferrer">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <i className="icon bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>sukhrob2024@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                <i className="icon bi bi-share flex-shrink-0"></i>
                <div>
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="https://x.com/sukhrob_sa64833" target="_blank"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100081559261261" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/suhr0b_safarov/" target="_blank"><i className="bi bi-instagram"></i></a>
                    <a href="https://t.me/Safarov_suhrob_pravetroom" target="_blank"><i className="bi bi-telegram"></i></a>
                    <a href="https://wa.me/998972907899" target="_blank"><i className="bi bi-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="600">
            <div className="row gy-4">
              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
              </div>
              <div className="col-md-6 ">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
              </div>
              <div className="col-md-12">
                <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact;