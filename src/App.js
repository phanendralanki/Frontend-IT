
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {Button} from 'react-bootstrap';
import BasicExample from './components/Navbar';
import Footer from './components/Footer';
//different pages
import Home from './components/Home';
import Contactus from './components/Contactus';

// events page
import EngineersDay from './components/Events/EngineersDay';

// Engineer's Day Events Registration Pages
import CrazyOutput from './components/Events/EngineersRegistration/CrazyOutput';
import TechnicalQuiz from './components/Events/EngineersRegistration/TechnicalQuiz';
import PPTRegistration from './components/Events/EngineersRegistration/PPTRegistration';
import PosterPresentation from './components/Events/EngineersRegistration/PosterPresentation';

import Details from './components/Events/EngineersRegistration/Details';

function App() {

  return (
    <>
      <div className="">
        <BrowserRouter>
        <BasicExample/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EngineersDay />} />
            <Route path='/contact' element={<Contactus/>}/>
            {/* <Route path='*' element={</>}/> */}

            {/* Engineer's day events registration routes */}

            <Route path="/crazyoutputregistration" element={<CrazyOutput/>} /> 
            <Route path="/technicalQuizRegistration" element={<TechnicalQuiz/>} />
            <Route path="/pptRegistration" element={<PPTRegistration/>}/>
            <Route path="/posterPresentationRegistration" element={<PosterPresentation/>}/>
            
            <Route path="/details" element={<Details/>} />
            {/* Engineer's day events registration routes end */}



          </Routes>
        </BrowserRouter>
      </div>
     

      <Footer/>
    </>
  );
}

export default App;
