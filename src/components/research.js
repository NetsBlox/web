import React from "react";
import {Download} from "lucide-react";

const publications = [
  {
    authors: "Devin Jean, Brian Broll, Gordon Stein, and Akos Ledeczi",
    title: "Utilizing Smartphones for Approachable IoT Education in K-12",
    journal: "Sensors 22 (24)",
    year: 2022,
    link: "documents/publications/sensors-phoneiot.pdf",
  },
  {
    authors: "Corey Brady, Brian Broll, Gordon Stein, Devin Jean, Shuchi Grover, Veronica Catete, Tiffany Barnes, and Akos Ledeczi",
    title: "Block-based Abstractions and Expansive Services to Make Advanced Computing Concepts Accessible to Novices",
    journal: "Journal of Computer Languages 73",
    year: 2022,
    link: "documents/publications/block-based-abstractions.pdf",
  },
  {
    authors: "Gordon Stein, Isabella Gransbury, Devin Jean, Lauren Alvarez, Marnie Hill, Veronica Catete, Shuchi Grover, Tiffany Barnes, Brian Broll, and Akos Ledeczi",
    title: "Engaging Female High School Students in the Frontiers of Computing",
    journal: "ASEE Annual Conference & Exposition",
    year: 2022,
    link: "documents/publications/engaging-female-hs-students.pdf",
  },
  {
    authors: "Lauren Alvarez, Isabella Gransbury, Veronica Catete, Tiffany Barnes, Akos Ledeczi, and Shuchi Grover",
    title: "A Socially Relevant Focused AI Curriculum Designed for Female High School Students",
    journal: "Proceedings of the AAAI Conference on Artificial Intelligence, 36 (11)",
    year: 2022,
    link: "documents/publications/socially-relevant-ai.pdf",
  },
  {
    authors: "Yizhou Tan, Marina Rizk, Gordon Stein, and Akos Ledeczi",
    title: "User-Extensible Block-Based Interfaces for Internet of Things Devices as New Educational Tools",
    journal: "SoutheastCon",
    year: 2022,
    link: "documents/publications/edu-iot-blocks.pdf",
  },
  {
    authors: "Brian Broll, Akos Ledeczi, Gordon Stein, Devin Jean, Corey Brady, Shuchi Grover, Veronica Catete, and Tiffany Barnes",
    title: "Removing the Walls Around Visual Educational Programming Environments",
    journal: "IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC), St Louis, Missouri, October 10-13",
    year: 2021,
    link: "documents/publications/removing-walls.pdf",
  },
  {
    authors: "Devin Jean, Brian Broll, Gordon Stein, and Akos Ledeczi",
    title: "Your Phone as a Sensor: Making IoT Accessible for Novice Programmers",
    journal: "Frontiers in Education (FIE), Lincoln, Nebraska, October 13-16",
    year: 2021,
    link: "documents/publications/accessible-iot.pdf",
  },
  {
    authors: "Gordon Stein and Akos Ledeczi",
    title: "Enabling Collaborative Distance Robotics Education for Novice Programmers",
    journal: "IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC), St Louis, Missouri, October 10-13",
    year: 2021,
    link: "documents/publications/collab-dist-robots.pdf",
  },
  {
    authors: "Bernard Yett, Nicole Hutchins, Gordon Stein, Hamid Zare, Caitlin Snyder, Gautam Biswas, Mary Metelko, and Akos Ledeczi",
    title: "A Hands-On Cybersecurity Curriculum Using a Robotics Platform",
    journal: "SIGCSE",
    year: 2020,
    link: "documents/publications/cybersec-net-bots-2.pdf",
  },
  {
    authors: "Shuchi Grover, Veronica Catete, Tiffany Barnes, Marnie Hill, Akos Ledeczi, Brian Broll",
    title: "FIRST Principles to Design for Online, Synchronous High School CS Teacher Training and Curriculum Co-Design",
    journal: "Koli Calling '20: 20th Koli Calling International Conference on Computing Education Research, Koli, Finland, November 19-22",
    year: 2020,
    link: "documents/publications/first-principles.pdf",
  },
  {
    authors: "Akos Ledeczi, Miklos Maroti, Hamid Zare, Bernard Yett, Nicole Hutchins, Brian Broll, Peter Volgyesi, Michael Smith, Timothy Darrah, Mary Metelko, Xenofon Koutsoukos, and Gautam Biswas",
    title: "Teaching Cybersecurity with Networked Robots",
    journal: "ACO Technical Symposium on Computer Science Education",
    year: 2019,
    link: "documents/publications/cybersec-net-bots-1.pdf",
  },
  {
    authors: "Brian Broll, Akos Ledeczi, Hamid Zare, Dung Nguyen Do, Janos Sallai, Peter Volgyesi, Miklos Maroti, Lesa Brown, and Chris Vanags",
    title: "A visual Programming Environment for Introducing Distributed Computing to Secondary Education",
    journal: "Journal of Parallel and Distributed Computing 118",
    year: 2018,
    link: "documents/publications/viz-intro-dc.pdf",
  },
];

export default () => (
  <div>
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-white">
            Research
          </h1>

          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md mt-8">
            <h2 className="text-center text-xl font-bold mb-4">Publications</h2>

            <ol className="text-justify pl-6" style={{listStyle: "list-item outside"}}>
              {publications.map(info => <li className="mt-2 mb-2">
                {info.authors}. <em>{info.title}</em>. {info.journal}, {info.year}.
                {info.link && <> <a href={info.link} className="text-blue-600 hover:underline"><Download className="inline-block w-4 h-4" /></a></>}
              </li>)}
            </ol>
          </div>
        </div>
      </main>
    </div>
  </div>
);
