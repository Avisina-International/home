import React, { useEffect, useState } from 'react';
import logo from '../logo.jpg';
import './Navbar.css'; 
import { Crousel } from '../crousel/Crousel';
import { About } from '../about/About';
import { Contact } from '../contact/Contact';
import { Products } from '../products/Products';

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
      // Update the browser's history state when the button is clicked
      window.history.pushState({ isButtonClicked: true }, '');
  };
  useEffect(() => {
    const handlePopState = (event) => {
      // Handle the popstate event and update the state accordingly
      setIsButtonClicked(event.state && event.state.isButtonClicked);
    };

    // Listen for the popstate event when the browser's back button is pressed
    window.addEventListener('popstate', handlePopState);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div>
    <div>
      {isButtonClicked ? (
        <div>
          <div>
          <nav className="navbar-expand-lg navbar-dark bg-dark navbar ">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" className="navbar-logo" width="30" height="24"/>Avisina International</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={!collapsed ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
            <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
          </div>
          <br/><br/><br/>
          <Products />
        </div>
      ) : (
        <div>
          <nav className="navbar-expand-lg navbar-dark bg-dark navbar ">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" className="navbar-logo" width="30" height="24"/>Avisina International</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={!collapsed ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`} id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="btn btn-outline-secondary nav-link" href="#crousel">Home</a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-secondary nav-link" href="#about">About Us</a>
                </li>
                <li className="nav-item">
                <a className="btn btn-outline-secondary nav-link" href="#contactus">Contact Us</a>
                </li>
                <div className="nav-item d-flex justify-content-center">
                  <button onClick={handleButtonClick} className="btn btn-outline-secondary nav-link" href="#">Products</button>
                </div>
              </ul>
            </div>
          </nav>
          <Crousel/>          
          <About />
          <Contact />
        </div>
      )}

    </div>


    </div>      
  );
};

