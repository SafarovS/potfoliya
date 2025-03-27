import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
function Portfoliya() {
  const isotopeContainer = useRef(null);
  const [isotope, setIsotope] = useState(null);
  const [filter, setFilter] = useState("*");

  useEffect(() => {
    if (isotopeContainer.current) {
      imagesLoaded(isotopeContainer.current, function () {
        const iso = new Isotope(isotopeContainer.current, {
          itemSelector: ".isotope-item",
          layoutMode: "masonry",
          filter: filter,
          sortBy: "original-order",
        });
        setIsotope(iso);
      });
    }
  }, []);

  useEffect(() => {
    if (isotope) {
      isotope.arrange({ filter: filter });
    }
  }, [filter, isotope]);

  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Portfolio</h1>
                <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Portfolio</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="portfolio" className="portfolio section">
        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="portfolio-filters isotope-filters">
              {["*", "filter-app", "filter-product", "filter-branding", "filter-books"].map((category, index) => (
                <li key={index}
                  data-filter={category === "*" ? "*" : `.${category}`}
                  className={filter === (category === "*" ? "*" : `.${category}`) ? "filter-active" : ""}
                  onClick={() => setFilter(category === "*" ? "*" : `.${category}`)}>
                  {category === "*" ? "All" : category.replace("filter-", "").toUpperCase()}
                </li>
              ))}
            </ul>
            <div ref={isotopeContainer} className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                <div className="portfolio-content">
                  <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <a href="portfolio-details.html" className="details-link"><i className="bi bi-box-arrow-up-right"></i></a>
                    <a href="/img/portfolio/product-1.jpg" className="glightbox preview-link"><i className="bi bi-arrow-down-square"></i></a>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h5 className="fw-bold">Portfolio Free Webflow Template</h5>
                  <p>This is a professional portfolio template with a modern design and easy customization.</p>
                  <div className="project-footer">
                    <span><i className="bi bi-star"></i> 98k</span>
                    <span><i className="bi bi-eye"></i> 250k</span>
                    <span><i className="bi bi-arrow-down-square"></i> 500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfoliya;