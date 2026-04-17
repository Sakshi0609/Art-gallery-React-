import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Artists from './components/Artists';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;


// import React, { Component } from "react";
// import A from "./A";

// class App extends Component {

//   render() {

//     const name = "Sakshi";
//     const role = "Fullstack Java Developer";

//     return (
//       <div>
//         <h1>Parent Component</h1>

//         <A username={name} userrole={role} />

//       </div>
//     );
//   }

// }

// export default App;