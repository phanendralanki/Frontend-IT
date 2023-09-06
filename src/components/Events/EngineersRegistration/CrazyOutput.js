import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from "react-hot-toast";
const CrazyOutput = () => {

   const navigate = useNavigate();

   const [regno, setRegno] = useState("");
   const [mobile,setMobile] = useState("");

   const handleRegnoChange = (e) => {
    setRegno(e.target.value);
  };

  const handleMobile = (e) =>{
    setMobile(e.target.value);
  };


  const postCrazy = async(e) =>{
    e.preventDefault();
    const regnoPattern = /^[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{4}$/;
    const mobPattern = /^[0-9]{10}$/;


    const regno = e.target.regno.value;
    const mobile = e.target.mobile.value;
    const year = e.target.year.value;
    const branch = e.target.branch.value;


    if (!regnoPattern.test(regno)) {
      toast.error("Invalid registration number");
      return;
    }

    if(!mobPattern.test(mobile)){
      toast.error("Invalid mobile number");
      return;
    }

    
    // console.log(regno+" "+year+" "+branch);
    //to store the data in a variable
    const crazy = {
      regno:regno,
      mobile:mobile,
      year:year,
      branch:branch,
    };

    //below code is to send the data to the backend server
    const response = await fetch(
      "https://itcsbs-b10k.onrender.com/post-crazy",
      // "http://localhost:5000/post-crazy",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(crazy),
      }
    );

    if(response.status === 200){
      // alert("registered successfully");
      toast.success("Registered successfully");
      e.target.regno.value="";
      e.target.mobile.value = "";
      e.target.year.value="";
      e.target.branch.value="";

      setTimeout(()=>{
        navigate("/events");
      },2000);

    }else if(response.status === 400){
      toast.error("Already Registered with this registration number");
     
    }else{
      toast.error('something went wrong');
     
    }
  }

  return (
    <>
      {/* toaster */}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold text-center text-success mb-4">
              CrazyOutput Registration
            </h1>
            <form action="" onSubmit={postCrazy}>
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
                  value={regno}
                  onChange={handleRegnoChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bold"
                >
                  Mobile number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  id="exampleInputEmail1"
                  value={mobile}
                  onChange={handleMobile}
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

export default CrazyOutput
