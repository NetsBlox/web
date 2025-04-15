import React from "react";
import { MapPin } from "lucide-react";
import { Grid } from "./components.js";

export default () => (
  <footer className="bg-white p-4 container mx-auto">
    <Grid cols={3}>
      <div>
        <h3>About NetsBlox</h3>
        <p>NetsBlox is a project of the Institute for Software Integrated Systems at Vanderbilt University.</p>
        <p><MapPin/>1025 16th Ave S, Nashville, TN 37212</p>
      </div>
      <div>
        <h3>Additional Resources</h3>
        <ul>
          <li><a className="plain" href="research">Research</a></li>
        </ul>
      </div>
      <div>
        <h3>Connect</h3>
        <ul>
          <li><a className="plain" href="people">People</a></li>
          <li><a className="plain" href="https://www.facebook.com/netsblox">Facebook</a></li>
          <li><a className="plain" href="https://github.com/netsblox">Github</a></li>
          <li><a className="plain" href="mailto:netsblox.apis@gmail.com">Contact Us</a></li>
        </ul>
      </div>
    </Grid>
    <p className="text-center">&copy; 2025 Institute for Software Integrated Systems / Vanderbilt University / School of Engineering</p>
  </footer>
);
