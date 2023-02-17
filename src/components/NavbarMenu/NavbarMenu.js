import React from 'react'
import { Navbar, Container,NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './NavbarMenu.css';
const NavbarMenu = () => {
  return (
    <div>
    <Navbar expand="lg"  className="navbarmenu">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/About-School'>About School</Nav.Link>
            <Nav.Link as={Link} to='/Faculty'>Faculty</Nav.Link>
            <Nav.Link as={Link} to='/'>Students</Nav.Link>
     
            <Nav.Link as={Link} to='/Gallery'>Gallery</Nav.Link>
            <Nav.Link as={Link} to='/'>Achivement</Nav.Link>
  
            <Nav.Link as={Link} to='/Contact-Us'>Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarMenu