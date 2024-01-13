import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Container } from 'react-bootstrap';
import JobCard from '../Components/JobCard'; // Assuming the component is in a separate file
import DataJSON from '../Data/DataJSON.json'; // Adjust the path accordingly
import Job from '../Data/JobDataType'; // Import the interface
import mapJsonToJob from '../Data/MapJsonToJob';
import { Row, Col, Card } from 'react-bootstrap';
import './pagination.css'; // Import the CSS file

const ItemsPerPage = 4;

function PaginatedJobItems() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;
  const currentData = DataJSON.slice(startIndex, endIndex);

  const pageCount = Math.ceil(DataJSON.length / ItemsPerPage);

  return (
    <Container>
      {currentData.map((data, index) => (
        <JobCard
          key={index}
          keyIndex={data['']}
          company={data['Company Name']}
          location={data['Location']}
          jobTitle={data['Job Title']}
          salary={data['Salary Estimate']}
          rating={data['Rating']}
        />
      ))}
      <Row className="justify-content-center mt-3">
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
      </Row>
    </Container>
  );
}

export default PaginatedJobItems;
