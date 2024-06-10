import React, { useState } from 'react';
import '../App.css';
import { Link } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Button,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function MyNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar expand="md" {...args}>
      {/* <NavbarBrand href="/">Avisina International</NavbarBrand> */}
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink>
            <Link to="contact"> Home </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="about"> About Us </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="contact"> Contact Us </Link>
          </NavLink>
        </NavItem>
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
        </Nav>
        <Button
              type="submit"
              style={
                { width:"150px",
                  height: "40px",
                  fontsize: "15px",
                  borderRadius:"25px", 
                  backgroundColor: 'rgb(36, 107, 145)',
                  border:"transparent"
                }}>
          Members Area
        </Button>
      </Collapse>
    </Navbar>
  </div>
);
}

export default MyNavbar