import React from 'react';
import { Card } from 'react-bootstrap';

interface JobCardProps {
  keyIndex: number,
  company: string;
  location: string;
  jobTitle: string;
  salary: string;
  rating: string;
}

function JobCard({ keyIndex, company, location, jobTitle, salary, rating }: JobCardProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{keyIndex}{". "}{company}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{jobTitle}</Card.Subtitle>
        <Card.Text>Salary: {salary}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
