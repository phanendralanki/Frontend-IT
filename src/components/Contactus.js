import React from 'react'
import './Styles/ContactUs.css';
const Contactus = () => {
  return (
    <>
      <div className="form-container">
        <div className="wrapper">
          <h2>Contact us</h2>
          <div className="form-section">
            {/* left side */}
            <div className="form-details">
              <ul>
                <li>
                  <div className="icons">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="content">
                    <strong>Location: </strong>
                    <p>seetharampuram,narsapur</p>
                  </div>
                </li>
                <li>
                  <div className="icons">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="content">
                    <strong>Email: </strong>
                    <p>swarnandhra.ac.in@gmail.com</p>
                  </div>
                </li>
                <li>
                  <div className="icons">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="content">
                    <strong>Call: </strong>
                    <p>+91898385383</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* right side */}
            <div className="input-field">
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                    className="form-control"
                  />
                  <span className="form-label">Name</span>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name=""
                    id=""
                    required
                    className="form-control"
                  />
                  <span className="form-label">Email</span>
                </div>

                <div className="form-group">
                  <textarea name="" id="" cols="30" rows="10" required className='form-control'></textarea>
                  <span className="form-label">message</span>
                </div>

                <button type='button'>Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
