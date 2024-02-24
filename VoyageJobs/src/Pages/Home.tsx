
import "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import NavBar from "../Components/NavBar";
import {  NavLink } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import WebImage from "../assets/Webpage Image.png";
import "../Aesthetics/HomePage.css";
export default function Home() {
  const { currentUser } = useAuth();
  console.log(currentUser?.toJSON);
  return (
    <>
      <NavBar />
      <Row style ={{width : '100%', height: '40%'}}>
         <Col xs={12} md={6} className = "column">
          <h1 className="text-center">CONTINUE YOUR VOYAGE</h1>
          <h2 className = "text-paragraph">Embark on a journey towards your dream career with Voyage, exploring endless opportunities and navigating the dynamic world of work with confidence.</h2>
          <br/>
          <NavLink to="/job" style={{ textDecoration: 'none' }}>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" className = "explore-jobs">
                Explore Jobs
              </Button>
            </div>
          </NavLink>
        </Col> 

        <Col xs={12} md={6}>
         <img src={WebImage} alt="Placeholder Image" className="img-work1" /> 
        
        </Col>
        <div style={{backgroundColor: "#eccfaf"}}>{'\u00A0'}</div> 
        {/* trick to hide white line */}
      
    </Row>

    
      
    </>
  );
}
