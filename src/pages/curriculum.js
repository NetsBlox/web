import React from "react";
import { Cpu, Rocket, Bird, Sparkles, Users, BookOpen, Lightbulb, Share2, Lock, Brain, Wrench } from "lucide-react";
import { Page, Grid } from "../components.js";

const entryClasses = "text-center mt-12";

export default () => (
  <Page>
    <h1>Explore Our Fun Learning Programs!</h1>

    <div className="py-2"/>

    <Grid cols={3}>
      <div><h1><Users/></h1><p className="text-center">Tailored for broad educational levels and skillsets</p></div>
      <div><h1><BookOpen/></h1><p className="text-center">Curated tutorials, projects, and lesson plans</p></div>
      <div><h1><Lightbulb/></h1><p className="text-center">Engaging and interactive educational experiences</p></div>
    </Grid>

    <Grid cols={3}>
      <div className={entryClasses}>
        <h3><Cpu/>ROCCEM</h3>
        <p>ROCCEM provides middle school educators with accessible, focused, and engaging educational material for schools across Tennessee and beyond. Using NetsBlox, the ROCCEM curriculum introduces students to robotics, cybersecurity, and advanced computer science concepts without the text-based programming hurdle.</p>
        <a href="roccem"><button>Explore ROCCEM</button></a>
      </div>

      <div className={entryClasses}>
        <h3><Rocket/>Robotics and Cybersecurity</h3>
        <p>With RoboScape and RoboScape Online, students can write NetsBlox programs that remotely control physical or virtual robots. Learn about encryption, cipher-breaking, and hack other robots in exciting challenges!</p>
        <a href="roboscape"><button>Start Robotics Adventure</button></a>
      </div>

      <div className={entryClasses}>
        <h3><Rocket/>CS Frontiers</h3>
        <p>A Tennessee-approved, year-long high school curriculum covering
        advanced topics like:</p>
        <ul>
          <li><Share2/><a href="https://csfrontiers.org/distributed-computing.html">Distributed Computing</a></li>
          <li><Lock/><a href="https://csfrontiers.org/iot-and-cybersecurity.html">IoT and Cybersecurity</a></li>
          <li><Brain/><a href="https://csfrontiers.org/ai-and-machine-learning.html">AI and Machine Learning</a></li>
          <li><Wrench/><a href="https://csfrontiers.org/software-engineering.html">Software Engineering</a></li>
        </ul>
        <a href="https://csfrontiers.org/curriculum.html"><button>Discover CS Frontiers</button></a>
      </div>

      <div className={entryClasses}>
        <h3><Bird/>Wildlife Conservation</h3>
        <p>Create exciting projects using real-world wildlife databases! Learn how technology can help solve conservation problems through hands-on, project-based learning.</p>
        <a href="wildlife"><button>Explore Wildlife Tech</button></a>
      </div>

      <div className={entryClasses}>
        <h3><Sparkles/>AI Summer Camp</h3>
        <p>Dive into the fascinating world of AI! Create your own AI agents, solve puzzles, and learn about everything from classical AI algorithms to the latest advances in modern AI.</p>
        <a href="aicamp"><button>Join AI Adventure</button></a>
      </div>
    </Grid>
  </Page>
);
