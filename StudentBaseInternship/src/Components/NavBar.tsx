import React from 'react'
import {Navbar, Nav, Container, Button}  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {useAuth} from "../Contexts/AuthContext"

// NavBar with routing applied

export default function NavBar() {
  const {currentUser, logout, isAuthenticated } = useAuth()
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavLink to="/" >Student Internship</NavLink>
          <Nav className="">
            <NavLink to="/internship" className="nav-link">Internship</NavLink>

            { isAuthenticated ? 
              // if user logs in
              <>
                <Nav className="nav-link">{currentUser?.email}</Nav> 
                <Button onClick={() => logout()}>Log Out</Button>
              </>
              :
              // if user has not logged in
              <NavLink to="/signup" className="nav-link"><Button>Sign Up</Button></NavLink>
            }
            
          </Nav>
        </Container>
      </Navbar>
  )
}


