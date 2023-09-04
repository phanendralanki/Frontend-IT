import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import toast,{Toaster } from "react-hot-toast";

const TechnicalQuiz = () => {

  const navigate = useNavigate();
  const [regno, setRegno] = useState("");

   const handleRegnoChange = (e) => {
     setRegno(e.target.value);
   };


  const postQuiz = async(e)=>{
    e.preventDefault();
    const regno = e.target.regno.value;
    const branch = e.target.branch.value;
    const year = e.target.year.value;

    const regnoPattern = /^[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{4}$/;

    if (!regnoPattern.test(regno)) {
      toast.error("Invalid registration number format");
      return;
    }
    // console.log(regno+" "+branch+" "+year);

    //to store the data in a variable
    const quiz = {
      regno:regno,
      branch:branch,
      year:year,
    };

    //below code is to send the data to the server
    const response = await fetch("https://itcsbs-b10k.onrender.com/post-quiz", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(quiz),
    });

    console.log(response);
     if (response.status === 200) {
       // alert("registered successfully");
       toast.success("Registered successfully");
       e.target.regno.value = "";
       e.target.year.value = "";
       e.target.branch.value = "";

       setTimeout(() => {
         navigate("/events");
       }, 2000);
     } else if(response.status === 400){
        toast.error("Already Registered");
        e.target.regno.value = "";
        e.target.year.value = "";
        e.target.branch.value = "";
     }else {
       toast.error("Something Went Wrong");
       e.target.regno.value = "";
       e.target.year.value = "";
       e.target.branch.value = "";

       setTimeout(() => {
         navigate("/events");
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
              TechnicalQuiz Registration
            </h1>
            <form action="" onSubmit={postQuiz}>
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
                  id="exampleInput"
                  value={regno}
                  onChange={handleRegnoChange}
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
};

export default TechnicalQuiz;
