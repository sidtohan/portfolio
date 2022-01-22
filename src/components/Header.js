import React, { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
const Header = ({ name, navList, headerRef }) => {
  const navListRef = useRef(null);
  const closeButtonRef = useRef(null);
  const burgerMenuRef = useRef(null);

  useEffect(() => {
    const burgerButton = burgerMenuRef.current;
    burgerButton.addEventListener("click", () => {
      navListRef.current.classList.add("show");
      closeButtonRef.current.classList.add("show");
    });

    const closeButton = closeButtonRef.current;
    closeButton.addEventListener("click", () => {
      navListRef.current.classList.remove("show");
      closeButton.classList.remove("show");
    });

    const navList = navListRef.current;
    navList.childNodes.forEach((item) => {
      item.addEventListener("click", () => {
        navList.classList.remove("show");
        closeButton.classList.remove("show");
      });
    });
  }, []);
  return (
    <header ref={headerRef}>
      <h1 className="header-name">{name}</h1>
      <nav>
        <ul className="nav-list" ref={navListRef}>
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
        <button className="burger-button" ref={burgerMenuRef}>
          <Icon
            icon={"charm:menu-hamburger"}
            color="#fff"
            className="burger-menu"
          />
        </button>
        <button className="close-menu-button" ref={closeButtonRef}>
          <Icon icon={"charm:cross"} color="#fff" className="close-menu" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
