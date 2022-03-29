import React from 'react';
import logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="sportsee" />
      </div>
      <div className="nav">
        <a href="/">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Réglage</a>
        <a href="#">Communauté</a>
      </div>
    </div>
  );
};

export default Header;