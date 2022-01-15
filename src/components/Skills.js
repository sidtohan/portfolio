import React, { useState, useEffect, useRef } from "react";

const SkillCard = ({ skill }) => {
  const [skillNameVisible, setSkillNameVisible] = useState(false);
  const skillNameRef = useRef(null);
  const showSkillName = async () => {
    setSkillNameVisible(true);
  };

  const hideSkillName = async () => {
    setSkillNameVisible(false);
  };

  useEffect(() => {
    if (!skillNameRef.current) return;
    if (skillNameVisible) {
      skillNameRef.current.classList.add("show");
    } else {
      skillNameRef.current.classList.remove("show");
    }
  }, [skillNameVisible]);
  
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
