import React from "react";
const Welcome = ({ name }) => {
  return (
    <>
      <section id="welcome">
        <h2>WELCOME</h2>
        <div className="name">{name}</div>
        <div className="welcome-skills">Fullstack Developer</div>
      </section>
    </>
  );
};
export default Welcome;
