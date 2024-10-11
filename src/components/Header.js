import React from 'react';
import '../style/StyleForComponents.css';

const Header = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/">Fit Gym</a>
          </div>
          <nav className="navbar">
            <ul>
              <li><a href="#MainContent">Головна</a></li>
              <li><a href="#services">Послуги</a></li>
              <li><a href="#gallery">Галерея</a></li>
              <li><a href="#price">Ціни</a></li>
              <li><a href="#contact">Контакти</a></li>
            </ul>
          </nav>
          
        </div>
      </header>
    );
  };
  
  export default Header;