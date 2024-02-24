
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import "../Aesthetics/NavBarStyle.css";


export default function NavBar() {
  const { currentUser, logout, isAuthenticated } = useAuth();

  return (
    <Navbar className="yellow-background custom-navbar" expand="lg">
      <Container>
        <NavLink to="/" className="logo-div">
          <div className="logo">Voyage</div>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className = "dropdown-menu"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="custom-collapse">
          <Nav className="me-auto">
            <NavLink to="/job" className="nav-link text-style">
              Internship
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                {/* <Nav className="nav-link">{currentUser?.email}</Nav> */}
                <Button onClick={() => logout()} className="signup-box-style">Log Out</Button>
                <div>{currentUser?.displayName}</div>
              </>
            ) : (
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
