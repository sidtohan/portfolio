import React, { useState } from "react";
const SkillCard = ({ skill }) => {
  const [skillName, setSkillName] = useState("");
  const showSkillName = () => setSkillName(skill.name);
  const hideSkillName = () => setSkillName("");
  return (
    <div
      className="skill-card"
      onMouseEnter={showSkillName}
      onMouseLeave={hideSkillName}
    >
      <img src={skill.icon} alt={skill.name} />
      <div className="skill-name">{skillName}</div>
    </div>
  );
};
const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-card-holder">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
