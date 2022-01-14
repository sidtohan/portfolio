import React from "react";
const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-card-holder">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.icon} alt={skill.name}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
