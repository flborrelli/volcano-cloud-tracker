import React from 'react';
import './Header.css';
import logoImg from './../../assets/logo-volcano.png';

function Header() {
  return (
    <div className="header-container">
      <h1>Volcano Cloud Tracker</h1>
      <img src={logoImg} alt="Logo Volcano"/>
    </div>
  );
}

export default Header;
