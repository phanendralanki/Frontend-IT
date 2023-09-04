import React from 'react'
import {useState,useEffect} from "react";
import toast, { Toaster } from "react-hot-toast";
import {AiFillDelete} from 'react-icons/ai';
// import {MdOutlineEdit} from 'react-icons/md';
const Details = () => {
  /*
  =======================
   Technical Quiz Code
  ========================
  */
  const [quizs, setQuiz] = useState([]);

  useEffect(() => {
    getQuiz();
  }, [quizs]);

  const getQuiz = async () => {
    const response = await fetch("https://itcsbs-b10k.onrender.com/get-quiz");
    const data = await response.json();

    // console.log(data);
    // console.log(data.getQuiz);
    setQuiz(data.getQuiz);
  };

  const deleteQuiz = async(id) =>{
      const response = await fetch(
        `https://itcsbs-b10k.onrender.com/delete-quiz/${id}`,
        {
          method: "DELETE",
        }
      );
      if(response.status === 200){
          toast.success('deleted Successfully');
      }else{
        toast.error("Something went wrong");
      }
  }

  // const updateQuiz = async(id) => {
  //  const response = await fetch(`http://localhost:5000/update-quiz/${id}`,{
  //   method:"PUT",
  //   headers:{
  //     "Content-type":"application/json"
  //   },
  //   body: JSON.stringify({regno,branch,year}),
  //  });
  //  if(response.status === 200){
  //   toast.success("updated Successfully");
  //   navigate("/details");
    
  //  }else{
  //   toast.error("something went wrong");
  //  }
  // }

  /*
  ===========================
   END - Technical Quiz Code
  ===========================
  */

  /*
    =========================
    Poster Presentation Code
    ==========================
  */

  const[posters, setPosters] = useState([]);

   useEffect(() => {
     getPosters();
   }, [posters]);

   const getPosters = async () => {
     const response = await fetch(
       "https://itcsbs-b10k.onrender.com/get-poster"
     );
     const data = await response.json();
     setPosters(data.getPoster);
   };

   const deletePoster = async(id)=>{
    const response = await fetch(
      `https://itcsbs-b10k.onrender.com/delete-poster/${id}`,
      {
        method: "DELETE",
      }
    );
    if(response.status===200){
      toast.success("Deleted Successfully");
    }else{
      toast.error("something went wrong");
    }

   }
  
  /*
    ===============================
    END - Poster Presentation Code
    ===============================
  */

  /* 
    ==========================
     Start - PPT Presentation
    ==========================
    */

  const [ppts, setppt] = useState([]);

  useEffect(() => {
    getppt();
  }, [ppts]);

  const getppt = async () => {
    const response = await fetch("https://itcsbs-b10k.onrender.com/get-ppt");
    const data = await response.json();

    // console.log(data);
    // console.log(data.getQuiz);
    setppt(data.getppt);
  };

  const deletePPT = async(id)=>{
    const response = await fetch(
      `https://itcsbs-b10k.onrender.com/delete-ppt/${id}`,
      {
        method: "DELETE",
      }
    );

    if(response.status === 200){
      toast.success("Delete successfully");
    }else{
      toast.error("something went wrong");
    }

  }
  /* 
    ==========================
     End - PPT Presentation
    ==========================
    */

  /*
  =========================
    Start - Crazy Output
  =========================
  */
  const [crazies, setCrazy] = useState([]);

  useEffect(() => {
    getCrazy();
  }, [crazies]);

  const getCrazy = async () => {
    const response = await fetch("https://itcsbs-b10k.onrender.com/get-crazy");
    const data = await response.json();

    // console.log(data);
    // console.log(data.getQuiz);
    setCrazy(data.getCrazy);
  };

  const deleteCrazy = async(id)=>{
    const response = await fetch(
      `https://itcsbs-b10k.onrender.com/delete-crazy/${id}`,
      {
        method: "DELETE",
      }
    );
    if(response.status===200){
      toast.success("Deleted Successfully");
    }else{
      toast.error("Deleted Successfully");
    }
  }
    
  /*
  =========================
    END - Crazy Output
  =========================
  */

  return (
    <>
      {/* toaster */}
      <Toaster position="top-center" reverseOrder={false} />
      {/* toaster */}

      <h1 className="mt-5 text-center fw-bold text-primary">Technical Quiz</h1>
      <div className="d-flex vh-50  justify-content-center">
        <div className="d-flex w-100 justify-content-center">
          <div className="w-50 bg-white rounded p-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Reg no</th>
                  <th>Branch</th>
                  <th>Year</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {quizs &&
                  quizs.map((quiz) => {
                    return (
                      <tr key={quiz._id}>
                        <td>{quiz.regno}</td>
                        <td>{quiz.branch}</td>
                        <td>{quiz.year}</td>
                        <td>
                          <AiFillDelete
                            className="text-secondary"
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteQuiz(quiz._id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* table 2 */}
      {/* Poster Presentation */}
      <h1 className="text-center fw-bold text-danger">Poster Presentation</h1>
      <div className="mt-2 d-flex vh-50  justify-content-center">
        <div className="d-flex w-100 justify-content-center">
          <div className="w-50 bg-white rounded p-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Reg no</th>
                  <th>Branch</th>
                  <th>Year</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posters && posters.map((poster) => {
                  return (
                    <tr key={poster._id}>
                      <td>{poster.regno}</td>
                      <td>{poster.branch}</td>
                      <td>{poster.year}</td>
                      <td> 
                        <AiFillDelete
                          className="text-secondary"
                          style={{ cursor: "pointer" }}
                          onClick={() => deletePoster(poster._id)}
                        />
                      
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Poster Presentation END */}

      {/* table-3 */}
      {/* PPT Presentation starts */}
      <h1 className="text-center fw-bolder text-success">PPT Presentation</h1>
      <div className="mt-2 d-flex vh-50  justify-content-center">
        <div className="d-flex w-100 justify-content-center">
          <div className="w-50 bg-white rounded p-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Reg no</th>
                  <th>Branch</th>
                  <th>Year</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ppts && ppts.map((ppt) => {
                  return (
                    <tr key={ppt._id}>
                      <td>{ppt.regno}</td>
                      <td>{ppt.branch}</td>
                      <td>{ppt.year}</td>
                      <td>
                        <AiFillDelete
                          className="text-secondary"
                          style={{ cursor: "pointer" }}
                          onClick={() => deletePPT(ppt._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* PPT Presentation End */}

      {/* table-4 */}
      <h1 className="text-center fw-bolder text-warning">Crazy Output</h1>
      <div className="mt-2 d-flex vh-50 justify-content-center">
        <div className="d-flex w-100 justify-content-center">
          <div className="w-50 bg-white rounded p-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Reg no</th>
                  <th>Branch</th>
                  <th>Year</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {crazies && crazies.map((crazy) => {
                  return (
                    <tr key={crazy._id}>
                      <td>{crazy.regno}</td>
                      <td>{crazy.branch}</td>
                      <td>{crazy.year}</td>
                      <td>
                        <AiFillDelete
                          className="text-secondary"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteCrazy(crazy._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details
