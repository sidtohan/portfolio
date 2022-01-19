import React, { useState } from "react";

import { Icon } from "@iconify/react";

const AchievementPiece = ({ achievement, index }) => {
  const [ifGreen, setIfGreen] = useState(false);
  const changeColor = (e) => {
    setIfGreen(!ifGreen);
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
      <button className="expand-achievement">
        {!ifGreen ? (
          <Icon
            icon="ep:arrow-down-bold"
            color="#021f2e"
            className="expand-achievement-down-arrow"
            onMouseEnter={changeColor}
            onMouseLeave={changeColor}
          />
        ) : (
          <Icon
            icon="ep:arrow-down-bold"
            color="#09753a"
            className="expand-achievement-down-arrow"
            onMouseEnter={changeColor}
            onMouseLeave={changeColor}
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
