// ScrollTable.js

import React, { useEffect, useState } from 'react';
import '../Aesthetics/ScrollTable.css'; // Import the CSS file
import leftArrow from '../Aesthetics/leftarrow.svg';
import rightArrow from '../Aesthetics/rightarrow.svg';

const itemsPerPage = 20;

const ScrollTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    // Generate data for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newData = Array.from({ length: itemsPerPage }).map((_, index) => ({
      company: startIndex + index + 1,
      title: `Data ${startIndex + index + 1}`,
      date: startIndex + index + 1,
      wage: startIndex + index + 1,
    }));
    setDataSource(newData);
  }, [currentPage]);

  const totalPages = Math.ceil(200 / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="ScrollTable">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Estimated Hourly Wage</th>
            <th>Date Posted</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item) => (
            <tr key={item.company}>
              <td>{item.company}</td>
              <td>{item.title}</td>
              <td>{item.wage}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className = "toggleButton"><img src={leftArrow} />

        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className = "toggleButton">
        <img src={rightArrow} />
        </button>
      </div>
    </div>
  );
};

export default ScrollTable;
