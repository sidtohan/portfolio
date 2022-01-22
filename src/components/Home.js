import React, { useRef, useEffect } from "react";
const waitms = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const typer = async (skillList, ref, delay = 100) => {
  let idx = 0;
  let length;
  while (true) {
    idx = idx % skillList.length;
    length = 0;
    while (length < skillList[idx].length) {
      ref.current.textContent += skillList[idx][length];
      await waitms(75);
      length += 1;
    }
    await waitms(700);
    while (length > 0) {
      ref.current.textContent = ref.current.textContent.slice(0, --length);
      await waitms(50);
    }
    idx += 1;
  }
};

const Home = ({ name, skillList }) => {
  const skillRef = useRef(null);
  useEffect(() => {
    setTimeout(() => typer(skillList, skillRef), 1100);
  });
  return (
    <section id="home">
      <div className="home-holder">
        <h2>Hi!</h2>
        <div className="name">My name is {name}.</div>
        <div className="home-skills">
          I'm a<span className="home-skill-name" ref={skillRef}></span>
        </div>
      </div>
    </section>
  );
};
export default Home;
