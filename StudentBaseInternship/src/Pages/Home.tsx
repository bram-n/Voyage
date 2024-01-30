import React from "react";
import "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import NavBar from "../Components/NavBar";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import WebImage from "../assets/Webpage Image.png";
import "../Aesthetics/HomePage.css";
export default function Home() {
  const { currentUser } = useAuth();
  console.log(currentUser?.toJSON);
  return (
    <>
      <NavBar />
      <Container>
      <Row>
      <Col xs={12} md={6}>
        <br/>
        <h1 className="text-center">Work Website</h1>
        <br/>
        <NavLink to="/job">
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Explore Jobs
            </Button>
          </div>
        </NavLink>
      </Col>
      <Col xs={12} md={6}>
        <img src={WebImage} alt="Placeholder Image" className="img-work1" />
      </Col>
    </Row>
    </Container>

    </>
  );
}
