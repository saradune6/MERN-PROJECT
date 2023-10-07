import React from "react";
import { BrowserRouter as O, Routes, Route } from "react-router-dom";
import "../src/index.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";

export const App = () => {
  return (
    <>
      <O>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Errorpage />} />
        </Routes>
      </O>
    </>
  );
};
export default App;
