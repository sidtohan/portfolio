import React, { useState } from "react";

import { Icon } from "@iconify/react";

const AchievementPiece = ({ achievement, index }) => {
  const [ifYellow, setIfYellow] = useState(false);
  const changeColor = (e) => {
    setIfYellow(!ifYellow);
  };
  let style;
  if (index % 3 === 0) {
    style = {
      gridColumn: "1/3",
    };
  } else if (index % 3 === 1) {
    style = {
      gridColumn: "3/4",
    };
  } else {
    style = {
      gridColumn: "1/4",
    };
  }
  return (
    <div className={`achievements-grid-ele ${index % 3}`} style={style}>
      <p>{achievement.text}</p>
      <button
        className="expand-achievement"
        onMouseEnter={changeColor}
        onMouseLeave={changeColor}
      >
        {!ifYellow ? (
          <Icon
            icon="ep:arrow-down-bold"
            color="#021f2e"
            className="expand-achievement-down-arrow"
          />
        ) : (
          <Icon
            icon="ep:arrow-down-bold"
            color="#cca43b"
            className="expand-achievement-down-arrow"
          />
        )}
      </button>
    </div>
  );
};
const Achievements = ({ achievements }) => {
  return (
    <section id="achievements">
      <h2 className="section-heading">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, i) => (
          <AchievementPiece key={i} achievement={achievement} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
