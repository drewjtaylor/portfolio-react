import Container from "react-bootstrap/Container";
import logo from '../img/initials-black.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from 'react-router-dom'

const PortfolioNavbar = () => {
  return (
    <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Andrew Taylor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='projects'>My Projects</Nav.Link>
            <Nav.Link href='contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default PortfolioNavbar