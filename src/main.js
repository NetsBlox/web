/* Copyright G. Hemingway, @2024 - All rights reserved */
"use strict";

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../public/index.css";

import Home from "./components/home.js";
import NavBar from "./components/navbar.js";
import Projects from "./components/projects.js";
import Footer from "./components/footer.js";
import PhoneIOT from "./components/phoneiot.js";
import CurriculumPage from "./components/curriculum_page.js";
import MultiplayerPage from "./components/multiplayer.js";
import PyBloxPage from "./components/pyblox.js";
import RoboScapePage from "./components/roboscape.js";
import LearnPage from "./components/learn_page.js";
import Beatblox from "./components/beatblox.js";
import Roccem from "./components/roccem.js";
import WildlifePage from "./components/wildlife.js";
import AICamp from "./components/aicamp.js";
import RoboScapeInfo from "./components/roboscape_info.js";
import RoboScapeOnline from "./components/roboscape_online.js";
import RoboScapeCurriculum from "./components/roboscape_curriculum.js";
import ContactPage from "./components/contact.js";
import PeoplePage from "./components/people.js";
import RoboScapeCyberSec from "./components/roboscape_cybersec.js";

/***
 * Main application entry point
 * @returns {JSX.Element}
 * @constructor
 */
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
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/phoneiot" element={<PhoneIOT />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/multiplayer" element={<MultiplayerPage />} />
        <Route path="/pyblox" element={<PyBloxPage />} />
        <Route path="/roboscape" element={<RoboScapePage />} />
        <Route path="/roboscape/info" element={<RoboScapeInfo />} />
        <Route path="/roboscape/online" element={<RoboScapeOnline />} />
        <Route path="/roboscape/curriculum" element={<RoboScapeCurriculum />} />
        <Route path="/roboscape/curriculum/cybersecurity" element={<RoboScapeCyberSec />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/beatblox" element={<Beatblox />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/roccem" element={<Roccem />} />
        <Route path="/wildlife" element={<WildlifePage />} />
        <Route path="/aicamp" element={<AICamp />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/people" element={<PeoplePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("mainDiv"));
root.render(<MyApp />);
