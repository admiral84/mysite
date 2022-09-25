import React from "react";
import "./menu.scss";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="hamburger">
        <ul>
          <a href="intro">
            <li>Intro</li>
          </a>

          <a href="#about">
            <li>About</li>
          </a>
          <a href="#works">
            <li>Works</li>
          </a>
          <a href="#teaching">
            <li>Teaching</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
