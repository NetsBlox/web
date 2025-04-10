import React from "react";
import { Globe, Wrench, PackageOpen, Users, PocketKnife, Clapperboard, AppWindow, Wifi, Bot, Settings } from "lucide-react";
import { Page, Card, Grid, Youtube } from "../components.js";

export default () => (
  <Page>
    <Youtube id="UtcMZVPvnUs"/>

    <h1><img src="images/logos/roboscape.png" className="w-24 h-24 inline-block"/>RoboScape</h1>

    <p>
      RoboScape adds exciting new robotics activities to NetsBlox, while maintaining the novice-friendliness and accessibility enjoyed in other NetsBlox activities. Students can learn about autonomous robotics, cybersecurity, and much more, while staying within the familiar NetsBlox interface. Additionally, a robotics simulation is available through RoboScape Online. All the code used with RoboScape robots works with RoboScape Online, but the simulated robots can have additional sensors to perform more complex tasks. This simulation allows students to share a virtual space online, enabling collaborative learning and teamwork, whether they're inside or outside the classroom. Together, RoboScape and RoboScape Online provide students with exciting hands-on activities to demonstrate how code can interact with the physical world, while engaging them with new challenges and opportunities for collaboration and competition.
    </p>

    <Grid cols={2}>
      <div className="text-center"><img src="images/roboscape/bot.png" className="h-64 inline-block shadow-md"/></div>
      <div className="text-center"><img src="images/roboscape/cybersec.png" className="h-64 inline-block shadow-md"/></div>
    </Grid>

    <h3>Physical Robot Requirements</h3>

    <ul>
      <li><AppWindow/>Computers with an up-to-date Chromium-based browser such as Edge or Chrome.</li>
      <li><Bot/>RoboScape supported robots: Parallax ActivityBot 360 (<a href="https://docs.google.com/document/d/1wudv0uNGX6zZxWaxV_bao0XyJYQgYNlu1Z-zYzvuRPA/edit?usp=sharing">assembly instructions</a>)</li>
      <li><Wifi/>A public or password-protected Wi-Fi network with Internet access</li>
    </ul>

    <h2><Globe/>RoboScape Online</h2>

    <p>
      While RoboScape can bring many new and exciting activities to the classroom, physical robots can be expensive and difficult to maintain. To resolve this issue, we have introduced RoboScape Online, a robotics simulator for RoboScape robots (and much more).
    </p>

    <p className="text-center"><a href="https://docs.google.com/presentation/d/1iaUKDoqclTCwOBEVEZ7TKQ_ihas08rta2DIUaMPWPok/edit?usp=sharing"><button>Try RoboScape Online</button></a></p>

    <h2><Wrench/>Features</h2>

    <Card>
      <h3><Settings/>Customizable</h3>
      <p>
        The RoboScape Online simulator loads specially-designed "scenario" files that specify details of the virtual environment, the available robots, the task to complete, and so on. These scenario files are simply NetsBlox projects, which students can create, customize, and share.
      </p>
    </Card>

    <Card>
      <h3><PocketKnife/>Advanced Sensing Features</h3>
      <p>
        Due to its simulated nature, RoboScape Online is able to simulate advanced types of sensors that would be impractically expensive in real-world classroom robotics projects. For instance, some scenarios equip robots with GPS or LIDAR sensors for advanced autonomous driving tasks.
      </p>
    </Card>

    <Card>
      <h3><Users/>Collaboration</h3>
      <p>
        RoboScape Online environments can be shared, allowing students to join the same robotics simulation and remotely manipulate the same robots. This allows students to collaborate on robotics problems even in online classroom scenarios where students cannot meet in-person.
      </p>
    </Card>

    <Card>
      <h3><PackageOpen/>Free and Open-Source</h3>
      <p>
        Simulated robots are completely free, allowing RoboScape to be used in any classroom or even at home.
      </p>
    </Card>

    <h2><Clapperboard/>Demos</h2>

    <Youtube id="9ldd-Gcqv1s"/>
  </Page>
);
