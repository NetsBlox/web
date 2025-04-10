
import React from "react";
import { Cpu, Rocket, Bird, Sparkles, Users, BookOpen, Lightbulb, Share2, Lock, Brain, Wrench, Shield } from "lucide-react";
import { Page, Grid, Youtube, Collapsable, TabView } from "../components.js";

export default () => (
  <Page>
    <Youtube id="UtcMZVPvnUs"/>

    <h1><Shield/>Cybersecurity Curriculum</h1>

    <p><a href="roboscape">RoboScape</a> is a collaborative networked robotics environment which provides several twists on conventional platforms in order to make key concepts in robotics and cybersecurity accessible to K-12 students. First, a user's program controlling the robot runs in the browser, rather than on the robot. Second, the wireless communication between a student's program and the robot can be overheard by the programs of the other students. This makes cybersecurity an immediate need that students realize and can work to address while others attempt to counter their defenses.</p>

    <h2>Lessons</h2>

    <Collapsable title="test title thing">
      <p>here is some content</p>
      <p><button>and a button</button></p>
      <h2>And more content</h2>
      <p>and stuff...</p>
    </Collapsable>

    <TabView>
      <div title="Lesson 1">
        <h2>tab 1</h2>
        <p>here is some content</p>
        <p><button>and a button</button></p>
        <h2>And more content</h2>
        <p>and stuff...</p>
      </div>
      <div>
        <h2>tab 2</h2>
        <p>here is some content</p>
        <p>and stuff...</p>
      </div>
      <div>
        <h2>tab 3</h2>
        <p>here is some content</p>
        <p><button>and a button</button></p>
        <p><button>and a button</button></p>
        <p><button>and a button</button></p>
        <h2>And more content</h2>
        <p>and stuff...</p>
      </div>
    </TabView>
  </Page>
);
