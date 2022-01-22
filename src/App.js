import React, { useEffect, useRef } from "react";
// Components
import Home from "./components/Home";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Misc
import Block from "./components/Block";
import pfp from "./profile-pic.png";

// For background blocks
const blocksArray = () => {
  const blockArray = [];
  for (let i = 0; i < 15; i++) {
    blockArray.push(<Block key={i} index={i} />);
  }
  return blockArray;
};

// Main App
const App = () => {
  const navList = ["Home", "About Me", "Skills", "Projects", "Contacts"];
  const skillList = [
    "Fullstack Developer",
    "Competitive Programmer",
    "Cloud Enthusiast",
    "Pythonista",
  ];
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

  const contacts = [
    {
      icon: "fluent:mail-20-filled",
      main: "Email",
      content: "siddhant.tohan.in@protonmail.com",
    },
    {
      icon: "bx:bxs-phone",
      main: "Phone",
      content: "+91-7217656980",
    },
    {
      icon: "akar-icons:github-fill",
      main: "Github",
      link: "https://github.com/sidtohan",
    },
    {
      icon: "fa-brands:hackerrank",
      main: "Hackerrank",
      link: "https://www.hackerrank.com/SoloTomato",
    },
    {
      icon: "simple-icons:codechef",
      main: "Codechef",
      link: "https://www.codechef.com/users/siddhant_tohan",
    },
    {
      icon: "akar-icons:linkedin-fill",
      main: "Linkedin",
      link: "https://in.linkedin.com/in/siddhant-tohan",
    },
  ];

  const waitms = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const triggerShow = (entries, observer) => {
    entries.forEach(async (ent) => {
      if (ent.isIntersecting) {
        const section = ent.target;

        const heading = section.querySelector(".section-heading");
        if (!heading) return;
        heading.classList.add("show");

        if (section.id === "about-me") {
          const aboutText = section.querySelector(".about-me-text");
          const pfp = section.querySelector(".profile-pic");
          await waitms(200);
          aboutText.classList.add("show");
          await waitms(75);
          pfp.classList.add("show");
        } else if (section.id === "skills") {
          const cards = section.querySelectorAll(".skill-card");
          for (let card of cards) {
            await waitms(50);
            card.classList.add("show");
          }
        } else if (section.id === "projects") {
          const projectCards = section.querySelectorAll(".project-card");
          await waitms(200);
          for (let card of projectCards) {
            await waitms(60);
            card.classList.add("show");
          }
        } else if (section.id === "contacts") {
          const contactElements = section.querySelectorAll(".contact-element");
          await waitms(200);
          for (let element of contactElements) {
            await waitms(60);
            element.classList.add("show");
          }
        }
      }
    });
  };

  // Observer
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.2,
    };

    let observer = new IntersectionObserver(triggerShow, options);
    navList.forEach((item) => {
      const DOM = document.getElementById(
        item.split(" ").join("-").toLowerCase()
      );
      observer.observe(DOM);
    });

    const scrollObserver = (e) => {
      const verticalDistance = window.scrollY;
      if (verticalDistance > 400) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", scrollObserver);
  });

  const headerRef = useRef(null);
  return (
    <>
      <Header name={"sidtohan"} navList={navList} headerRef={headerRef} />
      <Home name={"Siddhant Tohan"} skillList={skillList} />
      <AboutMe desc={desc} pfp={pfp} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contacts={contacts} />
      {blocksArray()}
    </>
  );
};
export default App;
