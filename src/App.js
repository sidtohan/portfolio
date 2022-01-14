import React from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import pfp from "./profile-pic.png";

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
      name: "webpack",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/webpack/webpack-original.svg",
    },
    {
      name: "npm",
      icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg",
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
  return (
    <>
      <Header name={"sidtohan"} navList={navList} />
      <Welcome name={"Siddhant Tohan"} />
      <AboutMe desc={desc} pfp={pfp} />
      <Skills skills={skills} />
    </>
  );
};
export default App;
