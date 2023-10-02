import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
export default function App() {
  return (
    <>
    <NoteState>
      <Navbar/>
      <Routes>
        <Route exact path="/" element="" />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      </NoteState>
    </>
  );
}

/* <Router>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
 </Routes>
</Router> */
