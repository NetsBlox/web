import React from "react";
import { Brain, Bot, Gamepad2, MessageSquare, Code, ExternalLink, Presentation, BookOpen, BookOpenCheck, Scale } from "lucide-react";
import { Page, Card, Warning } from "../components.js";

const ExternalLinks = (id, infos) => infos.map((info, i) => <li key={`${id}-${i}`}><a href={info[1]}><ExternalLink/>{info[0]}</a>{info[2] && <><br/><em>{info[2]}</em></>}</li>);

export default () => (
  <Page>
    <h1><Bot/>AI Camp Curriculum</h1>

    <p>
      This page provides resources for our NetsBlox-based AI summer camp curriculum. Over the course of this module, students are introduced to some of the earliest history of AI, a few "classical" AI algorithms, and finally some of the most recent breakthroughs in AI, such as the Large Language Models that power ChatGPT. However, we won't only be learning these topics: we'll be building many of them in NetsBlox!
    </p>

    <h2>Materials</h2>

    <ul>
      <li>
        <BookOpen/> <a href="https://docs.google.com/document/d/1cYXk0e5gJvPNNAK7hVaYL92rY6LBhiG1/edit?usp=sharing&ouid=109658049399807181387&rtpof=true&sd=true">Syllabus</a> and <a href="https://docs.google.com/document/d/18NAtN2zkJ43KiPlO2KIB5-Pv-Uab_mLK/edit?usp=sharing&ouid=109658049399807181387&rtpof=true&sd=true">Lesson Plan</a>
      </li>
      <li>
        <Presentation/> Slides for {[
          "https://docs.google.com/presentation/d/188nltVxQSKqMbygC-cd1nB52rxQriuf4nzLJg2cUnRw/edit?usp=sharing",
          "https://docs.google.com/presentation/d/1z3IEMEtK6uhHfu40vUL1Cjno3X9erOQKx7-owggN-ZU/edit?usp=sharing",
          "https://docs.google.com/presentation/d/1Pf9qvz1UVUmnt87XwkeZcpm_RYAV4NMebHIW9Jk63kk/edit?usp=sharing",
          "https://docs.google.com/presentation/d/1BliPIzu7qy2ejdJTajxnuXhLtopXgeMgRt4c0DtwXMg/edit?usp=sharing",
        ].map((url, i) => <span key={url}><a href={url}>Day {i + 1}</a>{i < 2 ? ", " : i < 3 ? ", and " : ""}</span>)}
      </li>
    </ul>

    <h2>Projects</h2>

    <Card>
      <h3><Scale/>Ball-Balancing Reinforcement Learning Agent</h3>
      <p>In this project, we provide students a starter project that implements a reinforcement learning (RL) agent tasked with balancing a ball on a beam without letting it roll off either side. Students are challenged to come up with a "reward function" that quickly/efficiently teaches the RL agent what kinds of behaviors are good/bad in order to learn.</p>
      <a href="https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=ball-balancing-starter&editMode&noRun"><button><BookOpen/>Starter Project</button></a>
      <a href="https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=ball-balancing&editMode&noRun"><button><BookOpenCheck/>Completed Project</button></a>
    </Card>

    <Card>
      <h3><Gamepad2/>Minecraft Maze Reinforcement Learning Agent</h3>
      <p>In this (more difficult) RL project, students must come up with a reward function that can teach a 2D character how to explore a maze and find diamonds. Students are encouraged to create reward functions that do not assume anything about the maze (i.e., the reward function should not include the distance to diamonds or any other information that a player should not be able to know).</p>
      <a href="https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=minecraft-maze-starter&editMode&noRun"><button><BookOpen/>Starter Project</button></a>
      <a href="https://editor.netsblox.org/?action=present&Username=devinjean&ProjectName=minecraft-maze&editMode&noRun"><button><BookOpenCheck/>Completed Project</button></a>
    </Card>

    <Card>
      <h3><MessageSquare/>Turing Test Activity</h3>
      <p>In this project, students join a NetsBlox distributed chatroom and are randomly paired either with another student or with an instance of ChatGPT. Students are then put into a time- and round-based back and forth dialog and are tasked with determining whether the other person is a human or a computer.</p>
      <a href="https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FOpenAIBlocks%2Findex.js%22%5D&action=present&Username=devinjean&ProjectName=turing-test-client&editMode&noRun"><button><BookOpenCheck/>Completed Client</button></a>
      <a href="https://editor.netsblox.org/?extensions=%5B%22https%3A%2F%2Fextensions.netsblox.org%2Fextensions%2FOpenAIBlocks%2Findex.js%22%5D&action=present&Username=devinjean&ProjectName=turing-test-server&editMode&noRun"><button><BookOpenCheck/>Completed Server</button></a>
      <Warning>Note: Whoever runs the server will need to have an OpenAI API key in order to use the OpenAI blocks provided by the extension. To add your key, use the puzzle-shaped Extensions menu near the top right of the NetsBlox editor. The API key is saved in local storage, so only do this on your personal computer!</Warning>
    </Card>

    <h2><Brain/>AI Topic Exploration</h2>
    <ul>
      {ExternalLinks('exploration', [
        ["But what is a neural network?", "https://www.youtube.com/watch?v=aircAruvnKk", null],
        ["Gradient descent, how neural networks learn", "https://www.youtube.com/watch?v=IHZwWFHWa-w", null],
        ["What is backpropagation really doing?", "https://www.youtube.com/watch?v=Ilg3gGewQ5U", null],
        ["Backpropagation calculus", "https://www.youtube.com/watch?v=tIeHLnjs5U8", null],
        ["But what is a GPT? Visual intro to transformers", "https://www.youtube.com/watch?v=wjZofJX0v4M", null],
        ["Attention in transformers, visually explained", "https://www.youtube.com/watch?v=eMlx5fFNoYc", null],
      ])}
    </ul>

    <h2><Code/>AI Coding in Python</h2>
    <ul>
      {ExternalLinks('python', [
        ["Q-Learning in Python", "https://www.geeksforgeeks.org/q-learning-in-python/", "This is the algorithm we implemented for you in our RL projects"],
      ])}
    </ul>
  </Page>
);
