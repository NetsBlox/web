import React from "react";
import { Brain, Bot, Gamepad, MessageSquare, Code, ExternalLink, GraduationCap, BookOpen, BookOpenCheck } from "lucide-react";

import {Page, Card} from "../components.js";

const projects = [
  {
    title: "Ball-Balancing Reinforcement Learning Agent",
    description: 'In this project, we provide students a starter project that implements a reinforcement learning (RL) agent tasked with balancing a ball on a beam without letting it roll off either side. Students are challenged to come up with a "reward function" that quickly/efficiently teaches the RL agent what kinds of behaviors are good/bad in order to learn.',
    icon: Brain,
    starterUrl: "https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=ball-balancing-starter&editMode&noRun",
    completedUrl: "https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=ball-balancing&editMode&noRun",
    note: null,
  },
  {
    title: "Minecraft Maze Reinforcement Learning Agent",
    description: "In this (more difficult) RL project, students must come up with a reward function that can teach a 2D character how to explore a maze and find diamonds. Students are encouraged to create reward functions that do not assume anything about the maze (i.e., the reward function should not include the distance to diamonds or any other information that a player should not be able to know).",
    icon: Gamepad,
    starterUrl: "https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=minecraft-maze-starter&editMode&noRun",
    completedUrl: "https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=minecraft-maze&editMode&noRun",
    note: null,
  },
  {
    title: "Turing Test Activity",
    description: "In this project, students join a NetsBlox distributed chatroom and are randomly paired either with another student or with an instance of ChatGPT. Students are then put into a time- and round-based back and forth dialog and are tasked with determining whether the other person is a human or a computer.",
    icon: MessageSquare,
    starterUrl: null,
    completedUrl: [
      ["Completed Client", "https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FOpenAIBlocks%2Findex.js%22%5D&action=present&Username=devinjean&ProjectName=turing-test-client&editMode&noRun"],
      ["Completed Server", "https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FOpenAIBlocks%2Findex.js%22%5D&action=present&Username=devinjean&ProjectName=turing-test-server&editMode&noRun"],
    ],
    note: "Whoever runs the server will need to have an OpenAI API key in order to use the OpenAI blocks provided by the extension. To add your key, use the puzzle-shaped Extensions menu near the top right of the NetsBlox editor. The API key is saved in local storage, so only do this on your personal computer!",
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
        <project.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-lg font-bold">{project.title}</h3>
    </div>
    <p className="text-slate-600 dark:text-slate-300 mb-4 text-justify">
      {project.description}
    </p>
    <div className="flex gap-2">
      {project.starterUrl &&
        <a href={project.starterUrl} className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1">
          <BookOpen className="h-4 w-4" />
          Starter Project
        </a>
      }
      {project.completedUrl && (Array.isArray(project.completedUrl) ? project.completedUrl : [["Completed Project", project.completedUrl]]).map(meta =>
        <a href={meta[1]} className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1">
          <BookOpenCheck className="h-4 w-4" />
          {meta[0]}
        </a>
      )}
    </div>
    {project.note &&
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-4 rounded-lg mt-4">
        <p className="text-yellow-800 dark:text-yellow-200 text-justify">
          Note: {project.note}
        </p>
      </div>
    }
  </div>
);

const ExternalLinks = infos => infos.map((info, i) => [
  <a key={i} href={info[1]} className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
    <ExternalLink className="h-4 w-4" />
    {info[0]}
  </a>,
  info[2] && <span className="text-sm text-slate-500 dark:text-slate-400 italic">
    {info[2]}
  </span>
]);

export default () => (
  <Page>
    <h1><Bot className="h-12 w-12 mr-3 text-purple-600 inline-block"/>AI Camp Curriculum</h1>

    <p className="text-justify">
      This page provides resources for our NetsBlox-based AI summer camp curriculum. Over the course of this module, students are introduced to some of the earliest history of AI, a few "classical" AI algorithms, and finally some of the most recent breakthroughs in AI, such as the Large Language Models that power ChatGPT. However, we won't only be learning these topics: we'll be building many of them in NetsBlox!
    </p>

    <h2>Materials</h2>

    <p>
      <GraduationCap className="h-6 w-6 text-purple-600 inline-block"/> <a href="https://docs.google.com/document/d/1cYXk0e5gJvPNNAK7hVaYL92rY6LBhiG1/edit?usp=sharing&ouid=109658049399807181387&rtpof=true&sd=true">Syllabus</a> and <a href="https://docs.google.com/document/d/18NAtN2zkJ43KiPlO2KIB5-Pv-Uab_mLK/edit?usp=sharing&ouid=109658049399807181387&rtpof=true&sd=true">Lesson Plan</a>
    </p>

    <p>
      <BookOpen className="h-6 w-6 text-purple-600 inline-block"/> Slides for {[
        "https://docs.google.com/presentation/d/188nltVxQSKqMbygC-cd1nB52rxQriuf4nzLJg2cUnRw/edit?usp=sharing",
        "https://docs.google.com/presentation/d/1z3IEMEtK6uhHfu40vUL1Cjno3X9erOQKx7-owggN-ZU/edit?usp=sharing",
        "https://docs.google.com/presentation/d/1Pf9qvz1UVUmnt87XwkeZcpm_RYAV4NMebHIW9Jk63kk/edit?usp=sharing",
        "https://docs.google.com/presentation/d/1BliPIzu7qy2ejdJTajxnuXhLtopXgeMgRt4c0DtwXMg/edit?usp=sharing",
      ].map((url, i) => <><a href={url}>Day {i + 1}</a>{i < 2 ? ", " : i < 3 ? ", and " : ""}</>)}
    </p>

    <h2>Projects</h2>

    {projects.map((project, index) => <ProjectCard key={index} project={project} />)}

    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="h-5 w-5" />
        <h2 className="text-xl font-bold">AI Topic Exploration</h2>
      </div>
      <div className="grid gap-2">
        {ExternalLinks([
          ["But what is a neural network?", "https://www.youtube.com/watch?v=aircAruvnKk", null],
          ["Gradient descent, how neural networks learn", "https://www.youtube.com/watch?v=IHZwWFHWa-w", null],
          ["What is backpropagation really doing?", "https://www.youtube.com/watch?v=Ilg3gGewQ5U", null],
          ["Backpropagation calculus", "https://www.youtube.com/watch?v=tIeHLnjs5U8", null],
          ["But what is a GPT? Visual intro to transformers", "https://www.youtube.com/watch?v=wjZofJX0v4M", null],
          ["Attention in transformers, visually explained", "https://www.youtube.com/watch?v=eMlx5fFNoYc", null],
        ])}
      </div>
    </div>

    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Code className="h-5 w-5" />
        <h2 className="text-xl font-bold">AI Coding in Python</h2>
      </div>
      {ExternalLinks([
        ["Q-Learning in Python", "https://www.geeksforgeeks.org/q-learning-in-python/", "This is the algorithm we implemented for you in our RL projects"],
      ])}
    </div>
  </Page>
);
