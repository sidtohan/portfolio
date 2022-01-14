import React from "react";
import Down_Chevron from "../assets/down-chevron.svg";
const Welcome = () => {
  return (
    <>
      <section id="welcome">
        <h1>WELCOME</h1>
        <div className="name">Siddhant Tohan</div>
        <div className="welcome-skills">Fullstack Developer</div>
      </section>
      <img className="down-chevron" src={Down_Chevron} alt="down-chevron"></img>
    </>
  );
};

export default Welcome;
