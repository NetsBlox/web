import React from "react";
import { Download } from "lucide-react";
import { Page } from "../components.js";

const publications = [
  {
    authors: "Devin Jean, Gordon Stein, Brian Broll, and Akos Ledeczi",
    title: "Unleashing Creativity with Wireless Embedded Programming for Next-Generation Makers",
    journal: "EDULEARN24, IATED",
    year: 2024,
    link: "documents/publications/unleash-creativity.pdf",
    doi: "10.21125/edulearn.2024.0608",
  },
  {
    authors: "Tito Ebiwonjumi, Will Hedgecock, Devin Jean, Gabriel Barnard, Saman Kittani, Brian Broll, and Akos Ledeczi",
    title: "BeatBlox: A Visual Block-Based Approach to Integrating Music and Computer Science Education",
    journal: "EDULEARN24, IATED",
    year: 2024,
    link: "documents/publications/beatblox-edulearn.pdf",
    doi: "10.21125/edulearn.2024.0669",
  },
  {
    authors: "Devin Jean, Shuchi Grover, Akos Ledeczi, and Brian Broll",
    title: "PhoneIoT for Teaching 'Internet of Things': Smartphones to Promote Accessible, Engaging, and Authentic Experiences",
    journal: "International Conference of the Learning Sciences",
    year: 2023,
    link: "documents/publications/phoneiot-isls.pdf",
    doi: "10.22318/icls2023.870149",
  },
  {
    authors: "Veronica Catete, Isabella Gransbury, Marnie Hill, Devin Hean, Brian Broll, Akos Ledeczi, and Tiffany Barnes",
    title: "Board 243: CS Frontiers: Module 4 - A Software Engineering Curriculum for High School Females",
    journal: "ASEE Conferences",
    year: 2023,
    link: "documents/publications/csf-module-4.pdf",
    doi: "10.18260/1-2--42686",
  },
  {
    authors: "Gordon Stein, Devin Jean, Corey Brady, and Akos Ledeczi",
    title: "Browser-Based Simulation for Novice-Friendly Classroom Robots",
    journal: "Frontiers in Computer Science 4",
    year: 2023,
    link: "documents/publications/browser-bot-sim.pdf",
    doi: "10.3389/fcomp.2022.1031572",
  },
  {
    authors: "Devin Jean, Brian Broll, Gordon Stein, and Akos Ledeczi",
    title: "Low-Friction Transition from Blocks to Python",
    journal: "International Conference of the Learning Sciences",
    year: 2022,
    link: "documents/publications/low-friction-trans.pdf",
    doi: null,
  },
  {
    authors: "Devin Jean, Brian Broll, Gordon Stein, and Akos Ledeczi",
    title: "Utilizing Smartphones for Approachable IoT Education in K-12",
    journal: "Sensors 22 (24)",
    year: 2022,
    link: "documents/publications/sensors-phoneiot.pdf",
    doi: "10.3390/s22249778",
  },
  {
    authors: "Corey Brady, Brian Broll, Gordon Stein, Devin Jean, Shuchi Grover, Veronica Catete, Tiffany Barnes, and Akos Ledeczi",
    title: "Block-based Abstractions and Expansive Services to Make Advanced Computing Concepts Accessible to Novices",
    journal: "Journal of Computer Languages 73",
    year: 2022,
    link: "documents/publications/block-based-abstractions.pdf",
    doi: "10.1016/j.cola.2022.101156",
  },
  {
    authors: "Gordon Stein, Isabella Gransbury, Devin Jean, Lauren Alvarez, Marnie Hill, Veronica Catete, Shuchi Grover, Tiffany Barnes, Brian Broll, and Akos Ledeczi",
    title: "Engaging Female High School Students in the Frontiers of Computing",
    journal: "ASEE Annual Conference & Exposition",
    year: 2022,
    link: "documents/publications/engaging-female-hs-students.pdf",
    doi: null,
  },
  {
    authors: "Lauren Alvarez, Isabella Gransbury, Veronica Catete, Tiffany Barnes, Akos Ledeczi, and Shuchi Grover",
    title: "A Socially Relevant Focused AI Curriculum Designed for Female High School Students",
    journal: "Proceedings of the AAAI Conference on Artificial Intelligence, 36 (11)",
    year: 2022,
    link: "documents/publications/socially-relevant-ai.pdf",
    doi: "10.1609/aaai.v36i11.21546",
  },
  {
    authors: "Yizhou Tan, Marina Rizk, Gordon Stein, and Akos Ledeczi",
    title: "User-Extensible Block-Based Interfaces for Internet of Things Devices as New Educational Tools",
    journal: "SoutheastCon",
    year: 2022,
    link: "documents/publications/edu-iot-blocks.pdf",
    doi: "10.1109/SoutheastCon48659.2022.9763937",
  },
  {
    authors: "Brian Broll, Akos Ledeczi, Gordon Stein, Devin Jean, Corey Brady, Shuchi Grover, Veronica Catete, and Tiffany Barnes",
    title: "Removing the Walls Around Visual Educational Programming Environments",
    journal: "IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC), St Louis, Missouri, October 10-13",
    year: 2021,
    link: "documents/publications/removing-walls.pdf",
    doi: "10.1109/VL/HCC51201.2021.9576399",
  },
  {
    authors: "Devin Jean, Brian Broll, Gordon Stein, and Akos Ledeczi",
    title: "Your Phone as a Sensor: Making IoT Accessible for Novice Programmers",
    journal: "Frontiers in Education (FIE), Lincoln, Nebraska, October 13-16",
    year: 2021,
    link: "documents/publications/accessible-iot.pdf",
    doi: "10.1109/FIE49875.2021.9637272",
  },
  {
    authors: "Gordon Stein and Akos Ledeczi",
    title: "Enabling Collaborative Distance Robotics Education for Novice Programmers",
    journal: "IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC), St Louis, Missouri, October 10-13",
    year: 2021,
    link: "documents/publications/collab-dist-robots.pdf",
    doi: "10.1109/VL/HCC51201.2021.9576314",
  },
  {
    authors: "Bernard Yett, Nicole Hutchins, Gordon Stein, Hamid Zare, Caitlin Snyder, Gautam Biswas, Mary Metelko, and Akos Ledeczi",
    title: "A Hands-On Cybersecurity Curriculum Using a Robotics Platform",
    journal: "SIGCSE",
    year: 2020,
    link: "documents/publications/cybersec-net-bots-2.pdf",
    doi: "10.1145/3328778.336687",
  },
  {
    authors: "Shuchi Grover, Veronica Catete, Tiffany Barnes, Marnie Hill, Akos Ledeczi, Brian Broll",
    title: "FIRST Principles to Design for Online, Synchronous High School CS Teacher Training and Curriculum Co-Design",
    journal: "Koli Calling '20: 20th Koli Calling International Conference on Computing Education Research, Koli, Finland, November 19-22",
    year: 2020,
    link: "documents/publications/first-principles.pdf",
    doi: "10.1145/3428029.3428059",
  },
  {
    authors: "Akos Ledeczi, Miklos Maroti, Hamid Zare, Bernard Yett, Nicole Hutchins, Brian Broll, Peter Volgyesi, Michael Smith, Timothy Darrah, Mary Metelko, Xenofon Koutsoukos, and Gautam Biswas",
    title: "Teaching Cybersecurity with Networked Robots",
    journal: "ACO Technical Symposium on Computer Science Education",
    year: 2019,
    link: "documents/publications/cybersec-net-bots-1.pdf",
    doi: "10.1145/3287324.3287450",
  },
  {
    authors: "Brian Broll, Akos Ledeczi, Hamid Zare, Dung Nguyen Do, Janos Sallai, Peter Volgyesi, Miklos Maroti, Lesa Brown, and Chris Vanags",
    title: "A visual Programming Environment for Introducing Distributed Computing to Secondary Education",
    journal: "Journal of Parallel and Distributed Computing 118",
    year: 2018,
    link: "documents/publications/viz-intro-dc.pdf",
    doi: "10.1016/j.jpdc.2018.02.021",
  },
];

const grants = [
  {
    pis: "Kevin Leach, Akos Ledeczi, and Corey Brady",
    title: "RoCCeM: Bringing Robotics, Cybersecurity and Computer Science to the Middled School Classroom",
    agency: "National Science Foundation",
    number: "2312057",
    startYear: 2023,
    endYear: 2026,
    amount: 409997,
    link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2312057&HistoricalAwards=false",
  },
  {
    pis: "Akos Ledeczi and Brian Broll",
    title: "Beyond CS Principles: Engaging Female High School Students in New Frontiers of Computing",
    agency: "National Science Foundation",
    number: "1949472",
    startYear: 2020,
    endYear: 2025,
    amount: 595380,
    link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1949472&HistoricalAwards=false",
  },
  {
    pis: "Akos Ledeczi and Christopher Vanags",
    title: "NetsBlox: Visual Programming Environment for Teaching Distributed Computing Concepts",
    agency: "National Science Foundation",
    number: "1644848",
    startYear: 2016,
    endYear: 2019,
    amount: 299798,
    link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1644848&HistoricalAwards=false",
  },
];

export default () => (
  <Page>
    <h1>Research</h1>

    <h2>Publications</h2>

    <ol className="pl-6" style={{listStyle: "list-item outside"}}>
      {publications.map(info => <li key={JSON.stringify(info)}>
        {info.authors}. <em>{info.title}</em>. {info.journal}, {info.year}.
        {info.doi && <> doi: <a href={`https://doi.org/${info.doi}`}>{info.doi}</a>.</>}
        {info.link && <> <a href={info.link}><Download/></a></>}
      </li>)}
    </ol>

    <h2>Grants</h2>

    <ol className="pl-6" style={{listStyle: "list-item outside"}}>
      {grants.map(info => <li key={JSON.stringify(info)}>
        {info.pis}. <em>{info.title}</em>. {info.agency} grant {info.link ? <a href={info.link}>{info.number}</a> : info.number}, {info.startYear}-{info.endYear}.
        {info.amount && <> Total Award: ${info.amount.toLocaleString('en-US')}.</>}
      </li>)}
    </ol>
</Page>
);
