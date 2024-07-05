import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import avisinaBanner from '../data/images/navbar_brand.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Button,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
  } from 'reactstrap';
  
  function MyNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();
    const location = useLocation();
    
  return (
    <div className='footer--items'>
      <Navbar expand="md" {...args}>
        <NavbarBrand href="/home">
        <img
          alt="logo"
          src={avisinaBanner}
          style={{
            height: 50,
            width: 150
          }}
        />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem style={{ cursor: 'pointer' }}>
              <NavLink >
                <Link to="/home"> Home </Link> 
              </NavLink>
            </NavItem>
            {location.pathname === '/home' && (
              <>
                <NavItem style={{ cursor: 'pointer' }}>
                  <NavLink>
                    <a className href="#about"> About Us </a>
                  </NavLink>
                </NavItem>
                <NavItem style={{ cursor: 'pointer' }}>
                  <NavLink>
                    <a href="#contact"> Contact Us </a>
                  </NavLink>
                </NavItem>
              </>
            )}
            <NavItem style={{ cursor: 'pointer' }}>
              <NavLink>
                <Link to='/products'> Products </Link>
              </NavLink>
            </NavItem>
            {/* 
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Barber Items</DropdownItem>
                <DropdownItem>Surgical Stuff</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> 
            */}
          </Nav>
          <Button
            onClick={() => navigate('/page-not-found')}
            type="submit"
            className="cool-button"
            style={{
              width: "150px",
              height: "40px",
              fontSize: "15px",
              borderRadius: "25px",
              backgroundColor: 'rgb(36, 107, 145)',
              border: "transparent",
              color: "white",
              transition: "background-color 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)"
            }}>
            Members Area
          </Button>
        </Collapse>
      </Navbar>
  </div>
);
}

export default MyNavbar