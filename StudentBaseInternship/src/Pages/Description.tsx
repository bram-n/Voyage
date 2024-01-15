import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Container } from "react-bootstrap";
import JobCard from "../Components/JobCard"; // Assuming the component is in a separate file
import DataJSON from "../Data/DataJSON.json"; // Adjust the path accordingly
import Job from "../Data/JobDataType"; // Import the interface
import mapJsonToJob from "../Data/MapJsonToJob";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import "./pagination.css"; // Import the CSS file

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

function Description({keyIndex, jobTitle, rating, salary, sector, company, location, description}: DescriptionProps) {
    return ( 
        <Card>
            <Card.Body>
            <Card.Title>{keyIndex}{". "}{company}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{jobTitle}</Card.Subtitle>
            {/* <Card.Text>Salary: {salary}</Card.Text>
            <Card.Text>Rating: {rating}</Card.Text> */}
            <Card.Text>Job Description: {description}</Card.Text>
            </Card.Body>
        </Card>
     );
}

export default Description;