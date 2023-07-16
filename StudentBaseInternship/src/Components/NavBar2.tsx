import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoSb2 from "../assets/Sb-2.png";
import { Button } from 'react-bootstrap';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <img
              src={logoSb2} 
              width="50"
              height="50"
              className="m-4"
              alt="React Bootstrap logo"
            />
         
          <Nav className="float-right">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#internships">Internships</Nav.Link>
            <button className="btnLogin-popup">Log in</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;