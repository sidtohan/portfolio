import React from "react";
const Welcome = ({ name }) => {
  return (
    <>
      <section id="welcome">
        <h1>WELCOME</h1>
        <div className="name">{name}</div>
        <div className="welcome-skills">Fullstack Developer</div>
      </section>
    </>
  );
};
export default Welcome;
