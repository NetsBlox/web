import React from "react";

const generateLinks = links => links.map(([text, url]) => <li><a href={url} className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">{text}</a></li>);

export default () => (
  <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500 dark:text-blue-400">
            About NetsBlox
          </h3>
          <p>
            NetsBlox is a project of the Institute for Software Integrated Systems at Vanderbilt University.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500 dark:text-blue-400">
            Additional Resources
          </h3>
          <ul className="space-y-2">
            {generateLinks([
              ["Research", "research"],
            ])}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500 dark:text-blue-400">
            Connect
          </h3>
          <ul className="space-y-2">
            {generateLinks([
              ["Contact Us", "contact"],
              ["Facebook", "https://www.facebook.com/netsblox"],
              ["GitHub", "https://github.com/netsblox"],
            ])}
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2025 Institute for Software Integrated Systems / Vanderbilt University / School of Engineering</p>
      </div>
    </div>
  </footer>
);
