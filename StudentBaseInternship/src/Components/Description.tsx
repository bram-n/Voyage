import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";


interface JobDescriptionPage {
  keyIndex: number,
  company: string;
  location: string;
  jobTitle: string;
  salary: string;
  rating: string;
  description : string;
  sector : string;
}

function Description({keyIndex, jobTitle, rating, salary, sector, company, location, description}: JobDescriptionPage) {
    
    return ( 
        <Card>
            <Card.Body>
            <Card.Title>{company}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{jobTitle}</Card.Subtitle>
            {/* <Card.Text>Salary: {salary}</Card.Text>
            <Card.Text>Rating: {rating}</Card.Text> */}
            <br></br>
            <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
     );
}

export default Description;