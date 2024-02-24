import { Card } from "react-bootstrap";


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

function Description({ jobTitle,  company, location, description}: JobDescriptionPage) {
    
    return ( 
        <Card>
            <Card.Body>
            <Card.Title>{jobTitle}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
            {/* <Card.Text>Salary: {salary}</Card.Text>
            <Card.Text>Rating: {rating}</Card.Text> */}
            <br></br>
            <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
     );
}

export default Description;