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
            <Link to='/'><Nav.Link>Home</Nav.Link></Link>
            <Link to='projects'><Nav.Link>My Projects</Nav.Link></Link>
            <Link to='contact'><Nav.Link>Contact</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default PortfolioNavbar