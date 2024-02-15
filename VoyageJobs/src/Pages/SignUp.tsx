import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../Aesthetics/Signup.css";

export default function SignUpForm() {
  // States
  const [currentUser, setCurrentUser] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Auth Context
  const { signup } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) {
      console.error("Loading, dont press button repeatedly");
      return;
    }

    try {
      setLoading(true);
      await signup(email, password);
      console.log("Sign up successful");
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
      console.error("Error signing up:", (err as Error).message);
    }
    setLoading(false);
  };

  return (
    <Container className="signup-container">
      <Card>
        {/* Sign Up button*/}
        <Card.Header className="text-signup-center">
          <h1 className="logo-signup">Voyage</h1>
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
              />
            </Form.Group>

            <Form.Group controlId="password" className="m-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="centered-div">
              <Button
                variant="primary"
                type="submit"
                className="signup-button"
              >
                <h5 className = "signup-text">Sign Up</h5>
              </Button>
            </div>
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className="have-account"
            >
              Already have an account?
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
