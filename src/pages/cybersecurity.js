
import React from "react";
import { Shield, Power, Palette, PawPrint, Map, ShoppingCart, MessageSquare, Clapperboard, PanelsTopLeft, NotebookText } from "lucide-react";
import { Page, Youtube, TabView, Collapsable } from "../components.js";

export default () => (
  <Page>
    <Youtube id="UtcMZVPvnUs"/>

    <h1><Shield/>Cybersecurity Curriculum</h1>

    <p><a href="roboscape">RoboScape</a> is a collaborative networked robotics environment which provides several twists on conventional platforms in order to make key concepts in robotics and cybersecurity accessible to K-12 students. First, a user's program controlling the robot runs in the browser, rather than on the robot. Second, the wireless communication between a student's program and the robot can be overheard by the programs of the other students. This makes cybersecurity an immediate need that students realize and can work to address while others attempt to counter their defenses.</p>

    <h2>Lessons</h2>

    <TabView>
      <div title="Lesson 1">
        <h2>Description</h2>

        <p>This lesson introduces students to programming in NetsBlox. The curriculum does not assume any prior knowledge of computer programming. Therefore, the first day is dedicated to teaching basic concepts such as control structures, variables, data types and functions (custom blocks).</p>

        <h2>Learning Goals</h2>

        <ul>
          <li><PanelsTopLeft/>Understand how to navigate around the various areas of the NetsBlox interface and use a variety of features</li>
          <li><NotebookText/>Learn several programming concepts that will be necessary to understand when it comes time to work with the physical robot down the line</li>
        </ul>

        <h2>Activities</h2>

        <ul>
          <li><Power/><strong>Introduction to the NetsBlox environment</strong> - Basics of creating projects and navigating the interface.</li>
          <li><PawPrint/><strong>Cat and Mouse Game</strong> - Mouse is "driven" by the user using the keyboard arrow keys, while the cat is following the mouse trying to catch it. Time-based scoring, with increasing difficulty level as time progresses. Introduces if-statements, sprites/backgrounds, loops, variables, events and concurrent scripts.</li>
          <li><Palette/><strong>Digital Art</strong> - Polygon drawing custom block. Implements various ways of creating geometric art. Introduces custom blocks (functions).</li>
          <li><Map/><strong>Interactive Weather Map</strong> - Create a fully interactive google map background with panning and zooming. Display current weather conditions wherever the user clicks. Introduces Remote Procedure Calls (RPCs).</li>
          <li><ShoppingCart/><strong>Shopping List App</strong> - Simple project to introduce lists. Set variables equal to lists and then add items to them. Further list manipulation is available as time permits.</li>
          <li><MessageSquare/><strong>Chatroom</strong> - Introduction to messages. Learn how to automatically send messages from one computer to everyone else able to receive it.</li>
          <li><Clapperboard/><strong>Movie Cast Info</strong> - Using the MovieDB service, display photos of leading cast members of any movie based on its title. Stresses lists.</li>
        </ul>
      </div>
      <div title="Lesson 2">
        <h2>Description</h2>

        <p>Introduction to programming RoboScape robots. The second day is dedicated to programming the robots with NetsBlox to carry our simple tasks. This will familiarize the students with robot programming in general, as well as lets them practice their newly acquired programming/NetsBlox skills.</p>

        <h2>Learning Goals</h2>

        <ul>
          <li>Learn about the various remote procedure calls (RPCs) of RoboScape</li>
          <li>Communicate with robots by using the <code>getRobots</code>, <code>listen</code>, and <code>send</code> RPCs</li>
          <li>Apply previously learned programming concepts, such as variables and loops, in order to move the robot both manually and autonomously</li>
        </ul>

        <h2>Activities</h2>
      </div>
    </TabView>
  </Page>
);
