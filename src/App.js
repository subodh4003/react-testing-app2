

import './App.css';


import React from 'react';
// import {
//   BrowserRouter,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";


// import About from './components/About';

import Navbar from './components/Navbar1';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

 {/* <BrowserRouter> */}
 <Navbar title="subodh"/>
 <div className="container my-5">
      {/* <Routes>
        <Route path="/" element={ } />
      </Routes> */}
      <TextForm heading="Enter your Text here...."/>
      {/* <Routes>
        <Route path="/about" element={} />
      </Routes> */}
      {/* <About /> */}
      </div>
    {/* </BrowserRouter> */}


  </>
  );
}

export default App;
