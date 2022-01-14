import React from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";

const App = () => {
  const navList = ["Home", "About Me", "Skills", "Achievements", "Projects"];
  return (
    <>
      <Header name={"sidtohan"} navList={navList} />
      <Welcome name={"Siddhant Tohan"} />
    </>
  );
};
export default App;
