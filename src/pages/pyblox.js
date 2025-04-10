import React from "react";
import { Code2, Wrench, Rocket, Code, PackageOpen, Clapperboard } from "lucide-react";
import { Page, Card, Youtube } from "../components.js";

export default () => (
  <Page>
    <Youtube id="ADnao4uZd9E"/>

    <h1><Code2/>PyBlox</h1>

    <p>
      NetsBlox has been shown to be effective at teaching advanced Computer Science (CS) concepts such distributed computing, robotics, cybersecurity, and the internet of things in ways which are attainable to novice programmers. However, despite its power, there are some students who may be put off by the block-based programming environment that NetsBlox provides for accessing these features. This can lead to students abandoning NetsBlox in favor of textual languages, which typically over-complicate access to these advanced CS concepts, and can result in students becoming frustrated with a lack of progression during this transition. To remedy this, we introduce PyBlox, a Python analogue of NetsBlox.
    </p>

    <p className="text-center"><a href="https://pypi.org/project/netsblox/"><button>Install PyBlox</button></a></p>

    <h2><Wrench/>Features</h2>

    <Card>
      <h3><Rocket/>Supports all the Features of NetsBlox</h3>
      <p>
        PyBlox is a complete Python equivalent for NetsBlox. This includes access to features such as sprites, turtle graphics, pen drawings, concurrently (simultaneously) executing scripts, key events, and more. Importantly, this also includes all of the advanced networking features of NetsBlox, allowing students to still make use of NetsBlox RPCs and internet-based message passing even in the Python world.
      </p>
    </Card>

    <Card>
      <h3><Code/>Develop Real Python Programming Skills</h3>
      <p>
        PyBlox is a native tool, meaning it must be installed on your computer rather than running in the browser like NetsBlox. The reason for this is that PyBlox gives users the full, unlimited power of Python, rather than only a small subset that can run in isolation in a web browser. Because of this, any Python knowledge learned through PyBlox is directly applicable to real-world Python programming.
      </p>
    </Card>

    <Card>
      <h3><PackageOpen/>Free and Open-Source</h3>
      <p>
        Just like NetsBlox, PyBlox is a free and open-source tool. This means that there will never be any financial cost to using PyBlox either at home or in the classroom.
      </p>
      <a href="https://github.com/dragazo/PyBlox"><button>Visit our Github</button></a>
    </Card>

    <h2><Clapperboard/>Demos</h2>

    <Youtube id="tSjbu90GhHM"/>
  </Page>
);
