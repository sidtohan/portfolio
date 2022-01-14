import React from "react";

const Header = ({ name, navList }) => {
  return (
    <header>
      <div className="header-name">{name}</div>
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
