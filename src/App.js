import React from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";

import Block from "./components/Block";
import pfp from "./profile-pic.png";

const blocksArray = () => {
  const blockArray = [];
  for (let i = 0; i < 10; i++) {
    blockArray.push(<Block key={i} index={i} />);
  }
  return blockArray;
};
const App = () => {
  const navList = ["Home", "About Me", "Skills", "Achievements", "Projects"];
  const desc = [
    `I am a fullstack developer who is constantly looking to further my skills. 
  I prefer to make minimalist designs for my websites that create an impact on the users.`,
    `I have experience in the MERN Stack, Python, C/C++, and version control systems(VCS)
  like Git.`,
    `I have interest in coding, watching anime, gaming and listening to music.`,
  ];
  const skills = [
    {
      name: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-original.svg",
    },
    {
      name: "ReactJS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg",
    },
    {
      name: "node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/express/express-original.svg",
    },
    {
      name: "Webpack",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/webpack/webpack-original.svg",
    },
    {
      name: "npm",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg",
    },
    {
      name: "Ubuntu",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/ubuntu/ubuntu-plain.svg",
    },
    {
      name: "Bash",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/bash/bash-plain.svg",
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/python/python-original.svg",
    },
    {
      name: "C",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/c/c-original.svg",
    },
  ];
  const achievements = [
    {
      text: "Took part in 30 Days of Google Cloud, and completed both the tracks(Cloud Engineering and Machine Learning)",
    },
    {
      text: "Completed parts 0-5 of Full Stack Open 2021, with 5 credits and grade 4",
    },
    {
      text: "6 Star in Problem solving on Hackerrank with many other 5 stars",
    },
  ];

  const projects = [
    {
      info: "Created a weather app using HTML, CSS, and Vanilla Javascript that uses the open weather api to provide weather information",
      repo: "https://github.com/sidtohan/Weather-App",
      live: "https://sidtohan.github.io/Weather-App",
    },
    {
      info: "Made a calculator app using HTML, CSS and Vanilla Javascript",
      repo: "https://github.com/sidtohan/Calculator",
      live: "https://sidtohan.github.io/Calculator",
    },
    {
      info: "Made an Etch a Sketch app that uses DOM manipulation",
      repo: "https://github.com/sidtohan/Etch-a-Sketch",
      live: "https://sidtohan.github.io/Etch-a-Sketch",
    },
    {
      info: "Made backend for a blog app as a part of Full Stack Open 21",
      repo: "https://github.com/sidtohan/FSO",
      live: "https://sidtohan.github.io",
    },
  ];
  return (
    <>
      <Header name={"sidtohan"} navList={navList} />
      <Welcome name={"Siddhant Tohan"} />
      <AboutMe desc={desc} pfp={pfp} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      {blocksArray()}
    </>
  );
};
export default App;
