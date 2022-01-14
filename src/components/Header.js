import React from "react";

const Header = ({ name, navList }) => {
  return (
    <header>
      <h1 className="header-name">{name}</h1>
      <nav>
        <ul className="nav-list">
          {navList.map((item, i) => (
            <li key={i} className="nav-item">{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;