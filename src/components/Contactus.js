import React from 'react'

const Contactus = () => {
  return (
    <>
      <div className="contact-container">
        <form action="">
          <h2 className="contact-heading">Contact us</h2>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your name"
            className="input-text"
          />
          <input type="text" placeholder="Enter Email" className="input-text" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Registration number"
            className="input-text"
          />

          <textarea
            name=""
            id="message"
            rows="4"
            placeholder="write something"
            className="input-text"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default Contactus
