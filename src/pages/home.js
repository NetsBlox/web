import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Page, Youtube, Audio } from "../components.js";

const taglines = [
  {
    text: "Beats and Music",
    image: "images/backgrounds/headphones.jpeg",
    link: "beatblox",
    buttonText: "BeatBlox Extension",
  },
  {
    text: "Robot Worlds",
    image: "images/backgrounds/robot-world.jpeg",
    link: "roboscape",
    buttonText: "RoboScape Extension",
  },
  {
    text: "Phone Apps",
    image: "images/backgrounds/phone.jpeg",
    link: "phoneiot",
    buttonText: "PhoneIoT Page",
  },
  {
    text: "Multi-Player Games",
    image: "images/backgrounds/game.jpeg",
    link: "multiplayer",
    buttonText: "Start Playing",
  },
  {
    text: "Together",
    image: "images/backgrounds/puzzle.jpeg",
    link: "editor",
    buttonText: "Start Creating: NetsBlox Editor",
  },
  {
    text: "with AI",
    image: "images/backgrounds/robot-mouse.jpeg",
    link: "editor",
    buttonText: "Start Creating: NetsBlox Editor",
  },
  {
    text: "with Blocks or Text",
    image: "images/backgrounds/code.jpeg",
    link: "pyblox",
    buttonText: "Get Started: PyBlox",
  },
  {
    text: "Online programs",
    image: "images/backgrounds/robot-laptop.jpeg",
    link: "editor",
    buttonText: "Start Creating: NetsBlox Editor",
  },
];

export default () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Page>
      <div className="h-screen">
        <AnimatePresence mode="wait">
          <motion.div key={currentTagline} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${taglines[currentTagline].image})` }}/>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Dream. Code. Create.
            </h1>
            <AnimatePresence mode="wait">
              <motion.h2 key={currentTagline} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="text-2xl sm:text-4xl font-semibold text-blue-400 mb-8">
                {taglines[currentTagline].text}
              </motion.h2>
            </AnimatePresence>
            <a href={taglines[currentTagline].link}><button>{taglines[currentTagline].buttonText}</button></a>
          </div>
        </div>
      </div>

      <Youtube id="b4YkDPtoaIs"/>

      <div className="my-12">
        <Audio title="NetsBlox Podcast" src="audio/podcast.mp3"/>
      </div>

      <p>NetsBlox is a cloud-based visual programming language that enables novice programmers to easily create networked programs such as multi-player games. NetsBlox opens up the internet with its vast array of public domain data sources, making it possible to create advanced STEM projects such as displaying seismic activity anywhere on Earth using an interactive Google Maps background.</p>

      <p>But NetsBlox is more than just a coding platform - it's an educational ecosystem designed to inspire and empower young minds. With our innovative tools and connected approach, students can create distributed programs, collaborate in real-time, and bring their ideas to life through code.</p>

      <p className="text-center"><a href="curriculum"><button>Get Started!</button></a></p>
    </Page>
  );
};
