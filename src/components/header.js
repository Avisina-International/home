import React from 'react';
import MyNavbar from './navbar';
import Banner from './banner';
import '../App.css';

const Header = ({className , text}) => {
  return (
    <div className="header-container">
      <MyNavbar />
      <Banner className={className} text={text}/>
    </div>
  );
};

export default Header;