import React from 'react';
import { Toaster,toast } from 'react-hot-toast';
const EngineersDay = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="event-title">
        <h1 className="event-title-heading text-center cssFont mt-10 fs-7">
          Engineer's Day Events TimeLine
        </h1>
      </div>

      {/*Start - event timelines */}

      <div className="timeline">
        <div className="timeline-container left-container">
          <img src="images/pptLogo.png" alt="" className="timeline-logo" />
          <div className="text-box">
            <h2 className="time-line-heading">PPT Presentations</h2>
            <small>9:30 - 11:00</small>
            <p>only one or two members in a team - Technical Event</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="timeline-container right-container">
          <img src="images/poster.png" alt="" className="timeline-logo" />
          <div className="text-box">
            <h2 className="time-line-heading">Poster Presentation</h2>
            <small>11:00 - 12:30</small>
            <p>only one or two members in a team - Technical Event</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="timeline-container left-container">
          <img src="images/quiz.png" alt="" className="timeline-logo" />
          <div className="text-box">
            <h2 className="time-line-heading">Quiz</h2>
            <small>1:30 - 3:00</small>
            <p>Four members for each team - Technical Event</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="timeline-container right-container">
          <img src="images/crazyOutput.png" alt="" className="timeline-logo" />
          <div className="text-box">
            <h2 className="time-line-heading">Crazy Output</h2>
            <small>3:00 - 4:00</small>
            <p>only one participant can participate no teams</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
      {/* END - event timelines */}

      {/* Start - event cards*/}

      <div className="event-registration-title">
        <h1 className="text-center">Event's Registrations</h1>
      </div>

      {/* Technical Quiz card */}
      <div className="event-container">
        <div className="item-container">
          <div className="img-container">
            <img src="./images/img1.jpg" alt="Eventimage" />
          </div>

          <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
              <p className="title">Technical Quiz</p>
              <div className="separator"></div>
              <p className="info">Each team should have 4 participants</p>
              <p className="price">Team Event</p>

              <div className="additional-info">
                {/* <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  Grand Central Terminal
                </p>
                <p className="info">
                  <i className="far fa-calendar-alt"></i>
                  Sat, Sep 19, 10:00 AM EDT
                </p> */}

                <p className="info description">
                  Topics related to Computer Science and its allied
                  fileds,emerging technologies,new trends etc. <br />
                  <span>
                    Round-1 is paper based exam (team wise) for
                    selecting/shortlist the participating teams.
                  </span>
                  <br />
                  <span>Round-2 is Quiz (Oral/face to face)</span>
                </p>
              </div>
            </div>

            <button
              className="action"
              onClick={() => {
                toast.error("Registrations Closed");
              }}
            >
              Register now
            </button>
          </div>
        </div>

        {/* END OF Technical Quiz card */}

        {/* Poster Presentation Card */}

        <div className="item-container">
          <div className="img-container">
            <img src="./images/img2.jpg" alt="Eventimage" />
          </div>

          <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
              <p className="title">Poster Presentation</p>
              <div className="separator"></div>
              <p className="info">Each team maximum of 2 participants</p>
              <p className="price">Team Event</p>

              <div className="additional-info">
                {/* <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  245 W 52nd St, New York
                </p>
                <p className="info">
                  <i className="far fa-calendar-alt"></i>
                  Sat, Sep 19, 10:00 AM EDT
                </p> */}

                <p className="info description">
                  Topics related to any engineering field,emerging
                  technologies,new trends,issues of their importance like
                  <span style={{ color: "red" }}>
                    {" "}
                    Chandrayan-3,Aditya-L1 etc .
                  </span>
                  <span>
                    Poster to be exhibited and have to give necessary
                    explanation to the jury members.
                  </span>
                </p>
              </div>
            </div>
            {/* <a href="/posterPresentationRegistration"> */}
              <button
                className="action"
                onClick={() => {
                  toast.error("Registrations Closed");
                }}
              >
                Register now
              </button>
            {/* </a> */}
          </div>
        </div>

        {/* END OF Poster Presentation Card */}

        {/* Start of  Power Point presentation */}
        <div className="item-container">
          <div className="img-container">
            <img
              src="./images/ppt.jpg"
              alt="Eventimage"
              style={{ objectFit: "cover", height: "400px" }}
            />
          </div>

          <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
              <p className="title">PPT Presentation</p>
              <div className="separator"></div>
              <p className="info">Each Team maximum of 2 participants</p>
              <p className="price">Team Event</p>

              <div className="additional-info">
                {/* <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  245 W 52nd St, New York
                </p>
                <p className="info">
                  <i className="far fa-calendar-alt"></i>
                  Sat, Sep 19, 10:00 AM EDT
                </p> */}

                <p className="info description">
                  Topics related to Computer Science and its allied
                  fileds,emerging technologies,new trends, multi-disciplinary
                  engineering branches etc.
                  <span>Duration is 8 to 10 minutes</span>
                </p>
              </div>
            </div>
            {/* <a href="/pptRegistration"> */}
              <button
                className="action"
                onClick={() => {
                  toast.error("Registrations Closed");
                }}
              >
                Register now
              </button>
            {/* </a> */}
          </div>
        </div>

        {/* End of power point presentation */}

        {/* Start of crazy output  */}
        <div className="item-container">
          <div className="img-container">
            <img
              src="./images/crazy.avif"
              alt="Eventimage"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
              <p className="title">Crazy Output</p>
              <div className="separator"></div>
              <p className="info">only one Member</p>
              <p className="price">Individual Event</p>

              <div className="additional-info">
                {/* <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  LAB-1
                </p>
                <p className="info">
                  <i className="far fa-calendar-alt"></i>
                  Sat, Sep 19, 10:00 AM EDT
                </p> */}

                <p className="info description">
                  Pre-prepared program in python is to be written and executed
                  to show the output. The output can be any pattern.{" "}
                  <span style={{ color: "red" }}>
                    Ex:Any picture or scenario.
                  </span>
                  <br />
                  <br />
                  <span>Duration-20 minutes</span>
                </p>
              </div>
            </div>
            {/* <a href="/crazyoutputregistration"> */}
              <button
                className="action"
                onClick={() => {
                  toast.error("Registrations Closed");
                }}
              >
                Register now
              </button>
            {/* </a> */}
          </div>
        </div>
      </div>
      {/* End of crazy output card */}

      {/* End - event cards */}
    </>
  );
}

export default EngineersDay
