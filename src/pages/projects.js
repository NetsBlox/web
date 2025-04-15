import React from "react";
import { Activity, BookOpen, ChartColumn, Clapperboard, Dices, Flag, Gamepad2, Gauge, Joystick, Lightbulb, MessageCircleQuestion, MessagesSquare, PawPrint, Play, Telescope, TrafficCone, UserPlus, Users } from "lucide-react";
import { Page, Card, Grid, Warning, Youtube } from "../components.js";

const demoClasses = "mt-8 text-center";
const aspectRatio = "4 / 3";

const Example = ({icon: Icon, proj, desc}) => (
  <div key={`ex-${proj}`} className="text-center mt-8">
    <h3><Icon/>{proj}</h3>
    <img src={`https://cloud.netsblox.org/projects/thumbnail?url=${encodeURIComponent(`https://editor.netsblox.org/Examples/${encodeURIComponent(proj)}.xml`)}&aspectRatio=${eval(aspectRatio)}`} className="w-64 mt-0 shadow-md inline-block" style={{ aspectRatio }}/>
    {desc && <p>{desc}</p>}
    <p className="text-center"><a href={`https://editor.netsblox.org?action=example&projectname=${encodeURIComponent(proj)}&editMode&noRun`} target="_blank"><button>Try Project!</button></a></p>
  </div>
);

export default () => (
  <Page>
    <h1><Lightbulb/>Featured Projects</h1>

    <p>Our projects offer collaborative editing in a cloud-based environment, allowing novice programmers to create networked programs like multiplayer games. NetsBlox enables real-world data integration, such as Google Maps, and offers data sources like the Open Movie Database and Sloan Digital Sky Server. Browse through published projects below.</p>

    <h2>Single-Player Projects</h2>

    <Grid cols={3}>
      <Example icon={Gauge} proj="Thingspeak"/>
      <Example icon={Telescope} proj="NASA"/>
      <Example icon={Users} proj="CastShow"/>
      <Example icon={Activity} proj="QuickQuake"/>
      <Example icon={TrafficCone} proj="Traffic"/>
      <Example icon={ChartColumn} proj="COVID-19Daily"/>
    </Grid>

    <h2>Multi-Player Projects</h2>

    <Warning>Note: Running multi-player NetsBlox projects requires a bit of setup in order to connect the two (or more) programs together over the internet. See the section below for instructions.</Warning>

    <Grid cols={3}>
      <Example icon={Gamepad2} proj="Battleship"/>
      <Example icon={Gamepad2} proj="ConnectN"/>
      <Example icon={Dices} proj="Dice"/>
      <Example icon={MessageCircleQuestion} proj="Twenty Questions"/>
      <Example icon={MessagesSquare} proj="Story"/>
      <Example icon={Joystick} proj="Pong"/>
    </Grid>

    <h2>Playing Multiplayer Games</h2>

    <p>NetsBlox makes it easy to create multiplayer games. After going through these steps, you will learn about a few different techniques to make games that you can play with your friends worldwide. Before we start with creating games, let's see how you can play one that is already created by our users.</p>

    <Card>
      <h3><Users/>1. Sign in</h3>
      <p>Before playing multiplayer games, all the players need to be signed up and logged in. Detailed sign up information can be found <a href="https://editor.netsblox.org/docs/fundamentals/howto.html#signing-up-in">here</a>.</p>
    </Card>

    <Card>
      <h3><Play/>2. Find and Open a Game</h3>
      <p>You can go through the list of our example multiplayer games above, or have a friend share their own multiplayer creation with you.</p>
    </Card>

    <Card>
      <h3><UserPlus/>3. Invite all Players to the Game Room</h3>
      <p>If you are the first one opening the game (owner), to invite your opponents/teammates, go to the room tab you will see an overview of the current room and available roles. Each player occupies one role. To invite players, click on a role choose invite users and search for your friend's username and press ok to ask them to join your game.</p>
      <p>If you are being invited to a game, make sure you have editor.netsblox.org open in your browser and that you are signed in. After you are invited, you will get a dialog asking you if you want to join the game.</p>
    </Card>

    <Card>
      <h3><Flag/>4. Start the Game</h3>
      <p>Make sure all the players are in by looking at the room view, if there is someone missing go back to the third step. Now that you are all set, the main role can start the game by clicking on the green flag at the top right corner. You can maximize the stage (playground) by clicking on the icon.</p>
    </Card>

    <h2><Clapperboard/>Multiplayer Demos</h2>

    <Grid cols={2}>
      <div className={demoClasses}>
        <h3><BookOpen/>Multiplayer Starter Guide</h3>
        <Youtube id="h5q8M-N25uI"/>
      </div>

      <div className={demoClasses}>
        <h3><PawPrint/>Distributed Animation</h3>
        <Youtube id="NRIUUiJMCmI"/>
      </div>
    </Grid>
  </Page>
);
