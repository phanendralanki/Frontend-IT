import React from 'react';
import './Styles/HomePage.css';
import { OverlayTrigger,Tooltip} from 'react-bootstrap';
function Home() {
  return (
    <>
      <div class="container mt-5">
        <div className="row">
          <div className="col-lg-8 hero-text mt-3 mt-lg-0 text-center text-lg-start order-lg-0 order-1 col-12 col-md-12 d-flex flex-column justify-content-center align-lg-start">
            <h1 class="it-text animate__bounceIn">
              Department Of Information & Technology
            </h1>
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
            <div className="text-sm-center text-lg-start">
              <a href="/events">
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => <Tooltip {...props}>Events</Tooltip>}
                  placement="top"
                >
                  <button
                    className="homepage-button type1"
                    data-bs-toggle="tooltip"
                    data-bs-title="Know More"
                  >
                    Events
                  </button>
                </OverlayTrigger>
              </a>
            </div>
          </div>
          {/* banner section  */}
          <div className="col-12 col-md-12 col-lg-4 mx-auto">
            <img src="./images/ITLogo.jpg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home