import React from "react";
import { Headphones, Music, PlayCircle, Share2, Users, PenTool, Layers } from "lucide-react";

import {Page, Card, Grid, Youtube, Warning} from "../components.js";

export default () => (
  <Page>
    <Youtube id="WcL1ppEsiyE"/>

    <h1><img src="images/beatblox.png" className="w-24 h-24 mr-4 inline-block"/>BeatBlox</h1>

    <p>
      BeatBlox is the latest extension to the NetsBlox block-based programming environment, designed to teach cutting-edge computing concepts through music. NetsBlox was built on top of the open-source codebase of Snap! from UC Berkeley and was specifically designed to teach cutting edge computing concepts such as distributed computing, the Internet of Things, and cybersecurity to novices. It opens the internet to student projects, making computing more relevant to their lives and more engaging. A modular, full year, high school curriculum called <a href="https://csfrontiers.org/">Computer Science Frontiers (CSF)</a> utilizes NetsBlox and is freely available to teachers to bring these capabilities to their classrooms. A <a href="https://www.coursera.org/learn/programming-for-a-networked-world/">new online course</a> can help both students and teachers learn NetsBlox from the ground up.
    </p>

    <Card>
      <h3><Users className="w-8 h-8 mr-4 inline-block"/>Engaging Students Through Music and Computing</h3>
      <p>BeatBlox integrates music with computing to make learning more appealing, aiming to engage students who may feel excluded from computer science.</p>
    </Card>

    <Card>
      <h3><PenTool className="w-8 h-8 mr-4 inline-block"/>Music Creation and Customization</h3>
      <p>BeatBlox allows students to compose music using simulated digital instruments, add special effects, and incorporate public domain tunes, making it versatile and accessible for creative expression.</p>
    </Card>

    <Card>
      <h3><Layers className="w-8 h-8 mr-4 inline-block"/>Collaboration and Integration with Other Media</h3>
      <p>BeatBlox's networking feature enables students to collaborate in a digital orchestra and combine music with visualizations or sound effects for games and animations.</p>
    </Card>

    <Warning>Each demo is summarized in a brief video, and a link is provided to open the corresponding project in BeatBlox for tinkering. For best compatibility, use Google Chrome on a computer. To run a project, click the green flag in the BeatBlox interface. For HD playback, set YouTube quality to 1080p.</Warning>

    <Grid cols={2}>
      <div className="text-center">
        <h2><Music className="h-6 w-6 mr-3 inline-block"/>Basic Music</h2>
        <Youtube id="YVK3ysKePc8"/>
        <p>Introduction to BeatBlox showcasing a simple block-based musical effect.</p>
        <a href="https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=beepblox&editMode&noRun"><button>Try Project!</button></a>
      </div>

      <div className="text-center">
        <h2><Headphones className="h-6 w-6 mr-3 inline-block"/>Multi-Instrument</h2>
        <Youtube id="_-9BKaLxeQw"/>
        <p>Beethoven's "Ode to Joy" with multiple instruments and score visualization.</p>
        <a href="https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=code-to-joy&editMode&noRun"><button>Try Project!</button></a>
      </div>

      <div className="text-center">
        <h2><PlayCircle className="h-6 w-6 mr-3 inline-block"/>Real-Time Graphics</h2>
        <Youtube id="t6NO8M-WykQ"/>
        <p>Various visualizations accompanying musical compositions.</p>
        <a href="https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=circle-viz&editMode&noRun"><button>Try Project!</button></a>
      </div>

      <div className="text-center">
        <h2><Share2 className="h-6 w-6 mr-3 inline-block"/>Distributed Projects</h2>
        <Youtube id="eqd-MeSWxfI"/>
        <p>A four-piece band first on a single computer and then by four individual BeatBlox users being played back synchronously.</p>
        <a href="https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=sprite-orchestra&editMode&noRun"><button>Try Project!</button></a>
      </div>

      <div className="text-center">
        <h2><Layers className="h-6 w-6 mr-3 inline-block"/>Networked Effects And Graphics</h2>
        <Youtube id="m38ea6as4s0"/>
        <p>Helicopter flyby on a single computer first, then in three separate browser tabs, and finally, using distributed audiovisual animation across three computers showing a helicopter moving both visually and acoustically between individually running programs.</p>
        <a href="https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=helicopter&editMode&noRun"><button>Try Project!</button></a>
      </div>

      <div className="text-center">
        <h2><PenTool className="h-6 w-6 mr-3 inline-block"/>External Device Access</h2>
        <Youtube id="HXxqptj6w0Q"/>
        <p>Musical compositions demonstrating ease of access to external devices, such as MIDI keyboards and mobile phones. To try maracas on your phone, you need to install the PhoneIoT mobile app from the app store and then scan the QR code as shown in the video.</p>
        <a href="https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%2C%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBetterShare%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=phoneiot-maraca&editMode&noRun"><button>Try Project!</button></a>
      </div>

      <div className="text-center">
        <h2><Music className="h-6 w-6 mr-3 inline-block"/>Augmented Reality</h2>
        <Youtube id="ymLOQZyKuWc"/>
        <p>Two hardware-free instrument implementations allowing users to experiment with playing music without requiring physical hardware or instruments using a webcam only.</p>
        <a href="https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FAugmentedReality%2Findex.js%22%2C%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FBeatBlox%2Findex.js%22%2C%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FHandGestures%2Findex.js%22%5D&action=present&Username=beatblox&ProjectName=theremin&editMode&noRun"><button>Try Project!</button></a>
      </div>
    </Grid>
  </Page>
);
