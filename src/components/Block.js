import React from "react";

const Block = ({ index }) => {
  const dimension = Math.min(
    Math.max(Math.ceil(Math.random() * (index + 1)) * 30, 100),
    100
  );
  const inlineStyle = {
    zIndex: 0,
    height: dimension,
    width: dimension,
    position: "fixed",
    bottom: -2*dimension,
    left: `${index * 15 > 90 ? index * 15 - 90 : index * 15}%`,
    backgroundColor: "#242424",
    animation: `float-around infinite 15s linear`,
    animationDelay: `${Math.floor(Math.random() * 20)}s`,
    boxShadow: "0 0 6px 0 #242424",
  };
  return <div className="bg-block" style={inlineStyle}></div>;
};

export default Block;
