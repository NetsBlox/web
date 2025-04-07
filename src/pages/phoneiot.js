import React from "react";
import { Smartphone, Activity, Settings, Gamepad2, MapPin, BookOpen, Clapperboard } from "lucide-react";
import { Page, Card, Grid, Youtube } from "../components.js";

const demoClasses = "text-center my-8";

export default () => (
  <Page>
    <Youtube id="Or4zIiDn0m0"/>

    <h1><Smartphone className="w-12 h-12 mr-3 inline-block"/>PhoneIoT</h1>

    <p>
      PhoneIoT is a free app for iOS and Android which connects your phone to the Internet of Things (IoT). This allows you to use NetsBlox code to remotely read sensor data from the device, as well as customize a graphical display on the phone screen. Using these features, students can create engaging projects such as an accelerometer-based "tilting" controller for a game, a GPS-powered tracking app which maps out the phone's location on a Google Maps image, or an orientation-based navigation app such as a compass, all from within NetsBlox.
    </p>

    <p className="text-center"><a href="https://editor.netsblox.org/docs/services/PhoneIoT/index.html"><button>Get Started</button></a></p>

    <Card>
      <h3><Smartphone className="w-8 h-8 mr-4 inline-block"/>Easy to Set Up</h3>
      <p>Simply install the PhoneIoT app and launch it to automatically connect to the NetsBlox IoT server. The device is given a unique "device ID" and "password" (optional) that can be used for remote access through NetsBlox.</p>
    </Card>

    <Card>
      <h3><Activity className="w-8 h-8 mr-4 inline-block"/>Access Live Sensor Data</h3>
      <p>Using NetsBlox RPCs and message passing, students can remotely access live sensor data from their smartphone. Two widely-used access methods are provided: "polling" for on-demand access and "streaming" for continuous updates at regular intervals.</p>
    </Card>

    <Card>
      <h3><Settings className="w-8 h-8 mr-4 inline-block"/>Customize the Interactive Graphical Display</h3>
      <p>Students can populate the PhoneIoT app screen with custom widgets like buttons, joysticks, and image displays. Widgets can be configured with an "event," which is a NetsBlox message type that is sent to your project when the widget is manipulated. This can be used to create remote controllers and other fun app-like projects.</p>
    </Card>

    <h2><Clapperboard className="h-8 w-8 mr-3 inline-block"/>Demos</h2>

    <Grid cols={2}>
      <div className={demoClasses}>
        <h2><BookOpen className="h-6 w-6 mr-3 inline-block"/>Introduction to PhoneIoT</h2>
        <Youtube id="oRWda9jT_c8"/>
        <p>Learn the basics of PhoneIoT, including how to access sensors and create custom displays.</p>
      </div>

      <div className={demoClasses}>
        <h2><Gamepad2 className="h-6 w-6 mr-3 inline-block"/>Drop Game Project</h2>
        <Youtube id="iyxgsvazFq0"/>
        <p>Use the accelerometer to control a sprite's movement in an exciting game.</p>
      </div>

      <div className={demoClasses}>
        <h2><MapPin className="h-6 w-6 mr-3 inline-block"/>GPS Tracker</h2>
        <Youtube id="kTtO7iuRQWI"/>
        <p>Build a live GPS tracker combining sensor data, custom controls, and NetsBlox services.</p>
      </div>
    </Grid>
  </Page>
);
