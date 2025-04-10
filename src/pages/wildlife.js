import React from "react";
import { Bird, Camera, Map, Trees, Gamepad2, Presentation, BookOpen, BookOpenCheck } from "lucide-react";
import { Page, Card, Warning } from "../components.js";

export default () => (
  <Page>
    <h1><Bird/>Wildlife Conservation</h1>

    <p>
      This resource hub showcases educational projects that leverage the power of NetsBlox to teach students about wildlife conservation. By integrating real-world data and interactive programming, these projects provide hands-on learning experiences that highlight the importance of protecting our planet's biodiversity. NetsBlox's unique capabilities enable students to create simulations, visualizations, and networked applications that illustrate key concepts in wildlife conservation, from tracking animal migrations to analyzing environmental impact.
    </p>

    <p>
      This module is designed to fill five 3-hour sessions with a target demographic of early high school students. Importantly, no prior programming experience is required. Materials and projects for each day are provided below. Note that the final day is intended to cover student-chosen personal or group projects.
    </p>

    <h2>Materials</h2>

    <ul>
      <li><Presentation/><a href="https://docs.google.com/presentation/d/16jVldPfZpInwWujLVMXu-xmSnAb3sDPTJi9V2TnjJf0/edit?usp=sharing">Combined slides</a> for all four days of instruction</li>
    </ul>

    <Warning>
      Warning: Some of the embedded videos included in the slide deck contain graphic images related to animal poaching and may not be appropriate for all audiences. Instructors are advised to screen video content before presenting to students.
    </Warning>

    <h2>Projects</h2>

    <Card>
      <h2><Camera/>Wildcam Camera Plotter</h2>
      <p>This project has students create a program that accesses the "Wildcam" NetsBlox service in order to view random images from camera traps placed out in the wild.</p>
      <a href="https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=wildcam-plotter-simple&editMode&noRun"><button><BookOpenCheck/>Completed Project</button></a>
    </Card>

    <Card>
      <h2><Map/>Movebank Animal Tracker</h2>
      <p>This project uses the "Movebank" NetsBlox service to access real-world location data from animal-borne tracking collars/tags. Students take this raw location data and combine it with features from the "GoogleMaps" NetsBlox service in order to plot the animals' paths on a map.</p>
      <a href="https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=movebank-plotter-simple&editMode&noRun"><button><BookOpenCheck/>Completed Project</button></a>
    </Card>

    <Card>
      <h2><Trees/>Tree of Life</h2>
      <p>This project gets students to write code that searches the GBIF online taxonomical database for animals. Students use this data and write code that visually displays information and images about any animal.</p>
      <a href="https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=tree-of-life-simplest-starter&editMode&noRun"><button><BookOpen/>Starter Project</button></a>
      <a href="https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=tree-of-life-simplest&editMode&noRun"><button><BookOpenCheck/>Completed Project</button></a>
    </Card>

    <Card>
      <h2><Gamepad2/>Species Guessing Game</h2>
      <p>This project has students use the "Wildcam" NetsBlox to look up images of specific species. Students then use this data to create a guessing game where players are presented two images and have to decide whether they are images of the same species or not.</p>
      <a href="https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=wildcam-guess-game&editMode&noRun"><button><BookOpenCheck/>Completed Project</button></a>
    </Card>
  </Page>
);
