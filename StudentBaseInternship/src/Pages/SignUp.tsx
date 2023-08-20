import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";

export default function SignUpForm() {
  // States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Auth Context
  const { signup } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password);
      console.log("Sign up successful");
    } catch (err) {
      console.error("Error signing up:", (err as Error).message);
    }
  };

  return (
    <Container style={{ width: "50%" }}>
      <br />
      <Card>
        <Card.Header className="text-center">
          <h1>Sign Up</h1>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="m-3">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

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

            <div className="text-center">
              <Button variant="primary" type="submit" style={{ width: "40%" }}>
                <h5>Submit</h5>
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
