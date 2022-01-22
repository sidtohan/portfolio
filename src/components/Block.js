import React from "react";

const Block = ({ index }) => {
  let width = index * 15;
  if(width > 90){
    width = width - 90;
  }
  const dimension = Math.min(
    Math.max(Math.ceil(Math.random() * (index + 1)) * 30, 100),
    100
  );
  const inlineStyle = {
    zIndex: 0,
    height: dimension,
    width: dimension,
    position: "fixed",
    bottom: -2 * dimension,
    left: `${width}vw`,
    backgroundColor: "#242424",
    animation: `float-around infinite 15s linear`,
    animationDelay: `${Math.floor(Math.random() * 12)}s`,
    boxShadow: "0 0 6px 0 #242424",
  };
  return <div className="bg-block" style={inlineStyle}></div>;
};

export default Block;
