import React from 'react'
import {Navbar, Nav, Container}  from 'react-bootstrap';
import {Link} from 'react-router-dom'
// NavBar with routing applied

export default function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand><Link to="/">Stundent Internship</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to = "/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Internship">Internship</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}


