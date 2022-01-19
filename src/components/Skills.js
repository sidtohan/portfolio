import React, { useRef } from "react";

const SkillCard = ({ skill }) => {
  const skillNameRef = useRef(null);
  const showSkillName = async () => {
    skillNameRef.current.classList.add("show");
  };

  const hideSkillName = async () => {
    skillNameRef.current.classList.remove("show");
  };

  return (
    <div
      className="skill-card"
      onMouseEnter={showSkillName}
      onMouseLeave={hideSkillName}
    >
      <img src={skill.icon} alt={skill.name} />
      <div className="skill-name" ref={skillNameRef}>
        {skill.name}
      </div>
    </div>
  );
};
const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <h2 className="section-heading">Skills</h2>
      <div className="skill-card-holder">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
