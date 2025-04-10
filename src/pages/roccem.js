import React from "react";
import { Bot, Shield, Cpu, Zap } from "lucide-react";
import { Page, Card, Youtube } from "../components.js";

const highlightClasses = "text-blue-600 font-semibold";

export default () => (
  <Page>
    <Youtube id="NWqkYYC5qC0"/>

    <h1><Bot/>ROCCEM</h1>

    <p>
      "Bringing <span className={highlightClasses}>Ro</span>botics, <span className={highlightClasses}>C</span>ybersecurity and <span className={highlightClasses}>C</span>omputer Scienc<span className={highlightClasses}>e</span> to the <span className={highlightClasses}>M</span>iddle School Classroom" (<span className={highlightClasses}>ROCCEM</span>) is an educational development effort funded by the National Science Foundation.
    </p>

    <p>
      The aim of ROCCEM is to provide middle school educators with accessible, focused, and engaging educational material for schools across Tennessee and beyond. Using NetsBlox, a block-based programming environment, the ROCCEM curriculum introduces students to robotics, cybersecurity, and advanced computer science concepts without the text-based programming hurdle. The work is based on a previous effort targeting high school students using physical robots as described in <a href="documents/publications/cybersec-net-bots-1.pdf">this paper</a>. To avoid dependence on physical hardware, we use a 3D robotic simulation environment, called RoboScape Online (RO). An overview is provided in <a href="documents/publications/browser-bot-sim.pdf">this paper</a>. The intuitive design and public accessibility of NetsBlox and RO enable educators to utilize the curriculum with virtually no hurdles. The 9-week long ROCCEM curriculum is divided into four modules:
    </p>

    <Card>
      <h2><Cpu/>Introduction to Distributed Programming</h2>
      <p>
        This module introduces students to fundamental computer science concepts (e.g., variables, lists, etc.). Additionally, this module introduces distributed programming concepts, such as RPC's (Remote Procedure Calls). In this module, students learn imperative programming, APIs (RPCs), abstraction, and data and control structures. Hints of cybersecurity are provided: for instance, by introducing lists in the context of allow/deny lists.
      </p>
    </Card>

    <Card>
      <h2><Shield/>Networking and Cybersecurity</h2>
      <p>
        This module introduces students to networking using the message passing abstraction of NetsBlox. A chatroom and simulated peer-to-peer networking projects are used to illustrate the human-human communications challenges. This module serves as an introduction of fundamental cybersecurity concepts related to confidentiality and integrity, including encryption.
      </p>
    </Card>

    <Card>
      <h2><Bot/>Robotics and Encryption</h2>
      <p>
        Introduction to cybersecurity concepts in the context of autonomous vehicles using RoboScape Online (RO). Students first complete straightforward driving tasks focusing on direct sensor measurements and motor actuation. We maintain the 'social' strategy of introducing key cybersecurity issues and vulnerabilities through human-human scenarios. Once the threat is clear, we apply it to students' autonomous vehicle projects, as they modify their solutions to defend their robots (while other classmates play as adversaries).
      </p>
    </Card>

    <Card>
      <h2><Zap/>Automation and Defensive Strategies</h2>
      <p>
        Students will complete cooperative challenge activities in RO. These scenarios increase in technical complexity and address the CIA triad (confidentiality, integrity, availability). Each scenario is accompanied by a common cyber-attack strategy and it's respective defence. This module grounds students' understanding in 'social' scenarios.
      </p>
    </Card>
  </Page>
);
