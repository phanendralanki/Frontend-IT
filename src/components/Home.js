import React from 'react'
import { OverlayTrigger,Tooltip} from 'react-bootstrap';
function Home() {
  return (
    <>
      {/* <section className="bg-main hero-section">
        <div className="container">
          <div className="row mb-5">
            <div
              className="mt-3 mt-lg-0 text-center text-lg-start
            order-lg-0 order-1 col-12 col-md-12 col-lg-6 d-flex
            flex-column justify-content-center  align-lg-start"
            >
              <h1 className="text-capitalize fw-bolder">Department of IT-CSE</h1>
              <span className="waviy">
                
                <span style={{ "--i": "1" }}>&#40;</span>
                <span style={{ "--i": "2" }}>C</span>
                <span style={{ "--i": "3" }}>S</span>
                <span style={{ "--i": "4" }}>&#38;</span>
                <span style={{ "--i": "5" }}>B</span>
                <span style={{ "--i": "6" }}>S</span>
                <span style={{ "--i": "7" }}>&#41;</span>
              </span>

              <p className="mt-3 mb-5 para-width text-light-grey">
                The synergy between dedicated faculty and committed students,
                guided by principles, creates a thriving academic community that
                drives technological innovation and prepares the next generation
                of leaders in the field.
              </p>

              <div className="text-center text-md-start w-100 contactus-bt">
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

        
            <div className="col-12 col-md-12 col-lg-6 mx-auto">
              <div className="text-center text-md-end mb-5">
                <img
                  className="hero-img-section"
                  src="./images/ITLogo.jpg"
                  alt=""
                />
              </div>
            </div>

          </div>
        </div>
      </section> */}

      <main>
        <div className="hero-container">
          <img src="./images/ITLogo.jpg" alt="" className='img-fluid'/>
          <div className="hero-text">
            <h1>Department Of Information & Technology</h1>
            <p className="waviy">
              <span style={{ "--i": "1" }}>I</span>
              <span style={{ "--i": "2" }}>T</span>
              <span style={{ "--i": "3" }}>-</span>
              <span style={{ "--i": "4" }}>C</span>
              <span style={{ "--i": "5" }}>S</span>
              <span style={{ "--i": "6" }}>-</span>
              <span style={{ "--i": "7" }}>B</span>
              <span style={{ "--i": "8" }}>S</span>
            </p>
            <div className='d-flex justify-content-center'>
              <a href="/contact">
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => <Tooltip {...props}>contact now</Tooltip>}
                  placement="top"
                >
                  <button
                    className="contact-button text-capitalize"
                    data-bs-toggle="tooltip"
                    data-bs-title="Know More"
                  >
                    Contact now
                  </button>
                </OverlayTrigger>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home