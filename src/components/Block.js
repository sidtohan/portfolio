import React from "react";

const Block = ({ index }) => {
  const dimension = Math.min(
    Math.max(Math.ceil(Math.random() * (index + 1)) * 30, 100),
    125
  );
  const inlineStyle = {
    zIndex: 0,
    height: dimension,
    width: dimension,
    position: "fixed",
    bottom: -dimension,
    left: `${index * 10 > 90 ? index * 10 - 90 : index * 10}%`,
    backgroundColor: "#021f2e",
    animation: `float-around infinite 15s linear`,
    animationDelay: `${Math.floor(Math.random() * 20)}s`,
    boxShadow: "0 0 6px 0 #021f2e",
  };
  return <div className="bg-block" style={inlineStyle}></div>;
};

export default Block;
