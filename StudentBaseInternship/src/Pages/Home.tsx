import React from "react";
import "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import NavBar from "../Components/NavBar";
import { Link, NavLink } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
export default function Home() {
  const { currentUser } = useAuth();
  console.log(currentUser?.toJSON);
  return (
    <>
      <NavBar />
      <Container>
        <br />
        <h1 className="text-center">Student Base Internship</h1>
        <br></br>
        <NavLink to="/job">
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Explore Jobs
            </Button>
          </div>
        </NavLink>
      </Container>
    </>
  );
}
