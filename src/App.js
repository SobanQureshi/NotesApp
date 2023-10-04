import React from "react";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
export default function App() {
  return (
    <>
    <NoteState>
      <Navbar/>
      <Alert message={"This is alert"}/>
      <Routes>
        {/* <Route exact path="/" element="" /> */}
        <Route exact path="/" element={<Home />} />
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
