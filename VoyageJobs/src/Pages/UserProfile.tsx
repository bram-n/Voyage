// UserProfilePage.js
import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import mockData from "../Data/MockUserProfile.json";

const UserProfilePage = () => {
  const { currentUser } = useAuth();

  // State to manage user data
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    newPassword: "",
    birthday: "",
    gender: "",
    education: mockData.education,
    jobExperience: mockData.jobExperience,
  });

  // Update user state when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setUser({
        name: mockData.name,
        email: currentUser.email || "",
        password: "",
        newPassword: "",
        birthday: mockData.birthday,
        gender: mockData.gender,
        education: mockData.education,
        jobExperience: mockData.jobExperience,
      });
    }
  }, [currentUser]);

  // Handle form submission to update user data
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Implement logic to update user data in the database
    console.log("User data updated:", user);
  };

  // Handle form field changes
  const handleInputChange = (field: any, value: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  return (
    <Container>
      <Row>
        <h2>User Profile</h2>
        <Form onSubmit={() => handleSubmit}>
            {/* name */}
          <Row>
            <Col md={6}>
            <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  value={user.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </Form.Group>
            </Col >
          </Row>
          {/* Email and Password */}
          <Row>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={user.email} readOnly />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formNewPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="********" readOnly />
              </Form.Group>
            </Col>
          </Row>

          {/* Birthday and Gender */}
          <Row>
            <Col>
              <Form.Group controlId="formBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  type="text"
                  value={user.birthday}
                  onChange={(e) =>
                    handleInputChange("birthday", e.target.value)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  value={user.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Education Title and Date */}
          <Row>
            <Col>
              <Form.Group controlId="formEducationTitle">
                <Form.Label>Education Title</Form.Label>
                <Form.Control
                  type="text"
                  value={user.education[0].title}
                  onChange={(e) =>
                    handleInputChange("education", [
                      { ...user.education[0], title: e.target.value },
                    ])
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEducationDate">
                <Form.Label>Education Date</Form.Label>
                <Form.Control
                  type="text"
                  value={user.education[0].date}
                  onChange={(e) =>
                    handleInputChange("education", [
                      { ...user.education[0], date: e.target.value },
                    ])
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Education Description */}
          <Form.Group controlId="formEducationDescription">
            <Form.Label>Education Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={user.education[0].description}
              onChange={(e) =>
                handleInputChange("education", [
                  { ...user.education[0], description: e.target.value },
                ])
              }
            />
          </Form.Group>

          {/* Job Title and Date */}
          <Row>
            <Col>
              <Form.Group controlId="formJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  value={user.jobExperience[0].title}
                  onChange={(e) =>
                    handleInputChange("jobExperience", [
                      { ...user.jobExperience[0], title: e.target.value },
                    ])
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formJobDate">
                <Form.Label>Job Date</Form.Label>
                <Form.Control
                  type="text"
                  value={user.jobExperience[0].date}
                  onChange={(e) =>
                    handleInputChange("jobExperience", [
                      { ...user.jobExperience[0], date: e.target.value },
                    ])
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Job Description */}
          <Form.Group controlId="formJobDescription">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={user.jobExperience[0].description}
              onChange={(e) =>
                handleInputChange("jobExperience", [
                  { ...user.jobExperience[0], description: e.target.value },
                ])
              }
            />
          </Form.Group>
        <br></br>
          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
