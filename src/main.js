/* Copyright G. Hemingway, @2024 - All rights reserved */
"use strict";

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../public/index.css";

import Home from "./pages/home.js";
import NavBar from "./pages/navbar.js";
import Projects from "./pages/projects.js";
import Footer from "./pages/footer.js";
import PhoneIoT from "./pages/phoneiot.js";
import CurriculumPage from "./pages/curriculum.js";
import PyBloxPage from "./pages/pyblox.js";
import RoboScapePage from "./pages/roboscape.js";
import LearnPage from "./pages/learn_page.js";
import Beatblox from "./pages/beatblox.js";
import Roccem from "./pages/roccem.js";
import WildlifePage from "./pages/wildlife.js";
import AICamp from "./pages/aicamp.js";
import People from "./pages/people.js";
import Cybersecurity from "./pages/cybersecurity.js";
import Research from "./pages/research.js";

const MyApp = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/web/' : "/"}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/phoneiot" element={<PhoneIoT/>}/>
        <Route path="/curriculum" element={<CurriculumPage/>}/>
        <Route path="/pyblox" element={<PyBloxPage/>}/>
        <Route path="/roboscape" element={<RoboScapePage/>}/>
        <Route path="/cybersecurity" element={<Cybersecurity/>}/>
        <Route path="/learn" element={<LearnPage/>}/>
        <Route path="/beatblox" element={<Beatblox/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/roccem" element={<Roccem/>}/>
        <Route path="/wildlife" element={<WildlifePage/>}/>
        <Route path="/aicamp" element={<AICamp/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/research" element={<Research/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("mainDiv"));
root.render(<MyApp/>);
