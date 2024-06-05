import React from 'react';
import MyNavbar from './navbar';
import Banner from './banner';
import '../App.css';

const Header = () => {
  return (
    <div className="header-container">
      <MyNavbar />
      <Banner />
    </div>
  );
};

export default Header;