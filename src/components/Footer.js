import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-bg">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12 ft-1">
            <h3>
              <span>IT Department</span>
              <div className="footer-underline"></div>
            </h3>
            <p className="fw-bold">
              &quot; In the heart of technology,lies the pulse of progress.
              &quot;
            </p>

            <div className="footer-icons">
              <a href="https://swarnandhra.ac.in/">
                <i className="fa-solid fa-house"></i>
              </a>
              <a href="https://www.linkedin.com/school/swarnandhra-college-of-engineering-&-technology-narasapur.-pin--534275-cc-a2-/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/swarnandhra.college/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-12 ft-2 mt-2">
            <h5>Quick Links</h5>

            <ul>
              <li className="nav-item">
                <a href="/" className="">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="/events" className="">
                  Events
                </a>
              </li>

              <li className="nav-item">
                <a href="/contact" className="">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-4 col-12 ft-3 mt-2">
            <h5>Contact Info</h5>

            <p>
              <a href="tel:7013634111">
                <i className="fa-solid fa-phone"></i>
                +123456789
              </a>
            </p>
            <p>
              <a href="mailto:ithod@swarnandhra.com">
                <i className="fa-solid fa-envelope"></i>
                swarnandhraITDEPT@gmail.com
              </a>
            </p>
            <p>
              <i className="fa-solid fa-paper-plane"></i>
              Seetharampuram,Narsapur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
