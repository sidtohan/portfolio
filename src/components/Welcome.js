import React from "react";
import Down_Chevron from "../assets/down-chevron.svg";
import Particles from "react-tsparticles";
import options from "./particles.json";

const Welcome = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <section id="welcome">
        <h1>WELCOME</h1>
        <div className="name">Siddhant Tohan</div>
        <div className="welcome-skills">Fullstack Developer</div>
      </section>
      <img className="down-chevron" src={Down_Chevron} alt="down-chevron"></img>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </>
  );
};
export default Welcome;
