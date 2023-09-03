import React from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

const PPTRegistration = () => {

  const navigate = useNavigate();

  const postPPT = async(e) => {
    e.preventDefault();
    const regno = e.target.regno.value;
    const year = e.target.year.value;
    const branch = e.target.branch.value;

    // console.log(regno+" "+year+" "+branch);
    const ppt = {
      regno:regno,
      year:year,
      branch:branch,
    };

    //below code is to send data to server
    const response = await fetch("http://localhost:5000/post-ppt",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(ppt),
    });

    if(response.status === 200){
      // alert("Registered Successfully");
      toast.success("Registered Successfully");
      e.target.regno.value = "";
      e.target.year.value ="";
      e.target.branch.value = "";
      setTimeout(() => {
        navigate("/events");
      }, 2000);
    }else{
      toast.error("something went wrong");
      e.target.regno.value = "";
      e.target.year.value = "";
      e.target.branch.value = "";
      setTimeout(() => {
        navigate("/pptRegistration");
      }, 2000);
    }





  }

  return (
    <>
      {/* toaster */}
      <Toaster position="top-center" reverseOrder={false} />
      {/* toaster */}
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold text-center text-success mb-4">
              PPT Registration
            </h1>
            <form action="" onSubmit={postPPT}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bold"
                >
                  Registration number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="regno"
                  id="exampleInputEmail1"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="year" className="form-label fw-bold">
                  Select year
                </label>
                <select name="year" id="year" className="form-select" required>
                  <option value="2nd year">2nd year</option>
                  <option value="3rd year">3rd year</option>
                  <option value="4th year">4th year</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="branch" className="form-label fw-bold">
                  Select Branch
                </label>
                <select
                  name="branch"
                  id="branch"
                  className="form-select"
                  required
                >
                  <option value="IT">IT</option>
                  <option value="CSBS">CSBS</option>
                  <option value="CSCS">CSCS</option>
                </select>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PPTRegistration
