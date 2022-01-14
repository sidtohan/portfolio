import React from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import pfp from "./profile-pic.png"

const App = () => {
  const navList = ["Home", "About Me", "Skills", "Achievements", "Projects"];
  const desc = `I am a fullstack developer who is constantly looking to further my skills. I prefer to make minimalist designs for my websites that create an impact on the users.

  I have experience in the MERN Stack, Python, C/C++, and version control systems(VCS) like Git . 
  
  I have interest in coding, watching anime, gaming and listening to music.`;
  return (
    <>
      <Header name={"sidtohan"} navList={navList} />
      <Welcome name={"Siddhant Tohan"}/>
      <AboutMe desc={desc} pfp={pfp}/>
    </>
  );
};
export default App;
