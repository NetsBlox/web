import React from "react";
import {MapPin, Mail} from "lucide-react";

export default () => (
  <footer className="bg-white dark:bg-gray-900 py-4">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3>About NetsBlox</h3>
          <p>NetsBlox is a project of the Institute for Software Integrated Systems at Vanderbilt University.</p>
          <p><MapPin className="h-5 w-5 mr-1 inline-block" /> 1025 16th Ave S, Nashville, TN 37212</p>
        </div>
        <div>
          <h3>Additional Resources</h3>
          <ul>
            <li><a href="research">Research</a></li>
          </ul>
        </div>
        <div>
          <h3>Connect</h3>
          <ul>
            <li><a href="people">People</a></li>
            <li><a href="https://www.facebook.com/netsblox">Facebook</a></li>
            <li><a href="https://github.com/netsblox">Github</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center">&copy; 2025 Institute for Software Integrated Systems / Vanderbilt University / School of Engineering</p>
    </div>
  </footer>
);
