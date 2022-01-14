import React from "react";

const AboutMe = ({ desc, pfp }) => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="about-me-info">
        <div className="about-me-text">
          {desc.map((text, i) => {
            return (
              <>
                <p key={i}>{text}</p> <br />
              </>
            );
          })}
        </div>
        <img src={pfp} alt="Siddhant Tohan" className="profile-pic" />
      </div>
    </section>
  );
};

export default AboutMe;
