import React from 'react'
import {Navbar, Nav, Container, Button}  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {useAuth} from "../Contexts/AuthContext"
import './NavBarStyle.css'

// NavBar with routing applied

export default function NavBar() {
  const {currentUser, logout, isAuthenticated } = useAuth()
  return (
    <Navbar bg="light" data-bs-theme="light" className='yellow-background'>
        <Container>
          <NavLink to="/" className="nav-link" >Student Internship</NavLink>
          <Nav className="">
            <NavLink to="/internship" className="nav-link text-style">Internship</NavLink>

            { isAuthenticated ? 
              // if user logs in
              <>
                <Nav className="nav-link">{currentUser?.email}</Nav> 
                <Button onClick={() => logout()}>Log Out</Button>
              </>
              :
              // if user has not logged in
              <NavLink to="/signup" className="nav-link signup-box-style">Sign Up</NavLink>
            }
            
          </Nav>
        </Container>
      </Navbar>
  )
}


