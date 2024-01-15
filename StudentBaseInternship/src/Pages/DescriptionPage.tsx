import React from "react";
import { Row, Col, Card, Form, Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Description from "../Components/Description";
import DataJSON from "../Data/DataJSON.json";

function DescriptionPage() {
  // ts-ignore

  const { id } = useParams();
  const navigate = useNavigate();

  // Find the data based on the id

  const data = DataJSON[id];
  // Redirect to home if data is not found
  if (!data) {
    navigate("/");
    return null;
  }

  const textWithLineBreaks = data["Job Description"];
  // Replace \n with <br> and create an array of React elements
  const textWithHTMLLineBreaks = textWithLineBreaks
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  // Now you c

  return (
    <Container>
      <Description
        key={data[""]}
        keyIndex={data[""]}
        company={data["Company Name"]}
        location={data["Location"]}
        jobTitle={data["Job Title"]}
        salary={data["Salary Estimate"]}
        rating={data["Rating"]}
        sector={data["Sector"]}
        description={textWithHTMLLineBreaks}
      />
    </Container>
  );
}

export default DescriptionPage;
