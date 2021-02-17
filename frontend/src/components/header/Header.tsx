import React from 'react';
import logo from './../../assets/images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <>
      <header className="app-header">
        <div className="logo">
          <img src={logo} className="app-logo" alt="logo" />
          <p>Coding Challange</p>
        </div>
      </header>
    </>
  );
}

export default Header;