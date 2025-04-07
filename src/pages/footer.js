import React from "react";
import { MapPin } from "lucide-react";
import { Grid } from "../components.js";

export default () => (
  <footer className="bg-white dark:bg-gray-900 p-4 container mx-auto">
    <Grid cols={3}>
      <div key="footer-1">
        <h3>About NetsBlox</h3>
        <p>NetsBlox is a project of the Institute for Software Integrated Systems at Vanderbilt University.</p>
        <p><MapPin className="h-5 w-5 mr-1 inline-block" /> 1025 16th Ave S, Nashville, TN 37212</p>
      </div>
      <div key="footer-2">
        <h3>Additional Resources</h3>
        <ul>
          <li><a href="research">Research</a></li>
        </ul>
      </div>
      <div key="footer-3">
        <h3>Connect</h3>
        <ul>
          <li><a href="people">People</a></li>
          <li><a href="https://www.facebook.com/netsblox">Facebook</a></li>
          <li><a href="https://github.com/netsblox">Github</a></li>
          <li><a href="mailto:netsblox.apis@gmail.com">Contact Us</a></li>
        </ul>
      </div>
    </Grid>
    <p className="text-center">&copy; 2025 Institute for Software Integrated Systems / Vanderbilt University / School of Engineering</p>
  </footer>
);
