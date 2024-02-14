import React from 'react';
import { Card } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

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
    <Link to={`/description/${keyIndex}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Card>
      <Card.Body>
        <Card.Title>{jobTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
        <Card.Text>Salary: {salary}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>

      </Card.Body>
    </Card>
    </Link>
  );
}

export default JobCard;
