import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../Aesthetics/signup.css";

export default function LoginForm() {
  // States
  const [currentUser, setCurrentUser] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Auth Context
  const { login } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) {
      console.error("Loading previous request");
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      console.log("Sign up successful");
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
      console.error("Error loggin in:", (err as Error).message);
    }
    setLoading(false);
  };

  return (
    <Container className="signup-container">
      <br />
      <Card className="card">
        <Card.Header className="text-signup-center">
          <h1 className="logo-signup">Voyage</h1>
        </Card.Header>
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
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password" className="m-3">
              {/* <Form.Label>Password</Form.Label> */}
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
                <h5 className="login-text">Log in</h5>
              </Button>
              <br />
              <div className="notregisteredPosition">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none" }}
                  className="have-account"
                >
                  Not registered?
                </Link>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
