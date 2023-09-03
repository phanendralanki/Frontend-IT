import React from 'react'
import { OverlayTrigger,Tooltip} from 'react-bootstrap';
function Home() {
  return (
    <>
      <section className="bg-main hero-section">
        <div className="container">
          <div className="row mb-5">
            <div className="mt-3 mt-lg-0 text-center text-lg-start order-lg-0 order-1 col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-lg-start">
              <h1 className="text-capitalize fw-bolder text-black custom-heading">
                Department of IT-CS
                <span className="waviy">
                  {/* CyberSecurity &amp; BusinessSystem */}
                  <span style={{ "--i": "1" }}>&#40;</span>
                  <span style={{ "--i": "2" }}>C</span>
                  <span style={{ "--i": "3" }}>S</span>
                  <span style={{ "--i": "4" }}>&#38;</span>
                  <span style={{ "--i": "5" }}>B</span>
                  <span style={{ "--i": "6" }}>S</span>
                  <span style={{ "--i": "7" }}>&#41;</span>
                </span>
              </h1>
              <p className="mt-3 mb-3 para-width banner-text fw-semibold">
                &quot; In the heart of technology,lies the pulse of progress.
                &quot;
              </p>

              <div className="text-center text-lg-start">
                <a href="/contact">
                  <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props}>contact now</Tooltip>
                    )}
                    placement="top"
                  >
                    <button
                      className="text-capitalize btn btn-primary px-5 py-2"
                      data-bs-toggle="tooltip"
                      data-bs-title="Know More"
                    >
                      Contact us
                    </button>
                  </OverlayTrigger>
                </a>
              </div>
            </div>

            {/* home page image */}
            <div className="order-lg-1 order-0 col-12 col-md-12 col-lg-6">
              <div className="text-center text-md-end mb-5">
                <img
                  className="img-fluid banner-img"
                  src="images/ITLogo.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home