import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import "./NavBarStyle.css";
import imageLogo from "../assets/Sb-2.png";

// NavBar with routing applied

export default function NavBar() {
  const { currentUser, logout, isAuthenticated } = useAuth();
  // console.log("heoll Im navbar");
  // console.log(currentUser);

  return (
    <Navbar
      bg="light"
      data-bs-theme="light"
      className="yellow-background custom-navbar"
    >
      <Container>
        <NavLink to="/" className="logo-div">
          <img
            src={imageLogo}
            alt="Internship Logo"
            className="image-style"
            style={{ maxWidth: "70px", maxHeight: "70px" }}
          />
        </NavLink>
        <Nav className="nav-right-side-component">
          <NavLink to="/job" className="nav-link text-style">
            Internship
          </NavLink>
          {isAuthenticated ? (
            // if user has logged in
            <>
              <Nav className="nav-link">{currentUser?.email}</Nav>
              <Button onClick={() => logout()}>Log Out</Button>
              <div>{currentUser?.displayName}</div>
            </>
          ) : (
            // if user has not logged in
            <>
              <NavLink to="/signup" className="signup-box-style">
                Sign Up
              </NavLink>
              <NavLink to="/login" className="signup-box-style">
                Log In
              </NavLink>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
