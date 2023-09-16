import React from 'react'
import {Navbar, Nav, Container, Button}  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {useAuth} from "../Contexts/AuthContext"
import './NavBarStyle.css'
import imageLogo from '../assets/Sb-2.png'

// NavBar with routing applied

export default function NavBar() {
  const {currentUser, logout, isAuthenticated } = useAuth()
  return (
    <Navbar bg="light" data-bs-theme="light" className='yellow-background'>
        <Container>
          <NavLink to="/" className="logo-div" >
            <img 
              src={imageLogo} 
              alt="Internship Logo" 
              className="image-style"
              style={{ maxWidth: '100px', maxHeight: '100px' }} 
            />
          </NavLink>
          <Nav className='nav-right-side-component'>
            <NavLink to="/internship" className="nav-link text-style ">Internship</NavLink>

            { isAuthenticated ? 
              // if user logs in
              <>
                <Nav className="nav-link">{currentUser?.email}</Nav> 
                <Button onClick={() => logout()}>Log Out</Button>
              </>
              :
              // if user has not logged in
              <NavLink to="/signup" className="signup-box-style">Sign Up</NavLink>
            }
          </Nav>
        </Container>
      </Navbar>
  )
}


