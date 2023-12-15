import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../assets/images/devalogo.svg';
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-light p-3">
      <div className="logo-container">
        <img src={logo} alt="Logo" height="70" />
        <span className="header-text">VideTonFrigo</span>
      </div>
      <div>
      <Button className="button">
          Télécharge !
        </Button>
      </div>
    </header>
  );
};

export default Header;
