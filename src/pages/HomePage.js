import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const HomePage = () => {
  return ( <Container>
        <Row>
            <Col xs={4}><Link to='about'><div className="hidden-link font-carter-one">About Me</div></Link></Col>
        </Row>
        <Row>
            <Col xs={4}></Col>
            <Col><Link to='projects'><div className="hidden-link font-comfortaa">My Projects</div></Link></Col>
        </Row>
        <Row>
            <Col xs={4}><Link to='contact'><div className="hidden-link font-dancing-script">Contact</div></Link></Col>
        </Row>
    </Container>
  )
}

export default HomePage