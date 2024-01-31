import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate, Link } from 'react-router-dom';
import "../Aesthetics/Signup.css";

export default function SignUpForm() {
  // States
  const [currentUser, setCurrentUser] = useState("")
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  // Auth Context
  const { signup } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) { 
      console.error("Loading, dont press button repeatedly")
      return 
    }
    
    try {
      setLoading(true)
      await signup(email, password);
      console.log("Sign up successful");
      navigate("/")
    } catch (err) {
      setError((err as Error).message)
      console.error("Error signing up:", (err as Error).message);
    }
    setLoading(false)
  };

  return (
    <Container style={{ width: "50%" }} className = "signup-container">
      <br />
      <Card>
        {/* Sign Up button*/ }
        <Card.Header className="text-signup-center">
          <h1 className = "logo">Voyage</h1>
        </Card.Header>
        {/* Error  Display*/}
        {error && <Alert variant="danger">{error}</Alert>}

        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* <Form.Group controlId="username" className="m-3">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group> */}

            <Form.Group controlId="email" className="m-3">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className = "form"
              />
            </Form.Group>

            <Form.Group controlId="password" className="m-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className = "form"
              />
            </Form.Group>
            <div className="text-signup-center">
              <Button variant="primary" type="submit" style={{ width: "40%", marginBottom: '1vh' }} className = "signup-button">
                <h5 className = "signup-text">Sign Up</h5>
              </Button>
              <br/>
              <div className = "have-account-pos">
              <Link to= "/login" style={{textDecoration: 'none'}} className = "have-account">Already have an account?</Link>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
