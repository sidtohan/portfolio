import React from "react";
const Welcome = (props) => {
  return (
    <section id="welcome">
      <div className="welcome-holder">
        <h2>Hi!</h2>
        <div className="name">My name is {props.name}.</div>
        <div className="welcome-skills">
          I'm a <span className="welcome-skill-name">Fullstack Developer</span>
        </div>
      </div>
    </section>
  );
};
export default Welcome;
