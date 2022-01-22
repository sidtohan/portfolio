import React from "react";
import { Icon } from "@iconify/react";
const Header = ({ name, navList, headerRef }) => {
  return (
    <header ref={headerRef}>
      <h1 className="header-name">{name}</h1>
      <nav>
        <ul className="nav-list">
          {navList.map((item, i) => (
            <li
              key={i}
              className="nav-item"
              onClick={() => {
                if (item === "Home") {
                  document.body.scrollTop = 0; // For Safari
                  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                  return;
                }
                const DOM = document.getElementById(
                  item.split(" ").join("-").toLowerCase()
                );
                DOM.scrollIntoView();
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <Icon
          icon={"charm:menu-hamburger"}
          color="#fff"
          className="burger-menu"
        />
      </nav>
    </header>
  );
};

export default Header;
