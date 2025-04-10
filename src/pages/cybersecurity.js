
import React from "react";
import { Shield, Power, Palette, PawPrint, Map, ShoppingCart, MessageSquare, Clapperboard, PanelsTopLeft, NotebookText, Bot, CarFront, Code, KeyboardOff, BrickWall, GraduationCap, ShieldAlert, Ear, Bug, Swords, Gauge } from "lucide-react";
import { Page, Youtube, TabView } from "../components.js";

export default () => (
  <Page>
    <Youtube id="UtcMZVPvnUs"/>

    <h1><Shield/>Cybersecurity Curriculum</h1>

    <p><a href="roboscape">RoboScape</a> is a collaborative networked robotics environment which provides several twists on conventional platforms in order to make key concepts in robotics and cybersecurity accessible to K-12 students. First, a user's program controlling the robot runs in the browser, rather than on the robot. Second, the wireless communication between a student's program and the robot can be overheard by the programs of the other students. This makes cybersecurity an immediate need that students realize and can work to address while others attempt to counter their defenses.</p>

    <h2><GraduationCap/>Lessons</h2>

    <TabView>
      <div name="NetsBlox Overview">
        <h3>Description</h3>

        <p>This lesson introduces students to programming in NetsBlox. The curriculum does not assume any prior knowledge of computer programming. Therefore, the first day is dedicated to teaching basic concepts such as control structures, variables, data types and functions (custom blocks).</p>

        <h3>Learning Goals</h3>

        <ul>
          <li><PanelsTopLeft/>Understand how to navigate around the various areas of the NetsBlox interface and use a variety of features</li>
          <li><NotebookText/>Learn several programming concepts that will be necessary to understand when it comes time to work with the physical robot down the line</li>
        </ul>

        <h3>Activities</h3>

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
      <div name="General RoboScape">
        <h3>Description</h3>

        <p>Introduction to programming RoboScape robots. The second day is dedicated to programming the robots with NetsBlox to carry our simple tasks. This will familiarize the students with robot programming in general, as well as lets them practice their newly acquired programming/NetsBlox skills.</p>

        <h3>Learning Goals</h3>

        <ul>
          <li><NotebookText/>Learn about the various remote procedure calls (RPCs) of RoboScape</li>
          <li><Bot/>Communicate with robots by using the <code>getRobots</code>, <code>listen</code>, and <code>send</code> RPCs</li>
          <li><Code/>Apply previously learned programming concepts, such as variables and loops, in order to move the robot both manually and autonomously</li>
        </ul>

        <h3>Activities</h3>

        <ul>
          <li><Bot/><strong>Introduction to RoboScape</strong> - Show basic commands and sensor data access. Students will do simple tasks such as having their robot beep at a specified frequency.</li>
          <li><CarFront/><strong>Robot Driving</strong> - Implement program to enable driving the robot with the arrow keys. After giving students time to test ideas, organize a race around an obstacle course.</li>
          <li><KeyboardOff/><strong>Self-Driving Robot</strong> - Implement a program that drives the robot around a large rectangle without user interaction. Organize a competition, and declare whoever has the shortest distance between start and end points as the winner.</li>
          <li><BrickWall/><strong>Approach Wall without Touching</strong> - Use <code>get range</code> and conditional statements such as "if" in order to stop the robot at a specific distance from the wall.</li>
          <li><BrickWall/><strong>Touch Wall and Return</strong> - Listen to the robot to be able to receive back messages using <code>robot message</code>. The whiskers will trigger one of these messages upon touching the wall. Use get ticks before beginning to move to get an initial reading, then use that data to return to the initial position.</li>
        </ul>
      </div>
      <div name="Simple Attacks">
        <h3>Description</h3>

        <p>The robots work without authentication and encryption by default. This opens up the possibility of students issuing commands to and/or asking sensor values from any robot. In this unit students will learn about some of the weaknesses of their robot programs. After demonstrating that any user can take over any robot as well as passively listen to other user's robots, we'll introduce a simple detection mechanism to identify such instances. This is similar to any real world scenarios involving unencrypted messages or data. These are quite vulnerable to any attacks!</p>

        <h3>Learning Goals</h3>

        <ul>
          <li><NotebookText/>Understand that networked applications are vulnerable</li>
          <li><NotebookText/>Understand the need for securing robots and programs by demonstrating dangers of communicating over a shared medium</li>
          <li><ShieldAlert/>Learn how to detect simple attacks</li>
        </ul>

        <h3>Activities</h3>

        <ul>
          <li><Ear/><strong>Eavesdropping</strong> - When the user listens to a robot they are also signing up to receive a copy of all the commands issued to the robot in the form of messages. These messages will have the following formats: a <code>robot command</code> message with payload <code>robot</code> and <code>command</code> or a <code>robot message</code> message with payload <code>robot</code> and <code>message</code>.</li>
          <li><Bug/><strong>Simple Attack</strong> - While one student tries to use his or her robot driving program from the previous units, the other students implement an attack by issuing commands interfering with the robot. Observe performance degradation and loss of control. NetsBlox sends all robot commands to the clients as well, allowing for the simulation of eavesdropping as an additional attack.</li>
          <li><ShieldAlert/><strong>Attack Detection</strong> - The first step in defense is being able to detect an ongoing attack. Students will extend their self-driving program to detect an attack and display a warning on their screen.</li>
          <li><Swords/><strong>Tug of War</strong> - Students work in pairs: one has the task of writing a self-driving program that tries to escape from a circle. The other has to write an attack program that tries to prevent this escape.</li>
        </ul>
      </div>
      <div name="Denial of Service">
        <h3>Description</h3>

        <p>By this point students might have already discovered the simplest - yet very effective - attack of DoS. The main real world example of these is when more traffic is sent to some network address than can be adequately handled. When this happens, service is interrupted for actual users. We will further demonstrate this by having one robot do a series of actions in a repeating pattern as the victim. Then attackers will interrupt the robot - making it unavailable to the legitimate user's requests - by bombarding the target robot with repeated commands of a different nature. The attackers' commands should be different in nature from the robot's intended behavior to show that the attackers aren't actively changing the instructions related to the original task.</p>

        <h3>Learning Goals</h3>

        <ul>
          <li><NotebookText/>Learn the importance of the availability aspect of cybersecurity</li>
          <li><Bug/>Perform attacks on availability such as Denial of Service (DOS) and Distributed DOS (DDOS)</li>
          <li><Shield/>Learn attack mitigation techniques such as rate limiting</li>
        </ul>

        <h3>Activities</h3>

        <ul>
          <li><Gauge/><strong>Simple Rate Control</strong> - NetsBlox will provide an RPC to start rate control: the students will be able to set a rate for their own robots that controls the maximum frequency the server will send commands to it. This approach won't help much since the legitimate commands will still get lost at a high probability during a DoS attack. Meaning everyone's commands, including the legitimate user's commands, are ignored after a threshold frequency is reached.</li>
          <li><Gauge/><strong>Source-Specific Rate Control</strong> - There is another Roboscape RPC designed to start source-specific rate control: the students will be able to set a rate for their own robots that controls the maximum frequency the server will accept requests from each client to send commands to the given robot. The RPC will have arguments for the rate and the timeout a given client will be locked out if the rate exceeds the limit. This approach will prevent the DoS attack, but with a caveat: the legitimate programs will have to be careful not to exceed the rate limit.</li>
          <li><Swords/><strong>Updated Tug of War Challenge</strong> - This challenge is a perfect fit for reinforcing the ideas of rate control. The competition changes drastically as either everyone combined or a specific user is suddenly limited in the number of actions that can be taken per second.</li>
        </ul>
      </div>
      <div name="Encryption">
        <h3>Description</h3>

        <p>In the previous modules we've been communicating with the robots by sending them commands and messages wirelessly through the air. These messages pass through different devices and networking mediums before they reach the robot. Very much like talking to a teammate or a classroom, others could be listening on your communication with your robot. In RoboScape, users can achieve the same through a simulated <code>listen</code> command. As you have already seen, anyone can also send commands to your robot by simply knowing its ID. All online communication has the same challenges, and therefore we need careful and clever solutions to overcome these issues. Authentication and encryption are two key concepts that will help us in this regard.</p>

        <p>Authentication is the process of confirming the truth of a claim. An example of this is an identity claim. Some familiar forms of authentication are providing the password to your account, pin to your credit card, security questions, code words, etc. Encryption is the process of encoding messages (or any information) in such a way that only authorized parties can access and understand it. Some encryption algorithms (symmetric ciphers) are based on a shared key between the communicating parties. In RoboScape, we use shared keys to both authenticate and ensure confidentiality of the communication between the users and their robots.</p>

        <h3>Learning Goals</h3>

        <ul>
          <li><ShieldAlert/>Understand the dangers of plain text communication over a shared medium</li>
          <li><NotebookText/>Learn methods of authentication through a shared secret (key, password, etc.)</li>
          <li><Shield/>Explain confidentiality through encryption</li>
        </ul>

        <h3>Activities</h3>

        <ul>
          <li><Ear/><strong>Eavesdropping</strong> - Demonstrate the eavesdropping issue, allowing students to listen in on the commands everyone else is sending.</li>
          <li><ShieldAlert/><strong>Lack of Authentication</strong> - Demonstrate how easy it is to control someone else's robot by simply sending unexpected commands to it, similar to previous experiences with Tug of War.</li>
          <li><Shield/><strong>Basic Encryption</strong> - To counter this problem, the secret code will be used to encrypt all messages from the computer to the robot and vice versa. It uses Caesar cipher with the code/key being the shift amount. This can be shown off to the class by running a simple example of robot movement (turning in a circle), but now using encryption. They will not be able to send it off course or delay commands to the robot as they could previously.</li>
        </ul>
      </div>
    </TabView>
  </Page>
);
