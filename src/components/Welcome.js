import React from "react";
const Welcome = ({ name }) => {
  return (
    <>
      <section id="welcome">
        <h2>Hi!</h2>
        <div className="name">My name is {name}.</div>
        <div className="welcome-skills">
          I'm a <span className="welcome-skill-name">Fullstack Developer</span>
        </div>
      </section>
    </>
  );
};
export default Welcome;
