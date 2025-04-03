import React from "react";
import { Cpu, Rocket, Bird, Sparkles, Users, BookOpen, Lightbulb, Share2, Lock, Brain, Wrench } from "lucide-react";
import { Page, Grid } from "../components.js";

export default () => (
  <Page>
    <h1>Explore Our Fun Learning Programs!</h1>

    <Grid cols={3}>
      <><h1><Users className="h-12 w-12 inline-block"/></h1><p className="text-center">For various educational levels and skillsets</p></>
      <><h1><BookOpen className="h-12 w-12 inline-block"/></h1><p className="text-center">Curated tutorials, projects, and lesson ideas</p></>
      <><h1><Lightbulb className="h-12 w-12 inline-block"/></h1><p className="text-center">Engaging and interactive education experiences</p></>
    </Grid>

    <Grid cols={3}>
      <div className="text-center">
        <h2><Cpu className="h-8 w-8 mr-3 inline-block"/>ROCCEM</h2>
        <p>ROCCEM provides middle school educators with accessible, focused, and engaging educational material for schools across Tennessee and beyond. Using NetsBlox, the ROCCEM curriculum introduces students to robotics, cybersecurity, and advanced computer science concepts without the text-based programming hurdle.</p>
        <a href="roccem"><button>Explore ROCCEM</button></a>
      </div>

      <div className="text-center">
        <h2><Rocket className="h-8 w-8 mr-3 inline-block"/>Robotics and Cybersecurity</h2>
        <p>With RoboScape and RoboScape Online, students can write NetsBlox programs that remotely control physical or virtual robots. Learn about encryption, cipher-breaking, and hack other robots in exciting challenges!</p>
        <a href="roboscape"><button>Start Robotics Adventure</button></a>
      </div>

      <div className="text-center">
        <h2><Rocket className="h-8 w-8 mr-3 inline-block"/>CS Frontiers</h2>
        <p>A Tennessee-approved, year-long high school curriculum covering
        advanced topics like:</p>
        <ul>
          <li><Share2 className="w-4 h-4 mr-2 inline-block"/><a href="https://csfrontiers.org/distributed-computing.html">Distributed Computing</a></li>
          <li><Lock className="w-4 h-4 mr-2 inline-block"/><a href="https://csfrontiers.org/iot-and-cybersecurity.html">IoT and Cybersecurity</a></li>
          <li><Brain className="w-4 h-4 mr-2 inline-block"/><a href="https://csfrontiers.org/ai-and-machine-learning.html">AI and Machine Learning</a></li>
          <li><Wrench className="w-4 h-4 mr-2 inline-block"/><a href="https://csfrontiers.org/software-engineering.html">Software Engineering</a></li>
        </ul>
        <a href="https://csfrontiers.org/curriculum.html"><button>Discover CS Frontiers</button></a>
      </div>

      <div className="text-center">
        <h2><Bird className="h-8 w-8 mr-3 inline-block"/>Wildlife Conservation</h2>
        <p>Create exciting projects using real-world wildlife databases! Learn how technology can help solve conservation problems through hands-on, project-based learning.</p>
        <a href="wildlife"><button>Explore Wildlife Tech</button></a>
      </div>

      <div className="text-center">
        <h2><Sparkles className="h-8 w-8 mr-3 inline-block"/>AI Summer Camp</h2>
        <p>Dive into the fascinating world of AI! Create your own AI agents, solve puzzles, and learn about everything from classical AI algorithms to the latest advances in modern AI.</p>
        <a href="aicamp"><button>Join AI Adventure</button></a>
      </div>
    </Grid>
  </Page>
);
