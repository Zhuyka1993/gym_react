import React from "react";
import "../style/StyleForComponents.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="logo">
          <a href="/">Fit Gym</a>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#MainContent">Головна</a>
            </li>
            <li>
              <a href="#services">Послуги</a>
            </li>
            <li>
              <a href="#gallery">Галерея</a>
            </li>
            <li>
              <a href="#price">Ціни</a>
            </li>
            <li>
              <a href="#contact">Контакти</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
