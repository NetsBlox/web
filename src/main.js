import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../public/index.css";

import Navbar from "./navbar.js";
import Footer from "./footer.js";
import AICamp from "./pages/aicamp.js";
import BeatBlox from "./pages/beatblox.js";
import Curriculum from "./pages/curriculum.js";
import Cybersecurity from "./pages/cybersecurity.js";
import Home from "./pages/home.js";
import People from "./pages/people.js";
import PhoneIoT from "./pages/phoneiot.js";
import Projects from "./pages/projects.js";
import PyBlox from "./pages/pyblox.js";
import Research from "./pages/research.js";
import RoboScape from "./pages/roboscape.js";
import ROCCEM from "./pages/roccem.js";
import Wildlife from "./pages/wildlife.js";
import Privacy from "./pages/privacy.js";
import Terms from "./pages/terms.js";

const MyApp = () => {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/web/' : "/"}>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/aicamp" element={<AICamp/>}/>
        <Route path="/beatblox" element={<BeatBlox/>}/>
        <Route path="/curriculum" element={<Curriculum/>}/>
        <Route path="/cybersecurity" element={<Cybersecurity/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/phoneiot" element={<PhoneIoT/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/pyblox" element={<PyBlox/>}/>
        <Route path="/research" element={<Research/>}/>
        <Route path="/roboscape" element={<RoboScape/>}/>
        <Route path="/roccem" element={<ROCCEM/>}/>
        <Route path="/wildlife" element={<Wildlife/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("mainDiv"));
root.render(<MyApp/>);
