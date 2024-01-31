import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Container, Nav } from "react-bootstrap";
import JobCard from "../Components/JobCard"; // Assuming the component is in a separate file
import DataJSON from "../Data/DataJSON.json"; // Adjust the path accordingly
import Job from "../Data/JobDataType"; // Import the interface
import mapJsonToJob from "../Data/MapJsonToJob";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import "./pagination.css"; // Import the CSS file
import { useTable, useFilters } from 'react-table';
import NavBar from "../Components/NavBar";
import Fuse from 'fuse.js'

const ItemsPerPage = 8;

// ... (previous imports)

function PaginatedJobItems() {
  const [currentPage, setCurrentPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const fuseOptions = {
    keys: [
      "Company Name",
      "Job Title",
      "Location"
    ]
  };
  
  const fuse = new Fuse(DataJSON, fuseOptions);
  console.log("world");
  

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  // const handleSearch = () => {
  //   if (keyword !== "" || location !== "") {
  //     const newFilteredData = DataJSON.filter((data) => {
  //       const keywordMatch =
  //         keyword !== undefined &&
  //         (data["Company Name"] !== undefined && data["Company Name"].toLowerCase().includes(keyword.toLowerCase()) ||
  //         data["Job Title"] !== undefined && data["Job Title"].toLowerCase().includes(keyword.toLowerCase()));
  //       const locationMatch =
  //         location !== undefined &&
  //         data["Location"] !== undefined &&
  //         data["Location"].toLowerCase().includes(location.toLowerCase());
  //       return keywordMatch && locationMatch;
  //     });
  //     console.log(newFilteredData);
      
  //     setFilteredData(newFilteredData);
  //   } else {
  //     setFilteredData([]);
  //   }
  //   setCurrentPage(0);
  // };

  
  const handleSearch = () => {
   
    
    // Change the pattern
    const searchPattern = keyword + location
    
    const newFiltered = fuse.search(searchPattern)
    console.log(Array.isArray(newFiltered));
    
    setFilteredData(newFiltered)
    setCurrentPage(0)
    console.log(newFiltered[0]);
    
  }
  const dataToPaginate = filteredData ;
  const startIndex = currentPage * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;
  const currentData = dataToPaginate.slice(startIndex, endIndex);
  const pageCount = Math.ceil(dataToPaginate.length / ItemsPerPage);

  return (
    <>
    <NavBar/>
    <Container>
      <Row className="m-3">
        <Col md={5}>
          <Form.Group controlId="keywordSearch">
            <Form.Label>Keyword Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter keyword..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group controlId="locationSearch">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
      {currentData.map((data, index) => (
        <JobCard
          key={index}
          keyIndex={data[""]}
          company={data["Company Name"]}
          location={data["Location"]}
          jobTitle={data["Job Title"]}
          salary={data["Salary Estimate"]}
          rating={data["Rating"]}
        />
      ))}
      {pageCount > 1 && ( // Display pagination only if there are more than one page
        <Row>
          <div className="mt-3 d-flex justify-content-center">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </Row>
      )}
      <br/>
    </Container>
    </>
  );
}

export default PaginatedJobItems;